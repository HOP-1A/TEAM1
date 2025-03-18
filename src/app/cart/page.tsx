import NavBar from "@/components/ui/navigationBar/NavBar";
import { X } from "lucide-react";

const Page = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[1200px] font-medium font-sans mt-40">
        <div className="text-3xl font-bold ml-10">Сагс</div>

        <div className="flex mt-10 ml-20 w-[600px] h-[100px] border-2 justify-between">
          <div className="flex">
            <img
              className="h-[96px] mr-3"
              src="https://s.yimg.com/ny/api/res/1.2/vv7kmbot.cpkenRagWepCg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/footwear_news_642/14146f13e8fbc25d2f1b5f2e7a752d52"
              alt=""
            />

            <div>
              <div className="text-xl mb-3 w-[350px] truncate">
                Nike dunk low white/black
              </div>
              <div className="text-xl mb-7">369,000 ₮</div>
            </div>
          </div>

          <button className="flex items-start m-1">
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
