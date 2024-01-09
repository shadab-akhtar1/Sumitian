import React from 'react';
import firsticon from '../Assets/Frame 1686560867.png';
import secondicon from '../Assets/Frame 1686560868.png';
import thirdicon from '../Assets/Frame 1686560869.png';
import fourthicon from '../Assets/Frame 1686560870.png';

const ServicesData = [
  {
    id: 1,
    img: firsticon,
    name: "Interactive Lesson",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauris lorem, maximus ornare nunc ac, feugiat pharetra lacus",
  },
  {
    id: 2,
    img: secondicon,
    name: "Comprehensive Content ",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauris lorem, maximus ornare nunc ac, feugiat pharetra lacus",
  },
  {
    id: 3,
    img: thirdicon,
    name: "Flexible Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauris lorem, maximus ornare nunc ac, feugiat pharetra lacus",
  },
  {
    id: 4,
    img: fourthicon ,
    name: "Progress Tracking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauris lorem, maximus ornare nunc ac, feugiat pharetra lacus",
  },
];

export const Secondsection = () => {
  return (
    <>
    <div className=" bg-[#FAFAFB] flex flex-col justify-center lg:px-[70px] px-5 py-24 lg:pt-16 font-plus">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
            <div className='w-[110px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px]'></div><h4 className='font-plus font-semibold text-[20px] text-[#1A1C1F] items-center text-center'>Features</h4></div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Why Choose Sumitian?
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
          </p>
        </div>
      </div>

      
      <div className=" flex flex-col lg:flex-row gap-5 pt-14 ">
      {ServicesData.map((service) => (
      <div className=" group flex flex-col items-center text-center gap-[10px] w-full  lg:w-[370px] p-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[9px] cursor-pointer ">
      <div className="  p-3 rounded-full transition-colors ">
        <img src={service.img} alt="" className='w-[100px] h-[100px]'/>
      </div>
      <h1 className=" font-semibold text-[22px] font-plus text-[#000000]">{service.name}</h1>
      <p className='font-normal text-[16px] text-[#737373] font-plus'>
      {service.description}
      </p>

    
      </div>
      ))}
      </div>
      
    </div>
    </>
  )
}
export default Secondsection