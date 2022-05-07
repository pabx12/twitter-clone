import React from 'react'
import { Tweet } from '../typings'
import ReactTimeAgo from 'react-time-ago'
export type Props = {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {
  return (
    <div>
        <img src={tweet.tweetImage} alt='profile' className='rounded-full w-10 h-10 mr-5'/>
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
  )
}

export default Tweet