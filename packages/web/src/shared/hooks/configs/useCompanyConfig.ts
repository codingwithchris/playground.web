import { useStaticQuery, graphql } from 'gatsby';
import { SanityImageData } from '@nerve/shared/types';

export const useCompanyConfig = (): CompanyConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanityCompanyConfig } = useStaticQuery(graphql`
        query CompanyConfigQuery {
            sanityCompanyConfig(_id: { eq: "companyConfig" }) {
                city
                ein
                emailAuditions
                emailGeneral
                emailTicketing
                facebook
                foundingDate
                github
                instagram
                legacyLegalName
                legacyName
                legacyWebsite
                legalName
                logoOnDark {
                    asset {
                        url
                        size
                    }
                    alt
                }
                logoOnLight {
                    alt
                    asset {
                        size
                        url
                    }
                }
                name
                spotify

                state
                stateCode
                website
                youtube
                zip
            }
        }
    `);

    return sanityCompanyConfig;
};

export interface CompanyConfig {
    city: string;
    ein: string;
    emailAuditions: string;
    emailGeneral: string;
    emailTicketing: string;
    facebook: string;
    foundingDate: string;
    github: string;
    instagram: string;
    legacyLegalName: string;
    legacyName: string;
    legacyWebsite: string;
    legalName: string;
    logoOnDark: SanityImageData;
    logoOnLight: SanityImageData;
    name: string;
    spotify: string;
    state: string;
    stateCode: string;
    website: string;
    youtube: string;
    zip: string;
}
