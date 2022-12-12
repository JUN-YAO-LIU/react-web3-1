import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 組menu

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsedWidth={0} collapsed={collapsed}>
        <div style={{height:'60px',color:'white',fontSize:'25px',padding:'10px',textAlign:'center'}}>Logo</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: (
                <a href="/About" rel="noopener noreferrer">
                  About
                </a>
              ),
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: (
                <a href="/Register" rel="noopener noreferrer">
                  Register
                </a>
              ),
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: (
                <a href="/Login" rel="noopener noreferrer">
                  Login
                </a>
              ),
            },
            {
              key: '4',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;