import { FC } from "react";
import styles from "./Price.module.scss";
import { Typography } from "antd";
const { Title, Paragraph, Link } = Typography;

const Price: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title>定价计划</Title>
        <div className={styles.priceList}>
          <div className={styles.priceCard}>
            <p>月度会员</p>
            <p>
              <span className={styles["price-discount"]}>¥6.9</span>
              <span className={styles["original-price"]}>¥9.9</span>
            </p>
          </div>
          <div className={styles.priceCard}>
            <p>年度会员</p>
            <p>
              <span className={styles["price-discount"]}>¥38</span>
              <span className={styles["original-price"]}>¥69</span>
            </p>
          </div>
          <div className={styles.priceCard}>
            <p>终生会员</p>
            <p>
              <span className={styles["price-discount"]}>¥198</span>
              <span className={styles["original-price"]}>¥298</span>
            </p>
          </div>
        </div>
        <Title style={{ marginTop: 100 }}>为什么要收费？</Title>
        <div>
          <Paragraph className={styles.info}>
            开发软件和其他任何脑力或体力的工作一样，投入了大量的时间和精力，为爱发电的形式很难保证提供持续且好用的服务。
          </Paragraph>
          <Paragraph className={styles.info}>
            并且随着软件的更新，功能会更加完善，价格也会随之上涨。
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
export default Price;
