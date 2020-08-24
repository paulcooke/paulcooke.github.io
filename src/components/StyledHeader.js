import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links"

const StyledHeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
    div {
      display: flex;
    }
`

const StyledHome = styled.div`
  padding: 0px 4px 8px 4px;
  margin: 4px 0;
  @media only screen and (max-width: 500px) {
    padding: 0px 4px 4px 4px;
  }
`

const StyledNavButton = styled(AnchorLink)`
  text-decoration: none;
  color: #26557c;  
  margin: 4px 10px;
  padding: 8px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border-bottom: solid 1px #26557c;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 500px) {
    padding: 4px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #26557c;
  font-size: 1.4em;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 1.2em;
  }
`

const StyledHeader = () => {
  return (
    <>
      <StyledHeaderBar>
        <StyledHome>
          <StyledLink to="/">
            <div>&lt; pc &gt;</div>
          </StyledLink>
        </StyledHome>
        
          <div>
            <StyledNavButton to="/#thanks">About</StyledNavButton>
            <StyledNavButton to="/#work">Work</StyledNavButton>
            <StyledNavButton to="/#contact">Contact</StyledNavButton>
          </div> 
      </StyledHeaderBar>
    </>
  )
}


export default StyledHeader



/*
const StyledNavButton = styled.div`
  margin: 10px;
  padding: 7px;
  border: 1px solid #26557c;
  border-radius: 0.5em;
  transition: 0.4s;
  &:hover {
    background: #26557c;
    color: #F6F6F6;
  }
`

*/