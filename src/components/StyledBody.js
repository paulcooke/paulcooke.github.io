import styled from 'styled-components'

export const StyledHero = styled.section`
  background-color: lightGrey;
  padding: 0 20px;
  min-height: 70vh;
  h1 {
    margin: 0;
  }
  
`

export const StyledSectionOne = styled.section`
  background-color: white;
  padding: 0 20px;
  i {
    font-size: 48px;
  }
  h2 {
    margin: 0;
  }
`

export const StyledSectionTwo = styled(StyledSectionOne)`
  background-color: lightGrey;
`