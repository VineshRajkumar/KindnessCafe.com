"use client";

import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const [form, setForm] = useState({ About: "", Websiteurl: "" });
  const [detailsArray, setDetailsArray] = useState([]);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [nextClick, setNextClick] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const details = localStorage.getItem("data");
    if (details) {
      setDetailsArray(JSON.parse(details));
    }
  }, []);

  const handleSavingFormToLocalStorage = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveDetailsOnClick = () => {
    if (form.About.length >= 1 && form.Websiteurl.length >= 3) {
      const newFormArray = [...detailsArray, form];
      setDetailsArray(newFormArray);
      localStorage.setItem("data", JSON.stringify(newFormArray));
      setForm({ About: "", Websiteurl: "" });
    }
  };

  const handleClickNext = () => {
    setNextClick(true);
    if (form.About.length >= 1 && form.Websiteurl.length >= 3) {
      router.push("/PaymentDetails");
    } else if (form.Websiteurl.length < 3) {
      alert("Website Link is Required");
    } else {
      alert("Please fill out all required fields.");
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const [imgSrc, setImgSrc] = useState(
    "https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCombinedChange = (e) => {
    handleSavingFormToLocalStorage(e);
    handleImageChange(e);
  };

  if (status === "loading") {
    return (
      <div role="status" className="flex flex-row items-center justify-center h-screen">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-black animate-spin fill-pink-500"
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
        <span className="sr-only">Loading...</span>
        <p className="text-2xl font-semibold ml-3">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <a
          href="/Logged_In"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer p-3"
        >
          <Image src="/kC.png" alt="Kindness Cafe Logo" width={70} height={70} />
          <span className={`ml-3 text-xl ${pacifico.className} cursor-pointer max-[425px]:hidden`}>
            KindnessCafe.com
          </span>
        </a>
        <div className="flex justify-end p-3">
          <button
            onClick={() => signOut("github")}
            type="button"
            className="text-black bg-pink-100 border focus:outline-none hover:bg-pink-50 focus:ring-1 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center text-3xl font-semibold">
        Complete your page
      </div>
      <div className="flex flex-row justify-center space-x-16 space-y-24 max-[537px]:space-y-12 max-[537px]:flex max-[537px]:flex-col">
        <div className="flex mt-10 max-[537px]:pt-5 max-[537px]:flex max-[537px]:justify-center">
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label htmlFor="small-input" className="block mb-1 text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                id="small-input"
                disabled={true}
                placeholder={session?.user?.email.split("@")[0] || "User"}
                className="block w-full p-2 text-gray-900 placeholder:text-black border border-gray-300 rounded-lg bg-gray-100 text-xs focus:bg-blue-100 font-semibold placeholder:font-normal"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="large-input" className="block mb-1 text-sm font-medium text-black">
                About
              </label>
              <input
                type="text"
                id="large-input"
                value={form.About}
                onChange={handleSavingFormToLocalStorage}
                name="About"
                placeholder="About"
                className="block w-full p-2 text-gray-900 placeholder:text-black border border-gray-300 rounded-lg bg-gray-100 text-xs focus:bg-blue-100 font-semibold placeholder:font-normal"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="website-input" className="block mb-1 text-sm font-medium text-black">
                Website URL
              </label>
              <input
                type="text"
                id="website-input"
                value={form.Websiteurl}
                onChange={handleSavingFormToLocalStorage}
                name="Websiteurl"
                placeholder="Website URL"
                className="block w-full p-2 text-gray-900 placeholder:text-black border border-gray-300 rounded-lg bg-gray-100 text-xs focus:bg-blue-100 font-semibold placeholder:font-normal"
              />
            </div>
            <div className="flex justify-center mb-5">
              <input
                type="file"
                id="image-input"
                accept="image/*"
                onChange={handleCombinedChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200"
              />
            </div>
            <div className="flex justify-center mb-5">
              <button
                type="button"
                onClick={saveDetailsOnClick}
                className="text-black bg-pink-100 border focus:outline-none hover:bg-pink-50 focus:ring-1 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center max-[537px]:pt-5">
          <Image
            src={imgSrc}
            alt="Profile Image"
            width={300}
            height={300}
            className="rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <button
          type="button"
          onClick={handleClickNext}
          className="text-white bg-pink-500 border border-black focus:outline-none hover:bg-pink-600 focus:ring-1 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;

