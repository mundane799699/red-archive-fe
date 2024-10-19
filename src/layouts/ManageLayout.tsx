import React, { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Space, message } from "antd";

import styles from "./ManageLayout.module.scss";
import { BarsOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type={pathname.startsWith("/manage/my") ? "default" : "text"}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav("/manage/my")}
          >
            笔记
          </Button>
          <Button
            type={pathname.startsWith("/manage/collect") ? "default" : "text"}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav("/manage/collect")}
          >
            收藏
          </Button>
          <Button
            type={pathname.startsWith("/manage/like") ? "default" : "text"}
            size="large"
            icon={<LikeOutlined />}
            onClick={() => nav("/manage/like")}
          >
            点赞
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};
export default ManageLayout;
