"use client";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { Poppins } from "next/font/google";
import { IoMdHelpCircle } from "react-icons/io";
import Link from "next/link";
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [resourcesClick, setResourcesClick] = useState(false);

  const handleResourcesClick = () => {
    setResourcesClick(!resourcesClick);
  };

  return (
    <div>
      <div
        className={`${pacifico.className} text-xl flex justify-evenly mx-auto items-center mt-[15px] pb-2 bg-white border-2 max-w-xl rounded-full fixed inset-x-0`}
      >
        <div className={`${poppins.className} text-base relative`}>
          <div
            className="px-4 py-2 rounded-3xl bg-[#FFD1DC] hover:bg-[#feb2c4] cursor-pointer hover:px-5 hover:py-3 hover:-mx-1 transition-all duration-300 max-[500px]:hidden"
            onClick={handleResourcesClick}
          >
            Resources
          </div>
          <div
            className="min-[501px]:hidden  p-2 rounded-full"
            onClick={handleResourcesClick}
          >
            <IoReorderThreeOutline size={33} />
          </div>
          <a href="/Help_Center"
            className={`flex justify-center items-center bg-white absolute hover:bg-slate-100 cursor-pointer z-30 shadow-md border px-5 rounded-xl py-5 mt-1 ${
              resourcesClick ? "visible" : "hidden"
            }`}
          >
            <div className="mr-2">
              <IoMdHelpCircle />
            </div>
            <div>Help Center</div>
          </a>
        </div>
        <div className="flex items-center justify-between">
          <Image
            src="/kC.png"
            alt="Kindness Cafe Logo"
            width={70}
            height={10}
          />
          <div className="max-[500px]:hidden">KindnessCafe.com</div>
        </div>
        <div>
          <a href="/Login"
            className={`${poppins.className} text-base bg-[#FFD1DC] px-5 py-2 rounded-3xl cursor-pointer hover:px-6 hover:py-3 transition-all duration-300 hover:-mx-1 hover:-my-1 hover:bg-[#feb2c4] max-[500px]:hover:px-6 max-[500px]:hover:py-3`}
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

