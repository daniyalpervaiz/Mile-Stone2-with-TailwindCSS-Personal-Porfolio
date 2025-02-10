import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
export default function Skills() {
    return (<div id="skills">
        <section className="text-gray-600 body-font mx-16 rounded-xl bg-sky-800 border-2">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="title-font text-center  sm:text-4xl underline text-3xl mb-4 -mt-10 font-medium text-gray-900 ">
                    Skills
                    <br className="hidden sm:block" />

                </h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 w-[100%] md:w-1/3 flex">
                        <IoLogoHtml5 className="w-12 h-12" />
                        <div className="flex-grow pl-6">
                            <h2 className="text-black text-lg title-font font-medium mb-2">
                                HTML
                            </h2>
                            <div className="bg-gray-400">
                                <div className="lg:w-[100%] bg-red-600 h-2 " ></div></div>
                            <p className="leading-relaxed text-base text-right text-black">
                                100%
                            </p>
                        </div>
                    </div>
                    <div className="p-4 w-[100%] md:w-1/3 flex">
                        <IoLogoCss3 className="w-12 h-12" />
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                                CSS
                            </h2>
                            <div className="bg-gray-400">
                                <div className="lg:w-[90%] bg-green-600 h-2 " ></div></div>
                            <p className="leading-relaxed text-base text-right text-black">
                                90%
                            </p>
                        </div>
                    </div>

                    <div className="p-4 w-[100%] md:w-1/3 flex">
                        <RiJavascriptFill className="w-12 h-12" />

                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                                JavaScript
                            </h2>
                            <div className="bg-gray-400">
                                <div className="lg:w-[80%] bg-blue-600 h-2 " ></div></div>
                            <p className="leading-relaxed text-base text-right text-black">
                                80%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
