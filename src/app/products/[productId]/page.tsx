"use client";
import { Truck } from "lucide-react";
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
  quantity: number;
  updatedAt: string;
  usersId: string;
  delivery: boolean;
};

const Page = () => {
  const [selectProductImg, setSelectedProductImg] = useState<string>();
  const [listing, setListing] = useState<Listings | null>(null);
  const [quantity, setQuantity] = useState<string[]>([]);
  const [quantity1, setQuantity1] = useState<string>("1");
  const { productId } = useParams() as { productId: string };
  const { toast } = useToast();

  const getProduct = async () => {
    try {
      const resJSON = await fetch(`/api/product/${productId}`, {
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
      setSelectedProductImg(data.message.productImg[0]);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const addToCart = (item: Listings) => {
    const id = item.id;

    const stringifiedCart = localStorage.getItem("cart");
    const cart: CartItem[] = JSON.parse(stringifiedCart || "[]");

    let coincidedIndex: number | undefined = undefined;
    cart.forEach((cartItem, i) => {
      if (cartItem.id === id) coincidedIndex = i;
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

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("mn-MN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center pt-20 md:pt-32 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="w-full max-w-6xl font-sans">
        <div className="flex justify-between border-b pb-4 mt-10 mb-6 text-sm text-gray-600">
          <div>Нийтэлсэн огноо: {formatDate(listing?.createdAt)}</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    className="w-full h-full object-contain cursor-zoom-in"
                    src={selectProductImg}
                    alt={listing?.name || "Product image"}
                  />
                </DialogTrigger>
                <DialogContent className="p-0 max-w-4xl bg-transparent border-none">
                  <img
                    src={selectProductImg}
                    alt="Product preview"
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {listing?.productImg.map((productImg, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 cursor-pointer transition-all ${
                    selectProductImg === productImg
                      ? "border-rose-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedProductImg(productImg)}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={productImg}
                    alt={`Thumbnail ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {listing?.name}
              </h1>
              <Like likedUserId={listing?.usersId} />{" "}
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">
              {listing?.price} ₮
            </div>

            {listing?.description && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Тайлбар</h2>
                <p className="text-gray-700">{listing.description}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Хүргэлттэй эсэх</h2>
              <div className="flex items-center p-4 bg-gray-100 rounded-lg gap-3">
                <div className="flex justify-center items-center rounded-full w-10 h-10 bg-white">
                  <Truck className="w-5 text-gray-700" />
                </div>
                <div className="font-medium">
                  {listing?.delivery ? "Хүргэлттэй" : "Хүргэлтгүй"}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Select onValueChange={setQuantity1}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Тоо ширхэг сонгох" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {quantity.map((item, i) => (
                    <SelectItem key={i} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                onClick={() => listing && addToCart(listing)}
                className="w-full sm:w-1/2 h-12 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition"
              >
                Сагслах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
