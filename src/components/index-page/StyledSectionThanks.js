import React from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'
import { iconListFront, iconListBack } from '../../helpers/IconLists'

const StyledSectionOne = styled(StyledSection)` 
  color: #F6F6F6;  
  p {
    margin-bottom: 40px;
    padding: 0 5px;
  }
  &:before {
      width: 100vw;   
      background: #26557c; 
  }
`

const LanguagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 5px;
  padding: 5px 15px;
  background: #F6F6F6;
  color: #26557c;
  width: 360px;
  border-radius: 0.5em;
  h3 {
    padding: 10px 0;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  border-top: 1px solid #26557c;
`

const StyledLogo = styled.div`
  text-align: center;
  margin: 10px;
  i {
    font-size: 74px;
  }
`

const StyledSectionThanks = () => {
  return (
    <StyledSectionOne>
      <h2>
        Thanks for visiting my website.
      </h2>
      <p>I retrained as a developer in 2019, as a former CMO and startup co-founder I initially started coding to learn how to build my own ideas. I found I absolutely loved it, so now this is what I do! To date I have worked mostly in the front end, mainly React (used for this site, translated by Gatsby), and I'm constantly working to add to my knowledge and skillset.</p>

      <LanguagesWrapper>
        <LanguagesContainer>
          <h3>Front End</h3>
            <LogoContainer>
              {
                iconListFront.map((icon, i) => (
                  <StyledLogo key={i}>
                    <i className={icon}></i>
                  </StyledLogo>
                ))
              }
            </LogoContainer>
        </LanguagesContainer>

        <LanguagesContainer>
          <h3>Back End & Deployment</h3>
            <LogoContainer>
              {
                iconListBack.map((icon, i) => (
                  <StyledLogo key={i}>
                    <i className={icon}></i>
                  </StyledLogo>
                ))
              }
            </LogoContainer>
        </LanguagesContainer> 
      </LanguagesWrapper>
    </StyledSectionOne>
  )
}

export default StyledSectionThanks