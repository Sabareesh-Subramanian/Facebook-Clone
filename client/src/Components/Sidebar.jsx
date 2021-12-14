import React from "react";
import "./styles/Sidebar.css"
import SidebarRow from "./SidebarRow/SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"
import { useStateValue } from "../Context/StateProvider";

function Sidebar() {
    const [{ user }] = useStateValue();
    return <div className="sidebar">
        <SidebarRow src="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png" title={`${user.first_name} ${user.last_name}`}/>
        <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
}
export default Sidebar