import React from 'react'
import Banner from '../../components/Banner'
import Catalog from '../../components/Catalog'
import styled from 'styled-components'

const StyledHome = styled.div`
  width: 100%;
  max-width: 100%;
`

function Home() {
  return (
    <StyledHome>
      <Banner url={"/images/banner-home.png"}/>
      <Catalog/>
    </StyledHome>
  )
}

export default Home