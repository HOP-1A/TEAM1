"use client";
import { prisma } from "@/lib/prisma";
import { Filter, Truck } from "lucide-react";
import { Heart } from "lucide-react";
import { Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
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
  delivery: boolean;
};

const Page = () => {
  const [selectProductImg, setSelectedProductImg] = useState();
  const [pieces, setPieces] = useState("");
  const [number, setNumber] = useState(1);
  const [listings, setListings] = useState<Listings[]>([]);
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const pluss = () => {
    if (number == Number(pieces)) {
    } else {
      const plus = number + 1;
      setNumber(plus);
    }
  };

  const miness = () => {
    if (number == 1) {
    } else {
      const mines = number - 1;
      setNumber(mines);
    }
  };
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

  const hi = listings.filter((listing) => {
    if (listing.id == productId) {
      return listing;
    } else {
    }
  });

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {hi.map((items) => {
        return (
          <div key={items.id} className="w-screen flex justify-center mt-52">
            <div className="w-[1200px] font-medium font-sans ">
              <div className="flex justify-between border-b-2 pb-5 mb-6 text-sm">
                <div className="">Нийтэлсэн огноо: {items.createdAt}</div>
                <div className="flex">
                  <div className="flex">
                    <Heart className="w-[18px]" />
                    <div className="mr-4 pl-1">Хадгалах</div>
                  </div>
                  <div className="flex">
                    <Share2 className="w-[18px]" />
                    <div className="pl-1">Хуваалцах</div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-[700px] pr-6">
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <img
                          className="w-[660px] h-full"
                          src={selectProductImg || items.productImg[0]}
                          alt="uploaded"
                          onClick={() =>
                            setSelectedProductImg(selectProductImg)
                          }
                        />
                      </DialogTrigger>
                      <DialogContent className="p-0 max-w-2xl bg-opacity-0 border-none">
                        <DialogTitle className="text-white"></DialogTitle>
                        <img
                          src={selectProductImg}
                          alt="preview"
                          className="w-full h-auto "
                        />
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="w-[150px] h-[90px] mt-6 flex gap-3 mb-10 duration-300 ease-in-out">
                    {items.productImg.map((productImg, i) => {
                      return (
                        <img
                          key={i}
                          className="border-white hover:border-rose-500 border-2"
                          src={productImg}
                          alt=""
                          onClick={() => setSelectedProductImg(productImg)}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="w-[500px] pl-6">
                  <div
                    className={
                      items.quantity < "7"
                        ? "bg-rose-200 w-20 text-lg flex justify-center items-center rounded-l-sm mb-3 rounded-r-full"
                        : "bg-blue-200 w-20 text-lg flex justify-center items-center rounded-l-sm mb-3 rounded-r-full"
                    }
                  >
                    {items.quantity < "7" ? "new" : "old"}
                  </div>
                  <div className="text-4xl mb-3">{items.name}</div>
                  <div className="text-4xl mb-7">{items.price} ₮</div>

                  <div className="flex gap-2">
                    <div className="flex justify-center items-center rounded-lg w-[245px] h-[50px] bg-sky-500 text-white text-lg font-bold cursor-pointer hover:shadow-xl hover:bg-sky-400">
                      Сагслах
                    </div>
                  </div>

                  <div className="text-2xl mb-3 mt-5">
                    {items.delivery == true ? "Хүргэлттэй" : "Хүргэлтгүй"}
                  </div>
                  <div className="flex items-center w-[478px] h-[70px] bg-gray-200 rounded-xl pl-8 gap-2 cursor-pointer">
                    <div className="flex justify-center items-center rounded-3xl w-9 h-9 bg-white">
                      <Truck className="w-5" />
                    </div>
                    <div>Хүргэлттэй</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Page;
