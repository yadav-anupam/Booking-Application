import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Form/LoginForm";
import SignupForm from "../Form/SingupForm";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";



export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isLoggedin = useSelector((state) => state.auth.status) ;
  const dispatch = useDispatch();
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // State to manage popup form visibility
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignupFormOpen, setisSignupFormOpen] = useState(false);

  const toggleLoginFormPopup = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
    setIsDropdownOpen(false);
  };

  const toggleSignupFormPopup = () => {
    setisSignupFormOpen(!isSignupFormOpen);
    setIsDropdownOpen(false);
  };

  

    return (
        <header className='p-4 flex justify-between '>
          <a href="" className="flex items-ceter gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
              <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
              <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
            </svg>
            <span className='font-bold text-xl'>Airbnb</span>
          </a>
          <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md
          shadow-gray-300 '>
            <div>Anywhere</div>
            <div className='border-l border-gray-300'></div>
            <div>Any week</div>
            <div className='border-l border-gray-300'></div>
            <div>Add guests</div>
            <button className='bg-primary text-white p-1 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
            </button>
          </div>
          <div className="relative">
            <button onClick={toggleDropdown} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 relative top-1">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
            {(isDropdownOpen && !isLoggedin) && (
              <div className="absolute right-0 mt-2 w-48 text-gray-800 bg-white shadow shadow-slate-900 rounded-md z-10">
                <ul className="py-1 text-left space-y-2 text-pretty">
                  <li>
                    <button
                      onClick={toggleLoginFormPopup}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={toggleSignupFormPopup}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Signup
                    </button>
                  </li>
                  <li>
                    <div className="border-b-2"></div>
                  </li>
                  <li>
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                      Airbnb your home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                      Host an experience
                    </Link>
                  </li>
                  <li>
                    <Link to="/help" className="block px-4 py-2 hover:bg-gray-100">
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {(isDropdownOpen && isLoggedin) && (
              <div className="absolute right-0 mt-2 w-48 text-gray-800 bg-white shadow shadow-slate-900 rounded-md z-10">
              <ul className="py-1 text-left space-y-2 text-pretty">
                <li>
                  <button
                    onClick={toggleLoginFormPopup}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Messages
                  </button>
                </li>
                <li>
                  <button
                    onClick={toggleSignupFormPopup}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Trips
                  </button>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <div className="border-b-2"></div>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Manage listings
                  </Link>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Host an experience
                  </Link>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Account
                  </Link>
                </li>
                <li>
                  <div className="border-b-2"></div>
                </li>
                <li>
                  <Link to="/help" className="block px-4 py-2 hover:bg-gray-100">
                    Help
                  </Link>
                </li>
                <li>
                  <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  
                </li>
              </ul>
            </div>

            )}
        </div>
          {isLoginFormOpen && (<LoginForm closeform= {()=> setIsLoginFormOpen(false)} exchangeForm = {() => {setIsLoginFormOpen(!isLoginFormOpen)
    setisSignupFormOpen(!isSignupFormOpen)} }/>)}
          {isSignupFormOpen && (<SignupForm closeform= {()=> setisSignupFormOpen(false)} exchangeForm = {() => {setIsLoginFormOpen(!isLoginFormOpen)
    setisSignupFormOpen(!isSignupFormOpen)} }/>)}
        </header>

    )
}