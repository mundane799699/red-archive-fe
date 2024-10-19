import { Typography, Image, Space, Button, Popover } from "antd";
import React, { FC } from "react";
import styles from "./Feedback.module.scss";
import xhsSvgIcon from "../assets/xhs.svg";
import { BilibiliFilled, GithubOutlined, WechatOutlined, XOutlined } from "@ant-design/icons";

const { Title, Paragraph, Link } = Typography;

const content = <Image width={400} src={"https://cdn.mundane.ink/202402032206594.png"} />;
const Feedback: FC = () => {
  return (
    <div className={styles.container}>
      <Title>有问题欢迎向我反馈</Title>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Title level={3}>微信: zflyoung(请备注RedArchive)</Title>
        <Title level={3}>邮箱: 799699348@qq.com</Title>
        <Space>
          <Popover content={content}>
            <WechatOutlined style={{ fontSize: "30px", color: "#2AAE67" }} />
          </Popover>
          <Link href="https://space.bilibili.com/3382088" target="_blank">
            <BilibiliFilled style={{ fontSize: "30px", color: "#FB7299" }} />
          </Link>
          <Link href="https://github.com/mundane799699" target="_blank">
            <GithubOutlined style={{ fontSize: "30px", color: "#000000" }} />
          </Link>
          <Link href="https://x.com/mundane799699" target="_blank">
            <XOutlined style={{ fontSize: "30px", color: "#000000" }} />
          </Link>
          <Link
            href="https://www.xiaohongshu.com/user/profile/5f827ea10000000001007b5b"
            target="_blank"
          >
            <img src={xhsSvgIcon} alt="xhs logo" style={{ width: "30px" }} />
          </Link>
        </Space>
      </Space>
    </div>
  );
};
export default Feedback;
