import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyPageContext } from '@type/gatsby';
import {
    PrismicImage,
    PrismicFluidImage,
    PrismicInternalLink,
} from '@type/prismic';

import PageTemplate from '@templates/PageTemplate';
import { SubscribeSection } from '@components/ui';

import { ArchiveSection, HeroSection, RebrandSection } from '@screens/HomePage';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { uid } = pageContext;
    const pageData = data.prismicHomePage.data;
    return (
        <PageTemplate
            pageConfig={data.prismicHomePage}
            currentLocation={location.pathname}
        >
            <HeroSection
                bgColor="extraDark"
                title={pageData.hero_title}
                copy={pageData.hero_copy}
                bgImage={pageData.hero_image}
                rebrandLink={pageData.rebrand_link}
                rebrandLinkText={pageData.rebrand_link_text}
            />
            <RebrandSection />
            <ArchiveSection />
            <SubscribeSection />
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        prismicHomePage {
            last_publication_date
            first_publication_date
            data {
                # Config & SEO
                remove_footer
                remove_header
                seo_description
                seo_hide
                seo_title
                seo_image {
                    alt
                    url
                    dimensions {
                        height
                        width
                    }
                }

                # Hero
                hero_title
                hero_copy
                hero_image {
                    fluid(imgixParams: { sat: -100 }) {
                        ...GatsbyPrismicImageFluid
                    }
                }
                rebrand_link_text
                rebrand_link {
                    uid
                }
            }
        }
    }
`;

interface PageData {
    prismicHomePage: {
        first_publication_date: string;
        last_publication_date: string;
        data: {
            // Config & SEO
            remove_header: boolean;
            remove_footer: boolean;
            seo_title: string;
            seo_description: string;
            seo_image?: PrismicImage;
            seo_hide: boolean;

            // Hero
            hero_title: string;
            hero_copy: string;
            hero_image: PrismicFluidImage;

            // Rebrand
            rebrand_link: PrismicInternalLink;
            rebrand_link_text: string;
        };
    };
}

export default HomePage;
