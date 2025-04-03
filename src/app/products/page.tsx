"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Heart } from "lucide-react";
import router from "next/router";
import { Button } from "react-day-picker";
import { Listings } from "../page";
import { CartItem } from "../page";
import { useToast } from "@/hooks/use-toast";

const ResultsPage = () => {
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
    <div className="flex flex-col w-full m-auto max-w-[85vw] mt-[200px]">
      <h2 className=" text-[24px] font-semibold text-left ml-2 sm:ml-4 mb-6">
        Бүх Бараанууд{" "}
      </h2>
      <div className="flex flex-row">
        <label id="filterProducts" className="h-auto w-[272px]">
          <div id="delievery" className="">
            <div className="title">
            Захиалгын төлөв
            </div>
            <div className="inside">
              <div>       
              Бэлэн
              </div>
              <div>
                Захиалгаар
              </div>
            </div>
          </div>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {filteredResults.map((item) => (
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
                  <div onClick={() => setLike((prev) => !prev)}>
                    <Heart />
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
  );
};

export default ResultsPage;
