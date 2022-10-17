import React, {useState} from "react";
import { links } from "../assets/constants";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import {IoIosCloseCircleOutline} from 'react-icons/io'

const Navlinks = ({handleMenuClose}) => (
    <div className=" flex flex-col">
        <div className=" w-full h-7 rounded-full flex justify-end">
            <IoIosCloseCircleOutline className=" text-gray-400 w-7 h-7 cursor-pointer hover:text-white "  onClick={handleMenuClose}/>
        </div>
        <div className=" mt-1 text-white  ">
            {
                links.map((item)=>
                    <NavLink 
                        className='flex flex-row justify-start items-center select-none my-5 text-sm font-medium cursor-pointer text-gray-400 hover:text-white'
                        key={item.name}    
                        to={item.to}
                    >
                        <item.icon className=" w-6 h-6 m-2 "/>
                        {item.name}
                    </NavLink>
                )
            }
        </div>    
    </div>
)

const SideBar = () => {
    const [mobileManuOpen, setMobileMenuOpen] = useState(false);
    const handleMenuClose = () => (
        setMobileMenuOpen(false)
    )

    const handleMenuOpen = () => (
        setMobileMenuOpen(true)
    )

    return(
        <>
            {/* <div className="  bg-red-300 md:flex hidden flex-col w-[200px] py-10 px-4 ">
               <Navlinks />
            </div> */}

            <div className=" absolute  block top-6 left-3">
              <HiOutlineMenu className=" h-6 w-6 mr-2 text-white cursor-pointer" onClick={handleMenuOpen}/>
            </div>

            <div 
                className={` fixed top-0 h-screen w-[25%] bg-gradient-to-tl from-white/10 to-black 
                backdrop-blur-lg z-10 p-6  ${mobileManuOpen? 'left-0':'-left-full'}`}
            >
                <Navlinks handleMenuClose={handleMenuClose}/>
            </div>


        </>
    )
}

export default SideBar;