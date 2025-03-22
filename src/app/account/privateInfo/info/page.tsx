"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Settings,
  Megaphone,
  File,
  LogOut,
  CircleUserRound,
  UserRound,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Page = () => {
  const [date, setDate] = React.useState<Date>();
  const [info, setInfo] = useState(true);
  const [product, setProduct] = useState(false);
  const [order, setOrder] = useState(false);

  const router = useRouter();
  const myInfo = () => {
    setInfo(true);
    setProduct(false);
    setOrder(false);
  };
  const myProduct = () => {
    setInfo(false);
    setProduct(true);
    setOrder(false);
  };
  const myOrder = () => {
    setInfo(false);
    setProduct(false);
    setOrder(true);
  };

  const privateInfo = () => {
    router.push("/account/privateInfo/info");
  };
  const contactInfo = () => {
    router.push("/account/privateInfo/contact");
  };
  const passwordInfo = () => {
    router.push("/account/privateInfo/password");
  };

  return (
    <div className="flex justify-center mt-[20px]">
      <div className="border-[1px] border-gray-200 rounded-[16px] h-[281px] w-[280px]">
        <div className="flex h-[75px] w-[278px] px-[16px] py-[12px] items-center gap-[10px] border-b-[1px] border-gray-200 mb-[12px]">
          <div>
            <CircleUserRound className="w-[50px] h-[50px]" color="red" />
          </div>
          <div>
            <div>Biliguun Amgalan</div>
            <div className="text-gray-500 text-[14px]">
              2015/02/13 - аас хойш
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div
              onClick={myInfo}
              className={`flex py-[10px] px-[20px] h-[42px] w-[280px] items-center gap-[20px] hover:cursor-pointer transition-colors ${
                info ? "bg-gray-100" : "bg-white"
              } duration-500 ease-in-out hover:bg-gray-100`}
            >
              <div>
                <Settings color="red" />
              </div>
              <div>Хувийн мэдээлэл</div>
            </div>
            {info ? (
              <div className="w-[4px] h-[42px] bg-red-600 float-right"></div>
            ) : null}
          </div>
          <div className="flex">
            <div
              onClick={myProduct}
              className={`flex py-[10px] px-[20px] h-[42px] w-[280px] gap-[20px] hover:cursor-pointer transition-colors ${
                product ? "bg-gray-100" : "bg-white"
              } duration-500 ease-in-out hover:bg-gray-100`}
            >
              <div>
                <Megaphone color="red" />
              </div>
              <div>Миний зар</div>
            </div>
            {product ? (
              <div className="w-[4px] h-[42px] bg-red-600 float-right"></div>
            ) : null}
          </div>
          <div className="flex">
            <div
              onClick={myOrder}
              className={`flex py-[10px] px-[20px] h-[42px] w-[280px] gap-[20px] hover:cursor-pointer transition-colors ${
                order ? "bg-gray-100" : "bg-white"
              } duration-500 ease-in-out hover:bg-gray-100`}
            >
              <div>
                <File color="red" />
              </div>
              <div>Миний захиалгууд</div>
            </div>
            {order ? (
              <div className="w-[4px] h-[42px] bg-red-600 float-right"></div>
            ) : null}
          </div>
          <div className="flex py-[10px] px-[20px] gap-[20px] hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100">
            <div>
              <LogOut color="red" />
            </div>
            <div>Системээс гарах</div>
          </div>
        </div>
      </div>
      <div className="w-[847px] h-[920px] px-[13px] py-[16px]">
        <div className="text-[18px]">Хувийн мэдээлэл</div>
        <hr className="mt-[16px] mb-[16px] w-[894px]" />
        <div>
          <div className="flex gap-[15px] h-[28px] w-[313px]">
            <div>
              <Button
                onClick={privateInfo}
                className={`w-[80px] h-[28px] text-[12px] px-[12px] rounded-[8px] bg-red-600 text-white hover:cursor-pointer hover:bg-opacity-100`}
              >
                Мэдээлэл
              </Button>
            </div>
            <div>
              <Button
                onClick={contactInfo}
                className={`w-[142px] h-[28px] text-[12px] px-[12px] rounded-[8px] bg-gray-200 text-gray-800 hover:cursor-pointer hover:bg-opacity-100`}
              >
                Холбогдох мэдээлэл
              </Button>
            </div>
            <div>
              <Button
                onClick={passwordInfo}
                className={`w-[68px] h-[28px] text-[12px] px-[12px] rounded-[8px] bg-gray-200 text-gray-800 hover:cursor-pointer hover:bg-opacity-100`}
              >
                Нууц үг
              </Button>
            </div>
          </div>
          <div className="w-[894px] h-[680px] p-[24px] border-[1px] flex flex-col justify-between border-gray-200 rounded-[16px] mt-[20px]">
            <div>
              <div className="text-[14px] mb-[8px] h-[22px] w-[844px]">
                Нүүр зураг
              </div>
              <div className="border-dotted border-[2px] border-b-gray-200 rounded-[50%] h-[136px] w-[136px] flex items-center justify-center mb-[8px]">
                <UserRound className="h-[50px] w-[50px]" color="red" />
              </div>
              <div className="h-[19px] w-[844px] text-[12px] mb-[25px] text-gray-500">
                JPG эсвэл PNG форматтай зураг оруулах боломжтой
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="w-[430px] h-[103px] px-[8px]">
                  <div className="w-[414px] h-[24px] text-[14px] mb-[8px]">
                    <span className="text-red-600">*</span>Нэр
                  </div>
                  <div>
                    <Input className="h-[49px] w-[414px] p-[11px] rounded-[5px] border-gray-200" />
                  </div>
                </div>
                <div className="w-[430px] h-[103px] px-[8px]">
                  <div className="w-[414px] h-[24px] text-[14px] mb-[8px]">
                    <span className="text-red-600">*</span>Эцэг/Эх-ийн нэр
                  </div>
                  <div>
                    <Input className="h-[49px] w-[414px] p-[11px] rounded-[5px] border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-[430px] h-[103px] px-[8px]">
                  <div className="w-[414px] h-[24px] text-[14px] mb-[8px]">
                    <span className="text-red-600">*</span>Төрсөн он сар
                  </div>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "justify-start text-left font-normal h-[49px] w-[414px] p-[11px] rounded-[5px] border-gray-200",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="bg-white"
                        />
                      </PopoverContent>
                    </Popover>
                    {/* <Input className="h-[49px] w-[414px] p-[11px] rounded-[5px] border-gray-200" /> */}
                  </div>
                </div>
                <div className="w-[430px] h-[103px] px-[8px]">
                  <div className="w-[414px] h-[24px] text-[14px] mb-[8px]">
                    <span className="text-red-600">*</span>Хүйс
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="h-[49px] w-[414px] p-[11px] rounded-[5px] border-gray-200 bg-white">
                        <SelectValue placeholder="Сонгох" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup>
                          <SelectItem value="Эмэгтэй">Эмэгтэй</SelectItem>
                          <SelectItem value="Эрэгтэй">Эрэгтэй</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {/* <Input className="h-[49px] w-[414px] p-[11px] rounded-[5px] border-gray-200" /> */}
                  </div>
                </div>
              </div>
              <div className="w-[860px] h-[103px] p-[8px]">
                <div className="w-[844px] h-[24px] text-[14px] mb-[8px]">
                  <span className="text-red-600">*</span>Гэрийн хаяг
                </div>
                <div>
                  <Input className="h-[49px] w-[844px] p-[11px] rounded-[5px] border-gray-200" />
                </div>
              </div>
            </div>
            <div className="w-[844px] h-[46px] justify-end">
              <Button className="w-[220px] h-[46px] bg-red-600 px-[24px] py-[8px] rounded-[8px] text-[16px] hover:bg-opacity-100 text-white float-right">
                Хадгалах
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
