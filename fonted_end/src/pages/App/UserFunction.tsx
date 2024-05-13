import {Menu} from "antd";
import {Link} from "react-router-dom";

export const UserFunction = () => {
    return (
        <Menu>
            <Menu.Item key="0">
                <Link to="/user">个人中心</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/login">退出登录</Link>
            </Menu.Item>
        </Menu>
    )
}