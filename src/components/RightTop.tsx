import React, { FC } from "react";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import styles from "./RightTop.module.scss";
import { FEEDBACK_PATHNAME, TUTORIAL_PATHNAME } from "../router";
const { Title } = Typography;

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Link to={FEEDBACK_PATHNAME}>
        <Space>
          <Title>问题反馈</Title>
        </Space>
      </Link>
      <Link to={TUTORIAL_PATHNAME} className={styles.tutorial}>
        <Space>
          <Title>使用教程</Title>
        </Space>
      </Link>
    </div>
  );
};
export default Logo;
