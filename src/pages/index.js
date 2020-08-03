import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { StyledHero, StyledSectionOne, StyledSectionTwo } from '../components/StyledBody'
import { iconListFront, iconListBack } from '../helpers/lists'

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

    <StyledSectionTwo>
    <h2>Experience</h2>  
      <h3>Front End</h3>
      {
        iconListFront.map((icon, i) => {
          return <i class={icon} i={i}></i>
        })
      }
      <h3>Back End & Deployment</h3>
      {
        iconListBack.map((icon, i) => (
          <i class={icon} i={i}></i>
        ))
      }
    </StyledSectionTwo>
      
      
    <StyledSectionOne>
      <h2>Work</h2>
      <p>boxes here with projects</p>  
    </StyledSectionOne>

    <StyledSectionTwo>
      <h2>Courses</h2> 
      <p>boxes with courses?</p> 
    </StyledSectionTwo>
    
    <StyledSectionOne>
      <h2>Contact</h2>
      <p>email with copy link, profiles on different platforms</p>
    </StyledSectionOne>

  </Layout>
)

export default IndexPage
