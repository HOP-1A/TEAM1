"use client";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { useUser } from "@clerk/nextjs";

const Page = ({ likedUserId }: any) => {
  const user = useUser();
  const userId = user.user?.id;
  console.log(userId);
  const [likes, setLikes] = useState(false);
  // const token = localStorage.getItem("accessToken");
  // const decodedToken = jwtDecode(token ?? "");

  useEffect(() => {
    if (likedUserId?.LikeItem?.some((like: any) => like.usersId === userId)) {
      setLikes(true);
    } else {
      setLikes(false);
    }
  }, [likedUserId, userId]);

  const likeProduct = async (likedUserId: any) => {
    try {
      const resJSON = await fetch("/api/like", {
        method: "POST",
        body: JSON.stringify({
          usersId: userId,
          productId: String(likedUserId.id),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await resJSON.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(likes);
  return (
    <div>
      {" "}
      <Heart
        onClick={() => likeProduct(likedUserId)}
        color={likes ? "red" : "black"}
        fill={likes ? "red" : "white"}
        size={30}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Page;
