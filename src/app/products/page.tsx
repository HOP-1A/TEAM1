"use client";

import { Truck } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Clock, Heart, ShoppingCart, Star } from "lucide-react";
import  { useRouter } from "next/navigation";
import { Button } from "react-day-picker";
import { Listings } from "../page";
import { CartItem } from "../page";
import { useToast } from "@/hooks/use-toast";
import Like from "@/customComponents/Like";
import Autoplay from "embla-carousel-autoplay";

const ResultsPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.trim() || "";

  const { toast } = useToast();
  const [like, setLike] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [filteredResults, setFilteredResults] = useState<Listings[]>([]);

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
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/product");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const filtered = data.filter((item) =>
        item?.name?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [query, data]);

  return (
    <section id="products" className="mt-[200px] container mx-auto px-4 py-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="flex text-xl md:text-2xl font-bold text-gray-900">
        Хайсан бүтээгдэхүүн :
      </h2>
      <span></span>
      <Button
        className="text-primary hover:bg-primary/10 text-sm md:text-base"
        onClick={() => router.push("/products")}
      >
        Бүгдийг үзэх
      </Button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredResults.map((item) => (
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
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary hover:bg-primary-dark"
              onClick={(e) => addToCart(item)}
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
)};

export default ResultsPage;
