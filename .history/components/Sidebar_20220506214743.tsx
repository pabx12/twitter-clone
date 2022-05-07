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
    <div>
        <img className='w-10 h-10' src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_960_720.png" alt="Twitter" />
        <SidebarRow Icon={HomeIcon} name="Home" />
    </div>
  )
}

export default Sidebar