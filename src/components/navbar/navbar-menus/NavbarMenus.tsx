"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./navBarMenus.module.css";

// importing components
import MenuList from "./menu-list/MenuList";
import { useState } from "react";
import MobileMenu from "./mobile-menu/MobileMenu";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


const NavbarMenus = () => {

    const [open,setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className=" h-24 bg-white flex flex-row items-center justify-center">
                {/* logo section */}
                <div className=" flex-1 flex items-center justify-center">
                    <div className=" relative h-48 w-52">
                        <Link href="/">
                            <Image 
                            src="/logo.png" 
                            alt="company-logo" 
                            fill></Image>
                        </Link>
                    </div>   
                </div>

                {/* menu section */}
                <div className={`flex-1 flex items-center justify-center ${styles.menuList}`}>
                    <MenuList></MenuList>
                </div>

                {/* mobile menu section */}
                <button className={styles.menuButton} onClick={
                    () => setOpen(prev => !prev)
                }>
                    <Image
                        src="/menu.png"
                        alt="menu-icon"
                        width={30}
                        height={30}
                    ></Image>
                </button>
                {
                    open && <div className={styles.mobileLinks}>
                        <MobileMenu></MobileMenu>
                    </div>
                }

                {/* query button */}
                <div className=" p-3 flex-1 flex items-center justify-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className=" bg-true-blue text-white hover:bg-true-blue transform transition duration-200 hover:scale-125">
                                Query
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Send a query</DialogTitle>
                                <DialogDescription>
                                    Send us an email if you have inqueries about any of our products.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        placeholder="Enter your email"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Organization
                                    </Label>
                                    <Input
                                        id="organization"
                                        placeholder="Enter organization name"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Phone
                                    </Label>
                                    <Input
                                        id="Enter phone number"
                                        placeholder="Contact info"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Subject
                                    </Label>
                                    <Input
                                        id="subject"
                                        placeholder="Subject of query"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Message
                                    </Label>
                                    <Textarea
                                    id="username"
                                    placeholder="Enter your message here"
                                    className="col-span-3"></Textarea>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Send email</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default NavbarMenus;