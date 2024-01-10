import React from 'react';
import './Topsection.css';
import img from '../Assets/Vector (8).png';
import women from '../Assets/friendly-confident-woman-writing-her-organizer-isolated-white-wall 3.png';

export const Topsection = () => {
  return (
    <>
    <div className=' flex flex-col xl:min-h-screen container  sm:p-[20px]  md:flex md:flex-row md:justify-between  md:p-[-20px] md:pl-[70px] '>
        <div className='grid md:pt-[100px]  md:gap-[42px] md:w-[500px] xl:w-[700px] md:h-[600px]'>
            <div className=''>
                <div className=''><h2 className='xl:text-[64px] lg:text-[40px] text-[30px] font-bold text-[#121212] font-plus'>Unlock Your Academic Potential with Sumitian</h2></div>
                
                <div className='  pt-[20px]'><p className='xl:text-[22px] xl:w-[500px] lg:w-[350px] lg:text-[15px] md:text-[22px] font-medium text-[#202020] font-plus'>Unlock Your Academic Potential with Sumitian. Comprehensive Courses for Grades 9-12 - Anytime, Anywhere.</p></div>
                <button className='bg-[#FFDA31] w-[207px] h-[48px] rounded-[8px] text-[#121212] font-semibold text-[14px] justify-center items-center flex mt-[30px]'>Get Our App</button>
            </div>
            <div  className=''>
                
            </div>
        </div>
        <div className=' h-[300px]  md:w-[500px] md:mt-[-20px] '>
        
            <img src={img} alt="" className=' md:w-[500px] md:h-[600px] absolute right-[0px] xl:w-[700px] xl:h-[700px] w-[300px] h-[300px]'  />
            <img src={women} alt="" className='  md:h-[550px] md:mt-[50px] md:right-[50px] absolute  md:w-[300px] xl:h-[650px] xl:right-[250px] right-[70px] h-[300px]'/>
        </div>
    </div>
    </>
  )
}
export default Topsection