"use client";

import * as React from "react";

import {
  Settings,
  Megaphone,
  File,
  LogOut,
  CircleUserRound,
  Eye,
  EyeOff,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [phoneNumb, setPhoneNumb] = useState("");
  const [hidePass, setHidePass] = useState(true);
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
        <hr className="mt-[16px] mb-[16px]" />
        <div>
          <div className="flex gap-[15px] h-[28px] w-[313px]">
            <div>
              <Button
                onClick={privateInfo}
                className={`w-[80px] h-[28px] text-[12px] px-[12px] rounded-[8px] bg-gray-200 text-gray-800 hover:cursor-pointer hover:bg-opacity-100`}
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
                className={`w-[68px] h-[28px] text-[12px] px-[12px] rounded-[8px] bg-red-600 text-white hover:cursor-pointer hover:bg-opacity-100`}
              >
                Нууц үг
              </Button>
            </div>
          </div>
          <div className="w-[894px] h-[300px] p-[24px] border-[1px] flex flex-col justify-between border-gray-200 rounded-[16px] mt-[20px]">
            <div>
              <div>
                <div className="w-[844px] h-[103px] px-[8px]">
                  <div className="flex">
                    <div className="w-[100px] h-[24px] text-[14px] mb-[8px]">
                      Хуучин нууц үг
                    </div>
                  </div>

                  <div className=" w-[408px] flex gap-[5px] items-center border-gray-200 border-[1px] rounded-[8px]">
                    <div>
                      <Input
                        type={hidePass ? "password" : "text"}
                        placeholder="**************"
                        onChange={(e) => setPhoneNumb(e.target.value)}
                        className="h-[46px] w-[358px] p-[11px] rounded-[5px] border-none shadow-none"
                      />
                    </div>
                    <div>
                      {hidePass ? (
                        <Eye onClick={() => setHidePass((prev) => !prev)} />
                      ) : (
                        <EyeOff onClick={() => setHidePass((prev) => !prev)} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-[844px] h-[103px] px-[8px]">
                  <div>
                    <div className="w-[100px] h-[24px] text-[14px] mb-[8px]">
                      Шинэ нууц үг
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className=" w-[408px] flex gap-[5px] items-center border-gray-200 border-[1px] rounded-[8px]">
                      <div>
                        <Input
                          placeholder="**************"
                          onChange={(e) => setPhoneNumb(e.target.value)}
                          className="h-[46px] w-[358px] p-[11px] rounded-[5px] border-none shadow-none"
                        />
                      </div>
                      <div>
                        <Eye />
                      </div>
                    </div>
                    <div className=" w-[408px] flex gap-[5px] items-center border-gray-200 border-[1px] rounded-[8px]">
                      <div>
                        <Input
                          placeholder="**************"
                          onChange={(e) => setPhoneNumb(e.target.value)}
                          className="h-[46px] w-[358px] p-[11px] rounded-[5px] border-none shadow-none"
                        />
                      </div>
                      <div>
                        <Eye />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[844px] h-[46px] justify-end px-[8px]">
              <Button className="w-[220px] h-[46px] bg-red-600 text-white px-[24px] py-[8px] rounded-[8px] text-[16px] transition-colors duration-500 ease-in-out hover:bg-gray-200 hover:text-black">
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
