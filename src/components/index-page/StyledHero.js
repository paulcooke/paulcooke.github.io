import React from 'react'
import styled from 'styled-components'
import { Image, ImageContainer } from '../Image'

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

const StyledHero = () => {
  return (
    <StyledHeroSection>

      <StyledHeroCenter>
        <h1>Hi, I'm Paul.</h1>
        <p>Nice to meet you. I'm a Software Developer.</p>
        <p>I build web apps.</p>
      
        <ImageContainer>
          <Image />
        </ImageContainer>
      
      </StyledHeroCenter>   

    </StyledHeroSection>
  )
}

export default StyledHero