import React from 'react';
import { Breadcrumb, Layout, theme, Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import AppContent from '../components/AppContent'

const { Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


const DefaultLayout = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>

      <AppHeader />

      <Layout>

        <AppSidebar />

        <Layout style={{ padding: '0 24px 24px' }}>

          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <AppContent/>

        </Layout>

      </Layout>
    </Layout>
  );
};
export default DefaultLayout;