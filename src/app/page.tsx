<<<<<<< Updated upstream
=======
"use client";

>>>>>>> Stashed changes
import NavBar from "../components/ui/navigationBar/NavBar";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Listings = {
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
};

export default function Home() {
  const [listings, setListings] = useState<Listings[]>([]);

  const getProduct = async () => {
    try {
      const resJSON = await fetch("/api/product", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await resJSON.json();
      console.log("Fetched Data:", data);

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
    <>
      <NavBar />
<<<<<<< Updated upstream
=======
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
        <div className="w-full max-w-[90vw] mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((item) => (
            <Card
              key={item.id}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <Carousel>
                <CarouselContent>
                  {item.productImg.map((image, index) => (
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

              <CardContent className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.price}₮</p>
                <Button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Дэлгэрэнгүй
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
>>>>>>> Stashed changes
    </>
  );
}
