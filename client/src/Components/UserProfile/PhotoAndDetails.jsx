import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useState } from "react";
import avatar from "../../Icons/avatar.jpg";
import edit from "../../Icons/edit.svg";
import more from "../../Icons/more.svg";
import addphoto from "../../Icons/addphoto.svg";
import plus from "../../Icons/plus.svg";

const CoverPhotoButton = styled.button`
  z-index: 10;
  position: absolute;
  margin-top: 25%;
  margin-left: 70%;
  /* margin-right: 100px; */
`;

const MoreBox = styled.div`
  width: 20%;
  height: 40%;
  margin-left: 50%;
  background: #242526 !important;
  border-radius: 5px;
  border: 1px solid grey;
  color: white;
  overflow-y: scroll;
  position: absolute;
  z-index: 10;
  display: ${(props) => (props.showMore ? "block" : "none")};
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const PhotoAndDetails = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {/* Photo and Info Start */}
      <CoverPhotoButton className="btn btn-sm bg-light text-dark">
        <img src={addphoto} alt="AddPhoto" />
        <span>Edit Cover Photo</span>
      </CoverPhotoButton>
      <div
        style={{ background: "#242526", color: "white" }}
        className="col-12 p-3"
      >
        {/* Cover Photo */}
        <img
          className="img-fluid offset-2 col-8 rounded"
          style={{ height: "350px", objectFit: "cover", zIndex: "0" }}
          src="https://media-exp1.licdn.com/dms/image/C5616AQGqVbWQ_cYZ1g/profile-displaybackgroundimage-shrink_350_1400/0/1624588252195?e=1642032000&v=beta&t=2EG0lkbZmd0CFrmHtHlBdPZJU_Kj6AGDyg78YFeaVa0"
          alt="CoverPic"
        />

        {/* Profile Photo and Info */}
        <div className="col-12 d-flex">
          <div
            className="rounded-circle col-2 offset-2"
            style={{
              marginTop: "-5%",
              border: "5px solid #242526",
            }}
          >
            <img
              style={{ height: "200px", objectFit: "cover" }}
              className="rounded-circle "
              src="https://github.com/biswajitdas-007/biswajitdas-007/blob/main/DSC_0121-modified-min%20(1).png?raw=true"
              alt="ProfilePic"
            />
          </div>
          <div className="col-6 ps-2">
            <div className="h4 text-light mt-4">Biswajit Das</div>
            <p>1.1K Friends</p>
            <div className="d-flex justify-content-between">
              <AvatarGroup max={5}>
                <Avatar alt="Remy Sharp" src={avatar} />
                <Avatar
                  alt="Travis Howard"
                  src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.6435-1/c0.0.320.320a/p320x320/30127381_1637900336306576_3447710002440044544_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6Y18-FXio-MAX9gT-vZ&_nc_oc=AQm29w5DsxsOdQ1fQnqwH9NsbKIW5UIXP9VRInHdvyF5DproYLV7g7w3U75KhhHLsLUnwbkCcMsF9qdgqdjCNlCw&_nc_ht=scontent.fmaa2-3.fna&oh=13f25b2aad908d6116f19c2f804de180&oe=61B0DB37"
                />
                <Avatar alt="Cindy Baker" src={avatar} />
                <Avatar
                  alt="Agnes Walker"
                  src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.6435-1/c0.0.320.320a/p320x320/30127381_1637900336306576_3447710002440044544_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6Y18-FXio-MAX9gT-vZ&_nc_oc=AQm29w5DsxsOdQ1fQnqwH9NsbKIW5UIXP9VRInHdvyF5DproYLV7g7w3U75KhhHLsLUnwbkCcMsF9qdgqdjCNlCw&_nc_ht=scontent.fmaa2-3.fna&oh=13f25b2aad908d6116f19c2f804de180&oe=61B0DB37"
                />
                <Avatar alt="Trevor Henderson" src={avatar} />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.6435-1/c0.0.320.320a/p320x320/30127381_1637900336306576_3447710002440044544_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6Y18-FXio-MAX9gT-vZ&_nc_oc=AQm29w5DsxsOdQ1fQnqwH9NsbKIW5UIXP9VRInHdvyF5DproYLV7g7w3U75KhhHLsLUnwbkCcMsF9qdgqdjCNlCw&_nc_ht=scontent.fmaa2-3.fna&oh=13f25b2aad908d6116f19c2f804de180&oe=61B0DB37"
                />
                <Avatar alt="Trevor Henderson" src={avatar} />
              </AvatarGroup>
              <div>
                <button
                  onClick={() => {
                    window.location.href = "/stories";
                  }}
                  type="button"
                  class=" btn btn-sm btn-primary"
                >
                  {/* <img src={plus} alt="PlusSign" /> */}
                  <span> View Stories</span>
                </button>
                <button type="button" class="ms-2 btn btn-sm btn-secondary">
                  <img src={edit} alt="PlusSign" />
                  <span> Edit Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Break Line */}
        <hr className="col-8 offset-2" />
        {/* Other Tabs Info */}
        <div className="col-8 offset-2 d-flex jusyify-content-between">
          <div className="col-11">
            <button type="button" class="btn border-0 btn-outline-primary">
              Posts
            </button>
            <button type="button" class="btn border-0 btn-outline-secondary">
              About
            </button>
            <button type="button" class="btn border-0 btn-outline-secondary">
              Friends
            </button>
            <button type="button" class="btn border-0 btn-outline-secondary">
              Photos
            </button>
            <button type="button" class="btn border-0 btn-outline-secondary">
              Story Archive
            </button>
            <button type="button" class="btn border-0 btn-outline-secondary">
              Videos
            </button>
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
              type="button"
              class="btn border-0 btn-outline-secondary"
            >
              <span>More</span>
              {/* <img className="img-fluid" src={expand} alt="ExpandMore"></img> */}
            </button>
          </div>
          <div>
            <button type="button" class="btn border-0 btn-outline-secondary">
              <img src={more} alt="More" />
            </button>
          </div>
        </div>
      </div>
      <MoreBox showMore={showMore}>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Check-ins
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Sports
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Music
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Films
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          TV Programmes
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Books
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Apps and Games
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Events
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Questions
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Reviews given
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Groups
        </button>
        <button className="btn btn-outline-secondary col-12 border-0 text-start">
          Manage Sections
        </button>
      </MoreBox>
      {/* Photo and Info End */}
    </>
  );
};
