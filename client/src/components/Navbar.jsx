import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo-course.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const data = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Courses", link: "/courses" },
    { id: 3, text: "Blog", link: "/blogs" },
    { id: 4, text: "Upcoming ", link: "/upcoming-classes" },
    { id: 5, text: "About ", link: "/about-us" },
    { id: 6, text: "Contact ", link: "/contact-us" },
  ];

  return (
    <nav className="shadow w-full">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="w-[160px]">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop NavLinks - Hidden on md and smaller */}
        <div className="hidden md:flex gap-6 text-[16px] font-semibold">
          {data.map((item) => (
            <NavLink key={item.id} to={item.link} className="hover:text-red-600">
              {item.text}
            </NavLink>
          ))}
        </div>

        {/* Search and Logout Button */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 border border-gray-300 rounded-xl px-2">
            <input
              type="text"
              className="px-2 py-1 outline-none rounded-l-xl"
              placeholder="Search"
            />
            <button className="text-xl">
              <IoIosSearch />
            </button>
          </div>
          <button className="bg-red-600 px-4 py-1 rounded-xl text-white font-semibold text-[17px] hover:bg-red-700">
            Log out
          </button>
        </div>

        {/* Hamburger Icon - Visible on md and smaller */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible when menuOpen is true */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-100">
          {data.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="text-[16px] font-semibold hover:text-red-600"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
