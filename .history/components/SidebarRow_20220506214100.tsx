import React from 'react'

interface props {
    Icon: React.ComponentType<{}>
    name : string
}
function SidebarRow({Icon, name}: props) {
  return (
    <div>SidebarRow</div>
  )
}

export default SidebarRow