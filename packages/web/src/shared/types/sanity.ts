import { IFluidObject, IFixedObject } from 'gatsby-background-image';

export interface SanityDocument {
    _createdAt: string;
    _updatedAt: string;
    title: string;
    slug: {
        current: string;
    }
    seo: SanityDocumentSEO;
}

export interface SanityDocumentSEO {
    title: string;
    description: string;
    hide: boolean;
    image: SanityImage;
}

/**
 *
 */
export interface SanityImage {
    alt?: string;
    asset: {
        url: string;
    }
}


/**
 *
 */
export interface SanityFluidImage {
    asset: {
        alt?: string;
        fluid: IFluidObject;
        dimensions?: {
            width: string;
            height: string;
        };
    }
};

/**
 *
 */
export type SanityFixedImage = {
    asset: {
        alt?: string;
        fixed: IFixedObject;
        dimensions: {
            width: string;
            height: string;
        };
    }
};


/**
 *
 */
export type SanitySlug = {
    slug: {
        current: string;
    }
};
