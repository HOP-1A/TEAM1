"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Listings } from "../page";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const user = useUser();
  const userId = user.user?.id;
  const router = useRouter();

  const redirect = () => {
    router.push(`/`);
  };

  const [cart, setCart] = useState<Listings[]>([]);
  useEffect(() => {
    const stringCart = localStorage.getItem("cart");
    const data = JSON.parse(stringCart || "[]");
    setCart(data);
    console.log(data);
  }, []);

  const deleteItemFromCart = (id: string) => {
    const stringCart = localStorage.getItem("cart");
    const data: Listings[] = JSON.parse(stringCart || "[]");

    const otherItems = data.filter((list) => {
      return list.id !== id;
    });

    setCart(otherItems);
    localStorage.setItem("cart", JSON.stringify(otherItems));
  };

  const orderItem = async () => {
    const resJSON = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        userId,
        orders: cart?.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,
          };
        }),
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await resJSON.json();

    if (data.message == "Success") {
      localStorage.setItem("cart", "[]");
      setCart([]);
      alert("Purchased");
    } else {
      alert("Failed to order");
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      return total + Number(cartItem.price) * Number(cartItem.quantity);
    }, 0);
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="w-[1200px] font-medium font-sans mt-40 flex flex-col gap-8">
        {cart.length === 0 ? (
          <div className="flex justify-center mt-10">
            <div className="flex-col justify-center text-center">
              <div className="w-full flex justify-center">
                <ShoppingBasket className="text-xl text-rose-500" size={50} />
              </div>
              <div className="text-3xl mb-10 text-rose-500 font-bold">
                Таны сагс хоосон байна.
              </div>
              <div className="">Та бүтээгдэхүүн сагслаагүй байна.</div>
              <div className="mb-20">
                Бүтээгдэхүүн сонгож сагслах товчийш дарснаар таны сагсанд орох
                болно.
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
                <div className="text-3xl font-bold ml-10">Сагс</div>
                {cart.map((cartItem) => {
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
                            onClick={() =>
                              router.push(`/products/${cartItem.id}`)
                            }
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

                        <div className="flex h-full justify-start">
                          <button
                            onClick={() => deleteItemFromCart(cartItem.id)}
                            className="flex justify-start"
                          >
                            <X />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-2">
                <div className="text-lg">Төлбөрийн мэдээлэл</div>
                <div>
                  <div className="w-[388px] h-auto mt-5 border-2 border-gray-200 rounded-xl p-3 justify-between text-sm">
                    <div className="border-b-2 border-dashed w-full h-10">
                      Бүтээгдэхүүн
                    </div>
                    {cart.map((cartItem) => {
                      return (
                        <div key={cartItem.id}>
                          <div className="flex flex-wrap border-dashed w-full mt-[15px] justify-between">
                            <div className="w-40 truncate">{cartItem.name}</div>
                            <div>{cartItem.price} ₮</div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex w-full mt-[15px] mb-[7px] justify-between border-t-2 border-dashed">
                      <div className="mt-3">Нийт төлөх дүн</div>
                      <div className="mt-3">{getTotalPrice()} ₮</div>
                    </div>
                  </div>
                  <button
                    onClick={orderItem}
                    className="w-[388px] h-14 bg-gray-100 rounded-xl mt-4"
                  >
                    Төлбөрийн нөхцөл сонгох
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
