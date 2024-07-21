"use client"; //<--
//NOTE- those with <-- symbol are NextAuth authentication
import { IoReorderThreeOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { Poppins } from "next/font/google";
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins600 = Poppins({ weight: "600", subsets: ["latin"] });
import { useSession, signIn, signOut } from "next-auth/react"; //<--
import { useRouter, usePathname } from "next/navigation";
import { fetchpayments, initiate, fetchuser } from "@/actions/useractions";

const DasboardPage = ({ username }) => {
  //const [currentUser, setcurrentUser] = useState({})
  const [payments, setpayments] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [Copy, setCopy] = useState(false);
  const pathname = usePathname();
  const [money, setmoney] = useState(0);
  const [supportersformArray, setsupportersformArray] = useState([]);

  const getData = async () => {
    //let u = await fetchuser(username)
    //setcurrentUser(u)
    //console.log('User Email:', session.user.email);
    //console.log("Fetching payments for:", username);
    let dbpayments = await fetchpayments(username);

    setpayments(dbpayments);
    //console.log(dbpayments.amount);
    //setdone(dbpayments.done);
    //console.log(dbpayments.done);
    //console.log() //make a usesate done and verify from that
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let sum = 0;
    payments.map((item, index) => {
        { if (item.done === true){
        sum=sum + (item.amount/100)
        }}
    })
    setmoney(sum)
    // const countmoney = JSON.parse(localStorage.getItem("supporters"));
    // const countmoney = payments;
    // if (countmoney && Array.isArray(countmoney)) {
    //   const totalAmount = countmoney.reduce((accumulator, currentItem) => {
    //     return accumulator + currentItem?.amount || 0; // Safely add amount
        
    //   }, 0);
      
    //   setmoney(money + totalAmount);
    // }
  }, [payments]);

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("supporters"));
    setsupportersformArray(array);
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
        role="status  "
        className="flex flex-row items-center justify-center h-screen "
      >
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-black animate-spin  fill-pink-500"
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
        <p className="text-2xl font-semibold ml-3 ">Loading content...</p>
      </div>
    );
  }

  const handlecopy = () => {
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
                    className=" flex items-center text-sm py-1 px-1 font-medium relative z-20 shadow-md rounded-full hover:text-blue-600  md:me-0 focus:ring-1 focus:ring-black bg-white border-[2px]"
                    type="button"
                  >
                    {/* <svg
                      className="w-2.5 h-2.5 ms-3 mr-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg> */}
                    <IoReorderThreeOutline className=" ms-1 mr-2" size={25} />

                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8  rounded-full"
                      src={session.user.image}
                      alt="user photo"
                    />
                    {session.user.name}
                  </button>

                  {/* Dropdown menu */}
                  <div
                    id="dropdownAvatarName"
                    className={` absolute right-1 mt-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44  transition-all duration-300 ease-in-out transform ${
                      isOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {/* <div className="px-4 pt-3 text-sm text-gray-900  ">
                      <div className="font-medium ">{session.user.name}</div>
                      <div className="truncate">{session.user.email}</div>
                    </div> */}
                    <ul
                      className=" text-sm text-black"
                      aria-labelledby="dropdownAvatarNameButton"
                    >
                      <li>
                        <a
                          href="/Dashboard"
                          className="block px-4 py-3 hover:bg-gray-100 font-semibold"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${session.user.email.split("@")[0]}`}
                          className="block px-4 py-3 hover:bg-gray-100 font-semibold"
                        >
                          View my page
                        </a>
                      </li>
                    </ul>
                    <div className="">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-3 border-y-2 text-sm text-gray-500 hover:bg-gray-100 "
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <div className=" flex justify-center max-w-4xl mx-auto shadow-lg shadow-gray-500 max-[889px]:max-w-3xl  max-[770px]:max-w-2xl max-[770px]:h-screen max-[671px]:max-w-xl  max-[671px]:h-screen max-[368px]:max-w-lg  max-[368px]:h-screen max-[361px]:w-screen  max-[361px]:h-screen">
              <div className="absolute z-10 mt-10  ">
                <div className="">
                  <div className="relative mx-auto max-w-4xl  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                    <div className="bg-white p-7 rounded-md max-[361px]:p-5 max-[350px]:p-3 max-[330px]:p-2 max-[330px]:pt-4">
                      <div className="flex items-center mb-10">
                        <img
                          className="w-16 h-16  mr-6 rounded-full  "
                          src={session.user.image}
                          alt="user photo"
                        />
                        <div>
                          <h1
                            className={`font-bold text-xl ${poppins600.className} max-[361px]:text-lg pb-1 `}
                          >
                            {/* Hi, {session.user.email.split("@")[0]} */}
                            Hi, {session.user.email.split("@")[0]}
                          </h1>
                          <p
                            className={`text-sm ${poppins400.className} cursor-pointer max-[400px]:text-xs max-[352px]:text-[11px] `}
                          >
                            {`http://localhost:3000/${
                              session.user.email.split("@")[0]
                            }`}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-evenly ">
                        <div className="mx-8">
                          <h2 className="text-2xl font-medium pb-3">
                            Earnings
                          </h2>
                          <div className="text-5xl font-bold">${money}</div>
                        </div>
                        <div className="mx-8">
                          <button
                            type="button"
                            className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 ${
                              Copy ? "px-[29.5px]" : ""
                            }`}
                            onClick={handlecopy}
                          >
                            {Copy ? "Copied" : "Copy Link"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative mx-auto max-w-md max-[889px]:size-auto rounded-lg bg-gradient-to-tr  from-pink-300 to-blue-300 p-0.5 shadow-lg ">
                    <div className="overflow-auto h-[260px]  max-[426px]:overflow-auto max-[426px]:h-[260px]  relative mx-auto max-w-lg max-[889px]:size-auto rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg ">
                      <div className="bg-white p-7  rounded-md ">
                        {payments.length === 0 ? (
                          <div>
                            <div className="flex justify-center pb-4 items-center ">
                              <lord-icon
                                src="https://cdn.lordicon.com/ulnswmkk.json"
                                trigger="hover"
                                colors="primary:#ee66aa"
                                style={{ width: "120px", height: "120px" }}
                              ></lord-icon>
                            </div>
                            <h1 className="font-bold text-xl mb-2 flex justify-center items-center max-[392px]:text-lg max-[360px]:text-[15px]">
                              You don&apos;t have any supporters yet
                            </h1>
                            <p className="flex justify-center text-[15.9px] items-center max-[445px]:text-sm max-[397px]:text-xs max-[360px]:text-[10px] ">
                              Share your page with your audience to get started.
                            </p>
                          </div>
                        ) : (
                          <div>
                            {
                            payments.map((item, index) => {
                                { if (item.done === true){
                              const randomIndex = Math.floor(
                                Math.random() * lightColors.length
                              );
                              const fixedColor = lightColors[randomIndex];

                              return (
                                <div
                                  className="flex items-center pb-5"
                                  key={index}
                                >
                                  <div
                                    className={`flex items-center justify-center rounded-full w-10 h-10 mr-2`}
                                    style={{ backgroundColor: fixedColor }}
                                  >
                                    <span className="material-symbols-outlined">
                                      local_cafe
                                    </span>
                                  </div>
                                  <div className="flex flex-col ">
                                    <div className="pb-1">
                                      <span className="font-semibold">
                                        {item.name}
                                      </span>{" "}
                                      bought {item.amount/100} coffees.
                                    </div>
                                    <div className="bg-pink-200 rounded-md pl-2 py-1">
                                      {item.message}
                                    </div>
                                  </div>
                                </div>
                              );}
                            }
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className=" w-full object-cover rounded-md "
                src="6.avif"
                alt="Random image"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasboardPage;
