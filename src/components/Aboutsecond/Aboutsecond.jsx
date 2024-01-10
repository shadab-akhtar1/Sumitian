import React from 'react';
import ilustration from '../Assets/Illustration.png';

export const Aboutsecond = () => {
  return (
    <>
    <div className=" bg-[#FAFAFB] flex flex-col justify-center lg:px-[70px] lg:flex-row lg:justify-between lg;items-center px-5 py-24 lg:pt-16 font-plus ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
            
          
          
          <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center '>
            <div className='lg:w-[500px]'><img src={ilustration} alt="" className='lg:w-[400px]'/></div>
            <div className='flex flex-col items-center px-[20px] lg:px-[50px] lg:justify-end lg:w-[480px] xl:w-[700px]'>
                
                    <div className=''>
                    <div className='w-[110px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px] flex justify-start'></div><div className='flex justify-end items-center '><h4 className='font-plus font-semibold pr-[10px] text-[16px] text-[#1A1C1F] items-center text-center'>Mission</h4></div></div>
                    <h1 className=" text-4xl font-semibold text-center lg:text-start">
                        Our Mission:
                    </h1>
                    <p className=" mt-2 text-center lg:text-start xl:w-[600px] ">
                    At Sumitian, our unwavering mission is to empower students with accessible and high-quality education, transcending geographical boundaries. We are devoted to crafting a learning environment that is not only personalized but also engaging and inherently rewarding. Our commitment extends beyond mere education; we aspire to cultivate a profound love for learning in every student, creating a lifelong passion for knowledge and success. Sumitian envisions a future where education knows no limits, and every student has the tools and resources needed to thrive in their academic journey. Together, we're shaping a world where education is not just a destination but a transformative and ongoing experience for every learner.
                    </p>
          
            
                
            
          
        
            </div>
         
            </div>
          
          
          </div>
        </div>
      </div>
      
      </div>
    </>
  )
}
export default Aboutsecond