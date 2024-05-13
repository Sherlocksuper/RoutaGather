import React, {useState, useEffect} from 'react';
import {Card, Avatar, Layout, Breadcrumb, Menu} from 'antd';
import {IUser} from '../../interface/User';
import {Content} from "antd/es/layout/layout";

const UserHome: React.FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const fetchedUser: IUser = {
            id: 1,
            username: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            role: 'User',
            createdAt: '2022-01-01',
            posts: [],
        };

        setUser(fetchedUser);
    }, []);

    return (
        <Layout>
            <Card>
                <Card.Meta
                    avatar={<Avatar size={100} src={user?.avatar}/>}
                    title={<h1>{user?.username}</h1>}
                    description={<h3>{user?.email}</h3>}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                />
            </Card>
            <Card style={{
                marginTop: 20,
            }}>
                <Content style={{padding: '0 48px', backgroundColor: "white"}}>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Posts</Menu.Item>
                        <Menu.Item key="2">Favorites</Menu.Item>
                        <Menu.Item key="3">Collection</Menu.Item>
                    </Menu>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Posts</Breadcrumb.Item>
                        <Breadcrumb.Item>My Posts</Breadcrumb.Item>
                    </Breadcrumb>
                </Content>
            </Card>
        </Layout>
    );
};

export default UserHome;