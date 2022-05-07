import React from 'react'
import { Tweet } from '../typings'
import ReactTimeAgo from 'react-time-ago'
export type Props = {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {
  return (
    <div>
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
                {tweet.tweetImage && <img src={tweet.tweetImage} alt='tweet' className='w-full'/>}
            </div>
    </div>
  )
}

export default Tweet