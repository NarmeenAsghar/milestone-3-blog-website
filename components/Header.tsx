"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between w-full h-[92px] px-[10px] md:px-[36px]">
      {/* header section for big screens */}
      <div className="flex justify-between w-full">
        <div className="flex md:gap-2 justify-center items-center">
          <div className="flex-shrink-0">
            <Image src="/logo.webp" alt="logo" width={100} height={100} />
          </div>
          <h1 className="font-inter font-bold text-[28px] text-[#007BFF]">
            Tech Blog
          </h1>
        </div>

        <nav className="hidden md:flex justify-center items-center gap-10 mr-4">
          <Link
            href="/"
            className="font-inter text-[#333333] text-[18px] font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-inter text-[#333333] text-[18px] font-medium"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="font-inter text-[#333333] text-[18px] font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="font-inter text-[#333333] text-[18px] font-medium"
          >
            Contact
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>

      {/* using shadcn ui component for small screens */}
      <Sheet>
        <SheetTrigger className="text-[#333333] w-[42px] h-[24px] md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="flex gap-2 justify-start items-center">
            <nav className="flex flex-col items-start gap-6 mt-20">
              <Link
                href="/"
                className="text-[#333333] font-inter font-medium text-[18px]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#333333] font-inter font-medium text-[18px]"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-[#333333] font-inter font-medium text-[18px]"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-[#333333] font-inter font-medium text-[18px]"
              >
                Contact
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
