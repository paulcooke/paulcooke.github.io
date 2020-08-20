import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'

import useHover from '../functional/UseHover'

import hipsterPlaceholder from '../../images/hipster-paul.png'
import budgetlol from '../../images/budgetlol.png'
import allotd from '../../images/allotd.png'
import alternativetimes from '../../images/alternativetimes.png'
import tetris from '../../images/tetris.png'

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

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 230px;
  border: 1px solid #26557c;
  border-radius: 0.5em;
  padding: 10px;
  margin: 20px;
  background: ${props => props.background};
  color: #26557c;
    h4 {
      text-align: center;
      margin: 16px auto;
    }
    p {
      font-size: 14px;
      margin: 10px 4px;
    }
`

const StyledHoveredProjectCard = styled(StyledProjectCard)`
  background: ${props => props.hoveredBack};
`

const ProjectImgeContainer = styled.div`
  margin: 4px auto;
  width: 160px;
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
  width: 50%;
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

// const projectList = [
//   { hovered: false, background: 'red', hoveredBack: 'yellow', name: 'budget.lol', img: budgetlol, description: 'Fast and easy budgeting - React.js & Django 7 day solo project.', repoLink: 'https://github.com/paulcooke/ga-sei-project-4-budget.lol' },
//   { hovered: false, background: 'blue', hoveredBack: 'yellow', name: 'allotd', img: allotd, description: 'Find and share locally grown veg - MERN stack 10 day group project.', repoLink: 'https://github.com/paulcooke/ga-sei-project-3-allotd' },
//   { hovered: false, background: 'green', hoveredBack: 'yellow', name: 'The Alternative Times', img: alternativetimes, description: 'Alternative news headline generator - React.js 2 day hackathon pair project.', repoLink: 'https://github.com/paulcooke/ga-sei-project-2-the-alternative-times' },
//   { hovered: false, background: 'red', hoveredBack: 'yellow', name: 'Tetris clone', img: tetris, description: 'Vanilla JavaScript, HTML & CSS - 8 day solo project.', repoLink: 'https://github.com/paulcooke/ga-sei-project-1-tetris-vanilla-javascript' }
// ]

const StyledSectionWork = () => {

  const [ projectList, setProjectList ] = useState(
    [
      { background: 'red', hoveredBack: 'yellow', name: 'budget.lol', img: budgetlol, description: 'Fast and easy budgeting - React.js & Django 7 day solo project.', repoLink: 'https://github.com/paulcooke/ga-sei-project-4-budget.lol' },
      { background: 'blue', hoveredBack: 'yellow', name: 'allotd', img: allotd, description: 'Find and share locally grown veg - MERN stack 10 day group project.', repoLink: 'https://github.com/paulcooke/ga-sei-project-3-allotd' },
      { background: 'green', hoveredBack: 'yellow', name: 'The Alternative Times', img: alternativetimes, description: 'Alternative news headline generator - React.js 2 day hackathon pair project.', repoLink: 'https://github.com/paulcooke/ga-sei-project-2-the-alternative-times' },
      { background: 'red', hoveredBack: 'yellow', name: 'Tetris clone', img: tetris, description: 'Vanilla JavaScript, HTML & CSS - 8 day solo project.', repoLink: 'https://github.com/paulcooke/ga-sei-project-1-tetris-vanilla-javascript' }
    ]
  )

  
  // const toggleHovered = ({ target: { id } }) => {
  //   let tempArr = projectList.map((project, i) => {
  //     if (i === parseInt(id)) project.hovered = !project.hovered
  //     return project
  //   })
  //   setProjectList(tempArr)
  //   // console.log(`${id} ${isHovered[id]}`)
  //   // console.log(isHovered)
  // }

    // const toggleHovered = () => {
      
    // }

    
    const [ hoverRef, isHovered ] = useHover()

  return (
    <StyledSectionTwo>

      <h2>Work</h2>
      <ProjectsWrapper>
        <h3>Projects completed as part of the Software Engineering Immersive at General Assembly, 2019</h3>
        <ProjectsContainer>
            {
              projectList.map((project, i) => {
                if (isHovered) {
                  return (
                    <StyledProjectCard
                      key={i}
                      id={i}
                      ref={hoverRef}
                      background={project.hoveredBack}
                    >
                      <a href={project.repoLink}><ProjectLinkButton>github repo -></ProjectLinkButton></a>
                    </StyledProjectCard>
                  )
                } if (!isHovered) {
                  return (
                    <StyledProjectCard 
                    key={i}
                    id={i}
                    ref={hoverRef}
                    background={project.background}
                    >
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    </StyledProjectCard>
                  )
                }
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

onMouseEnter={toggleHovered}
                          onMouseLeave={toggleHovered}
onMouseEnter={setIsHovered(true)}
                  onMouseLeave={setIsHovered(false)}


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