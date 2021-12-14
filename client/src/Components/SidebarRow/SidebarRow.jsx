import { Avatar } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import "../styles/SidebarRow.css";
import styles from "../../StyleModules/SidebarRow.module.css";
function SidebarRow({ src, Icon, title }) {
    const [{ user }] = useStateValue();
    return (
        <div className={styles.sidebarRow}>
            <div>
                {Icon && <div><Icon className={styles.Icon} /></div>}
                {src && <div><Avatar src={user.photoURL} className={styles.Icon} /></div>}
                <div>
                    <p className={styles.title}>{title}</p>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default SidebarRow
