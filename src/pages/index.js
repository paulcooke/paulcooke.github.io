import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import StyledHero from '../components/index-page/StyledHero'
import StyledSectionThanks from '../components/index-page/StyledSectionThanks'
import StyledSectionWork from '../components/index-page/StyledSectionWork'
import StyledSectionCourses from '../components/index-page/StyledSectionCourses'
import StyledSectionContact from '../components/index-page/StyledSectionContact'
import { StyledSection } from '../components/StyledBody'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StyledHero />
    <StyledSectionThanks />
    <StyledSectionWork />
    <StyledSectionCourses />
    <StyledSectionContact />

  </Layout>
)

export default IndexPage
