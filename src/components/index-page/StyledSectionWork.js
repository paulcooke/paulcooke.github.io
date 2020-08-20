import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'

import ProjectCard from './work-section/StyledProjectCards'

import { projectList } from '../../helpers/ProjectList'



const StyledSectionTwo = styled(StyledSection)`

`
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  h3 {
    text-align: center;
    margin: 10px auto;
  }
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const StyledSectionWork = () => {

  const [ projects, setProjects ] = useState(projectList)

  return (
    <StyledSectionTwo>

      <h2>Work</h2>
      <ProjectsWrapper>
        <h3>Projects completed as part of the Software Engineering Immersive at General Assembly, 2019</h3>
        <ProjectsContainer>
            {
              projects.map((project, i) => {
                return(
                  <ProjectCard
                    key={i}
                    project={project}
                  />
                )
              }) 
            }
        </ProjectsContainer>
        <h3>Further projects and practise</h3>
      </ProjectsWrapper>
    </StyledSectionTwo>
  )
}

export default StyledSectionWork


/*

PREVIOUS STYLING

const StyledSectionTwo = styled(StyledSection)`
  padding: 40px 10px;
`
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #26557c;
  color: #F6F6F6;
  padding: 30px;
  border-radius: 0.5em;
  h3 {
    text-align: center;
    margin: 10px auto;
  }
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  border: 1px solid #26557c;
  border-radius: 0.5em;
  padding: 10px;
  background: #F6F6F6;
  color: #26557c;
    h4 {
      text-align: center;
      margin: 16px auto;
    }
    p {
      font-size: small;
      margin: 10px 4px 4px 4px;
    }
`

const ProjectImgeContainer = styled.div`
  margin: 4px auto;
  width: 150px;
  height: 120px;
  img {
    width: 100%
  }
`

const ProjectLinkButton = styled.div`
  background: #26557c;
  color: #F6F6F6;
  text-align: center;
  padding: 6px 8px;
  margin: 0 auto;
  font-size: small;
  transition: 0.2s;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background: #D5D5D5;
    color: #26557c;
    border-radius: 0.5em;
  }
`


*/