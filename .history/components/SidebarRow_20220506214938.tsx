import React from 'react'

interface props {
    Icon: React.ComponentType<{}>
    name : string
}
function SidebarRow({Icon, name}: props) {
  return (
    <div>
        <Icon className="h-6" />
        <p>{name}</p>
    </div>
  )
}

export default SidebarRow