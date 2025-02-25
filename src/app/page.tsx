"use client";

import { prisma } from "@/lib/prisma";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [usersId, setUsersId] = useState("");
  const [categories, setCategories] = useState([]);
  const [productImg, setProductImg] = useState([""]);
  const [product, setProduct] = useState([]);

  const getCategory = async () => {
    try {
      const resJSON = await fetch("api/category");

      const gotCategories = await resJSON.json();

      if (!gotCategories) {
        console.log("No categories returned");
        return;
      }
      setCategories(gotCategories);
      console.log(gotCategories);
    } catch (error) {
      console.error("Failed to fetch or parse category data:", error);
    }
  };

  const products = async () => {
    try {
      const resJSON = await fetch("api/product");
      const getProduct = await resJSON.json();
      setProduct(getProduct);
      console.log(getProduct);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategory();
    products();
  }, []);

  const createProduct = async () => {
    const data = {
      price,
      quantity,
      description,
      categoryId,
      name,
      productImg,
      delivery,
      usersId,
    };

    const resJSON = await fetch("api/product", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const product = await resJSON.json();
    console.log(product);
  };

  return (
    <div className="flex">
      <div>
        <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <Input
          placeholder="usersId"
          onChange={(e) => setUsersId(e.target.value)}
        />
      </div>
      <div>
        <Input
          placeholder="price"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <Input
          placeholder="quantity"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <div>
        <Input
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <Input
          placeholder="imgUrl"
          onChange={(e) => setProductImg([...productImg, e.target.value])}
        />
      </div>
      <div>
        <Select onValueChange={(e) => setCategoryId(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((item, index) => {
              return (
                <SelectItem key={index} value={item.id}>
                  {" "}
                  {item.categoryType}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Checkbox onCheckedChange={(e) => setDelivery(Boolean(e))} />
      </div>
      <div>
        <Button onClick={createProduct}>Create</Button>
      </div>
    </div>
  );
};

export default Page;
