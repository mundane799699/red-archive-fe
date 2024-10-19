import React, { FC } from "react";
import styles from "./ImageHostTutorial.module.scss";
import { Flex, Image, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const ImageHostTutorial: FC = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <Title className={styles.mt}>如何设置sm.ms图床:</Title>
        <div className={`${styles.mt} ${styles.mb}`}>
          <Title level={2}>1、访问https://sm.ms或者https://smms.app</Title>
          <Title level={3}>用邮箱注册账号，然后登录</Title>
          <Image src={"https://cdn.mundane.ink/202409272252485.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>2、登录以后点击"User"，再点击"Dashboard"</Title>
          <Image src={"https://cdn.mundane.ink/202409272255670.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>3、点击API Token，将Secret Token复制出来</Title>
          <Image src={"https://cdn.mundane.ink/202409272259163.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>4、将Secret Token粘贴到设置页面，然后保存</Title>
          <Image src={"https://cdn.mundane.ink/202409272306272.png"} />
        </div>

        <div className={styles.mb}>
          <Title level={2}>5、sm.ms有免费5G的存储空间。如果用完了可以再注册一个号</Title>
          <Title level={3}>将Secret Token换成新账号的Secret Token</Title>
        </div>

        <div className={styles.mb}>
          <Title level={2}>6、目前只支持了这个图床，其他图床后续再考虑</Title>
        </div>
      </div>
    </div>
  );
};
export default ImageHostTutorial;
