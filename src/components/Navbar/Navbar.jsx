import React,{useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/Frame 1686560812.png';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const [showForm, setShowForm] = useState(false);
  
    const handleChange = () => {
      setMenu(!menu);
    };
  
    const closeMenu = () => {
      setMenu(false);
    };
  
    const openForm = () => {
      setShowForm(true);
      setMenu(false);
    };
  
    const closeForm = () => {
      setShowForm(false);
    };
  return (
    <>
    
     <div className="  w-full  font-plus text-[16px] font-medium text-[#121212]  ">
      <div className=''>
        <div className="  flex flex-row justify-between  h-[112px] md:px-[70px]  bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              {/*<h1 className=" text-2xl font-semibold">WellnessVista.</h1>*/}
              <img src={logo} alt="" className='w-[85px] h-[84px]'/>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-[16px] font-semibold font-medium gap-8 ">
            <Link to={"/"} className=" cursor-pointer">
              Home
            </Link>
            <Link to={"/aboutus"} className=" cursor-pointer">
              About Us
            </Link>
            <Link to={"/contactus"} className=" cursor-pointer">
              Contact Us
            </Link>
            
            <div className='hidden lg:flex'>
            <button className='bg-[#FFDA31] w-[131px] h-[48px] rounded-[8px] text-[#121212] font-semibold text-[14px] justify-center items-center flex px-[4px] py-[2px]'>Get Our App</button>
            </div>
          </nav>
         
          {/*
          <div className=" hidden lg:flex">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
          

          {showForm && <Contact closeForm={closeForm} />}*/}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[yellow] text-[#121212] left-0  font-semibold text-[16px] text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link to={"/"}
           
            className=" cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link to={"/aboutus"}
            
            className=" cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link to={"/contactus"}
            
            className=" cursor-pointer"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
         
         <div className='lg:hidden  flex justify-center '>
         <button className='bg-[#FFDA31] w-[131px] h-[48px] rounded-[8px] text-[#121212] font-semibold text-[14px] justify-center items-center flex px-[4px] py-[2px]'>Get Our App</button>
         </div>

          {/*
          <div className=" lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
          */}
        </div>
      </div>
    </div>
  
    </>
  )
}
export default Navbar