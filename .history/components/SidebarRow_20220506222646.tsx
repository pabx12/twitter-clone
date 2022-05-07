import React, { SVGProps } from 'react'

interface props {
    Icon: (props:SVGProps<SVGSVGElement> ) => JSX.Element
    name : string
}
function SidebarRow({Icon, name}: props) {
  return (
    <div className='flex space-x-2'>
        <Icon className="h-6 w-6" />
        <p>{name}</p>
    </div>
  )
}

export default SidebarRow