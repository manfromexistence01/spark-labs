"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  OrganizationSwitcher,
  SignInButton,
  SignOutButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs"
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  User,
  Users2,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { CardsReportIssue } from "@/registry/default/example/cards/report-issue"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { HoverBorderGradient } from "./magicui/hover-border-gradient"

export function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        {/* <AceternityLogo /> */}
        <span>Aceternity UI</span>
      </HoverBorderGradient>
    </div>
  );
}



export async function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span>
    </NeonGradientCard>
  );
}



// import type { SVGProps } from "react";
// const Twitter = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 256 209" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}><path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="#55acee" /></svg>;
// export default Twitter;

export function SiteHeader() {
  const { sessionId } = useAuth();
  const pathname = usePathname()

  return (
    <header className="navbar h-[4.5rem] flex items-center justify-center z-10 sticky top-0 w-full bg-background/80 backdrop-blur-2xl border-b">
      <div className="w-full flex h-14 items-center justify-center lg:px-[3%] px-10">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* {!sessionId && (
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
          )} */}
          <Link href="/login">
            <div className="w-full h-auto flex items-center justify-end">
              <div className="auth-button-container bg-gradient-to-r from-[#ec008c] to-[#fc6767] p-[3px] rounded-md">
                <div className="auth-button relative bg-background p-2 w-fit rounded-md text-center leading-tight">
                  {pathname === "/login" ? "Thanks for loging In!" : pathname === "/register" ? "Thanks for creating an account!" : "Login"}
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </header>
  )
}
