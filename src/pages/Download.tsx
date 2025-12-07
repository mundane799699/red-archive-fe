import { FC } from "react";
import { Card, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Link } = Typography;

const Download = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-around md:space-y-0 md:space-x-4">
          <DownloadCard
            title="Windows"
            href="https://cdn.dreamfree.xyz/updater/RedArchive-Windows-1.8.4-Setup.exe"
          />
          <DownloadCard
            title="Mac Intel芯片"
            href="https://cdn.dreamfree.xyz/updater/RedArchive-Mac-x64-1.8.4-Installer.dmg"
          />
          <DownloadCard
            title="Mac M芯片"
            href="https://cdn.dreamfree.xyz/updater/RedArchive-Mac-arm64-1.8.4-Installer.dmg"
          />
        </div>
      </div>
    </div>
  );
};

interface DownloadCardProps {
  title: string;
  href: string;
}

const DownloadCard: FC<DownloadCardProps> = ({ title, href }) => (
  <Card title={title} className="w-full md:w-72 text-center">
    <Link href={href} target="_blank">
      <DownloadOutlined className="text-3xl text-black" />
    </Link>
  </Card>
);

export default Download;
