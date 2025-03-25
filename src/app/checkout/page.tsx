const Page = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex w-[1200px] font-medium font-sans gap-3 mt-60">
        <div>
          <div className="text-xl">Миний сагс</div>
          <div className="flex w-[800px] h-40 mt-5 border-2 border-gray-200 rounded-xl p-2 gap-3 justify-between">
            <div className="flex">
              <img
                className="h-32"
                src="https://s.yimg.com/ny/api/res/1.2/vv7kmbot.cpkenRagWepCg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/footwear_news_642/14146f13e8fbc25d2f1b5f2e7a752d52"
                alt=""
              />
              <div className="text-lg">Nike dunk low white/black</div>
            </div>
            <div className="text-xl">369,000 ₮</div>
          </div>
        </div>

        <div>
          <div className="text-lg">Төлбөрийн мэдээлэл</div>
          <div className=" w-[388px] h-auto mt-5 border-2 border-gray-200 rounded-xl p-3 justify-between text-sm">
            <div className="border-b-2 border-dashed w-full h-10">
              Бүтээгдэхүүн
            </div>

            <div className="flex flex-wrap border-dashed w-full mt-[15px] justify-between">
              <div className="w-40 truncate">Nike dunk low white/black</div>
              <div>369,000 ₮</div>
            </div>

            <div className="flex w-full mt-[15px] mb-[7px] justify-between border-t-2 border-dashed">
              <div className="mt-3">Нийт төлөх дүн</div>
              <div className="mt-3">369,000 ₮</div>
            </div>
          </div>
          <button className="w-[388px] h-14 bg-gray-100 rounded-xl mt-4">
            Төлбөрийн нөхцөл сонгох
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
