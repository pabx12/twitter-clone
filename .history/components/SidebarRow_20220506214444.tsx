import React from 'react'

interface props {
    Icon: React.ComponentType<{}>
    name : string
}
function SidebarRow({Icon, name}: props) {
  return (
    <div>
        <Icon />
        <p>{name}</p>
    </div>
  )
}

export default SidebarRow