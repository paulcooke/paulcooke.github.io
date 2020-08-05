import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  color: blue;
`

const StyledFooter = () => {
  return (
    <Footer>
      © Paul Cooke {new Date().getFullYear()}, Built with <a href="https://reactjs.org/"> React</a> & <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Footer>
  )
}

export default StyledFooter