import styled from 'styled-components'

export const StyledHero = styled.section`
  padding: 0 20px;
  min-height: 70vh;
  h1 {
    margin: 0 auto;
  }
`

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: white;
  padding: 40px;
  i {
    font-size: 48px;
  }
  h2, p {
    margin: 10px auto;
    text-align: center;
    line-height: 1.4em;
  } 
  &:before {
    display: flex;
    content: ' ';
    border-top: 1px solid #d6d0d0;
    position: absolute;
    width: 100vw;
    align-self: center;
    top: 0;
  }
`

export const StyledSectionB = styled(StyledSection)`
  &:before {
    content: none;
  }
`


/*
flexible width top border:
&:before {
    display: flex;
    content: ' ';
    border-top: 1px solid #d6d0d0;
    position: absolute;
    width: 30%;
    align-self: center;
    top: 0;
  }
*/