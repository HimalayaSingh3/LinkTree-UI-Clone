import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logos.png"

const Navbar = () => {
  return (
    <div className="text-gray-500 bg-white flex justify-between items-center w-11/12 p-3 rounded-full absolute top-12 left-14 ">
      <div className="flex items-center text-lg">
        <Image src={logo} alt="logo"  className="ml-4 h-6 w-6"></Image>
        <Link href="/Templates" className="hover:bg-gray-100 px-4 py-2 rounded-lg">Templates</Link>
        <Link href="/MarketPlace" className="hover:bg-gray-100 px-4 py-2 rounded-lg">Marketplace</Link>
        <Link href="/Contact" className="hover:bg-gray-100 px-4 py-2 rounded-lg">Discover</Link>
        <Link href="/Pricing" className="hover:bg-gray-100 px-4 py-2 rounded-lg">Pricing</Link>
        <Link href="/Contact" className="hover:bg-gray-100 px-4 py-2 rounded-lg">Learn</Link>
      </div>
      <div className="flex gap-2">
        <button className="bg-gray-100 w-28 h-16 text-black text-lg font-semibold rounded-lg">
          Log in
        </button>
        <Button className="rounded-full h-16 w-36 text-lg">Sign up free</Button>
      </div>
    </div>
  );
};

export default Navbar;
