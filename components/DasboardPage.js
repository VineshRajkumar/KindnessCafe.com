"use client";
import { IoReorderThreeOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { fetchpayments, initiate, fetchuser } from "@/actions/useractions";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins600 = Poppins({ weight: "600", subsets: ["latin"] });

const DasboardPage = ({ username }) => {
  const [payments, setPayments] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [copy, setCopy] = useState(false);
  const pathname = usePathname();
  const [money, setMoney] = useState(0);
  const [supportersFormArray, setSupportersFormArray] = useState([]);

  const getData = async () => {
    try {
      const dbPayments = await fetchpayments(username);
      setPayments(dbPayments);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  useEffect(() => {
    if (session) {
      getData();
    }
  }, [session]);

  useEffect(() => {
    const sum = payments.reduce((acc, item) => {
      return item.done ? acc + item.amount / 100 : acc;
    }, 0);
    setMoney(sum);
  }, [payments]);

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("supporters"));
    setSupportersFormArray(array || []);
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const lightColors = [
    "rgb(255, 182, 193)", // Light Pink
    "rgb(255, 223, 186)", // Light Peach
    "rgb(255, 250, 205)", // Lemon Chiffon
    "rgb(224, 255, 255)", // Light Cyan
    "rgb(240, 255, 240)", // Honeydew
    "rgb(255, 240, 245)", // Lavender Blush
    "rgb(230, 230, 250)", // Lavender
    "rgb(245, 245, 220)", // Beige
  ];

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Delaying to allow the click event to register
  };

  if (status === "loading") {
    return (
      <div
        role="status"
        className="flex flex-row items-center justify-center h-screen"
      >
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
        <p className="text-2xl font-semibold ml-3">Loading content...</p>
      </div>
    );
  }

  const handleCopy = () => {
    const format = `http://localhost:3000/${session.user.email.split("@")[0]}`;
    navigator.clipboard.writeText(format);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between">
          <div>
            <a
              href="/Dashboard"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer p-3"
            >
              <Image
                src="/kC.png"
                alt="Kindness Cafe Logo"
                width={70}
                height={70}
              />
              <span
                className={`ml-3 text-xl ${pacifico.className} cursor-pointer max-[425px]:hidden`}
              >
                KindnessCafe.com
              </span>
            </a>
          </div>

          <div className="flex justify-end px-10">
            <div className="relative">
              {session ? (
                <>
                  <button
                    id="dropdownAvatarNameButton"
                    onClick={toggleDropdown}
                    onBlur={handleBlur}
                    className="flex items-center text-sm py-1 px-1 font-medium relative z-20 shadow-md rounded-full hover:text-blue-600 md:me-0 focus:ring-1 focus:ring-black bg-white border-[2px]"
                    type="button"
                  >
                    <IoReorderThreeOutline className="ms-1 mr-2" size={25} />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={session.user.image}
                      alt="user photo"
                    />
                    {session.user.name}
                  </button>

                  {/* Dropdown menu */}
                  <div
                    id="dropdownAvatarName"
                    className={`absolute right-1 mt-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 transition-all duration-300 ease-in-out transform ${
                      isOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <div className="p-3 text-gray-900">
                      <h5 className="text-lg font-bold truncate">{session.user.email}</h5>
                      <p className="text-sm text-gray-500">{session.user.name}</p>
                    </div>
                    <ul
                      className="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownAvatarNameButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="text-lg font-semibold mb-2">
              Welcome back, {session?.user?.name || "User"}!
            </div>
            <div className="text-gray-500 text-sm mb-4">
              Your profile link:{" "}
              <button
                onClick={handleCopy}
                className="text-blue-500 hover:underline"
              >
                {copy ? "Copied!" : `Copy Profile Link`}
              </button>
            </div>

            <h2 className="text-xl font-bold mb-4">Your Payments</h2>
            {payments.length === 0 ? (
              <p>No payments found.</p>
            ) : (
              <ul>
                {payments.map((payment, index) => (
                  <li key={index} className="mb-2">
                    {payment.done ? (
                      <span className="text-green-500">{payment.amount / 100} USD</span>
                    ) : (
                      <span className="text-red-500">Pending</span>
                    )}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4">
              <button
                onClick={() => initiate(username)}
                className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Initiate Payment
              </button>
            </div>
          </div>

          {/* Add other content as needed */}
        </div>
      </div>
    </div>
  );
};

export default DasboardPage;

