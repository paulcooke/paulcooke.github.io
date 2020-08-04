import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { StyledHero, StyledSectionOne } from '../components/StyledBody'
import { LanguagesWrapper, LanguagesContainer, LogoContainer, StyledLogo } from '../components/StyledLanguages'
import { iconListFront, iconListBack } from '../helpers/IconLists'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledHero>
      <h1>Hi, I'm Paul.</h1>
      <p>A Software Developer.</p>
      <p>I build web apps.</p>
    </StyledHero>
    
    <StyledSectionOne>
      <h2>
        Thanks for visiting my website. It was made with React, and translated using Gatsby. 
      </h2>
      <p>I retrained as a developer in 2019, as a former CMO and startup co-founder I initially started coding to learn how to build my own ideas. I found I absolutely loved it, so now this is what I do! So far I have worked mostly in the front end, mainly React (used for this site), and I'm constantly working to add to my knowledge and skillset.</p>
    </StyledSectionOne>

    <StyledSectionOne>
      <h2>Languages</h2>  
      <LanguagesWrapper>
        <LanguagesContainer>
          <h3>Front End</h3>
            <LogoContainer>
              {
                iconListFront.map((icon, i) => (
                  <StyledLogo i={i}>
                    <i class={icon}></i>
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
                  <StyledLogo i={i}>
                    <i class={icon}></i>
                  </StyledLogo>
                ))
              }
            </LogoContainer>
        </LanguagesContainer> 
      </LanguagesWrapper>
    </StyledSectionOne>
      
      
    <StyledSectionOne>
      <h2>Work</h2>
      <p>boxes here with projects</p>  
    </StyledSectionOne>

    <StyledSectionOne>
      <h2>Courses</h2> 
      <p>boxes with courses?</p> 
    </StyledSectionOne>
    
    <StyledSectionOne>
      <h2>Contact</h2>
      <p>email with copy link, profiles on different platforms</p>
    </StyledSectionOne>

  </Layout>
)

export default IndexPage
