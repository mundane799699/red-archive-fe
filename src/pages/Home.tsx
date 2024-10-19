import React, { FC } from "react";
import { Button, Typography, Image, Flex, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { MANAGE_PATHNAME } from "../router";
import styles from "./Home.module.scss";

const { Title, Paragraph, Link } = Typography;

const Home: FC = () => {
  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>
          RedArchive是一款能够将你的小红书收藏、点赞导出的PC端工具，支持windows和mac，支持live图下载
        </Title>
        <div>
          <Image
            style={{ width: "100%" }}
            src={"https://cdn.mundane.ink/202405311503384.png"}
          />
        </div>
        <Flex gap={10}>
          <Image
            style={{ width: "100%" }}
            src={"https://cdn.mundane.ink/202405311503389.png"}
          />
          <Image
            style={{ width: "100%" }}
            src={"https://cdn.mundane.ink/202405311503392.png"}
          />
        </Flex>
        <div className={styles["home-block"]}>
          <Title>下载文件在typora中打开：</Title>
          <Image
            style={{ width: "100%" }}
            src={"https://cdn.mundane.ink/202405311503388.png"}
          />
        </div>
        <div className={styles["home-block"]}>
          <Title>下载文件在obsidian中打开（支持视频播放）：</Title>
          <Image
            style={{ width: "100%" }}
            src={"https://cdn.mundane.ink/202405311503387.png"}
          />
        </div>
        <div className={styles["home-block"]}>
          <Title>文件下载目录：</Title>
          <Image
            style={{ width: "100%" }}
            src={"https://cdn.mundane.ink/202405311503386.png"}
          />
        </div>
        <div className={styles["home-block"]}>
          <Title>Excel文件导出：</Title>
          <Image
            style={{ width: "100%" }}
            src={"https://cdn.mundane.ink/202405311503391.png"}
          />
        </div>
      </div>
      <footer className={styles.footer}>
        <Space>
          <a href="https://beian.miit.gov.cn/" target="_blank">
            浙ICP备2023005735号-1
          </a>
          <span className={styles.divider}> | </span>
          <a href="https://toolsapp.cc/" target="_blank">
            toolsapp
          </a>
          <span className={styles.divider}> | </span>
          <a href="https://javaqahub.cc/" target="_blank">
            javaqahub
          </a>
        </Space>
      </footer>
    </div>
  );
};
export default Home;
