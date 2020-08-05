import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledHeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
    div {
      display: flex;
    }
`

const StyledHome = styled.div`
  margin: 10px;
  padding 8px;
`

const StyledNavButton = styled.div`
  margin: 4px 10px;
  padding: 7px;
  transition: 0.2s;
  &:hover {
    border-bottom: solid 1px #26557c;
    margin-bottom: 0px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledHeader = () => {
  return (
    <>
      <StyledHeaderBar>
        <StyledHome>
          <StyledLink to="/">
            <div>PC</div>
          </StyledLink>
        </StyledHome>
        
          <div>
            <StyledNavButton>About</StyledNavButton>
            <StyledNavButton>Work</StyledNavButton>
            <StyledNavButton>Contact</StyledNavButton>
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