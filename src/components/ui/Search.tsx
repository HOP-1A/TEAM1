"use client";
 
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
 
export default function SearchThing() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("query") || "";
 
  const [search, setSearch] = useState(initialQuery);
 
  const handleSearch = () => {
    router.push(`/products?query=${encodeURIComponent(search)}`)
  };
 
 
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
 
  return (
    <input
      className="border p-2"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKey}
      placeholder="Search products..."
    />
  );
}
 
