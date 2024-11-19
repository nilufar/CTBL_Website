"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {

    // getting current path name
    const currentPath = usePathname();

    return (
        <div className=" flex-1 flex flex-col items-center justify-start font-bold text-sonic-silver min-w-full z-20 bg-white">
            <div className=" flex-1 flex justify-start items-center hover:text-true-blue cursor-pointer border-b-2 border-sonic-silver min-w-full">
                <Link href="/" className={` ${currentPath == '/' ? 'text-true-blue' : ''} ps-2`}>
                    Home
                </Link> 
            </div>
            <div className=" flex-1 flex justify-start items-center hover:text-true-blue cursor-pointer border-b-2 border-sonic-silver min-w-full">
                <Link href="/about" className={` ${currentPath== '/about' ? 'text-true-blue' : ''} ps-2`}>
                    About Us
                </Link>
            </div>
            <div className=" flex-1 flex justify-start items-center hover:text-true-blue cursor-pointer border-b-2 border-sonic-silver min-w-full">
                <Link href="/products" className=" ps-2">
                    Products
                </Link>
            </div>
            <div className=" flex-1 flex justify-start items-center hover:text-true-blue cursor-pointer border-b-2 border-sonic-silver min-w-full">
                <Link href="/gallery" className=" ps-2">
                    Gallery
                </Link>
            </div>
            <div className=" flex-1 flex justify-start items-center hover:text-true-blue cursor-pointer border-b-2 border-sonic-silver min-w-full">
                <Link href="/contact" className={` ${currentPath == '/contact' ? 'text-true-blue' : ''} ps-2`}>
                    Contact Us
                </Link>
            </div>
        </div>
    );
}

export default MobileMenu;