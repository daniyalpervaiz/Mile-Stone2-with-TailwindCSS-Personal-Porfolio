import Image from "next/image";
import Link from "next/link";


export default function Project(){
    return( <div id="projects"><section className="text-gray-600 body-font mx-16 rounded-xl bg-sky-800 mt-10 border-2 ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col text-center w-full mb-20 ">
            <h1 className="title-font sm:text-4xl underline text-3xl mb-4 font-medium text-gray-900">
             Projects
            </h1>
           
          </div>
          <div className="flex flex-wrap -m-4 -mt-12 gap-24">
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute w-full h-full object-center"
                  src="/pakwheel.png" width={100} height={100}
                />
                <div className="px-8 py-10 relative z-1 w-full border-4 border-black bg-white opacity-0 hover:opacity-100">
                  <h2 className=" text-sm title-font font-medium text-black mb-1">
                   Clone PakWheel-Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cars and Bikes Website
                  </h1>
                  <p className="leading-relaxed">
                  this Project is used to Buy And Sell Cars and Bikes
                  </p>
                 <Link href={"https://mini-hackathon-car-selling.vercel.app/"} target={"_blank"}> <p className="leading-relaxed text-blue-500" >
                  View Project
                  </p></Link>
                </div>
              </div>
            </div>
             <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute w-full h-full object-center"
                  src="/dynamicresume.png" width={100} height={100}
                />
                <div className="px-8 py-10 relative z-1 w-full border-4 border-black bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    Dynamic Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume
                  </h1>
                  <p className="leading-relaxed">
                    This Project is used to Create Resume
                  </p>
                 <Link href={"https://dynamic-resume-builder-mile-stone-3.vercel.app/"} target={"_blank"}><p className="leading-relaxed text-blue-500">
                    View Project
                  </p></Link> 
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>
      



    </div>
    )
}
