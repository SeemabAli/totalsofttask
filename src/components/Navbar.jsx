import React, { useState } from 'react';
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { CiBellOn, CiBellOff, CiUser } from "react-icons/ci";
import { IoIosHelp } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isBellSilent, setBellSilent] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleUserDropdown = () => setUserDropdownOpen(!isUserDropdownOpen);
    const toggleBell = () => setBellSilent(!isBellSilent);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
    const handleSearch = () => console.log('Searching for:', searchQuery);

    return (
        <div className="bg-gray-100 p-3 shadow-sm">
            <nav className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3 flex-grow">
                    <FaArrowLeft className="text-gray-600 cursor-pointer text-base" />
                    <div className="flex items-center space-x-2 flex-grow">
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search patient by contact, name or ID"
                            className="text-xs px-2 py-1 border rounded-md w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                        <button onClick={handleSearch} className="text-gray-600 text-sm sm:block hidden">
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="sm:hidden">
                    <button onClick={toggleMobileMenu} className="text-gray-600">
                        {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                    </button>
                </div>
                <div className={`hidden sm:flex sm:items-center sm:space-x-3 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                    <button type="button" className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 border border-gray-300 rounded-md px-2 py-1">
                        <span className="text-sm">Openlabs.pk</span>
                        <IoMdArrowDropdown className="text-sm" />
                    </button>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={toggleUserDropdown}
                            className={`flex items-center space-x-1 text-gray-600 hover:text-blue-500 border border-gray-300 rounded-md px-2 py-1 ${isUserDropdownOpen ? 'text-blue-500' : ''}`}
                        >
                            <CiUser className="text-base" />
                            <span className="text-sm">User 1</span>
                            <IoMdArrowDropdown className="text-sm" />
                        </button>
                        {isUserDropdownOpen && (
                            <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                                <ul className="py-1">
                                    <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Profile</li>
                                    <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Settings</li>
                                    <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button type="button" className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 border border-gray-300 rounded-md px-2 py-1">
                        <IoMdSettings className="text-base" />
                        <span className="text-sm">Settings</span>
                    </button>
                    <button
                        type="button"
                        onClick={toggleBell}
                        className={`flex items-center text-gray-600 hover:text-blue-500 border border-gray-300 rounded-md px-2 py-1 ${isBellSilent ? 'text-red-600' : 'text-green-600'}`}
                        title={isBellSilent ? 'Notifications Off' : 'Notifications On'}
                    >
                        {isBellSilent ? <CiBellOff className="text-base" /> : <CiBellOn className="text-base" />}
                    </button>
                    <button type="button" className="flex items-center text-purple-800 hover:text-purple-700 border border-gray-300 rounded-md px-2 py-1">
                        <IoIosHelp className="text-lg mr-1" />
                        <span className="text-sm">Help</span>
                    </button>
                </div>
            </nav>
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden mt-3`}>
                <div className="flex flex-col space-y-3">
                    <button type="button" className="flex items-center text-gray-600 hover:text-blue-500 px-2 py-1">
                        <CiUser className="text-base mr-2" />
                        User 1
                    </button>
                    <button type="button" className="flex items-center text-gray-600 hover:text-blue-500 px-2 py-1">
                        <IoMdSettings className="text-base mr-2" />
                        Settings
                    </button>
                    <button type="button" className="flex items-center text-gray-600 hover:text-blue-500 px-2 py-1">
                        {isBellSilent ? <CiBellOff className="text-base mr-2" /> : <CiBellOn className="text-base mr-2" />}
                        Notifications
                    </button>
                    <button type="button" className="flex items-center text-gray-600 hover:text-blue-500 px-2 py-1">
                        <IoIosHelp className="text-lg mr-2" />
                        Help
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
