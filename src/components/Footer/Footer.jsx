import React from 'react'

import logo from '../Assets/Frame 1686560812.png';
import apple from '../Assets/image 128.png';
import google from '../Assets/image 129.png';
import insta from '../Assets/ic.png';
import facebook from '../Assets/ic (1).png';
import linkedin from '../Assets/ic (2).png';
import phone from '../Assets/Icon Button (1).png';
import mail from '../Assets/Icon Button.png';
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <>
    <div className=" bg-[#FFDA31] text-[#121212]  mt-8 md:mt-0">
      <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4 pt-8  lg:mx-[70px] px-5">
        <div className="mx-[10px]">
          <h1 className=" "><img src={logo} alt="" className='w-[85px] h-[84px]'/></h1>
         
        </div>
        <div className='mx-[10px]'>
        <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 font-plus font-semibold text-[18px] text-[#121212]">Download Now</h1>
        <nav className='flex flex-col gap-2'>
                <div className=''><img src={apple} alt="" className='rounded-[8px] lg:h-[40px] lg:w-[134px]  w-[134px] h-[40px]'/></div>
                <div className=''><img src={google} alt="" className='rounded-[8px] lg:h-[40px] lg:w-[134px]   w-[134px] h-[40px]'/></div>
        </nav>
        </div>
        

        <div className='mt-[20px] mr-[20px]'>
        
        <nav className='flex flex-col gap-2'>
                <div className='flex flex-row '><img src={phone} alt="" className='rounded-[8px] h-[40px] w-[40px]  md:rounded-[4px] lg:rounded-[8px] lg:w-[40px] lg:h-[40px]'/>
                <div className='flex flex-col ml-[10px]'>
                <p className='font-plus font-semibold text-[14px] text-[#121212]  lg:text-[14px]'>Phone</p>
                <p className='font-plus font-semibold text-[16px] text-[#121212]  lg:text-[16px]'>+91 123456789</p>
                </div>
                </div>
                <div className='flex flex-row md:flex md:flex-row lg:flex lg:flex-row'><img src={mail} alt="" className='rounded-[8px] h-[40px] w-[40px]  lg:rounded-[8px] lg:w-[40px] lg:h-[40px]'/>
                <div className='flex flex-col ml-[10px]'>
                <p className='font-plus font-semibold text-[14px] text-[#121212]  lg:text-[14px]'>Mail</p>
                <p className='font-plus font-semibold text-[16px] text-[#121212]  lg:text-[16px]'>info@sumitian.com</p>
                </div>
                </div>
        </nav>
        </div>

        <div className='lg:ml-[40px] mx-[10px]'>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0  font-plus font-semibold text-[18px]  lg:text-[18px] text-[#121212]">Links</h1>
          <ul className="text-[16px]  lg:text-[16px] text-[#121212] font-plus font-semibold flex flex-col gap-2">
            
             
              
            <Link to={"/"}>
              <li className=" cursor-pointer">Home</li>
              </Link>
               
            
            <Link to={"/aboutus"}>
              <li className=" hover:text-hoverColor transition-all cursor-pointer">About Us</li>
              </Link>
              
            
              
            <Link to={"/contactus"}>
              <li className="  cursor-pointer">Contact Us</li>
              </Link>
              
              
            
              
            
          </ul>
        </div>
        <div className='mx-[10px]'>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0  font-plus font-semibold text-[18px]  lg:text-[18px]  text-[#121212]">Others</h1>
          <ul className="text-[16px]  lg:text-[16px] text-[#121212] font-plus font-semibold flex flex-col gap-2">
            
             
              
            <Link to={"/privacypolicy"}>
              <li className=" cursor-pointer">Privacy Policy</li>
              </Link>
               
            
            <Link to={"/termandcondition"}>
              <li className=" hover:text-hoverColor transition-all cursor-pointer">Terms & Condition</li>
              </Link>
              
            
              
            
              <li className="  cursor-pointer">Testimonials</li>
              
              
            
              
            
          </ul>
        </div>
        <div className=" mx-[10px]">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0  font-plus font-semibold text-[18px]  lg:text-[18px] text-[#121212]">Conect With Us</h1>
          <nav className=" flex flex-row gap-2">
           {/*<Link to="/" spy={true} smooth={true} duration={500}>
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              support@care.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +123-456-7890
  </Link>*/}
            <div><img src={insta} alt="" className='rounded-[8px] h-[40px] w-[40px]  lg:rounded-[8px] lg:w-[40px] lg:h-[40px]'/></div>
            <div><img src={facebook} alt="" className='rounded-[8px] h-[40px] w-[40px]  lg:rounded-[8px] lg:w-[40px] lg:h-[40px]'/></div>
            <div><img src={linkedin} alt="" className='rounded-[8px] h-[40px] w-[40px]  lg:rounded-[8px] lg:w-[40px] lg:h-[40px]'/></div>
          </nav>
        </div>
      </div>
    
      <div>
        <p className=" text-center py-4">
          Copyright © 2023 | All rights reserved by Sumitian
        </p>
      </div>
    </div>
  
    </>
  )
}
export default Footer