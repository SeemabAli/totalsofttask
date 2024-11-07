import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";

function Hero() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [activeField, setActiveField] = useState(''); 

    const toggleModal = (field) => {
        setActiveField(field); 
        setModalOpen(!isModalOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        console.log(`${activeField} Value:`, inputValue);
        setInputValue(''); 
        setModalOpen(false);
    };

    return (
        <div className="p-6">
            {/* Main container */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full mb-6">
                <div className="flex flex-col flex-grow max-w-screen-xl">
                    <h1 className="text-3xl font-bold mb-6">Register New Patient</h1>
                    {/* Search Section */}
                    <div className="flex flex-col sm:flex-row sm:space-x-4 w-full mb-2">
                        <div className="flex-grow relative w-full sm:max-w-4xl">
                            <input
                                placeholder="Search patient by contact, name or ID"
                                className="text-sm px-4 py-2 pl-10 border rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder-gray-500"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                        </div>
                        <button className="text-white text-sm bg-blue-600 px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                            Quotation
                        </button>
                    </div>
                </div>
            </div>

            {/* New Div below the search bar */}
            <div className="overflow-x-auto ">
                <div className="flex flex-wrap w-full gap-4">
                    {/* Patient ID Section */}
                    <div className="px-6 sm:w-1/3 w-full">
                        <div>
                            <p className="font-bold">Patient ID</p>
                            <p className="font-bold">241107001</p>
                        </div>
                    </div>

                    {/* Designation Section */}
                    <div className="px-6 sm:w-1/3 w-full">
                        <div>
                            <p className="font-bold">Designation</p>
                            <select name="title" id="title" form="titleForm" className="border-gray-300 rounded-md border mt-1 w-full">
                                <option value="mr">Mr</option>
                                <option value="mrs">Mrs</option>
                                <option value="miss">Miss</option>
                                <option value="ms">Ms</option>
                            </select>
                        </div>

                        {/* Gender Section */}
                        <div className="pt-2 flex sm:space-x-4">
                            <p className="font-bold w-full sm:w-auto">
                                <span className="text-red-600">*</span>Gender
                            </p>
                            <div className="flex space-x-4 ">
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="Male" className="" /> Male
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="Female" /> Female
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="Other" /> Other
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* First Name, Last Name, Phone No, and Email Section */}
                    <div className="flex flex-wrap w-full gap-4">
                        <div className="px-6 sm:w-1/3 w-full">
                            <div>
                                <p className="font-bold">
                                    <span className="text-red-600">*</span>First Name
                                </p>
                                <input type="text" className="border border-gray-300 rounded-md w-full" />
                            </div>
                        </div>

                        {/* Last Name Section */}
                        <div className="px-6 sm:w-1/3 w-full">
                            <div>
                                <p className="font-bold">
                                    <span className="text-red-600">*</span>Last Name
                                </p>
                                <input type="text" className="border border-gray-300 rounded-md w-full" />
                            </div>
                        </div>

                        {/* Phone No Section */}
                        <div className="px-6 sm:w-1/3 w-full">
                            <div>
                                <p className="font-bold">Phone No</p>
                                <input id="phone" type="tel" name="phone" className="border border-gray-300 rounded-md w-full" />
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="px-6 sm:w-1/3 w-full">
                            <div>
                                <p className="font-bold">
                                    <span className="text-red-600">*</span>Email
                                </p>
                                <input id="email" type="email" name="email" className="border border-gray-300 rounded-md w-full" />
                            </div>
                        </div>
                    </div>

                    {/* Age, Age Type, and Address Section */}
                    <div className="flex flex-wrap w-full gap-4">
                        <div className="px-6 sm:w-1/3 w-full">
                            <div>
                                <p className="font-bold">
                                    <span className="text-red-600">*</span>Age
                                </p>
                                <input type="text" className="border border-gray-300 rounded-md w-full" />
                            </div>
                        </div>

                        {/* Age Type Section */}
                        <div className="px-6 sm:w-1/3 w-full">
                            <div>
                                <p className="font-bold">Age Type</p>
                                <select name="ageType" id="ageType" form="ageTypeForm" className="border-gray-300 rounded-md border mt-1 w-full">
                                    <option value="Years">Year</option>
                                    <option value="Months">Month</option>
                                    <option value="Days">Days</option>
                                </select>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="px-6 sm:w-1/3 w-full">
                            <div>
                                <p className="font-bold">Address</p>
                                <input type="text" className="border border-gray-300 rounded-md w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Div with Red Border Below */}
            <div className="p-6 mt-6">
                <div className="flex flex-row w-full gap-4">
                    {/* Select Sample Collector */}
                    <div className="px-6 sm:w-1/3 w-1/3">
                        <div>
                            <p className="font-bold">
                                <span className="text-red-600">*</span>Select Sample Collector
                            </p>
                            <div className="flex items-center">
                                <input type="text" className="border border-gray-300 rounded-md w-full" />
                                <button
                                    onClick={() => toggleModal('Sample Collector')}
                                    className="ml-2 flex justify-center items-center font-extrabold text-white text-sm bg-blue-600 px-2 py-1 h-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Select Organization */}
                    <div className="px-6 sm:w-1/3 w-1/3">
                        <div>
                            <p className="font-bold">
                                <span className="text-red-600">*</span>Select Organization
                            </p>
                            <div className="flex items-center">
                                <input type="text" className="border border-gray-300 rounded-md w-full" />
                                <button
                                    onClick={() => toggleModal('Organization')}
                                    className="ml-2 flex justify-center items-center font-extrabold text-white text-sm bg-blue-600 px-2 py-1 h-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Collected At */}
                    <div className="px-6 sm:w-1/3 w-1/3">
                        <div>
                            <p className="font-bold">
                                <span className="text-red-600">*</span>Collected At
                            </p>
                            <div className="flex items-center">
                                <input type="text" className="border border-gray-300 rounded-md w-full" />
                                <button
                                    onClick={() => toggleModal('Collected At')}
                                    className="ml-2 flex justify-center items-center font-extrabold text-white text-sm bg-blue-600 px-2 py-1 h-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for input */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md w-96">
                        <h3 className="font-bold text-xl mb-4">Enter {activeField}</h3>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md w-full p-2 mb-4"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <div className="flex justify-between">
                            <button onClick={handleSubmit} className="bg-blue-600 text-white py-2 px-4 rounded-md">
                                Submit
                            </button>
                            <button onClick={() => setModalOpen(false)} className="bg-gray-300 py-2 px-4 rounded-md">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
