import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import useHover from '../functional/useHover'

import profilepic from '../../images/profile-pic.png'
import lockdownPaul from '../../images/lockdown-paul.png'

const shakeAnimation = keyframes`
  0% { transform: translateX(0%); } 
  15% { transform: translateX(-25%) rotate(-5deg); } 
  30% { transform: translateX(20%) rotate(3deg); } 
  45% { transform: translateX(-15%) rotate(-3deg); } 
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0%); } 
`

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
  position: absolute;
  h1 {
    margin: 0 auto;
    padding: 15px;
    text-align: center;
  }
  p {
    margin: 0 auto;
    padding: 5px;
    text-align: center;
  }
  min-width: 360px;
  min-height: 360px;

  &.lockdownCard-enter {
    opacity: 0;
  }
  &.lockdownCard-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }
  &.lockdownCard-exit {
    opacity: 1;
  }
  &.lockdownCard-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
`

const StyledLockdownCenter = styled(StyledHeroCenter)`
  &.lockdownCard-enter-done {
    animation: ${shakeAnimation};
    animation-duration: 1s; 
  }
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
  display: inline-block;
  background: #26557c;
  color: #F6F6F6;
  text-align: center;
  padding: 6px 8px;
  margin: 0 auto 10px auto;
  transition: 0.2s;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background: #D5D5D5;
    color: #26557c;
    border-radius: 0.5em;
    transition: 300ms ease-in-out;
  }
`

const SwitchButton = styled(HeroButton)`
  background: #D1986A;
`

const StyledTooltipBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2px;
  place-items: center;
`

const StyledTooltipText = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -50%;
  width: 160px;
  text-align: center;
  margin-top: 4px;
  padding: 4px;
  font-size: 12px;
  color: #26557c;
  border: 2px solid #D5D5D5;
  border-radius: 0.5em; 

  &.toolTip-enter {
    opacity: 0;
  }
  &.toolTip-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
  &.toolTip-exit {
    opacity: 1;
  }
  &.toolTip-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
`

// const StyledTooltip = styled.div`
//   position: relative;
// `

// const StyledTooltipText = styled.span`
//   position: absolute;
//   z-index: 1;
//   visibility: hidden;
//   text-align: center;
//   color: #26557c;
//   width: 120px;
//   bottom: 100%;
//   left: 50%;
//   &${HeroButton}:hover {
//     visibility: visible;
//   }
// `

const StyledHero = () => {

  const [ hoverRef, isHovered ] = useHover()
  const [ isLockdown, setIsLockdown ] = useState(false)

  const toggleLockdown = () => {
    setIsLockdown(!isLockdown)
  }

  return (
    <StyledHeroSection>
      <TransitionGroup
        component={null}
      >
        {!isLockdown && 
          <CSSTransition
            key={"notlockeddown"}
            in={!isLockdown}
            timeout={300}
            classNames="lockdownCard"
          >
            <StyledHeroCenter>
              <h1>Hi, I'm Paul.</h1>
              <p>Nice to meet you. I'm a Software Developer</p>
              <p>based in London. I build web apps.</p>
              <br />
              <StyledTooltipBox>
                <HeroButton ref={hoverRef}>Get in touch</HeroButton>
                {isHovered &&
                  <CSSTransition
                    key={"toolTipHovered"}
                    in={isHovered}
                    timeout={300}
                    classNames="toolTip"
                  >
                    <StyledTooltipText>
                      copy my email address
                    </StyledTooltipText>
                  </CSSTransition>
                }
              </StyledTooltipBox>
              <br />
              <ImageContainer>
                <img src={profilepic} />
              </ImageContainer>
              <SwitchButton onClick={toggleLockdown}>Switch to Lockdown Paul</SwitchButton>
            </StyledHeroCenter>   
          </CSSTransition>
          
        }

        {isLockdown && 
          <CSSTransition
            key={"lockeddown"}
            in={isLockdown}
            timeout={300}
            classNames="lockdownCard"
          >
            <StyledLockdownCenter>
              <h1>Hi, I'm Lockdown Paul.</h1>
              <p>Nice to meet you. Do you know when we will be allowed out?</p>
              <p>I miss outside.</p>
              <br />
              <HeroButton>Let's socially distance together</HeroButton>
              <br />
              <ImageContainer>
                <img src={lockdownPaul} />
              </ImageContainer>
              <SwitchButton onClick={toggleLockdown}>Switch to regular Paul</SwitchButton>
            </StyledLockdownCenter>   
          </CSSTransition>
        }
        
      </TransitionGroup>    
    </StyledHeroSection>


  )
}

export default StyledHero