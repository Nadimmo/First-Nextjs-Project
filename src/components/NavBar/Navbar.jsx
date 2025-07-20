"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";

const Navbar = () => {
  const pathName = usePathname();
  const isAdmin = true;
  const Links = <>
    <li><Link href={"/"}>Home</Link></li>
    <li><Link href={"/about"}>About</Link></li>
    <li><Link href={"/blogs"}>Blogs</Link></li>
    {isAdmin&& <><li><Link href={"/dashboard"}>Dashboard</Link></li></>}
    {!isAdmin&&<><li><Link href={"/dashboard/CreateUser"}>Dashboard</Link></li></>}
    <li><Link href={"/contact"}>Contact us</Link></li>
  </>
  if (pathName.includes("dashboard")) {
    return (
      <DashboardNavbar></DashboardNavbar>
    )
  } else {
    return (
      <div className="navbar bg-base-100 text-black shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">FirstNext</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/login'} className="btn">Login</Link>
        </div>
      </div>
    )
  }
}

export default Navbar