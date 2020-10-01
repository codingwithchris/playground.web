import { FluidImageProps, FixedImageProps } from '@components/foundations';
import { PrismicExternalLink } from './prismic';

export type ArtistRole =
    | 'actor'
    | 'artistic director'
    | 'assistant director'
    | 'board member'
    | 'co-director'
    | 'co-founder'
    | 'lighting designer'
    | 'music supervisor'
    | 'show shadow'
    | 'sound designer'
    | 'stage manager';

export interface Artist {
    uid: string;
    name: string;
    bio?: string;
    headshot?: FixedImageProps;
    roles: ArtistRole[];
    website?: PrismicExternalLink;
    instagram?: PrismicExternalLink;
    email?: string;
}
