import FoodCards from "@/components/homepage/Search&Filter/FoodCards";
import SearchAndFilter from "@/components/homepage/Search&Filter/SearchAndFilter";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="max-w-5xl mx-auto mt-10 space-y-10">
      <h1 className="text-center font-bold text-2xl">Discover Delicious Foods 🍔</h1>
      </div>
      <SearchAndFilter />
      <FoodCards/>
    </>
  );
}
