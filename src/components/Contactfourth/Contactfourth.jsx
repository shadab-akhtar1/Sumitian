import React from 'react';
import fifthsectionimg from '../Assets/Frame 1686560837.png';

import apple from '../Assets/image 128.png';
import google from '../Assets/image 129.png';

export const Contactfourth = () => {
  return (
    <>
    <div className="  flex flex-col justify-center lg:px-[70px] lg:flex-row lg:justify-between lg:items-center px-5 py-24 lg:pt-[20px] font-plus ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div className=''>
            <div className='w-[110px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px] flex justify-start'></div><div className='flex justify-end items-center '><h4 className='font-plus font-semibold pr-[10px] text-[16px] text-[#1A1C1F] items-center text-center'>Download Center</h4></div></div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Download Our App And Start Your Journey
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
          </p>
          
            <div className='flex justify-start items-center mt-[20px]'>
                <div className=''><img src={apple} alt="" className='rounded-[8px] h-[63px]'/></div>
                <div className='pl-[10px]'><img src={google} alt="" className='rounded-[8px] h-[63px]'/></div>
            </div>
            </div>
            <div><img src={fifthsectionimg} alt="" className='lg:w-[520px] lg:pl-[20px]'/></div>
          
        
      </div>
      
      </div>
    </>
  )
}
export default Contactfourth