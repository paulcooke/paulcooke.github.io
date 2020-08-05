import styled from 'styled-components'

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