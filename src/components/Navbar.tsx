import React from "react";
import { Rubik_Mono_One, Black_Han_Sans } from "next/font/google";

const black = Black_Han_Sans({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <div className="h-16 bg-blue-950 w-full flex items-center justify-between p-3">
      <div>
        <button className={`font-bold text-xl text-white ${black.className} tracking-normal`}>
        Haris Password Generator
        </button>
      </div>

      <div className="text-xl text-white font-semibold space-x-4">
        <button className={`${black.className}`}>Signup</button>
        <button className={`${black.className}`}>Login</button>
      </div>
    </div>
  );
}
