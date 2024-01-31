import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Input } from "@/components/ui/input"



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-background">
      <span className="text-2xl">
        Quad.<span className="font-bold">B</span>
      </span>

      <Input className='rounded-full' type="text" placeholder="Search" />

      <Avatar className='hidden sm:inline-flex'>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <HamburgerMenuIcon className="cursor-pointer size-6 sm:hidden"/>
    </nav>
  );
};

export default Navbar;
