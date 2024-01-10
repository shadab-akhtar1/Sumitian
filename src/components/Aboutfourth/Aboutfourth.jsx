import React from 'react';
import cup from '../Assets/image 204.png';

export const Aboutfourth = () => {
  return (
    <>
    <div className=" bg-[#FAFAFB] flex flex-col justify-center lg:px-[70px] lg:flex-row lg:justify-between lg:items-center px-5 py-24 lg:pt-16 font-plus ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
            <div className='w-[183px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px] flex justify-start'></div><div className='flex justify-end items-center '><h4 className='font-plus font-semibold pr-[20px] text-[16px] text-[#1A1C1F] items-center text-center'>Making an impact</h4></div></div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Impactful Education:Making a Difference
          </h1>
         
          <div className='flex flex-col lg:flex lg:flex-row lg;justify-between items-center lg:mt-[40px]'>
          <div className='flex flex-col xl:w-[700px] lg:w-[550px]'>
            <p className='font-normal font-plus text-[18px] text-[#121212]'>In the realm of education, Sumitian stands as a beacon of transformative impact. Our success is not merely measured by metrics but by the tangible difference we make in the lives of students.</p>
            <div className='mt-[10px]'>
                <h2 className='text-[#121212] font-plus font-bold text-[24px]'>Academic Catalyst:</h2>
                <p className='font-normal font-plus text-[18px] text-[#121212]'>Sumitian serves as a catalyst for academic achievement, providing students with the tools and knowledge to excel in their educational journey. We believe in going beyond conventional teaching methods, fostering an environment where every student can reach their full potential.</p>
            </div>
            <div className='mt-[10px]'>
                <h2 className='text-[#121212] font-plus font-bold text-[24px]'>Beyond the classromm:</h2>
                <p className='font-normal font-plus text-[18px] text-[#121212]'>Our commitment to impactful education extends beyond the confines of the classroom. We aspire to instill in students a profound love for learning that transcends academic boundaries. Sumitian is not just about acquiring knowledge; it's about nurturing a curiosity that lasts a lifetime</p>
            </div>
            <div className='mt-[10px]'>
                <h2 className='text-[#121212] font-plus font-bold text-[24px]'>Empowering Futures:</h2>
                <p className='font-normal font-plus text-[18px] text-[#121212]'>By making a conscious impact on education, Sumitian is empowering future leaders, innovators, and thinkers. We take pride in contributing to the development of individuals who will shape a better tomorrow.</p>
            </div>
            
           
          </div>
          <div><img src={cup} alt="" className='lg:w-[520px] lg:pl-[20px]'/></div>
          </div>
        </div>
      </div>
      
      </div>
    </>
  )
}
export default Aboutfourth