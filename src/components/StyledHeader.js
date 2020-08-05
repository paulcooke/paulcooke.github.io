import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledHeader = styled.header`
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
export const StyledLink = styled(Link)`
  text-decoration: none;
`


