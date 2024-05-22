"use client";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import ProductInit from "./ProductInit";

export default function ProductItem() {
  return (
    <>
      <div className="flex gap-3 items-center m-7 border w-40  rounded-2xl justify-center hover:bg-gray-600">
        <MoveLeft />
        <Link href="/">Volver</Link>
      </div>
      <div className="w-full">
        <ProductInit />
      </div>
    </>
  );
}
