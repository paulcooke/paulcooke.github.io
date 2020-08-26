/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

import "./normalize.css"
import GlobalStyle from "./GlobalStyles"
import StyledHeader from "./StyledHeader"
import StyledFooter from "./StyledFooter"


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta property="og:title" content="Paul Cooke - Software Developer" />
        <meta name="theme-color" content="#26557c" />
        <link rel="canonical" href="http://example.com/" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" />
        <script src="https://kit.fontawesome.com/1ac67ad915.js"></script>
      </Helmet>

      <StyledHeader />
      
      <main>{children}</main>

      <StyledFooter />

    </>
  )
}

export default Layout
