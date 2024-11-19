import Image from "next/image";
import Link from "next/link";

import { socialMediaLinks } from '@/assets/index';

const NavbarSocials = () => {
    return (
        <div className=" bg-true-blue flex">
            {/* div used for spacing */}
            <div className=" flex-1">

            </div>
            <div className=" flex-1 flex flex-row justify-center items-center">
                {
                    socialMediaLinks.map((data, i) => {
                        return (
                            <div 
                                className=" bg-white hover:bg-isabelline"
                                key={i}
                            >
                                <div className=" h-14 w-14 flex items-center justify-center bg-white hover:bg-isabelline cursor-pointer *:transform *:transition *:duration-200 hover:*:scale-125">
                                    <div className=" relative h-7 w-7">
                                        <Link 
                                            href={data.link} 
                                            passHref legacyBehavior
                                        >
                                            <a target="_blank">
                                                <Image 
                                                src={data.src} 
                                                alt={data.alt}  
                                                fill></Image>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default NavbarSocials;