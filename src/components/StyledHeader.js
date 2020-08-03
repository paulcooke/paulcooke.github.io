import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledHeader = styled.header`
  background-color: silver;
  display: flex;
  justify-content: space-between;
  align-items: center;
    h1 {
      padding: 0 20px;
      margin: 0;
    }
    div {
      display: flex;
      padding: 0 20px;
      span {
        padding: 0 20px;
      }
    }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`


