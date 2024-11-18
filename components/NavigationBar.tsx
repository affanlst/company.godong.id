"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { ChevronDown, Ellipsis, Megaphone, Search } from "lucide-react";
import { useProdukHover } from "@/app/context/ProdukHoverContext";
import { Button } from "./ui/button";
import axios from "axios";
import { apiEndpoints } from "@/app/api/api";
import { cn } from "@/lib/utils";


interface contentNavbarGeneral{
  id:number,
  kode:string,
  kode_main_navbar:string,	
  nama:string,	
  link_to:string;	
}
interface NavbarItem {
  id: number;
  kode_navbar: number;
  nama: string;
  status: string;
  link_to:string;
  content_navbar_general:contentNavbarGeneral[]; // Add status to the interface
}

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const { setIsProdukHovered } = useProdukHover();
  const [navbar, setNavbar] = useState<NavbarItem[]>([]);
  useEffect(() => {
    axios
      .get(apiEndpoints.allNavbar)
      .then((response) => {
        setNavbar(response.data); // Update state with fetched navbar data
        console.log(response.data); // Log data to verify
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleStateOpen = () => {
    if (open !== true) {
      setIsProdukHovered(true);
      setOpen(true);
    } else {
      setIsProdukHovered(false);
      setOpen(false);
    }
  };

  return (
    <div className="grid grid-cols-6 shadow-md w-full h-full">
      <div className="col-span-1 flex justify-center">
        <Image src="/logoGodong.svg" width={128} height={29} alt="Image" />
      </div>
      <div className="col-span-4 flex items-center">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              {navbar.map((navItem) =>
                // Check the status of the navbar item
                navItem.status === "main" ? (
                  <NavigationMenuItem key={navItem.id}>
                    <Button
                      variant="ghost"
                      onClick={() => handleStateOpen()}
                      className="text-[17px] font-normal m-0"
                    >
                      {/* //TODO: Tambahkan input search disini */}
                      {navItem.nama}
                      <ChevronDown
                        className={
                          open
                            ? "relative top-[1px] ml-1 h-5 w-5 transition duration-200 rotate-180"
                            : "relative top-[1px] ml-1 h-5 w-5  transition duration-200"
                        }
                      />
                    </Button>
                  </NavigationMenuItem>
                ) : navItem.status === "general" && navItem.content_navbar_general.length > 0 ? (
                  <NavigationMenuItem key={navItem.id}>
                    <NavigationMenuTrigger onMouseEnter={() => {setIsProdukHovered(false); setOpen(false)}} className="text-[17px] font-normal " >
                      {navItem.nama}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-3 ">
                       {navItem.content_navbar_general.map((content) => (
                        <ListItem key={content.id} title={content.nama} href={content.link_to}>
                        </ListItem>
                       ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : navItem.status === "general" && navItem.content_navbar_general.length <= 0 ?(
                  <NavigationMenuItem key={navItem.id}>
                    <NavigationMenuTrigger showArrow={false} className="text-[17px] font-normal">
                      {navItem.nama}
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                ):null // Render nothing if neither "main"3 nor "general"
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="col-span-1 pr-10">
        <div className="flex h-full gap-4 w-full justify-end items-center flex-row">
          <Search className=" hover:cursor-pointer" width={25} height={25} />
          <Megaphone className="hover:cursor-pointer" height={25} width={30} />
          <div className="text-lg hover:cursor-pointer">Sign In</div>
        </div>
      </div>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-[13px] font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
