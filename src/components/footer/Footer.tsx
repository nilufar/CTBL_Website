'use client';

import { LucideMapPinHouse, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { 
    footerProductList, 
    footerMenuList, 
    socialMediaLinks,
    hotlineNumber,
    contactEmail,
    currentAddress, 
} from '@/assets/index';

const Footer = () => {
    const currentPath = usePathname();
    const currentYear = new Date().getFullYear();

    return (
        <div className=" flex flex-col justify-center items-center bg-true-blue">
            <div className=" flex flex-row align-middle items-center justify-evenly">
                <div className="p-5 m-5">
                    <div className=" relative h-64 w-72">
                        <Link href="/">
                            <Image 
                            src="/logo.png" 
                            alt="company-logo" 
                            fill></Image>
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-col text-white p-5 m-5">
                    <h3 className=" mb-5 text-xl font-semibold text-saffron">Products</h3>
                    {
                        footerProductList.map((data, i) => {
                            return (
                                <Link 
                                    href={data.link} 
                                    className="text-sm p-2  hover:bg-black hover:text-saffron"
                                    key={i}
                                >
                                    { data.title }
                                </Link>
                            )
                        })
                    }
                </div>
                <div className=" flex flex-col text-white p-5 m-5">
                    <h3 className=" mb-5 text-xl font-semibold text-saffron">Pages</h3>
                    {
                        footerMenuList.map((data, i) => {
                            return (
                                <Link
                                    key={i} 
                                    href={data.link} 
                                    className={
                                        ` ${currentPath == `${data.link}` ? 'bg-black text-saffron' : ''} text-sm p-2 hover:bg-black hover:text-saffron`
                                    }
                                >
                                    { data.page }
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="text-saffron p-5 m-5">
                    <h3 className=" mb-3 text-xl font-semibold">
                        Contact Details
                    </h3>
                    <div className=" flex flex-col ">
                        <div className=" p-2 flex flex-row gap-3">
                            <Phone className=" h-5"></Phone>
                            <p className="text-sm text-white">{hotlineNumber.number} [{hotlineNumber.title}]</p>
                        </div>
                        <div className=" p-2 flex flex-row gap-3">
                            <Mail className=" h-5"></Mail>
                            <p className="text-sm text-white">{contactEmail.email}</p>
                        </div>
                        <div className=" p-2 flex flex-row gap-3">
                            <LucideMapPinHouse className=" h-5"></LucideMapPinHouse>
                            <div className="flex flex-col">
                            <p className="text-sm text-white">{currentAddress.part2}</p>
                            <p className="text-sm text-white">{currentAddress.part3}</p>
                            <p className="text-sm text-white">{currentAddress.part4}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row gap-2 mt-3">
                        {
                            socialMediaLinks.map((data, i) => {
                                return (
                                    <div 
                                        className=" relative h-7 w-7 transform transition duration-200 hover:scale-125 cursor-pointer"
                                        key={i}
                                    >
                                        <Link href={data.link} passHref legacyBehavior>
                                            <a target="_blank">
                                                <Image 
                                                src={data.src} 
                                                alt={data.alt}  
                                                fill></Image>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className=" text-white text-xs">
                © {currentYear} Continental Technologies Bangladesh Limited | Powered by CTBL
            </div>
        </div>
    );
}

export default Footer;