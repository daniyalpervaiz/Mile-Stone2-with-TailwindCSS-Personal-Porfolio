import Link from "next/link";
import Image from "next/image";


export default function Navbar(){
    return (<div className="bg-white z-50 sticky top-0"><header className="text-gray-400 bg-black body-font rounded-xl">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <Image src="/dp-logo.jpg" alt="logo" width={60} height={100} className="rounded-3xl"></Image>
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">DANIYAL PERVAIZ</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
           <Link href={"#"} className="mr-5 hover:text-white">About Me </Link>
            <Link href={"#projects"} className="mr-5 hover:text-white">Projects</Link>
            <Link href={"#skills"} className="mr-5 hover:text-white">Skills</Link>
            <Link href={"#contact"} className="mr-5 hover:text-white">Contact</Link>
          </nav>
           <Link href={"./resume.png"} download={"./resumr.png"}><button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            MyResume
           
            
          </button>
            </Link>
        </div>
      </header>
      

        
    </div>




    )
}