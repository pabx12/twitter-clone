import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

function Feed() {
  return (
    <div>
        <div>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
            <RefreshIcon className='mr-5  mt-5 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-90 active:scale-125'/>
        </div>
    </div>
  )
}

export default Feed