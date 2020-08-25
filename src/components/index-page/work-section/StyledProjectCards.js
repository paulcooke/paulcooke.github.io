import React from 'react'
import styled, { keyframes } from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import useHover from '../../functional/useHover'

// const flipAnimation = keyframes`
//   0% {
//     transform: perspective(400px) rotateY(90deg); 
//     opacity: 0;
//   }
//   40% {
//     transform: perspective(400px) rotateY(-10deg);
//   }
//   70% {
//     transform: perspective(400px) rotateY(10deg);
//   }
//   100% {
//     transform: perspective(400px) rotateY(0deg);
//     opacity: 1;
//   }
// `

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 280px;
  height: 230px;
  border-radius: 0.5em;
  padding: 14px;
  margin: 20px;
  background: ${props => `${props.background}`};
  color: #26557c;
    h4, div, p {
      color: #f6f6f6;
      padding: 6px;
      border 1px solid white;
      border-radius: 0.5em;
      text-align: center;
    }
    h4 {
      font-size: 20px;
      margin: 16px auto;
      padding: 8px 12px;
    }
    div {
      border: none;
    }
    p {
      font-size: 14px;
      margin: 10px;
      border: none;
    }
  
  &.projectCard-enter {
    opacity: 0;
  }
  &.projectCard-enter-active {
    opacity: 1;
    transition: opacity 500ms linear;
  }
  &.projectCard-enter-done {

  }
  &.projectCard-exit {
    opacity: 1;
  }
  &.projectCard-exit-active {
    opacity: 0;
    transition: opacity 500ms linear;
  } 
`

const StyledHoveredProjectCard = styled(StyledProjectCard)`
  background: ${props => `${props.background}`};
  justify-content: center;
  p {
    color: #F6F6F6;
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
`

const ProjectLinkButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #26557c;
  color: #F6F6F6;
  margin: 10px auto;
  width: 140px;
  height: 40px;
  transition: 0.2s;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background: #D5D5D5;
    color: #26557c;
  }
`

const ProjectCard = ( { project, key } ) => {
  const [ hoverRef, isHovered ] = useHover()

  return (
    <>
      {!isHovered && 
        <CSSTransition
          in={true}
          key={key}
          timeout={500}
          classNames="projectCard"
        >
          <StyledProjectCard 
            ref={hoverRef}
            background={project.background}
          >
            <h4>{project.name}</h4>
            <div><i className={project.icon}></i></div>
            <p>{project.description}</p>
          </StyledProjectCard>
        </CSSTransition>
      }
      {isHovered && 
        <CSSTransition
          in={true}
          key={key}
          timeout={500}
          classNames="projectCard"
        >
          <StyledHoveredProjectCard
            ref={hoverRef}
            background={project.hoveredBack}
          >
            {(project.appLink.length > 0) && <a href={project.appLink} target="_blank"><ProjectLinkButton>Visit App</ProjectLinkButton></a>}
            {(project.appLink.length < 1) && <p>( App temporarily offline )</p>}
            <a href={project.repoLink} target="_blank"><ProjectLinkButton>github repo</ProjectLinkButton></a>
          </StyledHoveredProjectCard>
        </CSSTransition>
      }
    </>
  )
}


export default ProjectCard








