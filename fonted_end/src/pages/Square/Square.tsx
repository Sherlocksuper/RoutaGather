import React, {useEffect, useState} from 'react';
import {LikeOutlined, MessageOutlined, StarOutlined} from '@ant-design/icons';
import {Avatar, List, Space} from 'antd';
import {IPost} from "../../interface/Post.ts";
import {getPosts} from "../../api/posts.ts";
import {useNavigate} from "react-router-dom";

const IconText = ({icon, text}: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Square: React.FC = () => {

    const [data, setData] = useState<IPost[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPosts().then((posts) => {
            setData(posts);
        });
    }, []);

    return <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item: IPost) => (
            <List.Item
                key={item.title}
                actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                ]}
                onClick={() => {
                    navigate(`/post/${item.id}`);
                }}
                style={{cursor: 'pointer'}}
            >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar}/>}
                    title={item.title}
                    description={item.description}
                />
                {item.content}
            </List.Item>
        )}
    />
};

export default Square;