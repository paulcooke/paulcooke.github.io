import React from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'

const StyledSectionFive = styled(StyledSection)`
  display: flex;
  color: #F6F6F6;  
  padding-bottom: 60px;
  h2 {
    border-bottom: 1px solid #F6F6F6;
    padding-bottom: 6px;
  }
  p {
    margin: 10px;
    padding: 0 5px;
  }
  &:before {
      width: 100vw;   
      background: #26557c; 
  }
`


const StyledSectionContact = () => {
  return (
    <StyledSectionFive>
      <h2>Contact</h2>
      <p>If you'd like to work together, please get in touch.</p>
      <p>Click <span>here</span> to copy my email address to your clipboard.</p>
    </StyledSectionFive>
  )
}

export default StyledSectionContact