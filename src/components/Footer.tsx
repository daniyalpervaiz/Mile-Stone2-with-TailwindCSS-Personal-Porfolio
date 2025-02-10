"use client"
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (<div><footer className="text-gray-600 body-font ">
        <div className="container bg-black px-5 py-2 mx-auto flex items-center sm:flex-row flex-col border-2">
            <Image src="/dp-logo.jpg" alt="logo" width={60} height={100} className="rounded-3xl ml-3"></Image>
            
            <p className="text-sm text-gray-500 sm:ml-2 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                DANIYALPERVAIZ © 2024

            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mx-[20px] gap-3 text-xl">
                <Link href={"https://www.facebook.com/daniyal.pervaiz.965?rdid=HaNWIJFOorZyVEiU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14LucFGhMT%2F"} target="_blank" className="hover:text-blue-600" >

                    <FaFacebook/>
                </Link>
                <Link href={"https://github.com/daniyalpervaiz"} target="_blank" className="hover:text-black" >

                    <FaGithub />
                </Link>
                <Link href={"https://www.instagram.com/daniyal_k.94/profilecard/?igsh=MTRpZDIwZWo3OHkxNw=="} target="_blank" className="hover:text-[#851d7f]" >
                    <FaInstagram />
                </Link>
                <Link href={"https://www.linkedin.com/in/daniyal-pervaiz-2530741a1/"} target="_blank" className="hover:text-blue-600">
                    <FaLinkedin />


                </Link>
            </span>
        </div>
    </footer>
</div>
    )
}
