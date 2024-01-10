import React from 'react';
import firstphoneicon from '../Assets/Icon Button (2).png';
import secondmailicon from '../Assets/Icon Button (3).png';
import thirdlocationicon from '../Assets/Icon Button (4).png';

export const Contactsecond = () => {
    const ServicesData = [
        {
          id: 1,
          img: firstphoneicon,
          name: "Phone",
          description:
          "+91 123456789",
        },
        {
          id: 2,
          img: secondmailicon,
          name: "Mail ",
          description:
          "info@sumitian.com",
        },
        {
          id: 3,
          img: thirdlocationicon,
          name: "Address",
          description:
          "3474 Don Jackson Lane, Port Huron, MI 48060" ,
        },
        
      ];
  return (
    <>
    <div className=" bg-[#FFFFFF] flex flex-col justify-center lg:px-[70px] px-5 lg:py-24 py-10 lg:pt-16 font-plus">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        
      </div>

      
      <div className=" flex flex-col lg:flex-row gap-5 ">
      {ServicesData.map((service) => (
      <div className=" group flex flex-col items-center text-center gap-[10px] w-full  lg:w-[450px] p-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[9px] cursor-pointer ">
      <div className="  p-3 rounded-full transition-colors ">
        <img src={service.img} alt="" className='w-[56px] h-[56px]'/>
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
export default Contactsecond