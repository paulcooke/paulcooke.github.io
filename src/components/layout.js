/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import "./normalize.css"
import GlobalStyle from "./GlobalStyles"
import { StyledHeader, StyledLink } from "./StyledHeader"
import StyledFooter from "./StyledFooter"


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" />
      </Helmet>
      <StyledHeader>
        <StyledLink to="/">
          <div>PC</div>
        </StyledLink>
        <div>
          <span>About</span>
          <span>Work</span>
          <span>Contact</span>
        </div> 
      </StyledHeader>
      
      <main>{children}</main>
    
      <StyledFooter>
          © Paul Cooke {new Date().getFullYear()}, Built with <a href="https://reactjs.org/"> React</a> & <a href="https://www.gatsbyjs.org">Gatsby</a>
      </StyledFooter>
    </>
  )
}

export default Layout
