import { Button, Result } from 'antd';
import {useNavigate} from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="error"
            title="Page Not Found"
            subTitle="Sorry, the page you visited does not exist."
            extra={[
                <Button type="primary" key="console" onClick={() => navigate("/")}>
                    Back Home
                </Button>,
            ]}
        />
    );
};