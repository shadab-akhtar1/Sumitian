import React from 'react';
import fifthsectionimg from '../Assets/Frame 1686560837.png';
import pdficon from '../Assets/Frame 1686560875.png';
import peopleicon from '../Assets/Frame 1686560876.png'
import videoicon from '../Assets/Frame 1686560874.png';
import apple from '../Assets/image 128.png';
import google from '../Assets/image 129.png';

export const Fifthsection = () => {
  return (
    <>
     <div className="  flex flex-col justify-center lg:px-[70px] lg:flex-row lg:justify-between lg;items-center px-5 py-24 lg:pt-16 font-plus ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
            <div className='w-[180px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px] flex justify-start'></div><div className='flex justify-end items-center '><h4 className='font-plus font-semibold pr-[20px] text-[16px] text-[#1A1C1F] items-center text-center'>Download Center</h4></div></div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Download Our App And Start Your Journey
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
          </p>
          <h1 className="mt-[20px] text-4xl font-semibold text-center lg:text-start">
            What We Provide:
          </h1>
          <div className='flex flex-col lg:flex lg:flex-row lg;justify-between items-center '>
          <div className='flex flex-col '>
            <div className='flex flex-col items-center lg:flex lg:flex-row lg:justify-between  border-[1px] border-solid border-[#ECF2F8] rounded-[9px] my-[5px]'>
                <div className='pl-[10px]'><img src={videoicon} alt="" /></div>
                <div className='px-[20px]'>
                    <h1 className='font-plus font-semibold text-[28px] text-[#000000] '>Video Lesson</h1>
                    <p className='text-[16px] font-normal font-plus text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauriLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauri</p>
                </div>
            </div>
            <div className='flex flex-col items-center lg:flex lg:flex-row lg:justify-between   border-[1px] border-solid border-[#ECF2F8] rounded-[9px] my-[5px]'>
                <div className='pl-[10px]'><img src={pdficon} alt="" /></div>
                <div className='px-[20px]'>
                    <h1 className='font-plus font-semibold text-[28px] text-[#000000] '>PDF Resources</h1>
                    <p className='text-[16px] font-normal font-plus text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauriLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauri</p>
                </div>
            </div>
            <div className='border-[1px] border-solid border-[#ECF2F8] rounded-[9px] my-[5px]'>
            <div className='flex flex-col items-center lg:flex lg:flex-row lg:justify-between  '>
                <div className='pl-[10px]'><img src={peopleicon} alt="" /></div>
                <div className='px-[20px]'>
                    <h3 className='font-plus font-semibold text-[26px] text-[#000000] '>Expert Content</h3>
                    <p className='text-[16px] font-normal font-plus text-[#737373] leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauriLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada vehicula congue. Phasellus mauri</p>
                </div>
            </div>
            </div>
            <div className='flex justify-start items-center mt-[20px]'>
                <div className=''><img src={apple} alt="" className='rounded-[8px] h-[63px]'/></div>
                <div className='pl-[10px]'><img src={google} alt="" className='rounded-[8px] h-[63px]'/></div>
            </div>
          </div>
          <div><img src={fifthsectionimg} alt="" className='lg:w-[520px] lg:pl-[20px]'/></div>
          </div>
        </div>
      </div>
      
      </div>
    </>
  )
}
export default Fifthsection