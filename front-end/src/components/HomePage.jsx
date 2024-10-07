"use client";
import { Header } from "./Header";
import { ProductCard } from "./ProductCard";

export const HomePage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <Header />
        <ProductCard />
      </div>
    </div>
  );
};
