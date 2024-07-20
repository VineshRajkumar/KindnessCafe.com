import React from "react";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { IoMdSearch } from "react-icons/io";
import { IoBulbOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlinePhotoCamera } from "react-icons/md";
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const page = () => {
  return (
    <div>
      <div className="border-transparent border-[1px] pb-16 background-image w-full">
        <div className="flex my-7 font-medium  justify-evenly text-gray-900 ">
          <div className=" flex flex-col">
            <a href="/Help_Center" className="flex flex-row items-center  ">
              <Image
                src="/kC.png"
                alt="Kindness Cafe Logo"
                width={70}
                height={10}
              />
              <span
                className={`ml-3 text-xl ${pacifico.className} cursor-pointer`}
              >
                KindnessCafe.com
              </span>
            </a>
            <div className="my-7 font-semibold text-2xl mx-3 max-[353px]:text-xl ">
              Need assistance? Email support@kindnesscafe.com
            </div>
            <div className="relative  ">
              <IoMdSearch className="absolute z-20 left-6 top-3 w-7 h-7  " />
              <input
                type="text"
                placeholder="Search for articles..."
                className="absolute mx-3 bg-transparent pl-12   h-14 rounded-xl outline-none shadow-lg border-gray-600 placeholder:text-black  z-10 hover:shadow-2xl transition-all duration-300 focus:bg-white"
              />
            </div>
          </div>
          <a
            href="/"
            className="flex items-start cursor-pointer max-[500px]:hidden text-white"
          >
            Go to Knowledge Base | KindnessCafe.com
          </a>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-7 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3  ">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:border-[1px] hover:border-black hover:transition-all hover:duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <IoBulbOutline />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    New on KindnessCafe.com? Start here
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Everything you need to know to get started.
                  </p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:border-[1px] hover:border-black hover:transition-all hover:duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <FaArrowTrendUp />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Growing your Supporters
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Read more to know what measures you can take to grow your
                    supporters.
                  </p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:border-[1px] hover:border-black hover:transition-all hover:duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <GrGroup />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Launching your Membership
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Get the complete context on what membership is and how to
                    earn with memberships.
                  </p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pb-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:border-[1px] hover:border-black hover:transition-all hover:duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <HiOutlinePaintBrush />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Create and Earn with KindnessCafe.com Commissions
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Know more about the ultimate platform for creators to offer
                    their services.
                  </p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:border-[1px] hover:border-black hover:transition-all hover:duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <HiOutlinePencilSquare />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Explore what’s possible with Post
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    See how creative you can be while creating a post.
                  </p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:border-[1px] hover:border-black hover:transition-all hover:duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                    <MdOutlinePhotoCamera />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Share the images you love on Gallery
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    The essentials for creating a stunning gallery
                  </p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
