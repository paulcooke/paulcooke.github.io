import React from 'react'
import styled from 'styled-components'

import useHover from '../../functional/UseHover'

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

const ProjectCard = ( { project, isHovered } ) => {
  const [ hoverRef, isHovered ] = useHover()

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
}

const HoveredProjectCard = ( { project, isHovered } ) => {
  const [ hoverRef, isHovered ] = useHover()

  return (
    <StyledHoveredProjectCard 
      key={i}
      id={i}
      ref={hoverRef}
      background={project.background}
    >
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      
    </StyledHoveredProjectCard>
  )
}

export {
  ProjectCard,
  HoveredProjectCard
}







