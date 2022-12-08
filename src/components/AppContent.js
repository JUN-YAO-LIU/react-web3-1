import React, { Suspense, useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  width: 98%;
  margin-left: 1%;
  background: #f8fafc;
  border-radius: 6px;
  overflow: hidden;
  minHeight: 280;
`

const AppContent = () => {
    return (
      <MainContainer>
        <Suspense>
          asdf
        </Suspense>
      </MainContainer>
    )
  }
  
  export default React.memo(AppContent)