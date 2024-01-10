import React from 'react'
import fifthicon from '../Assets/Frame 1686560871.png';
import sixthicon from '../Assets/Frame 1686560872.png';
import seventhicon from '../Assets/Frame 1686560873.png';

export const Fourthsection = () => {
    const ServicesData = [
        {
          id: 1,
          img: seventhicon,
          name: "Physics",
          description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauris lorem, maximus ornare nunc ac, feugiat pharetra lacus",
          button:"View Physics Course"
        },
        {
          id: 2,
          img: sixthicon,
          name: "Chemistry ",
          description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauris lorem, maximus ornare nunc ac, feugiat pharetra lacus",
          button:"View Chemistry Course"
        },
        {
          id: 3,
          img: fifthicon,
          name: "Mathemetics",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauris lorem, maximus ornare nunc ac, feugiat pharetra lacus",
            button:"View Mathematics Course"
        },
       
      ];
  return (
    <>
    <div className=" bg-[#FAFAFB] flex flex-col justify-center lg:px-[70px] px-5 py-24 lg:pt-16 font-plus ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
            <div className='w-[110px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px] flex justify-start'></div><div className='flex justify-end items-center '><h4 className='font-plus font-semibold pr-[10px] text-[16px] text-[#1A1C1F] items-center text-center'>Courses</h4></div></div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Explore Our Courses 
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
          </p>
        </div>
      </div>

      
      <div className=" flex flex-col lg:flex-row gap-10 pt-14 ">
      {ServicesData.map((service) => (
      <div className="bg-[#FFDA31] bg-opacity-[30%] group flex flex-col items-center text-center gap-[10px] w-full  lg:w-[370px] p-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[9px] cursor-pointer ">
      <div className="  p-3 rounded-full transition-colors">
        <img src={service.img} alt="" className='w-[100px] h-[100px]'/>
      </div>
      <h1 className=" font-semibold text-[22px] font-plus text-[#000000]">{service.name}</h1>
      <p className='font-normal text-[16px] text-[#737373] font-plus'>
      {service.description}
      </p>
        <div className='mt-4 lg:mt-0'>
            <button className='bg-[#FFDA31] px-[5px] xl:w-[316px] h-[48px] flex justify-center items-center text-center text-[#121212] rounded-[8px] font-plus text-[14px] font-semibold'>{service.button}</button>
        </div>
    
      </div>
      ))}
      </div>
      
    </div>
    </>
  )
}
export default Fourthsection