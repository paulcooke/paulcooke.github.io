import React from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'
import hipsterPlaceholder from '../../images/hipster-paul.png'

const StyledSectionTwo = styled(StyledSection)`

`
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
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
  max-width: 150px;
  max-height: 150px;
  img {
    width: 100%
  }
`

const ProjectLinkButton = styled.div`
  background: #26557c;
  color: #F6F6F6;
  text-align: center;
  padding: 10px 0;
  margin: 0 20px;
  transition: 0.2s;
  border-radius: 0.5em;
  &:hover {
    background: #D5D5D5;
    color: #26557c;
    border-radius: 0.5em;
  }
  
`

const projectList = [
  { name: 'budget.lol', img: hipsterPlaceholder, description: 'placeholder description the cow says what what does the fox say?', repoLink: 'https://github.com/paulcooke/ga-sei-project-4-budget.lol' },
  { name: 'budget.lol', img: hipsterPlaceholder, description: 'placeholder description the cow says what what does the fox say?', repoLink: 'https://github.com/paulcooke/ga-sei-project-4-budget.lol' },
  { name: 'budget.lol', img: hipsterPlaceholder, description: 'placeholder description the cow says what what does the fox say?', repoLink: 'https://github.com/paulcooke/ga-sei-project-4-budget.lol' },
  { name: 'budget.lol', img: hipsterPlaceholder, description: 'placeholder description the cow says what what does the fox say?', repoLink: 'https://github.com/paulcooke/ga-sei-project-4-budget.lol' }
]

const StyledSectionWork = () => {
  return (
    <StyledSectionTwo>
      <h2>Work</h2>
      <ProjectsWrapper>
      <h3>Projects completed as part of the Software Engineering Immersive at General Assembly, 2019</h3>
        <ProjectsContainer>
          
            
            {
              projectList.map((project, i) => (
                <ProjectCard i={i}>
                  <h4>{project.name}</h4>
                  <ProjectImgeContainer>
                    <img src={project.img} />
                  </ProjectImgeContainer>
                  <p>{project.description}</p>
                  <ProjectLinkButton>github repo -></ProjectLinkButton>
                </ProjectCard>
              ))
            }
            


          
        </ProjectsContainer>
      </ProjectsWrapper>
    </StyledSectionTwo>
  )
}

export default StyledSectionWork