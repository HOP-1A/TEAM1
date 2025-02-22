"use client";

import { prisma } from "@/lib/prisma";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { create } from "domain";

const Page = () => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [quantity, setQuantity] = useState(0);
  // const [description, setDescription] = useState("");
  // const [categoryId, setCategoryId] = useState("");
  // const [delivery, setDelivery] = useState(false);
  // const [usersId, setUsersId] = useState("");

  // const [categoryType, setCategoryType] = useState("");

  // const createUser = async () => {
  //   const data = {
  //     email,
  //     username,
  //     password,
  //     phoneNumber,
  //   };

  //   const resJSON = await fetch("api/signup", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });

  //   const user = await resJSON.json();
  //   console.log(user);
  // };

  // const login = async () => {
  //   const data = {
  //     password,
  //     phoneNumber,
  //   };

  //   const resJSON = await fetch("api/login", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });

  //   const loggedIn = await resJSON.json();
  //   console.log(loggedIn);
  // };

  // const createProduct = async () => {
  //   const data = {
  //     price,
  //     quantity,
  //     description,
  //     categoryId,
  //     name,
  //     delivery,
  //     usersId,
  //   };

  //   console.log(data);

  //   const resJSON = await fetch("api/products", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });

  //   const loggedIn = await resJSON.json();
  //   console.log(loggedIn);
  // };

  return (
    <div className="flex">
      {/* <div>
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
        <select onChange={(e) => setCategoryId(e.target.value)} id="category">
          <option value="eregtei">eregtei</option>
          <option value="emegtei">emegtei</option>
          <option value="goo saikhan">goo saikhan</option>
          <option value="utas">utas</option>
        </select>
      </div>
      <div>
        <select
          onChange={(e) => setDelivery(Boolean(e.target.value))}
          id="delivery"
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div> */}
      <div>
        <Input placeholder="categoryType" />
      </div>
      <div>
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default Page;
