'use client'

import {
  ChevronDown,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  MessagesSquare,
  Minus,
  Phone,
  Search,
  ShoppingBag,
  Twitter,
} from "lucide-react";
import { Nunito } from "next/font/google";
import Link from "next/link";
import { useRouter } from 'next/navigation'


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NavBar() {
  
  function popUp(){
    console.log("Opens a div")
  } 
  
  const router = useRouter()
  return (
    <>
      <div id="headerDesktop" className="sticky top-0 w-full bg-white">
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
                <ShoppingBag className="h-16 w-16 ml-8 stroke-black cursor-pointer" type="button" onClick={() => router.push('/')}/>
              </div>
              {/* Search tab Search Tab Search Tab */}
              <div
                id="searchContainer"
                className="flex place-content-between content-center relative border-[2px] border-black w-[600px] h-[44px] rounded-[6px]"
              >
                <div
                  id="searchCategory"
                  className={`${nunito.className} flex items-center px-[10px] w-[120px] h-[36px] bg-slate-100 rounded-[6px] min-w-[160px] m-[2px] text-[14px]`}
                >
                  <button className="flex w-[136px]" onClick={popUp}>Бүх ангилал</button>
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
                    <div className="flex justify-center items-center text-white w-[80px] h-[40px] size-max rounded-[2px] bg-black">
                      <Search />
                    </div>
                  </span>
                </span>
              </div>
              <div id="rightNavigationIcons" className="flex gap-[16px] ">
                <button className="flex justify-center bg-slate-200 p-2 rounded-full h-[40px] w-[40px]">
                  <svg
                    viewBox="0 0 15 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px]"
                  >
                    <g stroke="currentColor">
                      <path d="M4.632 7.312V3.478a2.853 2.853 0 1 1 5.707 0v3.834"></path>
                      <path
                        d="M13.103 17.389H1.868a.892.892 0 0 1-.803-.892l.713-10.522a.713.713 0 0 1 .803-.714h9.809a.714.714 0 0 1 .803.714l.713 10.522a.892.892 0 0 1-.803.892Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button className="flex justify-center bg-slate-200 p-2 rounded-full h-[40px] w-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-4"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320
                       0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
                    />
                  </svg>
                </button>
                <button className="flex justify-center rounded-full bg-black h-[40px] w-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[22px] fill-white"
                    viewBox="0 0 19 16"
                  >
                    <path
                      d="M16.167 6.75a.833.833 0 0 0-.833.834v5.833a.833.833 0 0 1-.833.833H2.834a.833.833 0 0 1-.833-.833V6.75a.833.833 0 0 1 .833-.833h1.667a.833.833 0 0 0 
                      .833-.567l.45-1.366a.833.833 0 0 1 .792-.567h4.591a.833.833 0 0 0 0-1.667H6.534a2.5 2.5 0 0 0-2.367 1.71l-.266.833H2.834a2.5 2.5 0 0 0-2.5 2.5v6.667a2.5 2.5 0 0 0
                       2.5 2.5h11.667a2.5 2.5 0 0 0 2.5-2.5V7.625a.833.833 0 0 0-.834-.875zm-7.5-.833a3.333 3.333 0 1 0 0 6.667 3.333 3.333 0 0 0 0-6.667zm0 5a1.666 1.666 0 1 1 0-3.333 
                       1.666 1.666 0 0 1 0 3.333zm9.167-9.167h-.833V.917a.833.833 0 1 0-1.667 0v.833h-.833a.833.833 0 0 0 0 1.667h.833v.833a.833.833 0 1 0 1.667 0v-.833h.833a.833.833 0 1 0 0-1.667z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="headerBelow"
          className="flex h-[38px] border-t-[1px] border-slate-100 border-b-[1px] shadow-sm"
        >
          <button className="flex group items-center relative text-[14px] font-[600] ml-24">
            <div
              id="hamburger"
              className="flex w-[26px] ml-5 mr-[5px] h-[26px] relative "
            >
              <span
                id="lines"
                className="flex w-3/5 h-[2px] relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-black
                      before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-black before:top-[-6px]
                       after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:top-[6px]"
              ></span>
            </div>
            <div className="flex  place-items-center h-[4px] w-[220px]">
              All categories
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
