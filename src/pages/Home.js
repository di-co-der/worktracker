import React from 'react';
import image from '../assets/landingPageImg.png'

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-white flex">
        <div className="h-full w-6/12 bg-white flex flex-col items-center justify-center ">
          <h1 className="text-5xl font-bold p-3">
            <div className='p-2 pb-0'> Track your <span className='text-[#6C6EF5]'>work progress</span></div>
            <div className='p-2 pb-0'> <span className='text-[#6C6EF5]'>Anywhere</span> Anytime!</div>
            <div className='p-2 pb-0 text-nowrap'>Track . <span className='text-[#6C6EF5]' >Analyze</span> . Optimize .</div> 
          </h1>
          <p className="text-3xl text-gray-600 mb-6">Elevate Your Workflow, Optimize Your Time.</p>
          <button className="px-10 py-3 bg-[#FE978E] text-white text-center rounded-full font-semibold text-2xl transition-all hover:bg-[#E1483E]">Start</button>
        </div>
        <div className="h-full w-6/12">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="Work Progress"
          />
        </div>  
    </div>
    </div>
  );
}

export default Home;