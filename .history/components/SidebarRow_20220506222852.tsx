import React, { SVGProps } from 'react'

interface props {
    Icon: (props:SVGProps<SVGSVGElement> ) => JSX.Element
    name : string
}
function SidebarRow({Icon, name}: props) {
  return (
    <div className='flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer  transition-all duration-200'>
        <Icon className="h-6 w-6" />
        <p>{name}</p>
    </div>
  )
}

export default SidebarRow