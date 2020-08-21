import React from 'react'
import styled from 'styled-components'
import { StyledSection } from '../StyledBody'

import { certificateList } from '../../helpers/CertificateLists'

const StyledSectionFour = styled(StyledSection)`
  h2 {
    border-bottom: 1px solid #26557c;
    padding-bottom: 6px;
  }
`

const CertificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const CertificationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 640px;
  margin: 10px 0;
  justify-content: space-between;
  border: 2px solid #26557c;
  border-radius: 0.5em;
`

const LogoBox = styled.div`
  padding: 20px;
  img {
    height: 80px;
    width: 80px;
  }
`

const DescriptivesBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  h3, h4, p, small {
    margin: 6px 14px;
    text-align: left
  }
  h3 {
    margin-top: 14px;
    text-decoration: underline;
  }
`

const StyledSectionCourses = () => {
  return (
    <StyledSectionFour>
      <h2>Certifications</h2> 
      <CertificationsContainer>
        {
          certificateList.map((certificate, i) => (
            <CertificationBox key={i}>
              <LogoBox>
                {console.log(Object.values(certificate)[4])}
                <img src={certificate.logo} />
              </LogoBox>
              <DescriptivesBox>
                <h3>{certificate.provider}</h3>
                <p><strong>{certificate.course}</strong></p>
                <small>{certificate.dates}, {certificate.duration}</small>
              </DescriptivesBox>
            </CertificationBox>
          ))
        }
      </CertificationsContainer>
    </StyledSectionFour>
  )
}

export default StyledSectionCourses