import React, { FC, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

import { BarsOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { ScrollContext } from "../contexts/ScrollContext";
const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const scrollableContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="mx-auto flex h-full">
      <div className="w-[120px] border-r border-gray-200">
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
      <div className="flex-1 px-4 overflow-y-auto" ref={scrollableContainerRef}>
        <ScrollContext.Provider value={scrollableContainerRef}>
          <Outlet />
        </ScrollContext.Provider>
      </div>
    </div>
  );
};
export default ManageLayout;
