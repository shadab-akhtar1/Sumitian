import React from 'react';
import boardicon from '../Assets/Frame 1686560833.png';


export const Thirdsection = () => {
   
  return (
    <div className="  flex flex-col justify-center items-center lg:px-[70px] lg:flex-row lg:justify-between lg;items-center px-5 pt-24 lg:pt-16 font-plus">
      <div className=" flex flex-col items-center lg:flex-row justify-between lg:w-[900px]">
        <div>
            <div className='w-[104px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px]'></div><h4 className='font-plus font-semibold text-[16px] pr-[20px] text-[#1A1C1F] items-center text-center'>Boards</h4></div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
          We offer courses for Both CBSE and ICSE
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
          </p>
        </div>
       {/* <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
  </div>*/}
      </div>
      <div><img src={boardicon} alt="" className='lg:w-[400px] lg:pl-[20px]'/></div>
     </div>
  );
};
  
export default Thirdsection