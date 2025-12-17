import React from 'react'
import { cardData } from './Carddata'

const page = () => {
  return (
    <div>

      <div className="pt-3 pb-6 bg-[#22235766] mt-[3.4rem]">
          <div className="bg-[url('/images/Rheader.jpg')] w-2/3 mx-auto mt-4 bg-center opacity-30   rounded-md z-10">
            <span className='text-white text-[65px] text-center p-4 font-bold flex justify-center items-center z-50'>
              RFC BLOG
            </span>
      </div>
      </div>
      
     <div className="w-[85%] mx-auto">
         <h1 className="text-xl font-bold my-8">Recent blog posts</h1>
      <div className="flex flex-col md:flex-row gap-3">
        
        <div className="md:w-1/2">
        
          <img src="/images/cardy.png" alt="card one" className='w-full' />
        
        <h1 className="text-sm md:text-xl font-bold my-8 md:my-4 text-[#6941C6]">
          Yusuf  Afolabi • 1 Feb 2025
        </h1>

        <p className="w-full flex justify-between item-center">
          <span className="text-xl md:text-2xl font-bold">
            Should Christians Date?
          </span>
          <span className="inline-block -translate-y-0.15 -rotate-36">
            →
          </span>
        </p>

        <p className="w-full max-w-[500px] text-[#394452] my-4 md:my-2 text-sm md:text-xl">
          How do you create lorem opsioum that latino your dummmy and dummo your findet?
        </p>

        <p className='text-[#394452] my-4 md:my-2 text-sm md:text-xl' >
          Read More
        </p>
        </div>
        <div className="md:w-1/2 md:p-4">
        <div className="md:flex md:justify-between items-center gap-3">

          <div className='w-full'>
            <img src="/images/cardium.png" alt="card" className='w-full'/>
          </div>
          
          <div>
            <h1 className="text-sm md:text-xl font-bold my-4  text-[#6941C6]">
          Titi Tayo • 1 Jan 2025
        </h1>
            <h1 className="text-sm md:text-xl font-bold">
            Should Christians Date?
          </h1>

          <p className="w-full text-[#394452] my-4 md:my-2 text-sm md:text-xl">
          How do you create lorem opsioum that latino your dummmy and dummo your findet?
        </p>

        <p className='text-[#394452] my-4 text-sm md:text-xl' >
          Read More
        </p>
          </div>
        </div>

        <div className="md:flex md:justify-between items-center gap-3">

          <div className='w-full'>
            <img src="/images/cardium.png" alt="card" className='w-full'/>
          </div>
          
          <div>
            <h1 className="text-sm md:text-xl font-bold my-4  text-[#6941C6]">
          Titi Tayo • 1 Jan 2025
        </h1>
            <h1 className="text-sm md:text-xl font-bold">
            Should Christians Date?
          </h1>

          <p className="w-full text-[#394452] my-4 md:my-2 text-sm md:text-xl">
          How do you create lorem opsioum that latino your dummmy and dummo your findet?
        </p>

        <p className='text-[#394452] my-4 text-sm md:text-xl' >
          Read More
        </p>
          </div>
        </div>

        </div>

      </div>

      <div className="flex flex-col  w-full item-center md:flex-row md:gap-8">

        <div className="md:w-1/2">
        <div className="w-full">
          <img src="./images/sec.png" alt="second image" className='w-full' />
        </div>
        
        </div>
        
        <div className='md:w-1/2'>
          <h1 className="text-sm md:text-xl font-bold my-8 md:my-4 text-[#6941C6]">
          Donny Friederichsen • 1 Jan 2025
        </h1>

        <p className="w-full flex justify-between item-center">
          <span className="text-xl md:text-2xl font-bold">
            Why Should I Attend Church in College?
          </span>
          <span className="inline-block -translate-y-0.15 -rotate-36">
            →
          </span>
        </p>

        <p className="w-full text-[#394452] my-4 md:my-2 text-sm md:text-xl">
         You’ve made it. You stand among the stately ivy-covered halls of your chosen college. You walk across the manicured quad, dorms, and library to your classes. You are on your way to higher education. Everything seems perfectly designed to prepare you for your future life and career—except it isn’t. The college life is not real life. This is not to say that real and important things do not happen in....
        </p>

        <p className='text-[#394452] my-4 md:my-2 text-sm md:text-xl' >
          Read More
        </p>
        </div>
      </div>

      

      <h1 className="font-bold mt-2 mb-7">
        All blog posts
      </h1>

       <div className="flex items-center gap-5 flex-wrap my-3 border-b-[0.5px] pb-8">
      {cardData.map((card, index) => (
        <div key={index} className='rounded-md shadow-sm p-2'>
          <div className='w-full max-w-[350px]'>
            <img src={card.image} alt={card.title} className='w-full' />
          </div>
          <h1 className="font-bold my-3 whitespace-pre-line">
            {card.title}
          </h1>
          <p className="text-sm text-[#394452] my-2">
            {card.description}
          </p>

          <a href={card.link}>
            <button className='bg-[#161750] text-white p-1.5 my-3'>
              {card.buttonText}
            </button>
          </a>
        </div>
      ))}
    </div>

    <div className="flex my-2 justify-between items-center w-full mb-10 text-[#667085]">
       
       <span className='cursor-pointer'>
        ← Previous
       </span>
       <div className="hidden md:flex gap-2 cursor-pointer">
        <span className='p-1 hover:[#F9F5FF]'>
          1
        </span>
        <span className='p-1 hover:[#F9F5FF]'>
          2
        </span>
        <span className='p-1 hover:[#F9F5FF]'>
          3
        </span>
        <span className='p-1 hover:[#F9F5FF]'>
          ...
        </span>
        <span className='p-1 hover:[#F9F5FF]'>
          8
        </span>
        <span className='p-1 hover:[#F9F5FF]'>
          9
        </span>
        <span className='p-1 hover:[#F9F5FF]'>
          10
        </span>
       </div>
       <span className='cursor-pointer'>
         → Next
       </span>
    </div>
     </div>
    </div>
  )
}

export default page
