"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Like from "../customComponents/Like";
import { Clock, ShoppingCart, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

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

  const img2 = [
    "https://cdn.cody.mn/img/334304/4600x0xwebp/kahi_post_4.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
    "https://cdn.cody.mn/img/324023/4600x0xwebp/banner_09banner.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
    "https://cdn.cody.mn/img/334305/4600x0xwebp/cycle_9.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
  ];

  const img1 = [
    "https://cdn.cody.mn/img/334309/4600x0xwebp/spring_post_8_banner.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
    "https://cdn.cody.mn/img/331665/4600x0xwebp/banner_13banner.jpg?h=c2a85144d77b7e5f906de9dcb1b70c78c4a3b0df",
  ];

  const addToCart = (item: Listings, e: React.MouseEvent) => {
    e.stopPropagation();
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
      description: `${item.name} сагсанд нэмэгдлээ`,
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

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative w-full h-[300px] md:h-[500px]">
        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          opts={{ loop: true, align: "start" }}
          className="w-full h-full"
        >
          <CarouselContent>
            {img2.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[300px] md:h-[500px]">
                  <img
                    src={image}
                    alt={`Hero ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {img1.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-36 md:h-48"
            >
              <img
                src={image}
                alt={"Promo"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center pl-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {index === 0 ? "Хавар улиралд зориулсан" : "Онцгой хямдрал"}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Онцлох бүтээгдэхүүнүүд
          </h2>
          <Button
            variant="ghost"
            className="text-primary hover:bg-primary/10 text-sm md:text-base"
            onClick={() => router.push("/products")}
          >
            Бүгдийг үзэх
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listings.map((item) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary/20"
              onClick={() => router.push(`/products/${item.id}`)}
            >
              <div className="relative aspect-square">
                <Carousel
                  plugins={[
                    Autoplay({ delay: 5000, stopOnInteraction: false }),
                  ]}
                  opts={{ loop: true, align: "start" }}
                >
                  <CarouselContent>
                    {item?.productImg?.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image}
                          alt={item.name}
                          className="w-full h-56 md:h-72 object-cover"
                          loading="lazy"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                <Button
                  size="sm"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary hover:bg-primary-dark"
                  onClick={(e) => addToCart(item, e)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Сагслах
                </Button>
              </div>

              <CardContent className="p-3 space-y-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Like likedUserId={item} />
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    {Number(item.price).toLocaleString()}₮
                  </p>
                  <div className="flex items-center bg-primary/10 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>

                {item.delivery && (
                  <div className="text-xs text-green-600 font-medium">
                    Хүргэлттэй
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
