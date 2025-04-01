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
import { jwtDecode } from "jwt-decode";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";
import Like from "../customComponents/Like";
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
  const [userId, setUserId] = useState("");
  const [likes, setLikes] = useState([]);
  const [listings, setListings] = useState<Listings[]>([]);
  const img1 = [
    "https://cdn.cody.mn/img/334304/4600x0xwebp/kahi_post_4.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
    "https://cdn.cody.mn/img/324023/4600x0xwebp/banner_09banner.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
    "https://cdn.cody.mn/img/334305/4600x0xwebp/cycle_9.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
  ];
  const img2 = [
    "https://cdn.cody.mn/img/334309/4600x0xwebp/spring_post_8_banner.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
    "https://cdn.cody.mn/img/324023/4600x0xwebp/banner_09banner.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
  ];
  const img3 = [
    "https://cdn.cody.mn/img/331665/4600x0xwebp/banner_13banner.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
    "https://cdn.cody.mn/img/331675/4600x0xwebp/banner_25banner.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
  ];
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
    // const storageToken = localStorage.getItem("accessToken");
    // const decodedToken = jwtDecode(storageToken ?? "");
    // const user = decodedToken.userId;
    // setUserId(user);
  }, []);

  console.log(userId);

  return (
    <div className="flex flex-col justify-center items-center mt-[200px] ">
      <div className="w-[1300px]">
        <div className="flex">
          <div>
            <Carousel
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
                {img1.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={"img1"}
                      className="h-[404px] w-[900px] object-cover rounded-[20px] shadow-none px-[8px]"
                      loading="lazy"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="px-[4px] flex flex-col gap-[4px]">
            <Carousel
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
                {img2.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={"img1"}
                      className="h-[200px] w-[600px] object-cover rounded-[8px] shadow-none"
                      loading="lazy"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel
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
                {img3.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={"img1"}
                      className="h-[200px] w-[600px] object-cover rounded-[8px] shadow-none"
                      loading="lazy"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="w-full max-w-[85vw] mt-10">
          <h2 className="text-[24px] font-semibold text-left ml-2 sm:ml-4 mb-6">
            Бүх Бараанууд{" "}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            {listings.map((item) => (
              <Card
                key={item.id}
                className="w-[300px] shadow-none rounded-[8px] overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
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
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 ml-[9px]">
                        {item.name}
                      </h3>
                    </div>
                    <div>
                      <Like likedUserId={item} />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-[8px]">{item.price}₮</p>
                  <Button
                    className="rounded-[1vh] bg-blue-300 text-white-600/100 dark:text-sky-400/100 font-bold cursor-pointer hover:shadow-xl"
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
