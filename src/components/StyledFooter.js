import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  position: relative;   
  display: flex;
  flex-direction: column;
  place-items: center;
  color: #F6F6F6;  
  padding: 20px 0;
  border-top: 1px solid #F6F6F6;
  p {
    margin: 10px;
    padding: 0 5px;
  }
  a {
    text-decoration: none;
    color: #c5dbed;
  }
  &:before { 
    background: #26557c; 
    content: '';
    position: absolute;
    width: 100vw;
    align-self: center;
    top: 0;
    bottom: 0;
    z-index: -1;
  }

`

const StyledFooter = () => {
  return (
    <Footer>
      <p>© Paul Cooke {new Date().getFullYear()}. Built with <a href="https://reactjs.org/" target="_blank"> React</a> & <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a></p>
      <p>&lt; /pc &gt;</p>
    </Footer>
  )
}

export default StyledFooter