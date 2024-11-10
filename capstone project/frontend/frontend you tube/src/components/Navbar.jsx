import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { SiFireship } from "react-icons/si";
import { LuShoppingBag } from "react-icons/lu";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { GiAerialSignal } from "react-icons/gi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiSignalTowerFill } from "react-icons/ri";
import { GiHanger } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSquareInfo } from "react-icons/ci";
const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const username = localStorage.getItem('username'); // Get the username from local storage
   

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('profilePicture');
        navigate('/auth'); // Redirect to sign-in page
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Hamburger icon */}
                    <div onClick={toggleDropdown} className="h-6 w-6 text-gray-700 mr-4 cursor-pointer">
                        <div className="bg-gray-700 h-1 w-full mb-1"></div>
                        <div className="bg-gray-700 h-1 w-full mb-1"></div>
                        <div className="bg-gray-700 h-1 w-full"></div>
                    </div>
                    {/* Filled background YouTube icon with rectangular shape and border radius */}
                    <button className="bg-red-600 text-white p-2 hover:bg-red-700 mr-4 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 15l11-6-11-6v12z" />
                        </svg>
                    </button>
                    <Link to="/" className="flex items-center">
                        <h1 className="text-black text-2xl font-bold">YouTube Clone</h1>
                    </Link>
                </div>
                <div className="flex-grow mx-4">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    {username ? (
                        <>
                            {/* Profile Icon */}
                            <div className="relative">
                                <Link to ="/channel">
                                <img
                                    src="https://ui-avatars.com/api/username" 
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full cursor-pointer"
                                    onClick={() => navigate(`/home/${username}`)} // Navigate to user's home on click
                                />
                                </Link>
                                <div className="absolute right-0 bottom-0 h-2 w-2 bg-green-500 rounded-full"></div> {/* Optional online indicator */}
                            </div>
                            <button onClick={handleLogout} className="text-gray-700 hover:text-red-600">
                                Logout
                            </button>
                            
                        </>
                     

                    ) : (
                        
                        <Link to="/auth" className="text-gray-700 hover:text-red-600">
                            <div className="relative">
                            <Link to ="/channel">
                                <img
                                    src="https://ui-avatars.com/api/username" 
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full cursor-pointer"
                                    onClick={() => navigate(`/home/${username}`)} // Navigate to user's home on click
                                />
                                </Link>
                                
                                <div className="absolute right-0 bottom-0 h-2 w-2 bg-green-500 rounded-full"></div> {/* Optional online indicator */}
                            </div>
                           <button onClick={handleLogout} className="text-gray-700 hover:text-red-600">
                                Logout
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            {/* Dropdown Menu */}
            {dropdownOpen && (
                <div className="absolute bg-white shadow-lg mt-2 rounded-md w-48 z-10">
                    <ul className="py-2">
                        <li>
                            <Link to="/Home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><FaHome className='inline m-3' />Home</Link>
                        </li>
                        <li>
                            <Link to="/shorts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><SiYoutubeshorts className='inline m-3' />Shorts</Link>
                        </li>
                        <li>
                            <Link to="/Subscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><MdSubscriptions className='inline m-3' />Subscription</Link>
                        </li>
                        <li>
                            <Link to="/you" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><FaRegUserCircle className='inline m-3'/>You</Link>
                        </li>
                        <li>
                            <Link to="/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><GoHistory className='inline m-3'/>History</Link>
                        </li>
                        <li>
                            <Link to="/signin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign in to like videos, comment, and subscribe.
                          <br/>  <FaRegUserCircle className='inline m-3'/>Sign in     </Link>
                                                                                                                           
                        </li>
                        <li>
                            <Link to="/explore" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 ">Explore</Link>
                        </li>
                        <li>
                            <Link to="/Trending" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><SiFireship className='inline m-3'/>Trending</Link>
                        </li>
                        <li>
                            <Link to="/Shopping" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><LuShoppingBag className='inline m-3' />Shopping</Link>
                        </li>
                        <li>
                            <Link to="/Music" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><IoMusicalNotesOutline className='inline m-3' />Music</Link>
                        </li>
                        <li>
                            <Link to="/Movie" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><BiSolidMoviePlay className='inline m-3'/>Movies</Link>
                        </li>
                        <li>
                            <Link to="/Live" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><GiAerialSignal className='inline m-3' />Live</Link>
                        </li>
                        <li>
                            <Link to="/Gaming" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><SiYoutubegaming className='inline m-3'/>Gaming</Link>
                        </li>
                        <li>
                            <Link to="/News" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><IoNewspaperOutline className='inline m-3'/>News</Link>
                        </li>
                        <li>
                            <Link to="/Sports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><GoTrophy className='inline m-3'/>Sports</Link>
                        </li>
                        <li>
                            <Link to="/Courses" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><GoLightBulb className='inline m-3'/>Courses</Link>
                        </li>
                        <li>
                            <Link to="/Fashion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><GiHanger className='inline m-3'/>Fashion</Link>
                        </li>
                        <li>
                            <Link to="/Podcast" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><RiSignalTowerFill className='inline m-3'/>Podcast</Link>
                        </li>
                        <li>
                            <Link to="/home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">More from YouTube</Link>
                        </li>
                        <li>
                            <Link to="/home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><FaYoutube className='inline m-1' />YouTube Premium</Link>
                        </li>
                        <li>
                            <Link to="/YoutubeMusic" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><SiYoutubemusic className='inline m-1'/>YouTube Music</Link>
                        </li>
                        <li>
                            <Link to="/youtubekids" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><TbBrandYoutubeKids className='inline m-1'/> YouTube kids</Link>
                        </li>
                        <li>
                            <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><CiSettings className='inline m-1'/> Settings</Link>
                        </li>
                        <li>
                            <Link to="/ReportHistory" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><FaRegFlag className='inline m-1'/> Report History</Link>
                        </li>
                        <li>
                            <Link to="/Help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><IoIosHelpCircleOutline className='inline m-1'/> Help</Link>
                        </li>
                        <li>
                            <Link to="/send Feedback" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><CiSquareInfo  className='inline m-1'/> Send Feedback</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;