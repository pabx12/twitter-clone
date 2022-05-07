import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function Widgets() {
  return (
    <div>
        {/* search */}
        <div className='flex items-center space-x-2 bg-gray-100 p-1 rounded-full'>
            <SearchIcon className='w-5 h-5 text-gray-400'/>
            <input className='flex-1 bg-transparent border-none focus:outline-none focus:shadow-outline-none w-full p-2' type="text" placeholder="Search" />
        </div>
    </div>
  )
}

export default Widgets