import React from 'react'
import SidebarRow from './SidebarRow'
import {
    BellIcon,
    HashtagIcon,
    HomeIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    LogoutIcon
} from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"

function Sidebar() {
  function LoginBtn(){
    const { data: session } = useSession()
    if (session) {
      return (
        <>
         <SidebarRow Icon={LogoutIcon} name="Log Out" />
        </>
      )
    }
    return (
      <>
       <SidebarRow Icon={UserIcon} name="Sign In" />
      </>
    )
  }
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
        <img className='m-3 w-10 h-10' src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_960_720.png" alt="Twitter" />
        <SidebarRow Icon={HomeIcon} name="Home" />
        <SidebarRow Icon={HashtagIcon} name="Explore" />
        <SidebarRow Icon={BellIcon} name="Notifications" />
        <SidebarRow Icon={MailIcon} name="Messages" />
        <SidebarRow Icon={BookmarkIcon} name="Bookmarks" />
        <SidebarRow Icon={CollectionIcon} name="Lists" />
        <LoginBtn />
        <SidebarRow Icon={DotsCircleHorizontalIcon} name="More" />
        <div className='flex max-w-fit items-center'>
          <button className='w-40 px-5 py-3 bg-twitter'>Tweet</button>
        </div>
    </div>
  )
}

export default Sidebar