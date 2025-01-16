import { FC } from "react";
import { Flex, Image, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Tutorial: FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1]">
      <Flex
        vertical={true}
        gap={"small"}
        className="container mx-auto px-4 py-8"
      >
        <Title>使用教程:</Title>
        <Title level={2}>
          1、在
          <Link to="/download" target="_blank">
            下载页面
          </Link>
          下载安装包，并安装
        </Title>

        <Title level={2}>
          2、打开应用，进入收藏页面，里面有购买选项，购买以后即可解锁使用权限
        </Title>
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312112286.png"}
        />

        <Title level={2}>3、点击首页的登录小红书按钮，登录小红书</Title>
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312114017.png"}
        />

        <Title level={2}>
          4、打开小红书收藏，点击"自动滚动"按钮，页面会自行滚动，滚动时会收集你的收藏数据
        </Title>
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312122689.png"}
        />

        <Title level={2}>5、在滚动时可以再次点击按钮停止滚动</Title>
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312124146.png"}
        />

        <Title level={2}>
          6、滚动完成以后关闭窗口，打开收藏页面。这时候笔记数据还缺少详情数据，需要点击"开始自动下载"按钮。
          应用会自动逐个下载笔记的详情以及图片、视频数据
        </Title>
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312126808.png"}
        />

        <Title level={2}>
          7、自动下载过程中如果需要取消自动下载，可以点击"停止自动下载"按钮
        </Title>
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312130844.png"}
        />

        <Title level={2}>
          8、下载完成后点击"打开保存目录"按钮，可以看到下载完成的数据，以markdown格式保存，以及图片和视频
        </Title>
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312134927.png"}
        />

        <Title level={2}>
          9、点击"下载excel"按钮，可以将数据以excel表格形式导出，同样可以在保存目录中查看
        </Title>
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312138476.png"}
        />
        <Image
          style={{ width: "100%" }}
          src={"https://cdn.mundane.ink/202405312139247.png"}
        />
      </Flex>
    </div>
  );
};
export default Tutorial;
