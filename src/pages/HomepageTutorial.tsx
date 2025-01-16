const HomepageTutorial = () => {
  return (
    <div className="h-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1]">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">主页批量使用教程:</h1>

        <h2 className="text-xl font-bold">1、点击登录小红书</h2>
        <img
          className="w-full"
          src="https://cdn.mundane.ink/202501162155829.png"
          alt="点击登录小红书"
        />

        <h2 className="text-xl font-bold">
          2、在发现页面或者关注页面，点击某个博主，进入博主主页
        </h2>
        <img
          className="w-full"
          src="https://cdn.mundane.ink/202501162157364.png"
          alt="进入博主主页"
        />

        <h2 className="text-xl font-bold">
          3、右上角会显示采集数量，点击“自动滚动”按钮，开始自动滚动，并采集笔记。
        </h2>
        <img
          className="w-full"
          src="https://cdn.mundane.ink/202501162158767.png"
          alt="自动滚动按钮示意图"
        />

        <h2 className="text-xl font-bold">
          4、滚动完成或者采集完成以后，在左侧菜单点击小红书 -
          主页批量，查看采集的数据。接下来可以对笔记进行下载操作。
        </h2>
        <img
          className="w-full"
          src="https://cdn.mundane.ink/202501162159720.png"
          alt="主页批量页面示意图"
        />
      </div>
    </div>
  );
};

export default HomepageTutorial;
