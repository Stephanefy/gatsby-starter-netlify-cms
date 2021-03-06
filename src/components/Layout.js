import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import {css} from '@emotion/core';


import "@fontsource/nunito"


const Layout = ({children }) => {
  const { title, description } = useSiteMetadata()
  return (

    <div css={css`
      font-family: 'Nunito';
    `}
    >
      <Helmet>
        <html lang="fr"/>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" />
        <link
          rel="favicon"
          sizes="180x180"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
        />
        <link
          rel="favicon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="favicon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="favicon"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          siezs="32x32"
          color="#ff4400"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" 
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" 
          crossorigin="anonymous" 

          />
          
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} key="ogtitle"/>
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/logo-ae-sainte-clotilde.svg`}
        />
        <meta property="og:site_name" content={title} key="ogsitename"/>
        <meta property="og:description" content={description} key="ogdesc"/>
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>

  )
}

export default Layout
