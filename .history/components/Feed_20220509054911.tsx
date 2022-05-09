import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import toast from 'react-hot-toast'
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
    const refreshToast = toast.loading('Refreshing...')
    const tweets = await fetchTweets()
    setTweets(tweets)
    toast.success('Refreshed!', {
    id: refreshToast})
  }
  return (
    <div className='col-span-7 lg:col-span-5 border-x max-h-screen overflow-y-scroll scrollbar-hide'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
            <RefreshIcon onClick={refreshTweets} className='mr-5  mt-5 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-90 active:scale-125'/>
        </div>
        {/* TweetBox */}
        <div>
            <TweetBox setTweets={setTweets}/>
        </div>
        <div>
            {tweets.map((tweet, i) => (
              <TweetComponent key={i} tweet = {tweet}/>
            ))}
        </div>
    </div>
  )
}

export default Feed