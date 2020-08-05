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
import Header from "./StyledHeader"
import Footer from "./StyledFooter"


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" />
      </Helmet>
      
      <Header />
      
      <main>{children}</main>

      <Footer />

    </>
  )
}

export default Layout
