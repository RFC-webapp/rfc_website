import React from 'react'

const page = () => {
  return (
    <div>
      <div className="container w-full p-2">
        <h1 className='text-[#28166F]'>
            Give
        </h1>

        <div className="mt-5 bg-[#F4F4F4] rounded-full flex justify-between items-center gap-0.5 p-1 w-[60%] max-w-[370px]">
         <div>
              <img src="/images/globe.png" alt="globe image" className='' />
         </div>
           <p className='text-[9px] '>GIVE TO ROCK FOUNDATION</p>
           <div className='w-[20%]'>
            <img src="/images/give.png" alt="give rounded image" className='w-full'/>
           </div>
        </div>

        <div className="mt-5 flex justify-between items-center">
           <h1 className='text-[9px] font-medium'>
            WAYS TO GIVE
        </h1>
        <p className='text-[9px] w-[70%]'>
            Convenient ways to give using wired transfers.
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default page
