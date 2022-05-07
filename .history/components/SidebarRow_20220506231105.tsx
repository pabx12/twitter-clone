import React, { SVGProps } from 'react'

interface props {
    Icon: (props:SVGProps<SVGSVGElement> ) => JSX.Element
    name : string
}
function SidebarRow({Icon, name}: props) {
  return (
    <div className='flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full group hover:bg-gray-100 cursor-pointer  transition-all duration-200'>
        <Icon className="h-6 w-6" />
        <p className='hidden md:inline-flex group-hover:text-twitter'>{name}</p>
    </div>
  )
}

export default SidebarRow