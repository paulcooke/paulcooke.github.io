import React from 'react'
import styled from 'styled-components'
import { StyledSection } from '../../StyledBody'
import { TransitionGroup } from 'react-transition-group'

import ProjectCard from './StyledProjectCards'

import { projectList } from '../../../helpers/ProjectList'


const StyledSectionTwo = styled(StyledSection)`
  h2 {
    border-bottom: 1px solid #26557c;
    padding-bottom: 6px;
  }
`
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  h3 {
    text-align: center;
    margin: 10px auto;
    line-height: 1.4;
  }
`

const H3 = styled.h3`
  text-align: center;
  margin: 10px auto;
  padding: 20px;
  line-height: 1.4;  
  border: 1px solid #26557c;
  border-radius: 0.5em;
  a {
    text-decoration: none;
    background: rgba(209, 152, 106, 1);
    color: #f6f6f6;
    padding: 2px 8px;
    border-radius: 0.5em;
    &:hover {
      background: #D5D5D5;
      color: #26557c;
    }
  }
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const StyledSectionWork = () => {

  const projects = projectList

  return (
    <StyledSectionTwo id="work">

      <h2>Work</h2>
      <ProjectsWrapper>
        <H3>You can see the repo for this website <a href={"https://github.com/paulcooke/paulcooke.github.io/tree/source"} target="_blank" rel="noreferrer">here</a>. It was built with React using Hooks and Styled Components, generated by Gatsby.</H3>
        <br />
        <h3>Projects completed as part of the Software Engineering Immersive at General Assembly, 2019</h3>
        <br />
        <ProjectsContainer>
          <TransitionGroup
            component={null}
          >

            {
              projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  project={project}
                />
              )) 
            }
          </TransitionGroup>
            
        </ProjectsContainer>
        <br />
        
        
      </ProjectsWrapper>
    </StyledSectionTwo>
  )
}

export default StyledSectionWork