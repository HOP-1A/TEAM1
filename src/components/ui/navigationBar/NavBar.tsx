"use client";
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
  Twitter,
} from "lucide-react";
 
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
 
import { Nunito } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import router from "next/router";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
 
export default function NavBar() {
  return (
    <div id="headerDesktop" className="fixed w-full bg-[white] z-40 top-0">
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

            <div className="flex place-items-center text-white">
              <Link
                id="facebook"
                href="https://www.facebook.com/zaryllc"
                target="_blank"
                rel="no facebook"
                className="ml-[20px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 50 50"
                  fill="white"
                >
                  <path
                    d="M25 3C12.85 3 3 12.85 3 25c0 11.03 8.125 20.137 18.712 21.728V30.831h-5.443v-5.783h5.443V21.2c0-6.371 3.104-9.168 8.399-9.168 2.536 0 3.877.188
                        4.512.274v5.048h-3.612c-2.248 0-3.033 2.131-3.033 4.533v3.161h6.588l-.894 5.783h-5.694v15.944C38.716 45.318 47 36.137 47 25c0-12.15-9.85-22-22-22z"
                  />
                </svg>
              </Link>
              <Link
                id="instagram"
                href="https://www.instagram.com/zary.mn.official/"
                target="_blank"
                rel="no instagram"
                className="ml-[20px]"
              >
                <Instagram id="instagram" className="h-[16px] w-[16px]" />
              </Link>
            </div>
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
            <Link href="/" id="zaryFont" className="flex">
              <img
                src="https://zary.mn/27a395c08037dc4652ee51434e509bb1.png"
                className="w-[96px h-[43px]"
              ></img>
            /</Link>
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
              <button className="flex justify-center font-3 bg-slate-100 rounded-full h-[40px] w-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 px;color:#ff3467"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8
                    54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0
                    208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0
                    105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8
                    12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"
                  />
                </svg>
              </button>
              <button className="bg-slate-200 p-2 rounded-full h-[40px] w-[40px]">
                <Heart className="h-4 fill-rose-500" />
              </button>
              <button
                onClick={() => router.push(`/cart`)}
                className="flex justify-center bg-slate-200 p-2 rounded-full h-[40px] w-[40px]"
              >
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
              <header className="flex justify-center bg-slate-200 p-2 rounded-full h-[40px] w-fit">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </header>
              <header className="flex justify-center bg-slate-200 p-2 rounded-full h-[40px] w-fit">
                <SignedOut>
                  <UserButton />
                  <SignUpButton />
                </SignedOut>
              </header>
              <button className="flex justify-center rounded-full bg-rose-500 h-[40px] w-[40px]">
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
        <div
          id="container"
          className="flex w-[1184px] h-[36px] justify-between m-auto"
        >
          <div
            id="headerBelowContainer"
            className={`${nunito.className} flex gap-[30px] place-items-center text-[14px] font-[400]`}
          >
            <button className="flex group items-center relative text-[14px] font-[600]">
              <div id="hamburger" className="flex w-[26px] h-[26px] relative ">
                <span
                  id="lines"
                  className="flex w-2/4 h-[2px] relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-rose-500
    before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-rose-500 before:top-[-4px]
    after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-rose-500 after:top-[4px]
    group-hover:before:top-[0.4px] group-hover:before:origin-right group-hover:before:-rotate-45 group-hover:before:transition group-hover:before:delay:500 group-hover:before:duration-500 group-hover:before:ease-in-out group-hover:before:scale-[0.6]
     group-hover:after:top-[0.4px] group-hover:after:origin-right  group-hover:after:rotate-45 group-hover:after:transition group-hover:after:delay:500 group-hover:after:duration-500 group-hover:after:ease-in-out group-hover:after:scale-[0.6] "
                ></span>
              </div>
              Ангилал
            </button>
            <Link href="/users">Users</Link>
            <div>Бараа бүтээгдэхүүнүүд</div>
          </div>
          <div
            id="headerBelowLinked"
            className={`${nunito.className} flex place-items-center gap-[30px] text-[16px]`}
          >
            <div className="font-[400] text-[16px]">Шинэ бараа</div>
          </div>
        </div>
      </div>
    </div>
  );
}
 