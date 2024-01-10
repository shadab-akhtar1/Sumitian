import React,{useRef} from 'react';
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import profile from '../Assets/Ellipse 5.png';

export const Sixthsection = () => {
  const data = [
    {
      img: profile,
      name: "Dr. Serena Mitchell",
      description: "It was a very good experience",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
    },
    {
      img: profile,
      name: "Dr. Julian Bennett",
      description: "It was a very good experience",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
    },
    {
      img: profile,
      name: "Dr. Camila Rodriguez",
      description: "It was a very good experience",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
    },
    {
      img: profile,
      name: "Dr. Victor Nguyen",
      description: "It was a very good experience",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
    },
    {
      img: profile,
      name: "Dr. Ethan Carter",
      description: "It was a very good experience",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu."
    },
    {
      img: profile,
      name: "Dr. Olivia Martinez",
      description: "It was a very good experience",
      des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu ."
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
     {/* <div className=" bg-[#FAFAFB] flex flex-col justify-center lg:px-[70px] px-5 py-24 lg:pt-16 font-plus">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
            <div className='w-[110px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px]'></div><h4 className='font-plus font-semibold text-[20px] text-[#1A1C1F] items-center text-center'>Testimonials</h4></div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            What Our Student Say About Us
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
          </p>
        </div>
      </div>
  </div>*/}

      <div className="  bg-[#FAFAFB] flex flex-col justify-center lg:px-[70px] px-5 py-24 lg:pt-16 font-plus">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
      <div>
            <div className='w-[143px] h-[51px] flex justify-between items-center mb-[20px] bg-[#F5F6F7]'><div className='bg-[#FFDA31] w-[5px] h-[51px]'></div><h4 className='font-plus font-semibold text-[20px] text-[#1A1C1F] items-center text-center pr-[10px]'>Testimonials</h4></div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            What Our Student Say About Us
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
          </p>
        </div>
        {/*
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
*/}
      </div>
      <div className=" mt-5 ">
        <Slider ref={slider} {...settings} className="">
          {data.map((e, ) => (
            <div
              className=" xl:h-[400px] lg:w-[582px] text-black p-[10px] flex flex-col lg:flex lg:flex-row rounded-[12px]  mb-2 cursor-pointer border-[3px] border-solid border-[#FFDA31] gap-[20px] "
              
            >
              <div className='flex flex-row justify-start items-center '>
                <div><img src={e.img} alt="" className='h-[72px] w-[72px]'/></div>
                <div className='flex flex-col pl-[10px]   '>
                  <p className='text-[24px] font-semibold font-plus text-[#000000]'>Leo</p>
                  <p className='text-[12px] font-normal font-plus text-[#000000]'>Student IX</p>
                </div>
                <div className=''></div>
              </div>

              <div className=" flex flex-col  ">
                <h1 className=" font-semibold text-xl pt-4">{e.description}</h1>
                <p className="  font-plus text-[15px] font-normal leading-[21.6px] text-center  ">{e.des}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  )
}
export default Sixthsection