'use client'

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"


const Home = () => {
    const [price, setPrice] = useState<Number>(0);
    const [quantity, setQuantity] = useState<Number>(0);
    const [description, setDescription] = useState<String>("");
    const [images, setImages] = useState<FileList | null>(null);
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [category, setCategory] = useState<string | null>("");
    const [name, setName] = useState<String>("");
    const [delivery, setDelivery] = useState<Boolean>(false);

    const [isAdded, setIsAdded] = useState<boolean>(false);
    const { toast } = useToast()

    useEffect(() =>{
        if(isAdded){
            toast({
                title: "Product uploaded",
                description: Date.now().toString()
              })
        }
    }, [isAdded])

    const uploadImages = async () => {
        if (!images) return;
        console.log(images);
        
        const uploadPromises = Array.from(images).map(async (image) => {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "product");
            formData.append("cloud_name", "dxckphai4");

            const response = await fetch(
                "https://api.cloudinary.com/v1_1/dxckphai4/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );
            console.log(response);

            if (!response.ok) {
                throw new Error("Failed to upload image");
            }

            const result = await response.json();
            return result.secure_url;
        });

        const uploadedUrls = await Promise.all(uploadPromises);

        console.log(uploadedUrls);
        
        setUploadedImages(uploadedUrls.filter((url) => url !== null) as string[]);
    };


    const handleAddProduct = async () => {
        const response = await fetch("../api/product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                description,
                price,
                imgUrl: uploadedImages,
                quantity,
                category,
                delivery,
                usersId: "user_2vA2qZmiKqyS7xQRAOQlYYX7UvS"

            }),
        });
        if (!response.ok) {
            setIsAdded(false);
        } else {
            setIsAdded(true);
        }
    };

    return (
        <div>
            <div className="sm:max-w-[425px] mt-[200px] flex flex-col justify-center  mx-auto">
                <div>
                    <div>Add product</div>
                </div>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Image
                        </Label>
                        <Input
                            type="file"
                        
                            className="col-span-3"
                            multiple={true}
                            onChange={(e) => {
                                const files = e.target.files;
                                if (files) {
                                    setImages(files);
                                }
                            }}
                        />
                    </div>

                    <Button onClick={uploadImages} className="hover:cursor-pointer">
                        Upload
                    </Button>

                    <div className="text-center w-90%">
                        {uploadedImages.map((img, index) => (
                            <div className="flex flex-col items-center gap-4" key={index}>
                                <img
                                    src={img}
                                    className="aspect-auto rounded-lg shadow-lg w-[300px]"
                                    alt="Uploaded"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            placeholder="Name"
                            className="col-span-3"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input
                            placeholder="Description"
                            className="col-span-3"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                            Price
                        </Label>
                        <Input
                            type="number"
                            placeholder="Price"
                            className="col-span-3"
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Quantity" className="text-right">
                            Quantity
                        </Label>
                        <Input
                            type="number"
                            placeholder="Quantity"
                            className="col-span-3"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Quantity" className="text-right">
                            Category
                        </Label>
                        <Select onValueChange={e => setCategory(e)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Open" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup >
                                    <SelectLabel>Category</SelectLabel>
                                    <SelectItem value="makeup">Makeup</SelectItem>
                                    <SelectItem value="technology">Technology</SelectItem>
                                    <SelectItem value="housing">Housing</SelectItem>
                                    <SelectItem value="perfume">Perfume</SelectItem>
                                    <SelectItem value="esports">Esports</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Quantity" className="text-right">
                            Delivery
                        </Label>
                        <Select onValueChange={e => {
                            setDelivery(e == "delivery" ? true : false)
                        }}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Open" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup >
                                    <SelectLabel>Offer Delivery</SelectLabel>
                                    <SelectItem value="delivery">Yes</SelectItem>
                                    <SelectItem value="no delivery">No</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button type="submit" onClick={handleAddProduct}>
                    Submit
                </Button>
            </div>
            <Toaster />
        </div>
    );
};

export default Home