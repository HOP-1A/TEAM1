import { ChevronRight } from "lucide-react";
export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[53vw] h-[100vh] flex-col">
        <div className=" w-[53vw] h-[5vh] mt-[14.8vh] text-[25px] font-medium font-[700] font-black text-gray-900">
          Бараа, бүтээгдэхүүн <span className="text-gray-400">27783</span>
        </div>
        <div className="w-[12vw] h-[50vh] mt-[1vh] border-t-[1px] ">
          <div className="mt-[1.4vh] flex flex-col gap-[20px] text-[15px]">
            <div className="flex flex-row">
              <ChevronRight />
              <span>Эмэгтэй</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Эрэгтэй</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Гоёл чимэглэл</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Витамин</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Үнэртэн</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Утас</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Гоо сайхан</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Нүүр будалт</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Чихэвч</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Зөөврийн компьютер</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Цахилгаан бараа</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Гэр ахуй Tавилга</span>
            </div>
            <div className="flex flex-row">
              <ChevronRight />
              <span>Хүүхдийн хувцас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
