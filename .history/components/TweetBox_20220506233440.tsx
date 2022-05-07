import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function TweetBox() {
  return (
    <div>
        <img 
            src="https://i.pravatar.cc/300" 
            alt=""
            className="rounded-full object-cover w-14 h-14 mt-4"
        />
        <div>
            <form>
                <input type="text" placeholder="What's happenning ?"/>
                <div>
                    <div>
                        <PhotographIcon className='h-5 w-5'/>
                        <SearchCircleIcon className='h-5 w-5'/>
                        <EmojiHappyIcon className='h-5 w-5'/>
                        <CalendarIcon className='h-5 w-5'/>
                        <LocationMarkerIcon className='h-5 w-5'/>

                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox