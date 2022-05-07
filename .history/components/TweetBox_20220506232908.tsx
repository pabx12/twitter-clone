import React from 'react'

function TweetBox() {
  return (
    <div>
        <img 
            src="https://i.pravatar.cc/300" 
            alt=""
            className="rounded-full object-cover w-14 h-14 mt-4"
        />
        <div>
            <form>
                <input type="text" placeholder="What's happenning ?"/>
            </form>
        </div>
    </div>
  )
}

export default TweetBox