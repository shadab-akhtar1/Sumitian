import React from 'react';
import eightsectionimage from '../Assets/13114750_5156437 1.png';

export const Eightsection = () => {
  return (
    <>
    <div className="  flex flex-col justify-center lg:px-[70px] lg:flex-row lg:justify-between lg:items-center px-5  pb-24 lg:pt-16 font-plus ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
            
          
          
          <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center '>
            <div className='lg:w-[400px]'><img src={eightsectionimage} alt="" className='lg:w-[400px] sm:w-[500px]'/></div>
            <div className='flex flex-col px-[20px] '>
                <h1 className='text-[32px] font-semibold font-plus text-[#1A1C1F]'>Get in touch with us</h1>
                <div>
                    <div className='flex flex-col lg:flex lg:flex-row lg:justify-between gap-[30px] my-[20px]'>
                        <input type="text" placeholder='First Name'className='pl-[10px] bg-[#EEF0F3] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-plus font-medium xl:w-[400px] h-[44px] lg:w-[250px] md:w-[600px] sm:w-[500px]'/>
                        <input type="text" placeholder='Last Name' className='pl-[10px] bg-[#EEF0F3] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-plus font-medium xl:w-[400px] h-[44px] lg:w-[250px] md:w-[600px] sm:w-[500px]'/>
                    </div>
                    <div className='flex flex-col lg:flex lg:flex-row lg:justify-between gap-[30px] my-[20px]'>
                        <input type="text" placeholder='Enter Your Email'className='pl-[10px] bg-[#EEF0F3] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-plus font-medium xl:w-[400px] h-[44px] lg:w-[250px] md:w-[600px] sm:w-[500px]'/>
                        <input type="text" placeholder='Enter Mobile Number' className='pl-[10px] bg-[#EEF0F3] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-plus font-medium xl:w-[400px] h-[44px] lg:w-[250px] md:w-[600px] sm:w-[500px]'/>
                    </div>
                    <div className='flex flex-col lg:flex lg:flex-row lg:justify-between gap-[30px] my-[20px]'>
                        <input type="text" placeholder='Your Message'className='pl-[10px] bg-[#EEF0F3] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-plus font-medium xl:w-[830px] h-[88px] lg:w-[550px] md:w-[600px] sm:w-[500px]'/>
                        
                    </div>
                    <button className='bg-[#FFDA31] w-[207px] h-[48px] flex justify-center items-center text-[14px] font-semibold font-plus text-[#121212] rounded-[8px]'>Send</button>
                </div>
               
              
                
                
                
            </div>
          
          
          </div>
        </div>
      </div>
      
      </div>
    </>
  )
}
export default Eightsection