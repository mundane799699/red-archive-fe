import { FC } from "react";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import logo from "@/assets/img/logo.png";

const { Title } = Typography;

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Space align="center" className={styles["logo-container"]}>
          <img src={logo} className={styles.logo} alt="logo" />
          <Title level={3}>RedArchive</Title>
        </Space>
      </Link>
    </div>
  );
};
export default Logo;
