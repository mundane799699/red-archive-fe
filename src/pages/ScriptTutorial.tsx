import { Typography, Image } from "antd";
import { FC } from "react";

const { Title, Link } = Typography;
const ScriptTutorial: FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1]">
      <div className="flex flex-col container mx-auto px-4 py-8">
        <div className="w-full">
          <Title>1、打开chrome或者edge浏览器, 下载篡改猴插件</Title>
          <Image
            className="w-full"
            src={"https://cdn.mundane.ink/202403272059036.png"}
          />
        </div>
        <div className="mb-4 w-full">
          <Title>
            2、下载安装油猴脚本:
            <Link
              className="text-3xl"
              href="https://greasyfork.org/zh-CN/scripts/464664-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E8%BD%AC%E5%8F%91"
            >
              小红书转发
            </Link>
          </Title>
          <Image
            className="w-full"
            src={"https://cdn.mundane.ink/202403272108495.png"}
          />
        </div>
        <div className="mb-4">
          <Title>3、打开小红书网页版, 切换至收藏tab</Title>
          <Title level={3}>
            右上角如果出现图中所示的两个按钮, 说明小红书转发脚本已生效
          </Title>
          <Image
            className="w-full"
            src={"https://cdn.mundane.ink/202403272130053.png"}
          />
        </div>
        <div className="mb-4">
          <Title>4、点击自动滚动按钮</Title>
          <Title level={3}>
            点击自动滚动按钮后,
            页面会自动往下滚动。页面在加载收藏数据的时候油猴脚本会自动将收藏数据转发到服务器
          </Title>
          <Image
            className="w-full"
            src={"https://cdn.mundane.ink/202403272134315.png"}
          />
        </div>
        <div className="mb-4">
          <Title>5、等待滚动完成</Title>
          <Title level={3}>
            等滚动到页面最底部或者出现图中所示的提示框以后,
            所有收藏数据已转发完成
          </Title>
          <Image
            className="w-full"
            src={"https://cdn.mundane.ink/202403272139223.png"}
          />
        </div>
        <div className="mb-4">
          <Title>6、点击去下载按钮</Title>
          <Title level={3}>
            点击"去下载"按钮后, 页面会自动跳转至小红书收藏导出网站
          </Title>
          <Image src={"https://cdn.mundane.ink/202403272144051.png"} />
          <Title level={3}>
            或者复制地址栏中的userId, 然后手动转到xhs.mundane.ink
          </Title>
          <Title level={3}>
            如图中5f827ea10000000001007b5b就是我的userId, 这个很重要
          </Title>
          <Image src={"https://cdn.mundane.ink/202403272147026.png"} />
        </div>
        <div className="mb-4">
          <Title>7、采集详情</Title>
          <Title level={3}>
            在收藏这个tab, 输入userId, 然后点击搜索,
            可以看到收藏数据。但请注意这时候收藏数据还没有笔记详情
          </Title>
          <Title level={3}>
            接着点击"采集详情"按钮开始采集笔记详情。你可以点击"查询采集进度"按钮来查看进度。
          </Title>
          <Image
            className="w-full"
            src={"https://cdn.mundane.ink/202403272152824.png"}
          />
        </div>
        <div className="mb-4">
          <Title>8、等待采集完成</Title>
          <Title level={3}>
            当查询到采集完成后, 重新点击搜索按钮,
            可以看到所有收藏笔记的笔记内容都出来了。说明笔记详情已采集完毕。
          </Title>
          <Image
            className="w-full"
            src={"https://cdn.mundane.ink/202403272207566.png"}
          />
        </div>
        <div className="mb-4">
          <Title>9、点赞数据的导出</Title>
          <Title level={3}>过程和收藏数据导出类似</Title>
        </div>
        <div className="mb-4">
          <Title>10、如果遇到问题</Title>
          <Title level={3}>
            服务正在完善中, 遇到意外问题可以刷新网页重试, 或者联系我
          </Title>
        </div>
      </div>
    </div>
  );
};
export default ScriptTutorial;
