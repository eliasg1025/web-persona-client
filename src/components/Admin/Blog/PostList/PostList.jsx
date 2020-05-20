import React from "react";
import { List, Button, Modal, notification } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./PostList.scss";

const { confirm } = Modal;

export default function PostList({ posts }) {
    return (
        <div className="posts-list">
            <List
                dataSource={posts.docs}
                renderItem={(post) => <Post post={post} />}
            />
        </div>
    );
}

function Post({ post }) {
    return (
        <List.Item
            actions={[
                <Link
                    to={`/blog/${post.url}`}
                    target="_blank"
                >
                    <Button type="primary">
                        <EyeOutlined />
                    </Button>
                </Link>,
                <Button type="primary">
                    <EditOutlined />
                </Button>,
                <Button type="danger">
                    <DeleteOutlined />
                </Button>,
            ]}
        >
            <List.Item.Meta title={post.title}></List.Item.Meta>
        </List.Item>
    );
}