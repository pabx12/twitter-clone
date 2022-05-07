import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function TweetBox() {
  return (
    <div className='flex space-x-2'>
        <img 
            src="https://i.pravatar.cc/300" 
            alt=""
            className="rounded-full object-cover w-14 h-14 mt-4"
        />
        <div className='flex flex-1 pl-2'>
            <form className='flex flex-1 flex-col'>
                <input type="text" placeholder="What's happenning ?"/>
                <div>
                    <div className='flex items-center space-x-2 text-twitter'>
                        <PhotographIcon className='h-5 w-5'/>
                        <SearchCircleIcon className='h-5 w-5'/>
                        <EmojiHappyIcon className='h-5 w-5'/>
                        <CalendarIcon className='h-5 w-5'/>
                        <LocationMarkerIcon className='h-5 w-5'/>

                    </div>
                    <button className='bg-twitter px-5 py-2 font-bold text-white rounded-full'>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox