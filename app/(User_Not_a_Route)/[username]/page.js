
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import React from "react";
import connectDb from "@/db/connectDb";
import User from "@/models/User";


const Page = async ({ params }) => {
  //if username  not notFound
  
  const checkUser = async () => {
    await connectDb();
    let u = await User.findOne({ username: params.username });
    if (!u) {

      return notFound();

    }
  };
  await checkUser()

  return (
    <>
      <PaymentPage username={params.username} />
      {/* //<Dashboard username={params.username}/> */}
    </>
  );
};

export default Page;

function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export async function generateMetadata({ params }){
  // title: "KindnessCafe.com - A Cup of Kindness in Every Brew",
  return {
    title: `${capitalizeFirstLetter(params.username)}`,
    description: "Fueling positivity, one cup at a time",
  };
};

// ---------------------
// "use client"; //<--
// import { IoReorderThreeOutline } from "react-icons/io5";
// import React, { useState, useEffect } from "react";
// import { Pacifico } from "next/font/google";
// import { Poppins } from "next/font/google";
// import { useSession, signOut } from "next-auth/react"; //<--
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { MdInsertPhoto } from "react-icons/md";
// import { FaLink } from "react-icons/fa";
// const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
// const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });
// const poppins600 = Poppins({ weight: "600", subsets: ["latin"] });

// const Page = ({ params }) => {
//   const [desc, setdesc] = useState("");
//   const [weblink, setweblink] = useState("");
//   const [fixedColor, setFixedColor] = useState("");
//   //follow
//   const [count, setCount] = useState(0);
//   const [followers, setFollowers] = useState([]);

//   const [supportersform, setsupportersform] = useState({
//     name: "",
//     messagesome: "",
//     amount: "5",
//   });
//   const [supportersformArray, setsupportersformArray] = useState([]);

//   const [form, setForm] = useState({ Imgurl: "" });
//   const [detailsArray, setDetailsArray] = useState([]);
//   const { data: session, status } = useSession();
//   const [Copy, setCopy] = useState(false);

//   const [one, setOne] = useState(true);
//   const [three, setthree] = useState(false);
//   const [five, setfive] = useState(false);

//   const router = useRouter();

//   const handlecopy = () => {
//     setCopy(true);
//     setTimeout(() => {
//       setCopy(false);
//     }, 1000);
//   };

//   //support
//   useEffect(() => {
//     const details = localStorage.getItem("supporters");
//     if (details) {
//       setsupportersformArray(JSON.parse(details));
//     }
//   }, []);

//   useEffect(() => {
//     const details = localStorage.getItem("coverimg");
//     if (details) {
//       setDetailsArray(JSON.parse(details));
//     }
//   }, []);

//   //follow
//   useEffect(() => {
//     const savedFollowers = JSON.parse(localStorage.getItem("followers")) || [];
//     setFollowers(savedFollowers);
//     setCount(savedFollowers.length);
//   }, []);

//   //desc
//   useEffect(() => {
//     const description = JSON.parse(localStorage.getItem("data"));
//     if (description && Array.isArray(description)) {
//       const lastItem = description[description.length - 1];
//       setdesc(lastItem?.About);
//     }
//   }, []);

//   //weblink
//   useEffect(() => {
//     const linked = JSON.parse(localStorage.getItem("data"));
//     if (linked && Array.isArray(linked)) {
//       const lastItem = linked[linked.length - 1];
//       setweblink(lastItem?.Websiteurl);
//     }
//   }, []);

//   const lightColors = [
//     "rgb(255, 182, 193)", // Light Pink
//     "rgb(255, 223, 186)", // Light Peach
//     "rgb(255, 250, 205)", // Lemon Chiffon
//     "rgb(224, 255, 255)", // Light Cyan
//     "rgb(240, 255, 240)", // Honeydew
//     "rgb(255, 240, 245)", // Lavender Blush
//     "rgb(230, 230, 250)", // Lavender
//     "rgb(245, 245, 220)", // Beige
//   ];

//   const SaveSupportersOnClick = () => {
//     if (
//       supportersform.name.length >= 4 &&
//       supportersform.messagesome.length >= 1
//     ) {
//       const newFormArray = [...supportersformArray, supportersform]; //unpack formarray add last elemt form(which has latest data)
//       setsupportersformArray(newFormArray); //this will update form array

//       localStorage.setItem("supporters", JSON.stringify(newFormArray)); //saving form array in local stroage by converting it ot json string
//       console.log("Done");
//       setsupportersform({ name: "", messagesome: "", amount: "" });
//     }
//   };

//   //follow
//   const SaveFollowersOnClick = () => {
//     const updatedFollowers = [...followers, session.user.email];
//     setFollowers(updatedFollowers);
//     setCount(updatedFollowers.length);
//     localStorage.setItem("followers", JSON.stringify(updatedFollowers));
//   };

//   const handlefollwersclick = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     SaveFollowersOnClick();
//   };

//   const handleSavingSupportersFormToLocalStorage = (e) => {
//     setsupportersform({ ...supportersform, [e.target.name]: e.target.value });
//   };

//   // const handleSavingFollwersFormToLocalStorage = (e) => {
//   //   setfollowform({ ...followform, [e.target.name]: count });
//   // };

//   const handleSavingFormToLocalStorage = (updatedForm) => {
//     const newFormArray = [...detailsArray, updatedForm];
//     setDetailsArray(newFormArray);
//     localStorage.setItem("coverimg", JSON.stringify(newFormArray));
//   };

//   const handleLogout = async () => {
//     await signOut({ callbackUrl: "/" });
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleBlur = () => {
//     setTimeout(() => {
//       setIsOpen(false);
//     }, 300); // Delaying to allow the click event to register
//   };
//   const handleshowingimage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = (e) => {
//         setForm({ Imgurl: e.target.result });
//         handleSavingFormToLocalStorage({ Imgurl: e.target.result });
//       };
//     }
//   };

//   if (status === "loading") {
//     return (
//       <div
//         role="status  "
//         className="flex flex-row items-center justify-center h-screen "
//       >
//         <svg
//           aria-hidden="true"
//           className="inline w-8 h-8 text-black animate-spin  fill-pink-500"
//           viewBox="0 0 100 101"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//             fill="currentColor"
//           />
//           <path
//             d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//             fill="currentFill"
//           />
//         </svg>
//         <span className="sr-only">Loading...</span>
//         <p className="text-2xl font-semibold ml-3 ">
//           ☕Crafting Your Delight...
//         </p>
//       </div>
//     );
//   }

//   const handleone = () => {
//     setOne(true);
//     setthree(false);
//     setfive(false);
//     setsupportersform({ ...supportersform, amount: "5" });
//   };
//   const handlethree = () => {
//     setthree(true);
//     setOne(false);
//     setfive(false);
//     setsupportersform({ ...supportersform, amount: "15" });
//   };
//   const handlfive = () => {
//     setfive(true);
//     setthree(false);
//     setOne(false);
//     setsupportersform({ ...supportersform, amount: "25" });
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-between bg-white border-black shadow-md max-[726px]:justify-end">
//         <div className="ml-5 max-[726px]:hidden">
//           <a
//             href={`/${session.user.email.split("@")[0]}`}
//             className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer p-3"
//           >
//             <img
//               src={session.user.image}
//               alt="userimg"
//               width={50}
//               height={50}
//               className="rounded-md"
//             />
//             <div className="flex flex-col">
//               <span
//                 className={`ml-5 text-lg ${poppins600.className} cursor-pointer max-[425px]:hidden`}
//               >
//                 {session.user.email.split("@")[0]}
//               </span>
//               <span className="ml-5 text-sm font-normal text-gray-600">
//                 {count} supporters
//               </span>
//             </div>
//             <div>
//               <button
//                 onClick={handlefollwersclick}
//                 className={`${poppins400.className} text-base bg-[#FFD1DC] ml-4 px-5 py-2 rounded-3xl cursor-pointer hover:px-6 hover:py-3 transition-all duration-300 hover:mx-3 hover:-my-1 hover:bg-[#feb2c4] max-[500px]:hover:px-6 max-[500px]:hover:py-3`}
//               >
//                 Follow
//               </button>
//             </div>
//           </a>
//         </div>

//         <div className="flex justify-end px-10 max-[726px]:flex ">
//           <div className="relative">
//             {session ? (
//               <>
//                 <button
//                   id="dropdownAvatarNameButton"
//                   onClick={toggleDropdown}
//                   onBlur={handleBlur}
//                   className=" flex items-center text-sm py-1 px-1 font-medium relative z-20 shadow-md rounded-full hover:text-blue-600  md:me-0 focus:ring-1 focus:ring-black bg-white border-[2px]"
//                   type="button"
//                 >
//                   {/* <svg
//                       className="w-2.5 h-2.5 ms-3 mr-3"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 10 6"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 4 4 4-4"
//                       />
//                     </svg> */}
//                   <IoReorderThreeOutline className=" ms-1 mr-2" size={25} />

//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     className="w-8 h-8  rounded-full"
//                     src={session.user.image}
//                     alt="user photo"
//                   />
//                   {session.user.name}
//                 </button>

//                 {/* Dropdown menu */}
//                 <div
//                   id="dropdownAvatarName"
//                   className={` absolute right-1 mt-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44  transition-all duration-300 ease-in-out transform ${
//                     isOpen
//                       ? "opacity-100 scale-100"
//                       : "opacity-0 scale-95 pointer-events-none"
//                   }`}
//                 >
//                   {/* <div className="px-4 pt-3 text-sm text-gray-900  ">
//                       <div className="font-medium ">{session.user.name}</div>
//                       <div className="truncate">{session.user.email}</div>
//                     </div> */}
//                   <ul
//                     className=" text-sm text-black"
//                     aria-labelledby="dropdownAvatarNameButton"
//                   >
//                     <li>
//                       <a
//                         href="/Dashboard"
//                         className="block px-4 py-3 hover:bg-gray-100 font-semibold"
//                       >
//                         Dashboard
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href={`/${session.user.email.split("@")[0]}`}
//                         className="block px-4 py-3 hover:bg-gray-100 font-semibold"
//                       >
//                         View my page
//                       </a>
//                     </li>
//                   </ul>
//                   <div className="">
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-3 border-y-2 text-sm text-gray-500 hover:bg-gray-100 "
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               ""
//             )}
//           </div>
//         </div>
//       </div>

//       <div className=" ">
//         <div className="max-w-screen-2xl mx-auto ">
//           <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
//             {detailsArray.length > 0 && (
//               <Link href="#">
//                 <img
//                   className="w-full max-h-[370px] my-1 object-cover"
//                   src={detailsArray[detailsArray.length - 1].Imgurl}
//                   alt="User Uploaded"
//                   width={1500}
//                   height={625}
//                 />
//               </Link>
//             )}
//             <div>
//               <input
//                 type="file"
//                 id="upload_profile"
//                 name="Imgurl"
//                 onChange={handleshowingimage}
//                 hidden
//                 required
//               />
//               <label htmlFor="upload_profile">
//                 <MdInsertPhoto
//                   className="border-[2px] absolute top-20 z-20 inset-0 text-black"
//                   size={30}
//                 />
//               </label>
//             </div>
//             <hr />
//           </div>
//         </div>
//         <div className="flex justify-evenly items-start -mt-32 mb-10 max-[726px]:-mt-28">
//           <div className="flex   items-start gap-x-7 max-[726px]:flex max-[726px]:flex-col max-[726px]:items-center">
//             <div className="flex items-center justify-between  ">
//               <div className="min-[726px]:hidden">
//                 <a
//                   href={`/${session.user.email.split("@")[0]}`}
//                   className="flex flex-col  title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer p-3  "
//                 >
//                   <img
//                     src={session.user.image}
//                     alt="userimg"
//                     width={100}
//                     height={100}
//                     className="rounded-md border-white border-[3px] shadow-lg mb-2 "
//                   />
//                   <div className="flex justify-center flex-col items-center">
//                     <span
//                       className={`ml-5 mb-1 text-lg ${poppins600.className} cursor-pointer`}
//                     >
//                       {session.user.email.split("@")[0]}
//                     </span>
//                     <div className=" text-sm font-normal text-gray-600 pb-3">
//                       {count} supporters
//                     </div>
//                     <button
//                       onClick={handlefollwersclick}
//                       className={`${poppins400.className} text-base  bg-[#FFD1DC]  px-5 py-2 rounded-3xl cursor-pointer hover:px-6 hover:py-3 transition-all duration-300 hover:mx-3 hover:-my-1 hover:bg-[#feb2c4] max-[500px]:hover:px-6 max-[500px]:hover:py-3`}
//                     >
//                       Follow
//                     </button>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <div className="flex flex-col max-[726px]:mb-10 ">
//               <div className="relative mx-auto max-w-lg  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
//                 <div className="bg-white p-7 rounded-md max-[361px]:p-5 max-[350px]:p-3 max-[330px]:p-2 max-[330px]:pt-4">
//                   <div className="flex items-center mb-10">
//                     <div>
//                       <h1
//                         className={`font-bold text-xl ${poppins600.className} max-[361px]:text-lg mb-3`}
//                       >
//                         About {session.user.email.split("@")[0]}
//                       </h1>
//                       <p className={`text-sm ${poppins400.className}  `}>
//                         {desc}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-row items-center justify-start ">
//                     <div className="ml-2">
//                       <a
//                         href={weblink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <button>
//                           <FaLink size={25} />
//                         </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* hide-scrollbar */}
//                 <div className="overflow-auto h-[320px] max-[426px]:overflow-auto max-[426px]:h-[320px]  relative mx-auto max-w-lg max-[889px]:size-auto rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg ">
//                   <div className="bg-white p-7 rounded-md ">
//                     <h1 className="font-bold text-xl mb-5 flex justify-start items-center max-[392px]:text-lg max-[360px]:text-[15px]">
//                       Recent supporters
//                     </h1>
//                     {supportersformArray.length === 0 ? (
//                       <div>
//                         <div className="flex justify-center pb-4 items-center ">
//                           <lord-icon
//                             src="https://cdn.lordicon.com/ulnswmkk.json"
//                             trigger="hover"
//                             colors="primary:#ee66aa"
//                             style={{ width: "120px", height: "120px" }}
//                           ></lord-icon>
//                         </div>

//                         <p className="flex justify-center items-center max-[445px]:text-sm max-[397px]:text-xs max-[360px]:text-[10px] ">
//                           Be the first one to support{" "}
//                           {session.user.email.split("@")[0]}.
//                         </p>
//                       </div>
//                     ) : (
//                       <div>
//                         {supportersformArray.map((item, index) => {
//                           const randomIndex = Math.floor(
//                             Math.random() * lightColors.length
//                           );
//                           const fixedColor = lightColors[randomIndex];

//                           return (
//                             <div className="flex items-center pb-5" key={index}>
//                               <div
//                                 className={`flex items-center justify-center rounded-full w-10 h-10 mr-2`}
//                                 style={{ backgroundColor: fixedColor }}
//                               >
//                                 <span className="material-symbols-outlined">
//                                   local_cafe
//                                 </span>
//                               </div>
//                               <div className="flex flex-col ">
//                                 <div className="pb-1">
//                                   <span className="font-semibold">
//                                     {item.name}
//                                   </span>{" "}
//                                   bought {item.amount} coffees.
//                                 </div>
//                                 <div className="bg-pink-200 rounded-md pl-2 py-1">
//                                   {item.messagesome}
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className=" ">
//               <div className="flex mx-auto max-w-lg rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
//                 <div className="bg-white p-7 rounded-md max-[426px]:hidden ">
//                   <div className="flex items-center mb-10">
//                     <div>
//                       <h1
//                         className={`font-bold text-xl ${poppins600.className} max-[361px]:text-lg mb-6`}
//                       >
//                         Buy {session.user.email.split("@")[0]} a Cup of Coffee
//                       </h1>

//                       <div className="block max-w-sm p-6 bg-white border border-pink-600 rounded-lg shadow mb-4 ">
//                         <div className="mb-2 text-2xl font-bold tracking-tight text-black flex flex-row gap-x-6 items-center  ">
//                           <div className="text-5xl ">☕</div>
//                           <div className="text-lg text-gray-600">X</div>
//                           <button
//                             className={`border-pink-400 border-[1px] flex items-center justify-center w-8 h-8 rounded-full hover:border-pink-700 cursor-pointer ${
//                               one ? "bg-pink-500 text-white" : ""
//                             } `}
//                             onClick={handleone}
//                           >
//                             1
//                           </button>
//                           <button
//                             className={`border-pink-400 border-[1px] flex items-center justify-center w-8 h-8 rounded-full hover:border-pink-700 cursor-pointer ${
//                               three ? "bg-pink-500 text-white" : ""
//                             } `}
//                             onClick={handlethree}
//                           >
//                             3
//                           </button>
//                           <button
//                             className={`border-pink-400 border-[1px] flex items-center justify-center w-8 h-8 rounded-full hover:border-pink-700 cursor-pointer ${
//                               five ? "bg-pink-500 text-white" : ""
//                             } `}
//                             onClick={handlfive}
//                           >
//                             5
//                           </button>
//                         </div>
//                       </div>

//                       <div className="mb-4">
//                         <input
//                           type="text"
//                           id="name"
//                           className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-pink-500 focus:border-[2px] focus:border-pink-500 block w-full p-3 hover:bg-gray-200"
//                           placeholder="Name or @yoursocial"
//                           value={supportersform.name}
//                           name="name"
//                           onChange={handleSavingSupportersFormToLocalStorage}
//                           required
//                         />
//                       </div>
//                       <div className="mb-10">
//                         <textarea
//                           type="text"
//                           id="message"
//                           className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-pink-500 focus:border-[2px] focus:border-pink-500 block w-full p-3 hover:bg-gray-200 pb-10"
//                           placeholder="Say something nice..."
//                           value={supportersform.messagesome}
//                           name="messagesome"
//                           onChange={handleSavingSupportersFormToLocalStorage}
//                           required
//                         />
//                       </div>

//                       <div className="flex justify-center">
//                         <button
//                           href="#"
//                           className={`${poppins600.className} text-base text-white bg-pink-500 px-36 py-3 rounded-3xl cursor-pointer hover:px-[150px] hover:py-4 transition-all duration-300 hover:-mx-1 hover:-my-1 hover:bg-pink-600  `}
//                           onClick={SaveSupportersOnClick}
//                         >
//                           Support {one ? "$5" : ""}
//                           {three ? "$15" : ""}
//                           {five ? "$25" : ""}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* hidden one */}
//             <div className="flex flex-col min-[426px]:hidden">
//               <div className="relative mx-auto max-w-lg  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
//                 <div className="bg-white p-7 rounded-md max-[361px]:p-5 max-[350px]:p-3 max-[330px]:p-2 max-[330px]:pt-4">
//                   <div className="flex items-center mb-10">
//                     <div>
//                       <h1
//                         className={`font-bold text-xl ${poppins600.className} max-[361px]:text-lg max-[330px]:text-base mb-5`}
//                       >
//                         Buy {params.username} a coffee
//                       </h1>

//                       <div className="block max-w-xs  bg-white border border-pink-600 rounded-lg shadow p-1 ">
//                         <div className="text-2xl font-bold text-black flex flex-row items-center justify-center gap-x-5 ">
//                           <div className="text-4xl ">☕</div>
//                           <div className="text-sm text-gray-600">X</div>
//                           <button
//                             className={`border-pink-400 border-[1px] flex items-center justify-center w-8 h-8 rounded-full hover:border-pink-700 cursor-pointer ${
//                               one ? "bg-pink-500 text-white" : ""
//                             } `}
//                             onClick={handleone}
//                           >
//                             1
//                           </button>
//                           <button
//                             className={`border-pink-400 border-[1px] flex items-center justify-center w-8 h-8 rounded-full hover:border-pink-700 cursor-pointer ${
//                               three ? "bg-pink-500 text-white" : ""
//                             } `}
//                             onClick={handlethree}
//                           >
//                             3
//                           </button>
//                           <button
//                             className={`border-pink-400 border-[1px] flex items-center justify-center w-8 h-8 rounded-full hover:border-pink-700 cursor-pointer ${
//                               five ? "bg-pink-500 text-white" : ""
//                             } `}
//                             onClick={handlfive}
//                           >
//                             5
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <form action="" method="post" className="">
//                     <div className="mb-4">
//                       <input
//                         type="text"
//                         id="name"
//                         className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-pink-500 focus:border-[2px] focus:border-pink-500 block w-full p-3 hover:bg-gray-200"
//                         placeholder="Name or @yoursocial"
//                         value={supportersform.name}
//                         name="name"
//                         onChange={handleSavingSupportersFormToLocalStorage}
//                         required
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <textarea
//                         className="border-2 w-full border-gray-300 bg-white h-20 px-4 py-3 rounded-lg text-sm focus:outline-none resize-none max-[330px]:h-10"
//                         placeholder="Say something nice..."
//                         value={supportersform.messagesome}
//                         name="messagesome"
//                         onChange={handleSavingSupportersFormToLocalStorage}
//                         required
//                       />
//                     </div>
//                     <div className="grid grid-cols-1">
//                       <button
//                         type="submit"
//                         className={`w-full py-3 rounded-lg ${poppins600.className} text-white text-sm bg-pink-500 hover:bg-pink shadow-lg`}
//                         onClick={SaveSupportersOnClick}
//                       >
//                         Support {one ? "$5" : ""}
//                         {three ? "$15" : ""}
//                         {five ? "$25" : ""}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

// ------------

//   return (
//     <div>

//       <div className=" ">

//         <div className="flex justify-evenly items-start -mt-32 mb-10 max-[726px]:-mt-28">
//           <div className="flex   items-start gap-x-7 max-[726px]:flex max-[726px]:flex-col max-[726px]:items-center">

//             <div className="flex flex-col max-[726px]:mb-10">
//               <div className="relative mx-auto max-w-lg  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
//                 <div className="bg-white p-7 rounded-md max-[361px]:p-5 max-[350px]:p-3 max-[330px]:p-2 max-[330px]:pt-4">
//                   <div className="flex items-center mb-10">
//                     <div>
//                       <h1
//                         className={`font-bold text-xl ${poppins600.className} max-[361px]:text-lg max-[330px]:text-base`}
//                       >
//                         Buy {params.id} a coffee
//                       </h1>
//                       <p className="text-gray-500 font-semibold text-base">
//                         x 1
//                       </p>
//                     </div>
//                     <div className="ml-auto text-lg">
//                       <p
//                         className={` font-semibold ${poppins600.className} max-[361px]:text-lg`}
//                       >
//                         $5
//                       </p>
//                     </div>
//                   </div>
//                   <form action="" method="post" className="">
//                     <div className="mb-4">
//                       <textarea
//                         className="border-2 w-full border-gray-300 bg-white h-20 px-4 py-3 rounded-lg text-sm focus:outline-none resize-none max-[330px]:h-10"
//                         name="message"
//                         placeholder="Say something nice..."
//                         defaultValue={""}
//                       />
//                     </div>
//                     <div className="grid grid-cols-1">
//                       <button
//                         type="submit"
//                         className={`w-full py-3 rounded-lg ${poppins600.className} text-white text-sm bg-gradient-to-r from-pink-500 to-blue-400 shadow-lg`}
//                       >
//                         Support
//                       </button>
//                     </div>
//                   </form>
//                   <hr className="my-4" />
//                   <div className="flex justify-between items-center">
//                     <button className="font-semibold flex items-center gap-1 max-[330px]:text-xs">
//                       <FaLink size={18} />
//                       <span>Share</span>
//                     </button>
//                     <button
//                       onClick={handlecopy}
//                       className="font-semibold flex items-center gap-1 max-[330px]:text-xs"
//                     >
//                       <FaLink size={18} />
//                       {Copy ? (
//                         <span>Link Copied</span>
//                       ) : (
//                         <span>Copy link</span>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-5 text-center text-sm text-gray-500">
//                 <p>
//                   100% of your contribution will go to {params.id}.
//                 </p>
//                 <p>
//                   Payments secured by our platform.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
