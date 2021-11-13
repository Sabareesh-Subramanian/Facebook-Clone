import { PostsFriendsPhotos } from "./PostsFriendsPhotos";
import { PhotoAndDetails } from "./PhotoAndDetails";
import { Header } from "../Header";

export const UserProfile = () => {
  return (
    <>
      {/* Navbar Start */}
      {/* <div
        style={{
          zIndex: "1",
          position: "fixed",
          border: "1px solid white",
          width: "100%",
          background: "#242526",
          color: "white",
        }}
      >
        Navbar
      </div> */}
      <Header />
      {/* Navbar End */}
      {/* Photo and Info Start */}
      <PhotoAndDetails />
      {/* Photo and Info End */}
      {/* Intro, Friends, Posts, Photos Div Start */}
      <PostsFriendsPhotos />
      {/* Intro, Friends, Posts, Photos Div End */}
    </>
  );
};
