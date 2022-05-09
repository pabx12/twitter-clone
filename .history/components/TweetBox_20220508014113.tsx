import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon, SearchIcon } from '@heroicons/react/outline'
import  {useState, useRef} from 'react'
import { useSession} from "next-auth/react"


function TweetBox() {
  const [input, setInput] = useState<string>('')
  const [imgUrlBoxOpen, setImgUrlBoxOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')
  const { data: session } = useSession()
  const imageInputRef = useRef<HTMLInputElement>(null)
  const addImageToTweet = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      if(!imageInputRef.current?.value) return
        setImage(imageInputRef.current.value)
        imageInputRef.current.value = ''
        setImgUrlBoxOpen(false)
  }

  return (
    <div className='flex space-x-2 p-5'>
        <img 
            src={`${session?.user?.image || 'https://i.pravatar.cc/300'}`}
            alt=""
            className="rounded-full object-cover w-14 h-14 mt-4"
        />
        <div className='flex flex-1 pl-2'>
            <form className='flex flex-1 flex-col'>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="What's happenning ?"
                    className='h-24 w-full text-xl outline-none border-none focus:shadow-outline-none placeholder:text-xl'
                />
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2 text-twitter'>
                        <PhotographIcon onClick={() =>setImgUrlBoxOpen(true)} className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <SearchCircleIcon className='h-5 w-5'/>
                        <EmojiHappyIcon className='h-5 w-5'/>
                        <CalendarIcon className='h-5 w-5'/>
                        <LocationMarkerIcon className='h-5 w-5'/>

                    </div>
                    <button disabled={!input || !session} className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>Tweet</button>
                </div>

                {imgUrlBoxOpen && (
                    <form className='mt-5 flex rounded-lg bg-twitter/80 py-2 px-4'>
                        <input 
                        ref={imageInputRef}
                        type="text" 
                        placeholder='Enter image url ...'
                        className='flex-1 bg-transparent p-2 text-white outline-none border-none focus:shadow-outline-none  placeholder:text-white'
                    />
                        <button type='submit' onClick={addImageToTweet} className='font-bold text-white'>Add Image</button>
                    </form>
                )}
                {image && (
                    <img src={image} className='w-full h-full object-contain'/>
                )}
            </form>
        </div>
    </div>
  )
}

export default TweetBox