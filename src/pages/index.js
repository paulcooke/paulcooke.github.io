import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import StyledHero from '../components/index-page/StyledHero'
import StyledSectionOne from '../components/index-page/StyledSectionOne'
import { StyledSection } from '../components/StyledBody'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StyledHero />
    <StyledSectionOne />
      
      
    <StyledSection>
      <h2>Work</h2>
      <p>boxes here with projects</p>  
    </StyledSection>

    <StyledSection>
      <h2>Courses & Learning</h2> 
      <p>boxes with courses?</p> 
    </StyledSection>
    
    <StyledSection>
      <h2>Contact</h2>
      <p>email with copy link, profiles on different platforms</p>
    </StyledSection>

  </Layout>
)

export default IndexPage
