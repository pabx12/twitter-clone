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
                        <PhotographIcon/>
                        <SearchCircleIcon/>
                        <EmojiHappyIcon/>
                        <CalendarIcon/>
                        <LocationMarkerIcon/>

                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox