import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdAdd, IoMdAnalytics, IoMdListBox, IoMdCheckmarkCircle, IoMdBriefcase, IoMdHome, IoMdFlask } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import Hero from './Hero';

function SidebarMenu() {
    const [isTestsDropdownOpen, setIsTestsDropdownOpen] = useState(false);
    const [isLabManagementDropdownOpen, setIsLabManagementDropdownOpen] = useState(false);

    const toggleTestsDropdown = () => setIsTestsDropdownOpen(!isTestsDropdownOpen);
    const toggleLabManagementDropdown = () => setIsLabManagementDropdownOpen(!isLabManagementDropdownOpen);

    return (
        <div className="flex">
            {/* Desktop version */}
            <div className=" w-64 bg-gray-100 text-black flex-col p-2 hidden md:flex">
                <ul className="space-y-2">
                    {/* Desktop Menu */}
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center">
                            <IoMdAdd className="mr-2" />
                            <span className="hidden md:block">New Registration</span>
                        </a>
                    </li>
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center">
                            <IoMdAnalytics className="mr-2" />
                            <span className="hidden md:block">Analysis</span>
                        </a>
                    </li>
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center">
                            <IoMdListBox className="mr-2" />
                            <span className="hidden md:block">Patient List</span>
                        </a>
                    </li>
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center">
                            <IoMdCheckmarkCircle className="mr-2" />
                            <span className="hidden md:block">Enter & Verify</span>
                        </a>
                    </li>
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center">
                            <IoMdBriefcase className="mr-2" />
                            <span className="hidden md:block">Financial Analysis</span>
                        </a>
                    </li>

                    {/* Tests Dropdown */}
                    <li className="relative group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-between" onClick={toggleTestsDropdown}>
                            <IoMdFlask className="mr-2" />
                            <span className="hidden md:block">Tests</span>
                            <IoMdArrowDropdown className="ml-auto" />
                        </a>
                        {isTestsDropdownOpen && (
                            <ul className="absolute left-0 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md z-10">
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Blood Test</a></li>
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Urine Test</a></li>
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">X-Ray</a></li>
                            </ul>
                        )}
                    </li>

                    {/* Lab Management Dropdown */}
                    <li className="relative group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-between" onClick={toggleLabManagementDropdown}>
                            <IoMdBriefcase className="mr-2" />
                            <span className="hidden md:block">Lab Management</span>
                            <IoMdArrowDropdown className="ml-auto" />
                        </a>
                        {isLabManagementDropdownOpen && (
                            <ul className="absolute left-0 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md z-10">
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Manage Staff</a></li>
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Equipment</a></li>
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Manage Schedules</a></li>
                            </ul>
                        )}
                    </li>

                    {/* Inventory */}
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center">
                            <IoMdHome className="mr-2" />
                            <span className="hidden md:block">Inventory</span>
                        </a>
                    </li>

                    {/* Lab Profile */}
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center">
                            <CiUser className="mr-2" />
                            <span className="hidden md:block">Lab Profile</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile version */}
            <div className="md:hidden h-screen w-16 bg-gray-100 text-black flex flex-col justify-between p-2">
                <ul className="space-y-2">
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-center">
                            <IoMdAdd className="text-2xl" />
                        </a>
                    </li>
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-center">
                            <IoMdAnalytics className="text-2xl" />
                        </a>
                    </li>
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-center">
                            <IoMdListBox className="text-2xl" />
                        </a>
                    </li>
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-center">
                            <IoMdCheckmarkCircle className="text-2xl" />
                        </a>
                    </li>
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-center">
                            <IoMdBriefcase className="text-2xl" />
                        </a>
                    </li>

                    {/* Tests Dropdown */}
                    <li className="relative group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-between" onClick={toggleTestsDropdown}>
                            <IoMdFlask className="text-2xl" />
                            <IoMdArrowDropdown className="ml-auto text-xl" />
                        </a>
                        {isTestsDropdownOpen && (
                            <ul className="absolute left-0 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md z-10">
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Blood Test</a></li>
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Urine Test</a></li>
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">X-Ray</a></li>
                            </ul>
                        )}
                    </li>

                    {/* Lab Management Dropdown */}
                    <li className="relative group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-between" onClick={toggleLabManagementDropdown}>
                            <IoMdBriefcase className="text-2xl" />
                            <IoMdArrowDropdown className="ml-auto text-xl" />
                        </a>
                        {isLabManagementDropdownOpen && (
                            <ul className="absolute left-0 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md z-10">
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Manage Staff</a></li>
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Equipment</a></li>
                                <li className="hover:bg-blue-500 p-1 rounded"><a href="#">Manage Schedules</a></li>
                            </ul>
                        )}
                    </li>

                    {/* Inventory */}
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-center">
                            <IoMdHome className="text-2xl" />
                        </a>
                    </li>

                    {/* Lab Profile */}
                    <li className="group hover:bg-blue-500 p-1 rounded">
                        <a href="#" className="flex items-center justify-center">
                            <CiUser className="text-2xl" />
                        </a>
                    </li>
                </ul>
            </div>
            <Hero />
        </div>
    );
}

export default SidebarMenu;
