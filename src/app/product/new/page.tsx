'use client'

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type categoryType = {
    id: string;
    categoryName: string;
    categoryImg: string;
};

const Home = () => {
    const [images, setImages] = useState<FileList | null>(null);
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [name, setName] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [price, setPrice] = useState<Number>(0);



    const [isAdded, setIsAdded] = useState<boolean>(false);

    const uploadImages = async () => {
        if (!images) return;

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

        setUploadedImages(uploadedUrls.filter((url) => url !== null) as string[]);
    };


    const handleAddProduct = async () => {
        const response = await fetch("../api/product/addProduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                description,
                price,
                imgUrl: uploadedImages[0],
            }),
        });
        if (!response) {
            setIsAdded(false);
        } else {
            setIsAdded(true);
        }
    };

    return (
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
                        placeholder="Price"
                        className="col-span-3"
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>
            </div>
            <Button type="submit" onClick={handleAddProduct}>
                Submit
            </Button>
        </div>
    );
};

export default Home