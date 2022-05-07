import React from 'react'
import { Tweet } from '../typings'
export type Props = {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {
  return (
    <div>
        <img src={tweet.tweetImage} alt='profile' className='rounded-full w-10 h-10 mr-5'/>
        <div>
            <div>
                <p> {tweet.author.name} </p>
                <p> @{tweet.author.name.replace(/\s+/g," ").toLowerCase()} </p>
            </div>
        </div>
    </div>
  )
}

export default Tweet