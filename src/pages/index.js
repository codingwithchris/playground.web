import React from 'react'
import { graphql } from 'gatsby'

import {Layout} from '../components/Layout'
import { SEOMetaPage } from '../components/SEO'
import { getPrismicSlice } from '../__utility__/prismic';

const HomePage = ({data}) => {

	const pageMeta = getPrismicSlice( data.prismic.home_page.body, 'basic_seo' );

	return (

		<Layout>

			<SEOMetaPage metadata={pageMeta}/>

			Coming soon...
		</Layout>

	)

}

export const query = graphql`
	query HomePageData {
		...PageSEOFragment
	}
`

export default HomePage
