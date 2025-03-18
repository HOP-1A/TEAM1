"use client";

import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const Product = () => {
  const router = useRouter();
  const redirect = () => {
    router.push(`products`);
  };
  return (
    <div className="w-screen flex justify-center ">
      <div className="w-[1200px]">
        <div className="flex justify-between mb-4">
          <div className="text-lg font-bold">Шинээр нэмэгдсэн бараа</div>
        </div>

        <div className="flex gap-x-10 gap-y-8 flex-wrap">
          <div
            className="w-52 h-72 outline outline-gray-300 rounded-xl hover:drop-shadow-md duration-300 ease-in"
            onClick={() => redirect()}
          >
            <div className="flex justify-center items-center border-b-2 h-[200px] border-gray-300 overflow-hidden rounded-t-xl">
              <img
                className="h-auto w-52 rounded-t-xl "
                src="https://s.yimg.com/ny/api/res/1.2/vv7kmbot.cpkenRagWepCg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/footwear_news_642/14146f13e8fbc25d2f1b5f2e7a752d52"
                alt=""
              />
            </div>

            <div className="mr-2 ml-2 font-medium">
              <div className="text-sm font-medium">Nike Adults Dunk</div>
              <div className="flex justify-between mt-8">
                <div className="font-semibold text-base">369,000 ₮</div>
                <Heart className="w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <div className="text-gray-600">Бүгдийг үзэх</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
