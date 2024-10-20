import { FC } from "react";
import { Image } from "antd";

const Home: FC = () => {
  return (
    <div className="bg-gradient-to-br from-rose-300 to-pink-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-center">
          RedArchive是一款能够将你的小红书收藏、点赞导出的PC端工具，支持windows和mac，支持live图下载
        </h1>
        <div className="mb-8">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={"https://cdn.mundane.ink/202405311503384.png"}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={"https://cdn.mundane.ink/202405311503389.png"}
          />
          <Image
            className="w-full rounded-lg shadow-lg"
            src={"https://cdn.mundane.ink/202405311503392.png"}
          />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            下载文件在typora中打开：
          </h2>
          <Image
            className="w-full rounded-lg shadow-lg"
            src={"https://cdn.mundane.ink/202405311503388.png"}
          />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            下载文件在obsidian中打开（支持视频播放）：
          </h2>
          <Image
            className="w-full rounded-lg shadow-lg"
            src={"https://cdn.mundane.ink/202405311503387.png"}
          />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            文件下载目录：
          </h2>
          <Image
            className="w-full rounded-lg shadow-lg"
            src={"https://cdn.mundane.ink/202405311503386.png"}
          />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Excel文件导出：
          </h2>
          <Image
            className="w-full rounded-lg shadow-lg"
            src={"https://cdn.mundane.ink/202405311503391.png"}
          />
        </div>
      </div>
      <footer className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="mb-2 flex flex-col items-center md:flex-row md:items-center">
            <span className="text-gray-600 mb-2 md:mb-0 md:mr-2">
              友情链接:
            </span>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="https://toolsapp.cc/"
                className="text-gray-600 hover:underline mb-2 md:mb-0 md:mr-2"
              >
                toolsapp
              </a>
              <a
                href="https://javaqahub.cc/"
                className="text-gray-600 hover:underline mb-2 md:mb-0 md:mr-2"
              >
                javaqahub
              </a>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            <div className="flex flex-col items-center">
              <span>
                © {new Date().getFullYear()} RedArchive All Rights Reserved
              </span>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                浙ICP备2023005735号
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
