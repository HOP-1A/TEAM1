"use client";

import {
  ChevronDown,
  Heart,
  Instagram,
  Phone,
  Search,
  Menu,
  X,
} from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NavBar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu-container") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed w-full bg-white z-50 top-0 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className={`${nunito.className} bg-rose-500 h-7`}>
        <div className="flex justify-between items-center px-4 md:px-6 lg:max-w-6xl lg:mx-auto pt-1 font-medium">
          <span className="text-white text-xs md:text-sm font-bold">
            Хүссэнээ зар, Хайснаа ол
          </span>

          <div className="flex items-center text-xs">
            <button className="flex items-center border-r border-rose-300 pr-4 md:pr-5">
              <Phone className="fill-white stroke-rose-500 w-3 h-3 md:w-4 md:h-4" />
              <span className="pl-1 md:pl-2 text-white">4444-4444</span>
            </button>

            <div className="flex items-center text-white pl-3 md:pl-5">
              <Link
                href="https://www.facebook.com/zaryllc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 50 50"
                  fill="white"
                  className="w-3 h-3 md:w-4 md:h-4"
                >
                  <path d="M25 3C12.85 3 3 12.85 3 25c0 11.03 8.125 20.137 18.712 21.728V30.831h-5.443v-5.783h5.443V21.2c0-6.371 3.104-9.168 8.399-9.168 2.536 0 3.877.188 4.512.274v5.048h-3.612c-2.248 0-3.033 2.131-3.033 4.533v3.161h6.588l-.894 5.783h-5.694v15.944C38.716 45.318 47 36.137 47 25c0-12.15-9.85-22-22-22z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/zary.mn.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 md:ml-3 hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-between items-center px-4 md:px-6 lg:max-w-6xl lg:mx-auto h-14 md:h-20">
          <div className="flex items-center">
            <button
              onClick={() => {
                router.push("./");
              }}
              className="mr-2 md:mr-4"
            >
              <img
                src="https://zary.mn/27a395c08037dc4652ee51434e509bb1.png"
                className="w-16 md:w-24 h-auto"
                alt="Zary logo"
              />
            </button>
          </div>

          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xl mx-4"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 px-4 pr-16 rounded-l-md border border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
                placeholder="Барааны нэр, зарын дугаар..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-10 w-12 flex items-center justify-center bg-rose-500 text-white rounded-r-md hover:bg-rose-600 transition-colors"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          <button
            className="md:hidden p-2 text-gray-700 mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-rose-500"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 fill-rose-500" />
            </button>
            <button
              onClick={() => router.push(`/cart`)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-rose-500"
              aria-label="Cart"
            >
              <svg
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
            <div className="flex items-center gap-2">
              <SignedOut>
                <SignInButton>
                  <button className="px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-rose-500">
                    Нэвтрэх
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-3 py-1.5 text-sm rounded-full bg-rose-500 hover:bg-rose-600 transition-colors text-white">
                    Бүртгүүлэх
                  </button>
                </SignUpButton>
              </SignedOut>
              <UserButton afterSignOutUrl="/" />
            </div>
            <button
              className="p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
              onClick={() => router.push("./product/new")}
              aria-label="Add listing"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white"
                viewBox="0 0 19 16"
              >
                <path d="M16.167 6.75a.833.833 0 0 0-.833.834v5.833a.833.833 0 0 1-.833.833H2.834a.833.833 0 0 1-.833-.833V6.75a.833.833 0 0 1 .833-.833h1.667a.833.833 0 0 0 .833-.567l.45-1.366a.833.833 0 0 1 .792-.567h4.591a.833.833 0 0 0 0-1.667H6.534a2.5 2.5 0 0 0-2.367 1.71l-.266.833H2.834a2.5 2.5 0 0 0-2.5 2.5v6.667a2.5 2.5 0 0 0 2.5 2.5h11.667a2.5 2.5 0 0 0 2.5-2.5V7.625a.833.833 0 0 0-.834-.875zm-7.5-.833a3.333 3.333 0 1 0 0 6.667 3.333 3.333 0 0 0 0-6.667zm0 5a1.666 1.666 0 1 1 0-3.333 1.666 1.666 0 0 1 0 3.333zm9.167-9.167h-.833V.917a.833.833 0 1 0-1.667 0v.833h-.833a.833.833 0 0 0 0 1.667h.833v.833a.833.833 0 1 0 1.667 0v-.833h.833a.833.833 0 1 0 0-1.667z" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-3 px-4 border-t border-gray-200 shadow-lg mobile-menu-container">
            <form onSubmit={handleSearch} className="mb-3">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 px-4 pr-12 rounded-md border border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  placeholder="Хайх..."
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-rose-500"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
            <span className="flex h-[40px] rounded-md pl-[10px] ">
              <input
                className="w-[338px] h-[40px] text-ellipsis"
                placeholder="Барааны нэр, зарын дугаар, түлхүүр үг, утасны дугаар..."
              ></input>
              <span
                id="searchButton"
                className="w-[80px] h-[40px] flex justify-center items-center text-white w-[80px] h-[40px] size-max rounded-[2px] bg-rose-500"
              >
                <Search />
              </span>
            </span>
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
                    105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 360 480c38.5 0 74.6-9.4 107-25.6
                    18.1 10.9 41.3 15.7 61.5 15.7 12.8 0 25.2-1.7 38-4.3"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
