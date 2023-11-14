import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.img`
  width: 100%;
`

function Banner({ url }) {
  return (
    <StyledBanner src={url} alt="Banner" />
  )
}

export default Banner