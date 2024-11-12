"use client"
import Image from "next/image"
import Link from "next/link"

export default function About(){
    return (
        <div>
            <section className="text-gray-600 bg-gray-300 body-font mx-16 rounded-xl">
  <div className="container mx-auto flex px-15 py-10  md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6 mb-10 md:mb-0 ">
 <Image src={"/aboutpic2.jpg"} width={280} height={40} alt="pic" className="rounded-2xl mx-auto "  />

    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col  md:items-start md:text-left items-center text-center ">
      <h1 className="title-font underline  sm:text-4xl text-3xl mb-4 -mt-10 font-medium text-gray-900">
       About ME </h1>
        
       <h2 className="text-3xl "> I am </h2>
     
       
      
      <p className="mb-8 mr-14 leading-relaxed">
        I am Student of Governer Initiative Program, Learning Generative AI(Artificial Intelligence), I can create functional, user-friendly websites and web applications,i am proficient at coding with languages like HTML, CSS, JavaScript for front-end development,
      </p>
      <Link href={"#contact"}>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
         Contact
        </button>
      
      </div>
      </Link>
    </div>
  </div>
</section>
        </div>





    )
}