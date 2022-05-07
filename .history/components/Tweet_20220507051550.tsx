import React from 'react'
import { Tweet } from '../typings'
import ReactTimeAgo from 'react-time-ago'
import { ChatAlt2Icon, SwitchHorizontalIcon, HeartIcon, UploadIcon } from '@heroicons/react/outline'
export type Props = {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {
  return (
    <div className='flex flex-col space-x-3 border-y border-gray-100 p-5'>
            <div className='flex space-x-3'>
                <img src={tweet.tweetImage} alt='profile' className='rounded-full w-10 h-10 object-cover'/>
                <div>
                    <div className='flex items-center space-x-1'>
                        <p className='mr-1 font-bold'> {tweet.author.name} </p>
                        <p className='hidden text-sm text-gray-600 md:inline'> @{tweet.author.name.replace(/\s+/g,"").toLowerCase()} </p>

                        <ReactTimeAgo 
                            date={tweet._createdAt}  
                            locale="fr-FR"
                            className='text-sm text-gray-600'
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-sm text-gray-900 pt-1'> {tweet.title} </p>
                {tweet.tweetImage && <img src={tweet.tweetImage} alt='tweet' className='m-5 ml-0 mb-1 max-h-60 rounded-lg shadow-sm object-cover'/>}
            </div>
            <div className='flex justify-between mt-5'>
                <div className='flex items-center space-x-3 text-gray-400'>
                    <ChatAlt2Icon className='h-5 w-5'/>
                </div>
                <div className='flex items-center space-x-3 text-gray-400'>
                    <SwitchHorizontalIcon className='h-5 w-5'/>
                </div>
                <div className='flex items-center space-x-3 text-gray-400'>
                    <HeartIcon className='h-5 w-5'/>
                </div>
                <div className='flex items-center space-x-3 text-gray-400'>
                    <UploadIcon className='h-5 w-5'/>
                </div>
            </div>
    </div>
  )
}

export default Tweet