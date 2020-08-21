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


const StyledSectionCourses = () => {
  return (
    <StyledSectionFour>
      <h2>Certifications</h2> 
      <p>boxes with courses?</p> 
    </StyledSectionFour>
  )
}

export default StyledSectionCourses