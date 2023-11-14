import React from 'react'
import styled from 'styled-components'

const StyledH4 = styled.h4`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  background-color: var(--black);
  color: var(--white);
  margin: 0;
  padding: 2rem 0;
`

function Footer() {
  return (
    <StyledH4>Developed by João Pedro</StyledH4>
  )
}

export default Footer