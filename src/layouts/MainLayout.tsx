import React, { FC, useState } from "react";
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
import {
  Button,
  Dropdown,
  Flex,
  Layout,
  MenuProps,
  Space,
  Typography,
} from "antd";
import Logo from "../components/Logo";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

const MainLayout: FC = () => {
  const nav = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-4">
            <button
              onClick={() => nav(DOWNLOAD_PATHNAME)}
              className="btn border border-gray-300 rounded-md px-2 py-1"
            >
              📦下载
            </button>
            <button
              onClick={() => nav(PRICE_PATHNAME)}
              className="btn border border-gray-300 rounded-md px-2 py-1"
            >
              💰价格
            </button>
            <Dropdown menu={{ items: tutorialItems }} placement="bottomLeft">
              <button className="btn border border-gray-300 rounded-md px-2 py-1">
                📜教程
                <DownOutlined className="ml-1" />
              </button>
            </Dropdown>
            <Dropdown menu={{ items: scriptItems }} placement="bottomLeft">
              <button className="btn border border-gray-300 rounded-md px-2 py-1">
                🐒油猴脚本(免费)
                <DownOutlined className="ml-1" />
              </button>
            </Dropdown>
          </nav>
          <button
            className="md:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <MenuOutlined />
          </button>
        </div>
        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => nav(DOWNLOAD_PATHNAME)}
                className="btn w-full text-left"
              >
                📦下载
              </button>
              <button
                onClick={() => nav(PRICE_PATHNAME)}
                className="btn w-full text-left"
              >
                💰价格
              </button>
              <Dropdown
                menu={{ items: tutorialItems }}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <button className="btn w-full text-left flex justify-between items-center">
                  📜教程
                  <DownOutlined />
                </button>
              </Dropdown>
              <Dropdown
                menu={{ items: scriptItems }}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <button className="btn w-full text-left flex justify-between items-center">
                  🐒油猴脚本(免费)
                  <DownOutlined />
                </button>
              </Dropdown>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
