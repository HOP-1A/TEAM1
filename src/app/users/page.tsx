"use client";
import NavBar from "@/components/ui/navigationBar/NavBar";
import { useEffect, useState } from "react";

type User = {
  id: string;
  username: string;
};

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const filterdUsers = users.filter((users) =>
    users.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex min-h-screen">
        <NavBar />
        <div className="m-auto mt-[200px]">
          <div className="w-[1184px] h-[46px]">
            <span>
              <input
                placeholder={"Search Sellers"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>
          <div className="flex flex-col w-[1200px] h-[500px] m-auto">
            <h1 className="text-center text-black text-2xl py-4">Sellers</h1>
            <div className="grid grid-cols-3 gap-4">
              {filterdUsers.map((user) => (
                <div
                  key={user.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <strong className="text-lg">{user.username}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
