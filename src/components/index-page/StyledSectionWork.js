import React from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'

const StyledSectionTwo = styled(StyledSection)`

`
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const ProjectCard = styled.div`
  display: flex;
  
`

const StyledSectionWork = () => {
  return (
    <StyledSectionTwo>
      <h2>Work</h2>
      <ProjectsWrapper>
      <h3>General Assembly, Software Engineering Immersive 2019</h3>
        <ProjectsContainer>
          <ProjectCard>Project 1</ProjectCard>
          <ProjectCard>Project 1</ProjectCard>
          <ProjectCard>Project 1</ProjectCard>
          <ProjectCard>Project 1</ProjectCard>
        </ProjectsContainer>
      </ProjectsWrapper>
    </StyledSectionTwo>
  )
}

export default StyledSectionWork