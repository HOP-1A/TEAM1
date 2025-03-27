"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Listings } from "../page";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [cart, setCart] = useState<Listings[]>([]);
  useEffect(() => {
    const stringCart = localStorage.getItem("cart");
    const data = JSON.parse(stringCart || "[]");
    setCart(data);
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
        userId: "123123123",
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

  return (
    <div className="w-screen flex justify-center">
      <div className="w-[1200px] font-medium font-sans mt-40 flex flex-col gap-8">
        <div className="text-3xl font-bold ml-10">Сагс</div>
        {cart.length === 0 ? (
          <div className="text-center">Таны сагс хоосон байна</div>
        ) : (
          <div>
            {cart.map((cartItem) => {
              return (
                <div
                  key={cartItem.id}
                  className="flex mt-10 ml-20 w-[600px] h-[100px] border-2 justify-between"
                >
                  <div className="flex items-center">
                    <img
                      className="h-[96px] mr-3"
                      src={cartItem.productImg[0]}
                    />

                    <div className="flex flex-col">
                      <div className="text-xl w-fit truncate">
                        title: {cartItem.name}
                      </div>
                      <div className="text-xl w-fit">
                        price: {cartItem.price}
                      </div>
                      <div className="text-xl w-fit">
                        quantity: {cartItem.quantity}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteItemFromCart(cartItem.id)}
                    className="flex items-start m-1"
                  >
                    <X />
                  </button>
                </div>
              );
            })}
            <Button
              className="rounded-lg w-[200px]"
              onClick={() => orderItem()}
            >
              Худалдан авах
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
