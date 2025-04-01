"use client";
import { Truck } from "lucide-react";
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
import { CartItem } from "@/app/page";
import { useToast } from "@/hooks/use-toast";
import Like from "../../../customComponents/Like";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Listings = {
  id: string;
  categoryId: string;
  createdAt: string;
  description: string;
  productImg: string[];
  name: string;
  price: string;
  status: string;
  quantity: Number;
  updatedAt: string;
  usersId: string;
  delivery: boolean;
};

const Page = () => {
  const [selectProductImg, setSelectedProductImg] = useState<string>();
  const [listing, setListing] = useState<Listings | null>(null);
  const [quantity, setQuantity] = useState<string[]>([]);
  const [quantity1, setQuantity1] = useState<string>("1");
  console.log(quantity1);
  const { productId } = useParams();
  const { toast } = useToast();

  const getProduct = async () => {
    try {
      const resJSON = await fetch("/api/product/" + productId, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await resJSON.json();
      const quantityArray =
        data.message.quantity > 0
          ? Array.from({ length: data.message.quantity }, (_, i) => `${i + 1}`)
          : [];

      setQuantity(quantityArray);
      setListing(data.message);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

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
        quantity: 1,
      });
    } else {
      cart[coincidedIndex].quantity =
        cart[coincidedIndex].quantity + Number(quantity1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast({
      title: "Амжилттай сагслагдлаа",
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-screen flex justify-center pt-52">
      <div className="w-[1200px] font-medium font-sans ">
        <div className="flex justify-between border-b-2 pb-5 mb-6 text-sm">
          <div className="">Нийтэлсэн огноо: {listing?.createdAt}</div>
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
                    src={selectProductImg || listing?.productImg[0]}
                    alt="uploaded"
                    onClick={() => setSelectedProductImg(selectProductImg)}
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
              {listing?.productImg.map((productImg, i) => {
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
            <div className="text-4xl mb-3 flex justify-between">
              <div>{listing?.name}</div>
              <div>
                <Like likedUserId={listing} />
              </div>
            </div>
            <div className="text-4xl mb-7">{listing?.price} ₮</div>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(listing as Listings)}
                  className="flex justify-center items-center rounded-lg w-[245px] h-[50px] bg-sky-500 text-white text-lg font-bold cursor-pointer hover:shadow-xl hover:bg-sky-400"
                >
                  Сагслах
                </button>
              </div>
              <div>
                <Select onValueChange={(value) => setQuantity1(value)}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {quantity.map((item, i) => (
                      <SelectItem key={i} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-2xl mb-3 mt-5">Хүргэлттэй эсэх</div>
            <div className="flex items-center w-[478px] h-[70px] bg-gray-200 rounded-xl pl-8 gap-2 cursor-pointer">
              <div className="flex justify-center items-center rounded-3xl w-9 h-9 bg-white">
                <Truck className="w-5" />
              </div>
              <div>
                {listing?.delivery == true ? "Хүргэлттэй" : "Хүргэлтгүй"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
