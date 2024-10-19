import { FC } from "react";
import styles from "./NotionTutorial.module.scss";
import { Image, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const NotionTutorial: FC = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <Title className={styles.mt}>如何集成Notion同步:</Title>
        <div className={`${styles.mt} ${styles.mb}`}>
          <Title level={2}>
            1、在
            <Link to="https://www.notion.so" target="_blank">
              Notion
            </Link>
            页面左上角点设置
          </Title>

          <Image src={"https://cdn.mundane.ink/202408281645825.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>2、点击"我的连接"，再点击"开发或管理集成"</Title>
          <Image src={"https://cdn.mundane.ink/202408281651553.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>3、创建新集成</Title>
          <Title level={3}>点击+号以创建新集成</Title>
          <Image src={"https://cdn.mundane.ink/202408281653266.png"} />
          <Title level={3}>集成名字建议填redArchive, 然后关联自己的工作空间，最后点保存</Title>
          <Image src={"https://cdn.mundane.ink/202408281657105.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>4、拷贝并设置集成秘钥</Title>
          <Title level={3}>点击拷贝</Title>
          <Image style={{ width: "100%" }} src={"https://cdn.mundane.ink/202408281710936.png"} />
          <Title level={3}>打开RedArchive的设置页面，粘贴到Secret key，然后保存</Title>
          <Image style={{ width: "100%" }} src={"https://cdn.mundane.ink/202408281716301.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>5、创建新页面</Title>
          <Title level={3}>回到Notion, 点击+号创建新页面</Title>
          <Image src={"https://cdn.mundane.ink/202408281724706.png"} />
          <Title level={3}>
            页面名字我一般取名为小红书收藏，图标链接我一般用https://www.xiaohongshu.com/favicon.ico。图标看个人，不设置也没关系。
          </Title>
          <Image src={"https://cdn.mundane.ink/202408281728483.png"} />
          <div className={styles.mb10} />
          <Image src={"https://cdn.mundane.ink/202408281730379.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>6、将页面关联集成</Title>
          <Title level={3}>点击页面左上角的三个小点，再选择连接，再选择之前创建的集成</Title>
          <Image style={{ width: "100%" }} src={"https://cdn.mundane.ink/202408281735733.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>7、拷贝并设置页面ID</Title>
          <Title level={3}>
            页面ID是一串由数字和字母组成的字符串。选中小红书收藏这个页面，在地址栏中拷贝notion.so/后面那串数字和字母
          </Title>
          <Title level={3} className={styles.text}>
            但是要注意，如果你的页面地址是类似“https://www.notion.so/RedArchive-65d1ff80c06b421fb47987021571bef3”这样的，那么页面ID就是65d1ff80c06b421fb47987021571bef3
          </Title>
          <Title level={3} className={styles.text}>
            示例1：复制页面ID
          </Title>
          <Image src={"https://cdn.mundane.ink/202408281743908.png"} />
          <Title level={3}>打开RedArchive的设置页面，粘贴到收藏同步页面ID，然后保存</Title>
          <Image src={"https://cdn.mundane.ink/202408281745202.png"} />
          <Title level={3} className={styles.mt30}>
            示例2：如果你的页面标题是英文，页面ID要取“你的英文标题-”后面那串
          </Title>
          <Image src={"https://cdn.mundane.ink/202409062006782.png"} />
          <Image className={styles.mt10} src={"https://cdn.mundane.ink/202409062008339.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>8、点赞同步和专辑同步同理</Title>
          <Title level={3}>点赞同步和专辑同步同理，设置页面集成的时候可以使用同一个集成</Title>
          <Image src={"https://cdn.mundane.ink/202408281747606.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>9、同步效果</Title>
          <Title level={3}>目前只是同步了图片链接和视频链接，不支持在线查看，后续再考虑</Title>
          <Image src={"https://cdn.mundane.ink/202408281804880.png"} />
        </div>
      </div>
    </div>
  );
};
export default NotionTutorial;
