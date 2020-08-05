import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  color: blue;
`

const Footer = () => {
  return (
    <StyledFooter>
      © Paul Cooke {new Date().getFullYear()}, Built with <a href="https://reactjs.org/"> React</a> & <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}

export default Footer