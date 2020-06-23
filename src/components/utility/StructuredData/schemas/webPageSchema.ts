import { PrismicImage } from '@type/prismic';

/**
 * https://schema.org/WebPage
 *
 * @param siteURL The primary URL of the current website
 * @param object An object of page-specific data.
 */
export const webPageSchema = (
    siteURL: string,
    {
        pageURL,
        title,
        description,
        image,
        datePublished,
        dateModified,
    }: WebPageSchemaProps
) => `{
	"@type"	: "WebPage",
	"@id": "${pageURL}/#webpage",
	"url" : "${pageURL}",
    "name": "${title}",
	"inLanguage": "en-US",
    "isPartOf": {"@id": "${siteURL}/#website"},
    "image": {
        "@type":"ImageObject",
        "@id":"${pageURL}/#primaryimage",
        "url": "${image.url}",
        "caption": "${image.alt}",
    }
    "primaryImageOfPage": {
        "@id": ${pageURL}/#primaryimage"
    },
    "datePublished": ${datePublished},
    "dateModified": ${dateModified},
    "description": "${description}"
}`;

export interface WebPageSchemaProps {
    pageURL: string;
    title: string;
    description: string;
    image: PrismicImage;
    datePublished: string;
    dateModified: string;
}