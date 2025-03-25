"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export type Listings = {
  id: string;
  categoryId: string;
  createdAt: string;
  description: string;
  productImg: string[];
  name: string;
  price: string;
  status: string;
  quantity: string;
  updatedAt: string;
  usersId: string;
  delivery: boolean;
};

export type CartItem = {
  id: string;
  quantity: number;
};

export default function Home() {
  const [listings, setListings] = useState<Listings[]>([]);
  const addToCart = (item: Listings) => {
    const id = item.id;

    const stringifiedCart = localStorage.getItem("cart");
    const cart: CartItem[] = JSON.parse(stringifiedCart || "[]");

    let coincidedIndex: undefined | number = undefined;
    cart.map((cartItem, i) => {
      if (cartItem.id === id) {
        coincidedIndex = i;
      }
    });

    if (coincidedIndex === undefined) {
      cart.push({
        ...item,
        quantity: Number(item.quantity),
      });
    } else {
      cart[coincidedIndex].quantity = cart[coincidedIndex].quantity + 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const router = useRouter();
  const getProduct = async () => {
    try {
      const resJSON = await fetch("/api/product", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await resJSON.json();
      console.log(data);
      if (Array.isArray(data)) {
        setListings(data);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(listings);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[90vw] flex justify-between mt-64">
          <img
            src="https://cdn.cody.mn/img/329789/3800x0xwebp/Frame_1000002587.jpg?h=ac0b9f60ba740222fdf9df36c6d3cc62f3b4e3dd"
            className="h-[400px] w-[600px] object-cover rounded-lg shadow-md"
          />
          <img
            src="https://cdn.cody.mn/img/328799/3800x0xwebp/banner_161banner.jpg?h=ac0b9f60ba740222fdf9df36c6d3cc62f3b4e3dd"
            className="h-[400px] w-[600px] object-cover rounded-lg shadow-md"
          />

          <img
            src="https://cdn.cody.mn/img/328825/3800x0xwebp/banner_145banner.jpg?h=ac0b9f60ba740222fdf9df36c6d3cc62f3b4e3dd"
            className="h-[400px] w-[600px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full max-w-[80vw] mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((item) => (
            <Card
              key={item.id}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <Carousel>
                <CarouselContent>
                  {item?.productImg?.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        alt={item.name}
                        className="w-full h-64 object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <CardContent className="p-4 bg-white space-x-2 ">
                <h3 className="text-lg font-semibold text-gray-900 ml-[9px]">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-[8px]">{item.price}₮</p>
                <Button
                  className="rounded-[1vh] bg-blue-300 text-white-600/100 dark:text-sky-400/100 font-bold cursor-pointer hover:shadow-xl"
                  onClick={() => router.push(`/products/${item.id}`)}
                >
                  Дэлгэрэнгүй
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      onClick={() => addToCart(item)}
                      className="rounded-[1vh] bg-pink-400 text-white-600/100 dark:text-sky-400/100 font-bold cursor-pointer hover:shadow-xl"
                    >
                      Сагслах
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-pink-200">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Amjilttai sagslagdlaa.
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogAction className="rounded-[2vh] bg-pink-400 text-white-600/100 dark:text-sky-400/100 font-bold cursor-pointer hover:shadow-xl">
                      Continue
                    </AlertDialogAction>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
