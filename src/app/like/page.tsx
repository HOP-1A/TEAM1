"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Listings } from "../page";
import { ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Like from "../../customComponents/Like";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUser();
  const router = useRouter();
  const [like, setLike] = useState<Listings[]>([]);

  const redirect = () => {
    router.push(`/`);
  };

  const getLikedProducts = async () => {
    const likedProduct = await fetch("/api/like?userId=" + user?.id);
    const data = await likedProduct.json();
    setLike(data.data.map((item: { product: unknown }) => item.product));
  };

  useEffect(() => {
    getLikedProducts();
    setLoading(false);
  }, [user?.id]);

  return (
    <div className="w-screen flex justify-center">
      {loading == true ? (
        <div className="flex-col gap-4 w-full flex items-center justify-center mt-72">
          <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-rose-500 text-2xl animate-spin flex items-center justify-center border-t-rose-500 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="w-[1200px] font-medium font-sans mt-40 flex flex-col gap-8">
          {like.length === 0 ? (
            <div className="flex justify-center mt-10">
              <div className="flex-col justify-center text-center">
                <div className="w-full flex justify-center">
                  <ShoppingBasket className="text-xl text-rose-500" size={50} />
                </div>
                <div className="text-3xl mb-10 text-rose-500 font-bold">
                  Хадгалсан Бараа Байхгүй.
                </div>
                <div className="">Та бүтээгдэхүүн хадгалаагүй байна.</div>
                <div className="mb-20">
                  Бүтээгдэхүүн сонгож хадгалах товчийш дарснаар таны хадгалсан
                  бүтээгдэхүүнд орох болно.
                </div>
                <Button
                  className="hover:bg-rose-500 hover:text-white transition duration-300 rounded-xl"
                  onClick={() => redirect()}
                >
                  Нүүр хуудас руу буцах
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex">
                <div>
                  <div className="text-3xl font-bold ml-10">
                    Хадгалсан Бараа
                  </div>
                  {like.map((cartItem) => {
                    return (
                      <div
                        key={cartItem.id}
                        className="flex w-[800px] font-medium font-sans gap-3"
                      >
                        <div className="flex mt-5 ml-20 w-[700px] h-[120px] border-2 rounded-xl justify-between p-3 items-center">
                          <div className="flex">
                            <img
                              className="flex h-[105px] mr-5 rounded-xl cursor-pointer"
                              src={cartItem.productImg[0]}
                            />
                            <div>
                              <div className="text-xl w-fit truncate font-semibold ">
                                {cartItem.name}
                              </div>
                              <div className="text-lg w-fit text-gray-500">
                                {cartItem.price} ₮
                              </div>
                              <div className="text-lg w-fit text-gray-500">
                                {cartItem.quantity}
                              </div>
                            </div>
                          </div>

                          <Like
                            likedUserId={{
                              ...cartItem,
                              LikeItem: [{ usersId: user?.id }],
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
