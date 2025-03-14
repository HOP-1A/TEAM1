import { prisma } from "@/lib/prisma";
import { Truck } from "lucide-react";
import { Heart } from "lucide-react";
import { Share2 } from "lucide-react";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Page = async () => {
  const categories = await prisma.category.findMany();
  console.log(categories);
  const productImgs = [
    "https://s.yimg.com/ny/api/res/1.2/vv7kmbot.cpkenRagWepCg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/footwear_news_642/14146f13e8fbc25d2f1b5f2e7a752d52",
    "https://lspersonalshopper.co.uk/cdn/shop/products/IMG_6768_1200x.jpg?v=1633891743",
    "https://pimpkicks.com.ph/cdn/shop/products/NikeDunkLowWhiteBlackMen_s_1024x1024.jpg?v=1618734774",
  ];

  const [selectProductImg, setSelectedProductImg] = useState(productImgs[0]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [number, setNumber] = useState(1);

  const pluss = () => {
    if (number == selectedCategory) {
    } else {
      const plus = number + 1;
      setNumber(plus);
    }
  };

  const miness = () => {
    if (number == 1) {
    } else {
      const mines = number - 1;
      setNumber(mines);
    }
  };

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
              <img className="w-[660px] h-full" src={selectProductImg} alt="" />
            </div>

            <div className="w-[150px] h-[90px] mt-6 flex gap-3 mb-10 duration-300 ease-in-out">
              {productImgs.map((productImg, i) => {
                return (
                  <img
                    key={i}
                    className="border-white hover:border-rose-500 border-2"
                    src={productImg}
                    alt=""
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

            <div className="mb-7">
              <div className="mb-2">Гутлын размер:</div>

              <div className="flex">
                <ToggleGroup type="single" className="space-x-2">
                  <ToggleGroupItem
                    className="bg-gray-200 hover:bg-rose-500 hover:text-white"
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedCategory("10");
                      setNumber(1);
                    }}
                    value="bold"
                    aria-label="Toggle bold"
                  >
                    <button>40</button>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className="bg-gray-200 hover:bg-rose-500 hover:text-white"
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedCategory("4");
                      setNumber(1);
                    }}
                    value="italic"
                    aria-label="Toggle italic"
                  >
                    <button>41</button>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className="bg-gray-200 hover:bg-rose-500 hover:text-white"
                    value="strikethrough"
                    aria-label="Toggle strikethrough"
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedCategory("3");
                      setNumber(1);
                    }}
                  >
                    <button>42</button>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            {selectedCategory === "" ? null : (
              <div>
                <div>
                  <div>Тоо ширхэг</div>

                  <div className="flex gap-3">
                    <button
                      className="w-7 h-7 bg-gray-200 rounded-md"
                      onClick={() => miness()}
                    >
                      -
                    </button>
                    <div>{number}</div>
                    <button
                      className="w-7 h-7 bg-gray-200 rounded-md"
                      onClick={() => pluss()}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex text-sm">
                    <div>Боломжит үлдэгдэл: </div>
                    <div className="flex gap-3">{selectedCategory}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="text-2xl mb-3 mt-5">Хүргэлттэй</div>
            <div className="flex items-center w-[500px] h-[70px] bg-gray-200 rounded-xl pl-8 gap-2">
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
