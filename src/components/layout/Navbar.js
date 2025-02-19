'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Virtual Offices',
      submenu: [
        { name: 'Startup Plan', path: '/plans-and-pricing' },
        { name: 'Business Plan', path: '/plans-and-pricing' },
        { name: 'Premium Plan', path: '/plans-and-pricing' },
      ],
    },
    {
      name: 'Desk Space',
      submenu: [
        { name: 'Dedicated Desk', path: '/desk-space/dedicated' },
        { name: 'Hot Desk', path: '/desk-space/hot-desk' },
      ],
    },
    { name: 'Coworking', path: '/coworking' },
    {
      name: 'Other Services',
      submenu: [
        { name: 'Meeting Rooms', path: '/other-services/meeting-rooms' },
        { name: 'Event Space', path: '/other-services/event-space' },
        { name: 'LMS', path: '/integraliq-lms' },
      ],
    },
    { name: 'Locations', path: '/locations' },
  ];

  return (
    <header className="w-full shadow-md z-[500] bg-inherit sticky top-0">
      {/* Top Row */}
      <div className=" py-2 px-4 xl:px-20 md:flex justify-between items-center">
        <div className="text-4xl font-bold py-2">iiQSpaces</div>
        <div className="md:text-base flex flex-col gap-1 items-end font-bold">
          <div className="flex gap-2 items-center w-full">
            <PhoneCall size={18} /> <span>+91 9656250000 <span className='text-slate-800'>(Thrissur)</span></span>
          </div>
          {/* <div className="flex gap-2 items-center w-full">
            <PhoneCall size={18} /> <span>+91 87654 32109 <span className='text-slate-800'>(Kochi)</span></span>
          </div> */}
        </div>
      </div>

      {/* Navigation Row */}
      <nav className="py-3 px-4 xl:px-20 shadow-md ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6  text-sm font-semibold uppercase">
            {navLinks.map((link) =>
              link.submenu ? (
                <li key={link.name} className="relative group">
                  <button className="flex items-center hover:text-yellow-600 uppercase font-semibold text-sm">
                    {link.name} <ChevronDown size={16} className="ml-1" />
                  </button>
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <Link
                          href={sublink.path}
                          className="block px-4 py-2 hover:bg-foreground bg-background hover:text-white"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`hover:text-yellow-600 ${
                      pathname === link.path ? 'text-yellow-600' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Sign In / Sign Up */}
          <div className="hidden md:flex space-x-4">
            <button className="border border-foreground text-foreground px-4 py-2 rounded-md  hover:text-background hover:bg-foreground">
              Sign In
            </button>
            <button className="border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground px-4 py-2 rounded-md hover:bg-cyan-text-cyan-500">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col bg-white text-[#00375e] space-y-2 p-4">
            {navLinks.map((link) =>
              link.submenu ? (
                <li key={link.name}>
                  <button
                    className="flex justify-between w-full text-left py-2"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.name} <ChevronDown size={16} />
                  </button>
                  {dropdownOpen[link.name] && (
                    <ul className="pl-4 space-y-1">
                      {link.submenu.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            href={sublink.path}
                            className="block py-2 hover:text-cyan-500"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`block py-2 ${
                      pathname === link.path ? 'text-cyan-500' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
            <button className="border border-[#00375e] text-[#00375e] px-4 py-2 rounded-md hover:bg-cyan-text-cyan-500 hover:text-white">
              Sign In
            </button>
            <button className="bg-[#00375e] text-white px-4 py-2 rounded-md hover:bg-cyan-text-cyan-500">
              Sign Up
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;