import styled from 'styled-components'

export const StyledHero = styled.section`
  background-color: lightBlue;
  padding: 0 20px;
  h1 {
    margin: 0;
  }
`

export const StyledSectionOne = styled.section`
  color: blue;
  padding: 0 20px;
  i {
    font-size: 48px;
  }
`

export const StyledSectionTwo = styled(StyledSectionOne)`
  color: red;
`