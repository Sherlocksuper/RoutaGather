import React from 'react';
import {Avatar, Layout, Menu, Popover, theme} from 'antd';
import FloatFunction from "./FloatFunction.tsx";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {UserFunction} from "./UserFunction.tsx";

const {Header, Content, Footer} = Layout;

const menuList = [
    {
        key: '/',
        label: 'Square',
    },
];

const App: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation()

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={menuList}
                    style={{flex: 1, minWidth: 0}}
                    onClick={(e) => {
                        navigate(e.key);
                    }}
                    selectedKeys={[
                        location.pathname,
                    ]}
                />
                <Popover content={<UserFunction/>}>
                    <Link to="/user">
                        <Avatar
                            size={40}
                            style={{cursor: 'pointer'}}
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                    </Link>
                </Popover>
            </Header>
            <Content style={{
                width: '70%',
                margin: 'auto',
                marginTop: '20px',
                padding: '20px',
                borderRadius: '10px',
                background: 'white',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
            }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                    {/*<PublishArticlePage/>*/}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
            <FloatFunction/>
        </Layout>
    );
};

export default App;