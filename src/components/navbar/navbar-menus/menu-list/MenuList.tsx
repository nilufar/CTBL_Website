"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuList = () => {

    // getting current path name
    const currentPath = usePathname();

    return (
        <div className=" flex-1 flex items-center justify-between font-bold text-sonic-silver">
            <div className=" flex-1 hover:text-true-blue cursor-pointer">
                    <Link href="/" className={` ${currentPath == '/' ? 'text-true-blue' : ''} `}>
                        Home
                    </Link> 
                </div>
                <div className=" flex-1 hover:text-true-blue cursor-pointer">
                    <Link href="/about" className={` ${currentPath== '/about' ? 'text-true-blue' : ''} `}>
                        About Us
                    </Link>
                </div>
                <div className=" flex-1 hover:text-true-blue cursor-pointer">
                    <Link href="/products">
                        Products
                    </Link>
                </div>
                <div className=" flex-1 hover:text-true-blue cursor-pointer">
                    <Link href="/gallery">
                        Gallery
                    </Link>
                </div>
                <div className=" flex-1 hover:text-true-blue cursor-pointer">
                    <Link href="/contact" className={` ${currentPath == '/contact' ? 'text-true-blue' : ''} `}>
                        Contact Us
                    </Link>
                </div>
        </div>
    );
}

export default MenuList;