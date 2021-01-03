import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { PrismicImage, PrismicExternalLink } from '@nerve/shared/types';

import { useConfigContext } from '@nerve/shared/context';
import { useGetMetaImage, useCurrentURL } from '@nerve/shared/hooks';

import { LegacyContentNotice } from '@nerve/domains/migrations';
import { SubscribeSection } from '@nerve/domains/engagement';
import { PageBasicSEO, StructuredData } from '@nerve/domains/seo';

import { FluidImageProps } from '@nerve/core/components';

import { SeasonPageContext } from '../types';

const SeasonLanding: React.FC<PageProps<PageData, SeasonPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const season = data.prismicSeason;
    const seasonData = data.prismicSeason.data;

    const { id } = pageContext;
    const siteConfig = useConfigContext();
    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('season', seasonData.seo_image);

    return (
        <>
            <PageBasicSEO
                url={url}
                title={seasonData.seo_title}
                description={seasonData.seo_description}
                image={metaImage}
                hideSEO={seasonData.seo_hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {seasonData.seo_hide ? null : (
                <StructuredData
                    siteConfig={siteConfig}
                    pageSchemaData={{
                        pageURL: url,
                        title: seasonData.seo_title,
                        description: seasonData.seo_description,
                        image: metaImage,
                        datePublished: season.first_publication_date,
                        dateModified: season.last_publication_date,
                    }}
                />
            )}
            <LegacyContentNotice
                contentType="season"
                title={`${seasonData.title} Season`}
                subTitle={seasonData.tagline}
                legacyURL={seasonData.legacy_url.url}
                legacyURLText="See season on old website"
            />
            <SubscribeSection />
        </>
    );
};

export const seasonQuery = graphql`
    query seasonData($slug: String!) {
        prismicSeason(uid: { eq: $slug }, lang: { eq: "en-us" }) {
            first_publication_date
            last_publication_date

            data {
                title
                tagline
                description
                hero_image {
                    alt
                    fluid {
                        ...GatsbyPrismicImageFluid
                    }
                }

                ## SEO Data
                seo_title
                seo_description
                seo_hide
                seo_image {
                    url(imgixParams: { q: 100 })
                    alt
                    dimensions {
                        width
                        height
                    }
                }

                ## Legacy Data
                legacy_url {
                    url
                }
            }
        }
    }
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface PageData {
    prismicSeason: {
        first_publication_date: string;
        last_publication_date: string;
        data: {
            title: string;
            tagline: string;
            description: string;
            hero_image: FluidImageProps;

            seo_title: string;
            seo_description: string;
            seo_image: PrismicImage;
            seo_hide: boolean;

            legacy_url: PrismicExternalLink;
        };
    };
}

export default SeasonLanding;