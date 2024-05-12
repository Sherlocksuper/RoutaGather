import {Content, Footer, Header} from "antd/es/layout/layout";
import {Layout, Menu} from "antd";
import Square from "./Square/Square.tsx";

const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

function App() {

    return (
        <Layout>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{flex: 1, minWidth: 0}}
                />
            </Header>
            <Content style={{
                padding: '0 48px',
                overflow: 'auto',
                width: '100%',
            }}>
                <div style={{
                    width: "60%",
                    margin: '16px auto',
                    padding: '24px',
                    background: '#fff',
                    minHeight: '80vh',
                    border: '1px solid #ebedf0',
                }}>
                    <Square/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}

export default App
