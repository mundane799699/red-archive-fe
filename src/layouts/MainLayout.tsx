import React, { FC } from "react";
import {
  FEEDBACK_PATHNAME,
  TUTORIAL_PATHNAME,
  SCRIPT_TUTORIAL,
  MANAGE_PATHNAME,
  DOWNLOAD_PATHNAME,
  PRICE_PATHNAME,
  NOTION_TUTORIAL,
  IMAGE_HOST_TUTORIAL,
} from "../router";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Dropdown, Flex, Layout, MenuProps, Space, Typography } from "antd";
import styles from "./MainLayout.module.scss";
import Logo from "../components/Logo";
import { DownOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  const nav = useNavigate();
  const scriptItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={SCRIPT_TUTORIAL}>使用教程</Link>,
    },
    {
      key: "2",
      label: (
        <a
          href="https://greasyfork.org/zh-CN/scripts/464664-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E8%BD%AC%E5%8F%91"
          target="_blank"
        >
          油猴脚本下载
        </a>
      ),
    },
    {
      key: "3",
      label: <Link to={MANAGE_PATHNAME}>数据管理页</Link>,
    },
    {
      key: "4",
      label: <Link to={FEEDBACK_PATHNAME}>问题反馈</Link>,
    },
  ];
  const tutorialItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={TUTORIAL_PATHNAME}>使用说明</Link>,
    },
    {
      key: "2",
      label: <Link to={NOTION_TUTORIAL}>Notion集成</Link>,
    },
    {
      key: "3",
      label: <Link to={IMAGE_HOST_TUTORIAL}>图床设置</Link>,
    },
    {
      key: "4",
      label: (
        <a href="https://support.qq.com/products/651950" target="_blank">
          问题反馈
        </a>
      ),
    },
    {
      key: "5",
      label: <Link to={FEEDBACK_PATHNAME}>联系我</Link>,
    },
  ];
  return (
    <Layout>
      <header className={styles.header}>
        <Flex justify="space-between" className={styles.container}>
          <Logo />
          <Space>
            <Button onClick={() => nav(DOWNLOAD_PATHNAME)}>📦下载</Button>
            <Button onClick={() => nav(PRICE_PATHNAME)}>💰价格</Button>
            <Dropdown menu={{ items: tutorialItems }} placement="bottomLeft">
              <Button>
                📜教程
                <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown menu={{ items: scriptItems }} placement="bottomLeft">
              <Button>
                🐒油猴脚本(免费)
                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Flex>
      </header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
    </Layout>
  );
};
export default MainLayout;
