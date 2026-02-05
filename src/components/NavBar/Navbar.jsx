"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const {data} = useSession()
  
  // const isAdmin = false;
  const Links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/blogs"}>Blogs</Link>
      </li>
      <li>
        <Link href={"/Categories"}>Categories</Link>
      </li>
      {/* {isAdmin&&<><li><Link href={"/dashboard/CreateUser"}>Dashboard</Link></li></>} */}
      <>
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      </>
      <li>
        <Link href={"/contact"}>Contact us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 text-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">FirstNext</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        {data?.user?.email? <><p className="mx-2">{data?.user?.name}</p><button onClick={()=> signOut()} className="btn">
          Log Out
        </button></>: <><Link href={"api/auth/register"} className="btn">
          Register
        </Link>
        <Link href={"api/auth/signin"} className="btn">
          Login
        </Link></> }
      </div>
    </div>
  );
};

export default Navbar;
