import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='mt-2 px-2 col-span-2 hidden lg:inline '>
        {/* search */}
        <div className='flex items-center space-x-2 bg-gray-100 p-1 rounded-full'>
            <SearchIcon className='w-5 h-5 text-gray-400'/>
            <input className='flex-1 bg-transparent border-none focus:outline-none focus:shadow-outline-none w-full p-2' type="text" placeholder="Search" />
        </div>

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="BarthelemyDias1"
        options={{height: 600}}
        />
    </div>
  )
}

export default Widgets