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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "../Context/StateProvider";
import "../StyleModules/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import { useState } from "react";
import FeedbackIcon from "@material-ui/icons/Feedback";
import grey from "@material-ui/core/colors/grey";

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
  const [{ user }, dispatch] = useStateValue();
  console.log("user in header:", user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text " placeholder="Facebook में खोजे" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
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
        <div
          onClick={() => {
            window.location.href = "/profile";
          }}
          className="header__info"
        >
          <Avatar
            src={
              "https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png" ||
              user.photoURL
            }
          />
          <h5>{"Piyush Ranjan" || user.displayName}</h5>
        </div>
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
            <IconButton
              style={{
                backgroundColor: "none",
                color: "black",
                marginRight: "20px",
              }}
            >
              {" "}
              <Avatar
                style={{ width: "50px", height: "50px" }}
                src="https://media-exp1.licdn.com/dms/image/C5603AQGgtVhNNVr5yg/profile-displayphoto-shrink_100_100/0/1633080376415?e=1639612800&v=beta&t=Z2d7kNBuRgUlA8oJxosGfSbdAowunMWrDnt3Sq5Lavg"
              />
            </IconButton>
            <ListItemText>
              {" "}
              <div>
                <h5> Niket Sandilya</h5>

                <p>अपनी प्रोफ़ाइल देखें</p>
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
              <FeedbackIcon fontSize="small" />
            </IconButton>
            <ListItemText>
              {" "}
              <div>
                <p> फ़ीडबैक दें</p>

                <p>नए Facebook को बेहतर बनाने में हमारी मदद करें.</p>
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
              <SettingsIcon />
            </IconButton>
            <ListItemText>
              {" "}
              <div>
                <p> सेटिंग और प्राइवेसी</p>
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
                <p> मदद और सपोर्ट</p>
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
                <p> डिस्प्ले और एक्सेसिबिलिटी</p>
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
                <p>लॉग आउट करें</p>
              </div>
            </ListItemText>
          </StyledMenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};

export { Header };
