import Link from 'next/link'
import React from 'react'

const DashboardNavbar = () => {
  const isAdmin = false;
  const Links = isAdmin ? (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/dashboard/addBlog"}>Add Blogs</Link>
      </li>
      <li>
        <Link href={"/dashboard/ManageUser"}>Manage User</Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/dashboard/CreateUser"}>CreateUser</Link>
      </li>
      <li>
        <Link href={"/dashboard/feedback"}>Feedback</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-sky-400 text-black shadow-sm">
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
        <a className="btn btn-ghost text-xl">FnExt.Js</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Links}
        </ul>
      </div>

    </div>
  )
}

export default DashboardNavbar