import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
    div {
      display: flex;
      span {
        margin: 10px;
        padding 7px;
        border: 2px solid #26557c;
        border-radius: 1em;
        &:hover {
          background: #26557c;
          color: #F6F6F6;
        }
      }
    }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`

const Header = () => {
  return (
    <>
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
    </>
  )
}


export default Header
