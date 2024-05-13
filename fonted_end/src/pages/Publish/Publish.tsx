import {Layout, Input, Button, Divider} from 'antd';
import TextArea from "antd/lib/input/TextArea";
import React, {useState} from "react";
import {Footer} from "antd/lib/layout/layout";
import styles from "./Publish.module.css"
import {PostConstants} from "../../constants/Post.ts";

const PublishArticlePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    return (
        <Layout className={styles.layout}>
            <div className={styles.publishContainer}>
                <Input
                    className={styles.titleInput}
                    placeholder="Enter title here"
                    value={title}
                    onChange={handleTitleChange}
                    maxLength={PostConstants.titleMaxLength}
                    showCount={true}
                    variant={"borderless"}
                />
                <Divider/>
                <TextArea
                    className={styles.contentInput}
                    placeholder="Enter content here"
                    value={content}
                    onChange={handleContentChange}
                    variant={"borderless"}
                    maxLength={PostConstants.contentMaxLength}
                    autoSize={true}
                />
            </div>
            <Footer className={styles.foot}>
                <div className={styles.footContainer}>
                    <div
                        className={styles.contentNumberInfo}>正文字数: {content.length}/{PostConstants.contentMaxLength}</div>
                    <Button type={"primary"}>发布</Button>
                </div>
            </Footer>
        </Layout>
    );
};

export default PublishArticlePage;