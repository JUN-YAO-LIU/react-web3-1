import React, { Suspense, useState } from 'react'
import { Breadcrumb,theme,Layout} from 'antd';
import styled from 'styled-components'

const { Content } = Layout;

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
      <>
          <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: theme.useToken(),
          }}
        >
          Content
        </Content>
      </>
     
    )
  }
  
  export default React.memo(AppContent)