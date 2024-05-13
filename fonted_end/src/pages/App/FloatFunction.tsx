import React from 'react';
import {QuestionCircleOutlined, MoonOutlined, PlusOutlined} from '@ant-design/icons';
import {FloatButton, Tooltip} from 'antd';

const FloatFunction: React.FC = () => (
    <>
        <FloatButton.Group shape="circle" style={{right: 24}}>
            <FloatButton.BackTop visibilityHeight={0}/>
            <Tooltip title={"Create Post"} placement={"left"}>
                <FloatButton icon={<PlusOutlined/>}/>
            </Tooltip>
            <Tooltip title={"Dark Mode"} placement={"left"}>
                <FloatButton icon={<MoonOutlined/>}/>
            </Tooltip>
            <Tooltip title={"Feedback"} placement={"left"}>
                <FloatButton icon={<QuestionCircleOutlined/>}/>
            </Tooltip>
        </FloatButton.Group>
    </>
);

export default FloatFunction;