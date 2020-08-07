import React, { useState } from 'react'
import styled from 'styled-components'
import profilepic from '../../images/profile-pic.png'
import lockdownPaul from '../../images/lockdown-paul.png'

const StyledHeroSection = styled.section`
  padding: 0 20px;
  min-height: 60vh;
  display: flex;
  justify-content: center;
`

const StyledHeroCenter = styled.div`
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

const ImageContainer = styled.div`
  margin-bottom: 40px;  
  max-width: 200px;
  max-height: 200px;
  img {
    width: 100%
  }
`

const HeroButton = styled.div`
  background: #26557c;
  color: #F6F6F6;
  text-align: center;
  padding: 6px 8px;
  margin: 0 auto;
  transition: 0.2s;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background: #D5D5D5;
    color: #26557c;
    border-radius: 0.5em;
  }
`

const StyledHero = () => {

  const [ isLockdown, setIsLockdown ] = useState(false)

  const toggleLockdown = () => {
    setIsLockdown(!isLockdown)
  }

  return (
    <StyledHeroSection>

      {!isLockdown && 
        <StyledHeroCenter>
          <h1>Hi, I'm Paul.</h1>
          <p>Nice to meet you. I'm a Software Developer.</p>
          <p>I build web apps.</p>
          <ImageContainer>
            <img src={profilepic} />
          </ImageContainer>
          <HeroButton onClick={toggleLockdown}>Switch to Lockdown Paul</HeroButton>
        </StyledHeroCenter>   
      }

      {isLockdown && 
        <StyledHeroCenter>
          <h1>Hi, I'm Lockdown Paul.</h1>
          <p>Nice to meet you. Do you know when we will be allowed out?</p>
          <p>I miss outside.</p>
          <ImageContainer>
            <img src={lockdownPaul} />
          </ImageContainer>
          <HeroButton onClick={toggleLockdown}>Switch to regular Paul</HeroButton>
        </StyledHeroCenter>   
      }
        
    </StyledHeroSection>
  )
}

export default StyledHero