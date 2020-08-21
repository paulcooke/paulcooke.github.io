import React from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'

import { profilesList } from '../../helpers/ProjectList'

const StyledSectionThree = styled(StyledSection)`
  display: flex;
  flex-direction: column;
  align-items: center;  
  color: #F6F6F6;  
  h2 {
    border-bottom: 1px solid #F6F6F6;
    padding-bottom: 6px;
  }
  p {
    margin-bottom: 40px;
    padding: 0 5px;
  }
  &:before {
      width: 100vw;   
      background: #26557c; 
  }
`

const ProfilesContainer = styled.div`
  background: #26557c;
  color: #F6F6F6;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
`

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  color: #26557c;
  padding: 20px;
  border-radius: 0.5em;
  width: 200px;
  height: 160px;
  margin: 20px;
  cursor: pointer;
  h4 {
    text-align: center;
    padding: 4px;
  }
  &:hover {
    h4 {
      border-bottom: 1px solid #26557c;
    }
  }
`

const LogoContainer = styled.div`
  text-align: center;
  img {
    height: 80px;
    width: 80px;
  }
`

const StyledSectionCourses = () => {
  return (
    <StyledSectionThree>
        <h2>Public profiles</h2>
        <ProfilesContainer>
          {
            profilesList.map((profile, i) => (
              <a
                key={i}
                href={profile.href}
              >
                <ProfileBox>
                <LogoContainer>
                  <img src={profile.imgLink} alt={profile.altText} />
                </LogoContainer>
                <h4>{profile.profile}</h4>
                </ProfileBox>
              </a>
            ))
          }
        </ProfilesContainer>
    </StyledSectionThree>
  )
}

export default StyledSectionCourses