import {Avatar, Button, Layout, List, Popover, Row, Space, Typography} from "antd";
import {IComment, IPost} from "../../interface/Post.ts";
import React, {useEffect, useState} from "react";
import {getPosts} from "../../api/posts.ts";
import {LikeOutlined, StarOutlined, EyeOutlined, ShareAltOutlined, MessageOutlined} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

const IconText = ({icon, text}: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const PostDetail = () => {

    const [postData, setPostData] = useState<IPost>();

    useEffect(() => {
        getPosts().then((posts) => {
            console.log(posts[0])
            setPostData(posts[0]);
        });
    }, []);

    return (
        <Layout style={{
            backgroundColor: '#fff',
        }}>
            <Typography>
                <Title level={2}>{postData?.title ?? "default"}</Title>
                <Paragraph style={{display: 'flex', color: 'gray', alignItems: 'center'}}>
                    <Space style={{
                        marginRight: 20,
                    }}>
                        <EyeOutlined style={{marginRight: 5}}/>{postData?.views ?? 0}
                    </Space>
                    <Space style={{
                        marginRight: 20,
                    }}> <LikeOutlined style={{marginRight: 5}}/>{postData?.likes ?? 0}
                    </Space>
                    <Space style={{
                        marginRight: 20,
                    }}> <StarOutlined style={{marginRight: 5}}/>{postData?.favorites ?? 0}
                    </Space>
                    <Space style={{
                        marginRight: 20,
                    }}> <ShareAltOutlined style={{marginRight: 5}}/>{postData?.forwards ?? 0}
                    </Space>
                </Paragraph>
                <Paragraph>{postData?.content ?? "default"}</Paragraph>
            </Typography>
            <Typography style={{
                marginTop: 20,
            }}>
                <Typography.Title level={3}>评论</Typography.Title>
                <TextArea
                    placeholder="Autosize height with minimum and maximum number of lines"
                    autoSize={{minRows: 2, maxRows: 6}}
                />
                <Row align={'middle'} justify={'end'} style={{
                    marginTop: 10,
                }}>
                    <Space>
                        <Popover content={<div>表情</div>} title="表情">
                            <Button>😀</Button>
                        </Popover>
                        <Button type="primary">评论</Button>
                    </Space>
                </Row>
                {
                    postData?.comments.map((comment: IComment) => (
                        <List
                            key={comment.id}
                            itemLayout="vertical"
                            size="large"
                            dataSource={postData?.comments}
                            renderItem={(item: IComment) => (
                                <List.Item
                                    key={item.id}
                                    actions={[
                                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.author.avatar}/>}
                                        title={item.author.username}
                                        description={item.content}
                                    />
                                </List.Item>
                            )}
                        />
                    ))
                }
            </Typography>
        </Layout>
    )
}

export default PostDetail;