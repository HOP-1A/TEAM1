import { PrismaClient } from "@prisma/client";
import getUsers from "@/lib/getUsers";
import NavBar from "@/components/ui/navigationBar/NavBar";
 
export default async function UsersPage() {

  const users = await getUsers();
  console.log(users)
 
  if (users.length === 0) {
    return <p>No users</p>;
  }
 
  return (
    <>
    <div className="flex min-h-screen">
      <NavBar />
      <div className="m-auto mt-[200px]">
      <div className="w-[1184px] h-[46px]">
        <span>
          <input placeholder="Search users">
 
          </input>
        </span>
      </div>
      <div className="flex flex-col w-[1200px] h-[500px] m-auto">
        <h1 className="text-center text-black text-2xl py-4">Sellers</h1>
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <strong className="text-lg">{user.username}</strong>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  </>
 
 
  );
}
 
 
 