<<<<<<< Updated upstream
export default function Home() {
  return <div>conflict testing</div>;
}
=======
"use client";

import { prisma } from "@/lib/prisma";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { create } from "domain";

const Page = () => {
  // const getUsers = async () => {
  //   const users = await prisma.users.findMany({
  //     include:{
  //       Product:true,
  //     }
  //   });
  //   console.log(users);
  // };
  //
  // useEffect(() => {
  //   getUsers();
  // }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const createUser = async () => {
    const data = {
      email,
      username,
      password,
      phoneNumber,
    };

    const resJSON = await fetch("api/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const user = await resJSON.json();
    console.log(user);
  };

  const login = async () => {
    const data = {
      password,
      phoneNumber,
    };

    const resJSON = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const loggedIn = await resJSON.json();
    console.log(loggedIn);
  };

  return (
    <div className="flex">
      <div>
        <Input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <Input
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={login}>Create</Button>
      </div>
    </div>
  );
};

export default Page;
>>>>>>> Stashed changes
