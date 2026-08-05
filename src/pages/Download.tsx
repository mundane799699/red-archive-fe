import { FC } from "react";
import { Card, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Link } = Typography;

const version = "2.3.1";

const Download = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0 md:space-x-4">
          <DownloadCard
            title="Windows"
            href={`https://cdn.dreamfree.xyz/updater/RedArchive-Windows-${version}-Setup.exe`}
          />
          <DownloadCard
            title="Mac Intel芯片"
            href={`https://cdn.dreamfree.xyz/updater/RedArchive-Mac-x64-${version}-Installer.dmg`}
          />
          <DownloadCard
            title="Mac M芯片"
            href={`https://cdn.dreamfree.xyz/updater/RedArchive-Mac-arm64-${version}-Installer.dmg`}
          />
        </div>

        <div className="mt-8">
          <Card className="w-full text-center">
            <div className="flex  flex-col items-center justify-center gap-2">
              <Link
                href="https://pan.baidu.com/s/1cZlmErS475elwu7kqWV7AQ?pwd=8888"
                target="_blank"
              >
                <div className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#ee9ca7] text-white hover:shadow-md transition-shadow">
                  <DownloadOutlined />
                  <span>网盘下载(百度网盘)</span>
                </div>
              </Link>
              <span>提取码: 8888</span>
            </div>
          </Card>
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
