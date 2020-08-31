import React from 'react'
import styled from 'styled-components'

import useCopyEmail from '../functional/useCopyEmail'

import { StyledSection } from '../StyledBody'

const StyledSectionFive = styled(StyledSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const StyledContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    background: rgba(209, 152, 106, 1);
    color: #f6f6f6;
    padding: 2px 8px;
    border-radius: 0.5em;
    cursor: pointer;
    &:hover {
      background: #D5D5D5;
      color: #26557c;
    }
  }
`

const StyledContactCopied = styled.div`
  display: flex;
  justify-content: center;
  color: green;
  border-radius: 0.5em;
  width: 140px;
  background: #F6F6F6;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  padding: 4px;
  i {
    font-size: 14px;
  }
`

const StyledSectionContact = () => {

  const [ isCopied, handleCopy ] = useCopyEmail(3000)

  return (
    <StyledSectionFive id="contact">
      <h2>Contact</h2>
      <StyledContactContent>
        <p>If you'd like to work together, please get in touch.</p>
        <p>Click <span onClick={() => handleCopy("paulgfcooke@gmail.com")}>here</span> to copy my email address to your clipboard.</p>
        {isCopied &&
          <StyledContactCopied>
            <div><i className="far fa-check-circle"></i> email copied</div>
          </StyledContactCopied>
        }
      </StyledContactContent>
    </StyledSectionFive>
  )
}

export default StyledSectionContact