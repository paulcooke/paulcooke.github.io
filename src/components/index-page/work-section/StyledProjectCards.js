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

const ProjectImgeContainer = styled.div`
  margin: 4px auto;
  width: 160px;
  height: 120px;
  img {
    width: 100%
  }
`

const ProjectCard = ( { project } ) => {
  const [ hoverRef, isHovered ] = useHover()

  return (
    <>
      {isHovered && 
        <StyledProjectCard
          ref={hoverRef}
          background={project.hoveredBack}
        >
          <a href={project.repoLink}><ProjectLinkButton>github repo -></ProjectLinkButton></a>
        </StyledProjectCard>
      }
      {!isHovered && 
          <StyledHoveredProjectCard 
            ref={hoverRef}
            background={project.background}
          >
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </StyledHoveredProjectCard>
      }
    </>
  )
}


export default ProjectCard








