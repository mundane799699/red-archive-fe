import { FC } from "react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const Price: FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1]">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <Title className="text-center">定价计划</Title>
        <div className="mt-12 w-full flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-4">
          <PriceCard
            title="月度会员"
            discountPrice="¥6.9"
            originalPrice="¥9.9"
          />
          <PriceCard title="年度会员" discountPrice="¥38" originalPrice="¥69" />
          <PriceCard
            title="终生会员"
            discountPrice="¥198"
            originalPrice="¥298"
          />
        </div>
        <Title className="mt-24 text-center">为什么要收费？</Title>
        <div className="mt-4 max-w-2xl">
          <Paragraph className="text-base">
            开发软件和其他任何脑力或体力的工作一样，投入了大量的时间和精力，为爱发电的形式很难保证提供持续且好用的服务。并且随着软件的更新，功能会更加完善，价格也会随之上涨。
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

interface PriceCardProps {
  title: string;
  discountPrice: string;
  originalPrice: string;
}

const PriceCard: FC<PriceCardProps> = ({
  title,
  discountPrice,
  originalPrice,
}) => (
  <div className="flex flex-col items-center justify-center w-full md:w-64 h-48 bg-white rounded-lg shadow-md">
    <p className="text-2xl font-bold">{title}</p>
    <p>
      <span className="text-2xl font-bold text-orange-500">
        {discountPrice}
      </span>
      <span className="ml-2 text-lg text-gray-600 line-through">
        {originalPrice}
      </span>
    </p>
  </div>
);

export default Price;
