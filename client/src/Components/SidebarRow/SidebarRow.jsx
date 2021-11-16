import { Avatar } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import "../styles/SidebarRow.css";

function SidebarRow({ src, Icon, title }) {
    const [{ user }] = useStateValue();
    return (
        <div className="sidebarRow">
            {src && <Avatar src={user.photoURL} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
            
        </div>
    )
}

export default SidebarRow
