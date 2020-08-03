/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./normalize.css"
import { StyledHeader, StyledLink } from "./StyledHeader"
import StyledFooter from "./StyledFooter"


const Layout = ({ children }) => {

  return (
    <>
      <StyledHeader>
        <StyledLink to="/">
          <h1>Paul Cooke, Software Developer</h1>
        </StyledLink>
        <div>
          <span>About</span>
          <span>Work</span>
          <span>Contact</span>
        </div> 
      </StyledHeader>
      
      <main>{children}</main>
    
      <StyledFooter>
          © Paul Cooke {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </StyledFooter>
    </>
  )
}

export default Layout
