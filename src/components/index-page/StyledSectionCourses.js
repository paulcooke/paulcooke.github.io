import React from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'

import { certificateList } from '../../helpers/CertificateLists'

const StyledSectionFour = styled(StyledSection)`
  h2 {
    padding-bottom: 6px;
    border-bottom: 1px solid #26557c;
  }
`

const CertificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: #26557c;
  }
`

const CertificationBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 640px;
  margin: 20px 0;
  justify-content: space-between;
  border-top: 2px solid #26557c;
  @media only screen and (max-width: 500px) {
    max-width: 300px;
  }
`

const LogoBox = styled.div`
  padding: 20px;
  img {
    height: 80px;
    width: 80px;
  }
  @media only screen and (max-width: 500px) {
    img {
      height: 60px;
      width: 60px;
    }
  }
`

const DescriptivesBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  text-align: center;
  h3, h4, p, small {
    margin: 6px 14px;
    text-align: left
  }
  @media only screen and (max-width: 500px) {
    width: 260px;
  }
`

const StyledSectionCourses = () => {
  return (
    <StyledSectionFour>
      <h2>Certifications</h2> 
      <CertificationsContainer>
        {
          certificateList.map((certificate, i) => (
            <a key={i} href={certificate.certificateLink} target="_blank" rel="noreferrer">
              <CertificationBox>
                <LogoBox>
                  <img src={certificate.logo} alt={`${certificate.provider} logo`}/>
                </LogoBox>
                <DescriptivesBox>
                  <h3>{certificate.provider}</h3>
                  <p><strong>{certificate.course}</strong></p>
                  <small>{certificate.dates}, {certificate.duration}</small>
                </DescriptivesBox>
              </CertificationBox>
            </a>
            
          ))
        }
      </CertificationsContainer>
    </StyledSectionFour>
  )
}

export default StyledSectionCourses