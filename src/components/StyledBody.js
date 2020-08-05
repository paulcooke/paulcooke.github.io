import styled from 'styled-components'

export const StyledHero = styled.section`
  padding: 0 20px;
  min-height: 70vh;
  display: flex;
  justify-content: center;
`

export const StyledHeroCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  h1 {
    margin: 0 auto;
    padding: 15px;
  }
  p {
    margin: 0 auto;
    padding: 5px;
  }
  
  min-width: 360px;
  min-height: 360px;
`

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
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
    content: '';
    position: absolute;
    width: 100vw;
    align-self: center;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
`

export const StyledSectionB = styled(StyledSection)` 
  color: #F6F6F6;  
  &:before {
      width: 100vw;   
      background: #26557c; 
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

removing border on sectionB:
content: none;

  background: #26557c;  
  color: #F6F6F6;
  &:before {
      
    }

*/