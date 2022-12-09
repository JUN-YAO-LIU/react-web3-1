import { Layout, Menu, theme } from 'antd'

const Header = Layout
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const AppHeader = () => {
    return (
        <>
            <Header className="header">
                <div style={{ display: 'flex' }}>
                    <div>
                        user
                    </div>
                </div>
            </Header>
        </>
    )
}

export default AppHeader