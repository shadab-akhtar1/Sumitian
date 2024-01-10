import React from 'react';
import fifthicon from '../Assets/unsplash_3JmfENcL24M.png';
import sixthicon from '../Assets/unsplash_d1UPkiFd04A.png';
import seventhicon from '../Assets/unsplash_pAtA8xe_iVM.png';
import aboutinstaicon from '../Assets/3.png';
import aboutlinkedinicon from '../Assets/In.png';

export const Aboutthird = () => {
    const ServicesData = [
        {
          id: 1,
          img: fifthicon,
          name: "John Green Doe",
          description:
          "Designation",
          icon: aboutinstaicon,
          icon2: aboutlinkedinicon,
        
        },
        {
          id: 2,
          img: sixthicon,
          name: "John Green Doe ",
          description:
          "Designation",
          icon: aboutinstaicon,
          icon2: aboutlinkedinicon,
          
        },
        {
          id: 3,
          img: seventhicon,
          name: "John Green Doe",
          description:
            "Designation",
            icon: aboutinstaicon,
          icon2: aboutlinkedinicon,
        },
       
      ];
  return (
    <>
    <div className="  flex flex-col justify-center lg:px-[70px] px-5 py-24 lg:pt-16 font-plus ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
            <div className='w-[89px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px] flex justify-start'></div><div className='flex justify-end items-center '><h4 className='font-plus font-semibold pr-[20px] text-[16px] text-[#1A1C1F] items-center text-center'>Team</h4></div></div>
          <h1 className=" text-[40px] font-semibold text-center lg:text-start">
            Meet Our Team 
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
          </p>
          
        </div>
      </div>

      
      <div className=" flex flex-col md:flex-row gap-10 pt-14 ">
      {ServicesData.map((service) => (
      <div className="bg-[#FFDA31] bg-opacity-[60%] group flex flex-col  gap-[10px] w-full  lg:w-[370px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  cursor-pointer rounded-tl-[140px] rounded-br-[140px]">
      <div className='flex flex-col justify-end items-end pt-[40px] pr-[40px]'>
      
        <h1 className=" font-semibold text-[30px] font-plus text-[#000000] text-right">{service.name}</h1>
        <p className='flex justify-end items-end text-right font-plus font-normal font-[24px]'>{service.description}</p>
        <div className='flex flex-row mt-[10px]'>
            <img src={service.icon} alt="" className='pr-[20px]'/>
            <img src={service.icon2} alt="" />
          </div>
      </div>
      
        <div className='mt-4 lg:mt-0'>
            <img src={service.img} alt="" className='h-[444px] rounded-br-[140px]'/>
        </div>
    
      </div>
      ))}
      </div>
      
    </div>
    </>
  )
}
export default Aboutthird