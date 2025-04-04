/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AdForm() {
  const [images, setImages] = useState<(File | string)[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (images.length >= 12) return;
    const files = Array.from(e.target.files).slice(0, 12 - images.length);
    setImages([...images, ...files]);
  };

  useEffect(() => {
    // Cleanup object URLs to avoid memory leaks
    return () => {
      images.forEach((img) => {
        if (img instanceof File) {
          URL.revokeObjectURL(URL.createObjectURL(img));
        }
      });
    };
    setLoading(false);
  }, [images]);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-xl shadow-lg">
      {loading == true ? (
        <div className="flex-col gap-4 w-full flex items-center justify-center mt-72">
          <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-rose-500 text-2xl animate-spin flex items-center justify-center border-t-rose-500 rounded-full"></div>
          </div>
        </div>
      ) : (
        <Card className="bg-white p-6 rounded-2xl shadow-md">
          <CardContent className="space-y-6">
            <Input
              placeholder="Барааны нэр (Iphone X, Ноолууран цамц гэх мэт)"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />

            <ToggleGroup type="single" className="flex gap-3">
              {["new", "like-new", "used"].map((value) => (
                <ToggleGroupItem
                  key={value}
                  value={value}
                  onClick={() => setSelectedCondition(value)}
                  className={`px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    selectedCondition === value
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
                  }`}
                >
                  {value === "new"
                    ? "Шинэ"
                    : value === "like-new"
                    ? "Шинэвтэр"
                    : "Хуучин"}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <div className="flex items-center gap-3">
              <Input
                placeholder="Үнэ (₮)"
                type="number"
                className="flex-1 border-gray-300 focus:ring-2 focus:ring-blue-400"
              />
              <Checkbox id="negotiable" className="border-gray-300" />
              <label htmlFor="negotiable" className="text-gray-700">
                Үнэ тохиролцоно
              </label>
            </div>

            <ToggleGroup type="single" className="flex gap-3">
              {["ready", "preorder"].map((value) => (
                <ToggleGroupItem
                  key={value}
                  value={value}
                  onClick={() => setSelectedAvailability(value)}
                  className={`px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    selectedAvailability === value
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
                  }`}
                >
                  {value === "ready" ? "Бэлэн" : "Захиалгаар"}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <div>
              <p className="text-gray-700">
                Барааны зураг (Доод тал нь 12 зураг оруулах боломжтой)
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                id="file-upload"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="file-upload"
                className="flex items-center gap-2 cursor-pointer p-3 border border-gray-300 rounded-lg mt-2 bg-gray-50 hover:bg-blue-400 hover:text-white transition"
              >
                <Upload size={20} /> Зураг нэмэх
              </label>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {images.map((img, index) => {
                  const src =
                    typeof img === "string" ? img : URL.createObjectURL(img);

                  return (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <img
                          src={src}
                          alt="uploaded"
                          className="w-20 h-20 object-cover rounded-lg shadow-sm cursor-pointer"
                          onClick={() => setSelectedImage(src)}
                        />
                      </DialogTrigger>
                      <DialogContent className="p-0 max-w-2xl bg-opacity-0 border-none">
                        <DialogTitle className="text-white">
                          Зургийн дэлгэрэнгүй
                        </DialogTitle>
                        <img
                          src={selectedImage}
                          alt="preview"
                          className="w-full h-auto"
                        />
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </div>

            <Textarea
              placeholder="Барааны дэлгэрэнгүй мэдээлэл"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <Input
              placeholder="Youtube видео линк"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <Input
              placeholder="Брэнд (Apple, Adidas гэх мэт)"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <Input
              placeholder="Үлдэгдэл"
              type="number"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />

            <ToggleGroup type="single" className="flex gap-3">
              {["free", "paid", "none"].map((value) => (
                <ToggleGroupItem
                  key={value}
                  value={value}
                  onClick={() => setSelectedDelivery(value)}
                  className={`px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    selectedDelivery === value
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
                  }`}
                >
                  {value === "free"
                    ? "Үнэгүй хүргэлттэй"
                    : value === "paid"
                    ? "Төлбөртэй хүргэлттэй"
                    : "Хүргэлтгүй"}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <Input
              placeholder="Хот, аймаг"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <Input
              placeholder="Борлуулагчийн нэр"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <Input
              placeholder="Имэйл хаяг"
              type="email"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <Input
              placeholder="Утасны дугаар"
              type="tel"
              className="border-gray-300 focus:ring-2 focus:ring-blue-400"
            />

            <Button
              className={`w-full py-3 rounded-lg transition ${
                isClicked
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              onClick={() => setIsClicked(true)}
            >
              Нийтлэх
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
