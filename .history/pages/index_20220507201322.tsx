import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import { Toaster } from 'react-hot-toast';

export type Props = {
  tweets: Tweet[]
}
const Home = ({tweets}:Props) => {
  console.log(tweets)
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen ">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid grid-cols-9'>
        <Sidebar/>
        <Feed tweets={tweets}/>
        <Widgets/>
        <Toaster />
      </main>
      
        
    </div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps = async (context) => {
  const tweets = await fetchTweets()
  return {
    props: {
      tweets
    }}
}