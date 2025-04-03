"use client";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ likedUserId }: { likedUserId: any }) => {
  const { user } = useUser();
  const { toast } = useToast();
  const userId = user?.id;
  const [likes, setLikes] = useState(false);
  console.log(likedUserId);
  useEffect(() => {
    if (
      likedUserId?.LikeItem?.some(
        (like: { usersId: string | undefined }) => like.usersId === userId
      )
    ) {
      setLikes(true);
    } else {
      setLikes(false);
    }
  }, [likedUserId, userId]);

  const likeProduct = async (likedUserId: { id: string }) => {
    try {
      await fetch("/api/like", {
        method: "POST",
        body: JSON.stringify({
          usersId: userId,
          productId: String(likedUserId.id),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "Амжилттай",
      });
      window.location.reload();
    } catch {
      toast({
        title: "Failed",
      });
    }
  };

  return (
    <div>
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
