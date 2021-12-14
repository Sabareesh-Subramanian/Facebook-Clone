// import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PeopleIcon from "@material-ui/icons/People";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AppsIcon from "@material-ui/icons/Apps";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import BusinessIcon from "@material-ui/icons/Business";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "../Context/StateProvider";
import "../StyleModules/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import FeedbackIcon from "@material-ui/icons/Feedback";
import grey from "@material-ui/core/colors/grey";
import { Link } from "react-router-dom";

const pri = grey[100];
const StyledMenu = withStyles({
  paper: {
    borderRadius: "20px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: pri,

      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.gray,
      },
    },
  },
}))(MenuItem);

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [{ user }] = useStateValue();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    console.log("user: ", user)
  },[])
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon color="primary" />
          <input type="text " placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option">
         <Link to="/"><HomeIcon fontSize="large" /></Link> 
        </div>

        <div className="header__option">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header__option">
          <BusinessIcon fontSize="large" />
        </div>
        <div className="header__option">
          <PeopleIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SportsEsportsIcon fontSize="large" />
        </div>
      </div> 
      <div className="header__right">
          <Link to="/profile"><div
          
          className="header__info"
        >
          <Avatar
            src={user.photoURL}
          />
          <h5>{user.displayName}</h5>
        </div></Link>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ backgroundColor: "white" }}
        >
          <IconButton>
            {" "}
            <ArrowDropDownIcon />
          </IconButton>
        </Button>

        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <IconButton>
              <Avatar
                src={user.photoURL} className="headerProfilePhoto"
              />
            </IconButton>
            <ListItemText>
              <div className="headerProfileDiv">
                <h5>{user.first_name} {user.last_name}</h5>
                <p>See your profile</p>
              </div>
            </ListItemText>
          </StyledMenuItem>
          <hr />
          <StyledMenuItem>
            <IconButton
              style={{
                backgroundColor: "rgb(235, 231, 231)",
                color: "black",
                marginRight: "20px",
              }}
            >
              <FeedbackIcon fontSize="small" />
            </IconButton>
            <ListItemText>
              <div className="headerFeedbackDiv">
                <p>Give feedback</p>
                <p>Help us improve the new Facebook</p>
              </div>
            </ListItemText>
           
          </StyledMenuItem>
          <hr />
          <StyledMenuItem>
            <IconButton
              style={{
                backgroundColor: "rgb(235, 231, 231)",
                color: "black",
                marginRight: "20px",
              }}
            >
              <SettingsIcon />
            </IconButton>
            <ListItemText>
              {" "}
              <div>
                <p>Settings & privacy</p>
              </div>
            </ListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <IconButton
              style={{
                backgroundColor: "rgb(235, 231, 231)",
                color: "black",
                marginRight: "20px",
              }}
            >
              <HelpIcon />
            </IconButton>
            <ListItemText>
              {" "}
              <div>
                <p>Help & support</p>
              </div>
            </ListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <IconButton
              style={{
                backgroundColor: "rgb(235, 231, 231)",
                color: "black",
                marginRight: "20px",
              }}
            >
              <NightsStayIcon />
            </IconButton>
            <ListItemText>
              {" "}
              <div>
                <p>Display & accessibility</p>
              </div>
            </ListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <IconButton
              style={{
                backgroundColor: "rgb(235, 231, 231)",
                color: "black",
                marginRight: "20px",
              }}
            >
              <ExitToAppIcon />
            </IconButton>
            <ListItemText>
              {" "}
              <div>
                <p>Log Out</p>
              </div>
            </ListItemText>
          </StyledMenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};

export { Header };
