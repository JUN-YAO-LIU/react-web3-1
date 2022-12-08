import { Layout, Menu } from 'antd'

const Header = Layout
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

const AppHeader = () => {
    return (
        <>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
        </>
    )
}

export default AppHeader