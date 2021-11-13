import collections from "../../Icons/collections.svg";
import more from "../../Icons/more.svg";
import comment from "../../Icons/comment.svg";
import share from "../../Icons/share.svg";
import videocam from "../../Icons/videocam.svg";
import flag from "../../Icons/flag.svg";
import like from "../../Icons/like.svg";
// import haha from "../../Icons/haha.svg";
// import Avatar from "@mui/material/Avatar";
// import AvatarGroup from "@mui/material/AvatarGroup";
import styled from "styled-components";
const ParentDiv = styled.div`
  height: 300vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const PostsRight = () => {
  return (
    <>
      {/* Posts - Right Div Start */}
      <ParentDiv className="col-5 ms-3 text-light">
        {/* Add Post Div */}
        <div style={{ background: "#242526" }} className="p-3 mt-3 rounded">
          <div className="d-flex">
            <img
              className="col-1 rounded-circle"
              src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.6435-1/c0.0.320.320a/p320x320/30127381_1637900336306576_3447710002440044544_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6Y18-FXio-MAX9gT-vZ&_nc_oc=AQm29w5DsxsOdQ1fQnqwH9NsbKIW5UIXP9VRInHdvyF5DproYLV7g7w3U75KhhHLsLUnwbkCcMsF9qdgqdjCNlCw&_nc_ht=scontent.fmaa2-3.fna&oh=13f25b2aad908d6116f19c2f804de180&oe=61B0DB37"
              alt="ProfilePic"
            />
            <input
              style={{ outline: "none", background: "#3a3b3c" }}
              placeholder="What's on your mind?"
              className="rounded-pill border-0 ps-4 text-light col-10 ms-4"
            >
              {/* What's on your mind? */}
            </input>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-secondary text-light border-0">
              <img className="me-2" src={videocam} alt="Videocam" />
              Live Video
            </button>
            <button className="btn btn-outline-secondary text-light border-0">
              <img className="me-2" src={collections} alt="Videocam" />
              Photo/Video
            </button>
            <button className="btn btn-outline-secondary text-light border-0">
              <img className="me-2" src={flag} alt="Videocam" />
              Life Event
            </button>
          </div>
        </div>
        {/* First Post */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((post) => {
          return (
            <div style={{ background: "#242526" }} className="p-3 mt-3 rounded">
              <div className="d-flex justify-content-between">
                <img
                  className="col-1 rounded-circle me-3"
                  src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.6435-1/c0.0.320.320a/p320x320/30127381_1637900336306576_3447710002440044544_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6Y18-FXio-MAX9gT-vZ&_nc_oc=AQm29w5DsxsOdQ1fQnqwH9NsbKIW5UIXP9VRInHdvyF5DproYLV7g7w3U75KhhHLsLUnwbkCcMsF9qdgqdjCNlCw&_nc_ht=scontent.fmaa2-3.fna&oh=13f25b2aad908d6116f19c2f804de180&oe=61B0DB37"
                  alt="ProfilePic"
                />
                <div>
                  <b>Sabareesh Subramanian</b> is with <b>Masai School</b> and{" "}
                  <b>
                    <u>3 others</u>
                  </b>
                  .
                </div>
                <button
                  type="button"
                  class="btn ms-3 border-0 btn-outline-secondary"
                >
                  <img src={more} alt="More" />
                </button>
              </div>
              <img
                className="img-fluid rounded my-3"
                src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.18169-9/22688521_2089207264694814_4435024752859347702_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=9267fe&_nc_ohc=EhbbMGOptDAAX-P92C2&_nc_ht=scontent.fmaa2-3.fna&oh=7425e708c077befd4d2ecbf9be5ae971&oe=61B27A07"
                alt=""
              />
              <div className="d-flex justify-content-between">
                {/* <div>
              <AvatarGroup max={2}>
                <Avatar alt="Remy Sharp" src={like} />
                <Avatar alt="Cindy Baker" src={haha} />
              </AvatarGroup>
            </div> */}
                <p>Liked by Masai School and 10 others.</p>
                <p>8 Comments</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-secondary text-light border-0">
                  <img className="me-2" src={like} alt="Videocam" />
                  Like
                </button>
                <button className="btn btn-outline-secondary text-light border-0">
                  <img className="me-2" src={comment} alt="Videocam" />
                  Comment
                </button>
                <button className="btn btn-outline-secondary text-light border-0">
                  <img className="me-2" src={share} alt="Videocam" />
                  Share
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </ParentDiv>
      {/* Posts - Right Div End */}
    </>
  );
};
