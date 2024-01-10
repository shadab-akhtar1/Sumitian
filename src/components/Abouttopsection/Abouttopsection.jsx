import React from 'react';
import abouttopimg from '../Assets/Frame 1686560850.png';

export const Abouttopsection = () => {
  return (
    <>
     <div className="  flex flex-col justify-center lg:px-[70px] lg:flex-row lg:justify-between lg:items-center px-5 py-18 lg:pt-16 font-plus">
      <div className=" flex flex-col items-center lg:flex-row justify-between lg:w-[900px]">
        <div>
            
          <h1 className=" lg:text-[64px] text-[50px] font-plus font-semibold text-center lg:text-start">
          Sumitian:<br /> Empowering Students 
          </h1>
          <p className=" mt-2 text-center lg:text-start text-[15px] lg:text-[22px] font-semibold font-plus xl:w-[750px]">
          Unlock Your Academic Potential with Sumitian. Comprehensive Courses for Grades 9-12 - Anytime, Anywhere.
          </p>
          <div  className='mt-[20px]'>
                <button className='bg-[#FFDA31] w-[207px] h-[48px] rounded-[8px] text-[#121212] font-semibold text-[14px] justify-center items-center flex'>Get Our App</button>
            </div>
        </div>
       {/* <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
  </div>*/}
      </div>
      <div><img src={abouttopimg} alt="" className='lg:w-[500px] lg:pl-[20px]'/></div>
     </div>
    </>
    
  )
}
export default Abouttopsection