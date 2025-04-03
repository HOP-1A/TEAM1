"use client";

import { Truck } from "lucide-react";
import { Heart } from "lucide-react";
import { Share2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Page = () => {
  const productImgs = [
    "https://s.yimg.com/ny/api/res/1.2/vv7kmbot.cpkenRagWepCg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/footwear_news_642/14146f13e8fbc25d2f1b5f2e7a752d52",
    "https://lspersonalshopper.co.uk/cdn/shop/products/IMG_6768_1200x.jpg?v=1633891743",
    "https://pimpkicks.com.ph/cdn/shop/products/NikeDunkLowWhiteBlackMen_s_1024x1024.jpg?v=1618734774",
  ];

  const [selectProductImg, setSelectedProductImg] = useState(productImgs[0]);

  return (
    <div className="w-screen flex justify-center mt-52">
      <div className="w-[1200px] font-medium font-sans ">
        <div className="flex justify-between border-b-2 pb-5 mb-6 text-sm">
          <div className="">Нийтэлсэн огноо:2025/02/11 12:16</div>
          <div className="flex">
            <div className="flex">
              <Heart className="w-[18px]" />
              <div className="mr-4 pl-1">Хадгалах</div>
            </div>
            <div className="flex">
              <Share2 className="w-[18px]" />
              <div className="pl-1">Хуваалцах</div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-[700px] pr-6">
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    className="w-[660px] h-full"
                    src={selectProductImg}
                    alt="uploaded"
                    onClick={() => setSelectedProductImg(selectProductImg)}
                  />
                </DialogTrigger>
                <DialogContent className="p-0 max-w-2xl bg-opacity-0 border-none">
                  <DialogTitle className="text-white"></DialogTitle>
                  <img
                    src={selectProductImg}
                    alt="preview"
                    className="w-full h-auto "
                  />
                </DialogContent>
              </Dialog>
            </div>

            <div className="w-[150px] h-[90px] mt-6 flex gap-3 mb-10 duration-300 ease-in-out">
              {productImgs.map((productImg, i) => {
                return (
                  <img
                    key={i}
                    className="border-white hover:border-rose-500 border-2"
                    src={productImg}
                    alt=""
                    onClick={() => setSelectedProductImg(productImg)}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-[500px] pl-6">
            <div className="bg-rose-200 w-20 text-lg flex justify-center items-center rounded-l-sm mb-3 rounded-r-full">
              Шинэ
            </div>
            <div className="text-4xl mb-3">Nike dunk low white/black </div>
            <div className="text-4xl mb-7">369,000 ₮</div>

            <div className="flex gap-2">
              <div className="flex justify-center items-center rounded-lg w-[245px] h-[50px] bg-sky-500 text-white text-lg font-bold cursor-pointer hover:shadow-xl hover:bg-sky-400">
                Сагслах
              </div>

              <div className="flex justify-center items-center w-[245px] h-[50px] rounded-lg bg-rose-500 text-white text-lg font-bold cursor-pointer hover:shadow-xl hover:bg-rose-400">
                Худалдан авах
              </div>
            </div>

            <div className="text-2xl mb-3 mt-5">Хүргэлттэй</div>
            <div className="flex items-center w-[478px] h-[70px] bg-gray-200 rounded-xl pl-8 gap-2 cursor-pointer">
              <div className="flex justify-center items-center rounded-3xl w-9 h-9 bg-white">
                <Truck className="w-5" />
              </div>
              <div>Хүргэлттэй</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
