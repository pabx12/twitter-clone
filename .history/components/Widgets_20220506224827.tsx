import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

function Widgets() {
  return (
    <div>
        {/* search */}
        <div className='flex items-center space-x-3 bg-gray-100'>
            <SearchIcon className='w-5 h-5'/>
            <input className='border-none focus:outline-none focus:shadow-outline-none w-full p-2' type="text" placeholder="Search" />
        </div>
    </div>
  )
}

export default Widgets