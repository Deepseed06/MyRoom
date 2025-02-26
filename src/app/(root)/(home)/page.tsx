'use client'
import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'
import { useGetCalls } from '../../../../hooks/useGetCalls';
const Home = () => {

  const {upcomingCalls} = useGetCalls();
 const upcoming =  upcomingCalls.map((meeting) => meeting.state?.startsAt?.toLocaleString())
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {hour:'2-digit',
  minute: '2-digit'
  });
  const date = (new Intl.DateTimeFormat('en-US', {
    dateStyle:'full'
  })).format(now)

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex flex-col h-full justify-between max-md:px-5
        max-md:py-8 lg:p-11 '>
          
          <h2 className='glassmorphism max-w-[270px] rounded
          py-2 text-center text-base font-normal'>
            
            Upcoming Meeting by {upcoming[0]} 
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-4xl lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {date}
            </p>

          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  )
}

export default Home