import {
  ChevronDown,
  Instagram,
  Menu,
  MessagesSquare,
  Minus,
  Phone,
  Search,
} from "lucide-react";
import { Nunito } from "next/font/google";
 
const nunito = Nunito({ subsets: ["latin"], weight: ["500", "600", "700"] });
 
export default function Home() {
  return (
    <>
      <div id="headerDesktop" className="fixed w-full">
        <div
          id="tallerTallest"
          className={`${nunito.className} bg-rose-500 h-[28px]`}
        >
          <div
            id="tallerTallestInsideContainer"
            className="flex justify-between pt-[3px] max-w-[1200px] m-auto font-[500]"
          >
            <span className="text-white text-[14px] font-bold">
              Хүссэнээ зар, Хайснаа ол
            </span>
 
            <div id="divMenu" className="flex text-[12px]">
              <button
                id="menuPhone"
                className="flex items-center border-r-[1px] border-sky-100 leading-1 px-[20px]"
              >
                <Phone className="fill-white stroke-rose-500 w-[17px] h-[17px]" />
                <span className="pl-[12px] text-white">4444-4444</span>
              </button>
 
              <div className="flex text-white">
                <button className="ml-[20px]">
                  <Instagram className="h-[14px] w-[14px]" />
                </button>
                <button className="ml-[20px]">
                  <Instagram className="h-[14px] w-[14px]" />
                </button>
                <button className="ml-[20px]">
                  <Instagram className="h-[14px] w-[14px]" />
                </button>
                <button className="ml-[20px] mr-[20px]">
                  <Instagram className="h-[14px] w-[14px]" />
                </button>
              </div>
              <button className="text-white border-r-[1px] border-l-[1px] border-sky-100 leading-1 px-[20px]">
                Түгээмэл асуулт, хариулт
              </button>
              <button className="text-white ml-[20px]">Санал хүсэлт</button>
            </div>
          </div>
        </div>
 
        <div id="headerTallest" className="flex relative  ">
          <div
            id="headerContainer"
            className="flex justify-between max-[1200px] min-[1200px] m-auto h-[94px]"
          >
            <div
              id="headerTall"
              className="flex items-center justify-between max-w-[1200px] min-w-[1184px] h-[94px] "
            >
              <div id="zaryFont" className="flex ">
                <img
                  src="https://zary.mn/27a395c08037dc4652ee51434e509bb1.png"
                  className="w-[96px h-[43px]"
                ></img>
              </div>
              {/* Search tab Search Tab Search Tab */}
              <div
                id="searchContainer"
                className="flex place-content-between content-center relative border-[2px] border-rose-500 w-[600px] h-[44px] rounded-[6px]"
              >
                <div
                  id="searchCategory"
                  className={`${nunito.className} flex items-center px-[10px] w-[120px] h-[36px] bg-slate-100 rounded-[6px] min-w-[160px] m-[2px] text-[14px]`}
                >
                  <button className="flex w-[136px]">Бүх ангилал</button>
                  <button>
                    <ChevronDown className="w-[14px] h-[14px] " />
                  </button>
                </div>
                <span className="flex h-[40px] rounded-md pl-[10px] ">
                  <input
                    className="w-[338px] h-[40px] text-ellipsis"
                    placeholder="Барааны нэр, зарын дугаар, түлхүүр үг,  утасны д...."
                  ></input>
                  <span id="searchButton" className="w-[80px] h-[40px] ">
                    <div className="flex justify-center items-center text-white w-[80px] h-[40px] size-max rounded-[2px] bg-rose-500">
                      <Search />
                    </div>
                  </span>
                </span>
              </div>
              <div
                id="rightNavigationIcons"
                className="flex gap-[16px] text-rose-500 "
              >
                <MessagesSquare className="bg-gray-200 p-2 rounded-full h-[40px] w-[40px]" />
                <MessagesSquare className="bg-gray-200 p-2 rounded-full h-[40px] w-[40px]" />
                <MessagesSquare className="bg-gray-200 p-2 rounded-full h-[40px] w-[40px]" />
                <MessagesSquare className="bg-gray-200 p-2 rounded-full h-[40px] w-[40px]" />
                <MessagesSquare className="bg-rose-500 p-2 rounded-full h-[40px] w-[40px] stroke-white" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="headerBelow"
          className="flex h-[38px] border-t-[1px] border-slate-100 border-b-[1px] shadow-sm"
        >
          <div
            id="container"
            className="flex w-[1184px] h-[36px] justify-between m-auto"
          >
            <div id="headerBelowContainer" className="flex">
              <button className={`${nunito.className}flex items-center relative text-[14px] font-[600]`}>
              <div id="hamburger" className="flex w-[26px] h-[26px] relative">
              <span
  id="lines"
  className="block w-2/4 h-[2px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-rose-500
  before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-rose-500 before:top-[-4px]
  after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-rose-500 after:top-[4px]
  hover:before:top-[0.4px] hover:before:origin-right hover:before:-rotate-45 hover:before:transition hover:before:delay:150 hover:before:scale-75
   hover:after:top-[0.4px] hover:after:origin-right  hover:after:rotate-45 hover:after:transition hover:after:delay:150 duration-150 ease-in-out hover:after:scale-75 ">
</span>
              </div>
Ангилал
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
 