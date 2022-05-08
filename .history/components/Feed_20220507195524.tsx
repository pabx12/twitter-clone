import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import  TweetComponent from './Tweet'
import TweetBox from './TweetBox'
export type Props = {
  tweets: Tweet[]
}
function Feed({ tweets:tweetsProps }: Props) {
  const [tweets, setTweets] = React.useState<Tweet[]>(tweetsProps)
  const refreshTweets = async () => {
    const tweets = await fetchTweets()
    setTweets(tweets)
  }
  return (
    <div className='col-span-7 lg:col-span-5 border-x overflow-y-scroll'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
            <RefreshIcon onClick={refreshTweets} className='mr-5  mt-5 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-90 active:scale-125'/>
        </div>
        {/* TweetBox */}
        <div>
            <TweetBox/>
        </div>
        <div>
            {tweets.map((tweet) => (
              <TweetComponent key={tweet._id} tweet = {tweet}/>
            ))}
        </div>
    </div>
  )
}

export default Feed