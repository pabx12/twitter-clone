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
    UserIcon
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
        <img className='m-3 w-10 h-10' src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_960_720.png" alt="Twitter" />
        <SidebarRow Icon={HomeIcon} name="Home" />
        <SidebarRow Icon={HashtagIcon} name="Explore" />
        <SidebarRow Icon={BellIcon} name="Notifications" />
        <SidebarRow Icon={MailIcon} name="Messages" />
        <SidebarRow Icon={BookmarkIcon} name="Bookmarks" />
        <SidebarRow Icon={CollectionIcon} name="Lists" />
        <SidebarRow Icon={UserIcon} name="Sign In" />
        <SidebarRow Icon={DotsCircleHorizontalIcon} name="More" />
    </div>
  )
}

export default Sidebar