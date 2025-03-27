"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
import { useToast } from "@/hooks/use-toast";
import { Badge, Clock, Eye } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

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
  const { toast } = useToast();

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
    toast({
      title: "Амжилттай сагслагдлаа",
    });
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
              className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl hover:border-blue-200"
            >
              <div className="relative w-full aspect-square rounded-t-xl overflow-hidden">
                <Carousel
                  className="w-full h-auto"
                  plugins={[
                    Autoplay({
                      delay: 5000,
                      stopOnInteraction: false,
                    }),
                  ]}
                  opts={{
                    loop: true,
                    align: "start",
                  }}
                >
                  <CarouselContent>
                    {item.productImg.map((image, index) => (
                      <CarouselItem key={index} className="w-full h-full">
                        <img
                          src={image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {item.productImg.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white" />
                      <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white" />
                    </>
                  )}
                </Carousel>

                {item.status && (
                  <Badge
                    variant="secondary"
                    className="absolute top-2 left-2 bg-white text-gray-800 border border-gray-300"
                  >
                    {item.status}
                  </Badge>
                )}
              </div>

              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {item.name}
                  </h3>
                </div>

                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-blue-600 font-bold text-lg">
                    {item.price}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-600 hover:bg-blue-50"
                      onClick={() => router.push(`/products/${item.id}`)}
                    >
                      Дэлгэрэнгүй
                    </Button>
                    <Button
                      onClick={() => addToCart(item)}
                      className="rounded-[1vh] bg-pink-400 text-white-600/100 dark:text-sky-400/100 font-bold cursor-pointer hover:shadow-xl"
                    >
                      Сагслах
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
