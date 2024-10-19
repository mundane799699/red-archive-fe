import { FC } from "react";
import styles from "./Download.module.scss";
import { Card, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Link } = Typography;

const Download: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles["btn-container"]}>
          <Card title="Windows" style={{ width: 300, textAlign: "center" }}>
            <Link
              href="https://cdn.dreamfree.xyz/updater/RedArchive-Windows-1.5.0-Setup.exe"
              target="_blank"
            >
              <DownloadOutlined
                style={{ fontSize: "30px", color: "#000000" }}
              />
            </Link>
          </Card>
          <Card
            title="Mac Intel芯片"
            style={{ width: 300, textAlign: "center" }}
          >
            <Link
              href="https://cdn.dreamfree.xyz/updater/RedArchive-Mac-x64-1.5.0-Installer.dmg"
              target="_blank"
            >
              <DownloadOutlined
                style={{ fontSize: "30px", color: "#000000" }}
              />
            </Link>
          </Card>
          <Card title="Mac M芯片" style={{ width: 300, textAlign: "center" }}>
            <Link
              href="https://cdn.dreamfree.xyz/updater/RedArchive-Mac-arm64-1.5.0-Installer.dmg"
              target="_blank"
            >
              <DownloadOutlined
                style={{ fontSize: "30px", color: "#000000" }}
              />
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Download;
