"use client";

import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

import { razorpayId, razorpaySecret } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [nextClick, setNextClick] = useState(false);
  const [razorpayIds, setRazorpayIds] = useState("");
  const [razorpaySecrets, setRazorpaySecrets] = useState("");
  const router = useRouter();

  const handleClickNext = async () => {
    setNextClick(true);
    if (razorpayIds.length >= 1 && razorpaySecrets.length >= 1) {
      await razorpayId(razorpayIds, session.user.email);
      await razorpaySecret(razorpaySecrets, session.user.email);

      toast.success('Profile saved!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        router.push("/Dashboard");
      }, 5000);
    } else {
      toast.error("Please fill out all required fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (pathname === "/PaymentDetails") {
      router.replace("/Dashboard"); // Prevent navigation back to PaymentDetails
    }
  }, [pathname, router]);

  if (status === "loading") {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center h-screen"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-black animate-spin fill-pink-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <p className="text-2xl font-semibold mt-3">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex items-center justify-between p-4">
        <a
          href="/PaymentDetails"
          className="flex items-center text-gray-900 cursor-pointer"
        >
          <Image
            src="/kC.png"
            alt="Kindness Cafe Logo"
            width={70}
            height={70}
          />
          <span className={`ml-3 text-xl ${pacifico.className} hidden md:block`}>
            KindnessCafe.com
          </span>
        </a>
      </div>
      <div className="flex justify-center items-center text-3xl font-semibold my-6">
        Complete Your Page
      </div>
      <div className="flex flex-col items-center space-y-6">
        <form className="max-w-sm w-full">
          <div className="mb-6">
            <label
              htmlFor="razorpayId"
              className="block mb-2 text-sm font-medium text-black"
            >
              Razor Pay ID
            </label>
            <input
              type="text"
              id="razorpayId"
              name="razorpayId"
              value={razorpayIds}
              onChange={(e) => setRazorpayIds(e.target.value)}
              required
              placeholder="XXXXXXXXXXXXXX"
              className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs focus:bg-blue-100 font-semibold"
            />
          </div>
          <div>
            <label
              htmlFor="razorpaySecret"
              className="block mb-2 text-sm font-medium text-black"
            >
              Razor Pay Secret
            </label>
            <input
              type="text"
              id="razorpaySecret"
              name="razorpaySecret"
              value={razorpaySecrets}
              onChange={(e) => setRazorpaySecrets(e.target.value)}
              required
              placeholder="XXXXXXXXXXXXXX"
              className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs focus:bg-blue-100 font-semibold"
            />
          </div>
        </form>
        <button
          className={`${poppins.className} text-base bg-[#FFD1DC] px-5 py-2 rounded-3xl cursor-pointer hover:bg-[#feb2c4] transition-all duration-300`}
          onClick={handleClickNext}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;

