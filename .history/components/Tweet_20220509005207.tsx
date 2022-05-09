import React, { useState } from 'react'
import { Tweet } from '../typings'
import ReactTimeAgo from 'react-time-ago'
import { ChatAlt2Icon, SwitchHorizontalIcon, HeartIcon, UploadIcon } from '@heroicons/react/outline'
export type Props = {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {
    const [comment, setComment] = useState<string>('')
    const [commentBoxOpen, setCommentBoxOpen] = useState<boolean>(false)
  return (
    <div className='flex flex-col space-x-3 border-y border-gray-100 p-5'>
            <div className='flex space-x-3'>
                <img src={tweet.user?.image || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt='profile' className='rounded-full w-10 h-10 object-cover'/>
                <div>
                    <div className='flex items-center space-x-1'>
                        <p className='mr-1 font-bold'> {tweet.user?.name} </p>
                        <p className='hidden text-sm text-gray-600 md:inline'> @{tweet.user?.name.replace(/\s+/g,"").toLowerCase()} </p>

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
                    <ChatAlt2Icon onClick={() => setCommentBoxOpen(!commentBoxOpen) } className='h-5 w-5'/>
                    <p>{tweet.relatedComments?.length}</p>
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
            {commentBoxOpen && 
                <form>
                    <input type="text" placeholder="Leave a comment"/>
                </form>
            }
         {/* CommentBox */}
         {tweet.relatedComments?.length > 0 && 
            <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
                {tweet.relatedComments?.map((comment) => (
                    <div key={comment._id} className='relative flex space-x-2'>
                            <hr className='absolute left-5 top-10 border-x h-8 border-twitter/30 last:border-0'/>
                            <img src={comment.user?.image} alt='profile' className='mt-2 rounded-full w-7 h-7 object-cover'/>
                            <div>
                                <div className='flex items-center space-x-1'>
                                    <p className='mr-1 font-bold'> {comment.user?.name} </p>
                                    <p className='hidden text-sm text-gray-600 md:inline'> @{comment.user?.name.replace(/\s+/g,"").toLowerCase()} </p>
                                    <ReactTimeAgo
                                        date={comment._createdAt}
                                        locale="fr-FR"
                                        className='text-sm text-gray-600'
                                    />
                                </div>
                                <p className='text-sm text-gray-900 pt-1'> {comment.comment} </p>
                           </div>
                    </div>
                ))}
            </div>
         }
    </div>
  )
}

export default Tweet