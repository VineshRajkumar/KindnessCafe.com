import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
   
    <div>
      {/* <div class="absolute top-0 z-[-2] h-screen w-screen  rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}
      {/* sticky inset-0 -z-10 transition-all duration-500 ease-in-out  */}
      <div>
        <div className="flex justify-center items-center flex-col h-[100vh] max-[556px]:text-sm ">
          <div className="flex items-center pt-32 ">
            <div className="flex flex-row mx-2 max-[556px]:mx-0">
              <FaStar style={{ padding: "2px" }} color="#00FF00" size={20} />
              <FaStar style={{ padding: "2px" }} color="#00FF00" size={20} />
              <FaStar style={{ padding: "2px" }} color="#00FF00" size={20} />
              <FaStar style={{ padding: "2px" }} color="#00FF00" size={20} />
              <FaStar style={{ padding: "2px" }} color="#00FF00" size={20} />
            </div>
            <div>Loved by 1,000,000+ creators</div>
          </div>
          <div className="text-6xl flex flex-col text-center pt-14 pb-8 font-semibold max-[556px]:text-4xl ">
            <div className="pb-5 max-[556px]:pb-3">Fuel Creativity,</div>
            <div>One Cup at a Time</div>
          </div>
          <div className="text-lg mb-28 max-[556px]:text-xs">
            Support Your Favorite Creators at KindnessCafe.com
          </div>
          <a href="/Login" className="text-xl font-semibold bg-[#FFD1DC] px-9 py-6 rounded-full cursor-pointer hover:px-6 hover:py-3 transition-all duration-300  hover:my-3 hover:bg-[#feb2c4]  max-[556px]:text-lg">
            Start My Page
          </a>
        </div>

        <div className="h-[150vh] max-md:h-[400vh]  border-[3px] rounded-3xl bg-white ">
          <div className="flex justify-center pt-20 text-2xl font-semibold ">
            Featured topics
          </div>
          <section className="text-gray-600 body-font pl-4 pt-10 md:pl-14">
            <div className="container flex flex-col-reverse md:flex-row items-start md:items-center">
              <div className="flex justify-center md:justify-end lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
                <Image
                  className="object-cover object-center rounded-2xl"
                  alt="hero"
                  src="/fire.jpg"
                  width={300}
                  height={250}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Urgent Cause
                </h2>
                <h1 className="title-font sm:text-2xl text-3xl mb-4 font-semibold text-gray-900">
                  How to Help: Wildfire Recovery
                </h1>
                <p className="mb-8 leading-relaxed md:pr-0 pr-8">
                  Support those impacted by recent wildfires by contributing to
                  verified fundraisers for affected communities and nonprofit
                  organizations on this page.
                </p>
                <div className="flex justify-center">
                  <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Donate Now
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="/artist.jpg"
                      alt="blog"
                      width={720}
                      height={400}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Community
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        Support Local Artists
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Discover and support local artists by contributing to
                        their projects and helping them thrive in their creative
                        endeavors.
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="/flood.jpg"
                      alt="blog"
                      width={721}
                      height={401}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Urgent Cause
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        Emergency Relief: Flood Victims
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Help provide immediate relief to victims of recent
                        floods by donating to verified fundraising campaigns for
                        emergency assistance and rebuilding efforts.
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="/logo.jpg"
                      alt="blog"
                      width={722}
                      height={402}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        News
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        Small Donations Make a Big Impact
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Every contribution, no matter how small, adds up to make
                        a significant difference. See how your support is
                        changing lives.
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-screen bg-green-950 text-white flex flex-col py-24 px-8 md:py-36 md:px-24 lg:py-48 lg:px-48 font-semibold text-2xl md:text-3xl lg:text-4xl">
          <div className="pb-8 ">You're in Good Hands!!</div>
          <div className="leading-relaxed">
            KindnessCafe is a trusted leader in online support for creators.
            With{" "}
            <span className="underline cursor-pointer">
              transparent pricing
            </span>{" "}
            and a dedicated team of security experts by your side, you can
            contribute or receive donations with complete confidence.
          </div>
        </div>
      </div>
    </div>
    
  );
}
