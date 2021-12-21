import { FriendsPhotosLeft } from "./FriendsPhotosLeft";
import { PostsRight } from "./PostsRight";
export const PostsFriendsPhotos = () => {
  return (
    <>
      {/* Intro, Friends, Posts, Photos Div Start */}
      <div
        style={{
          background: "#18191A",
            height: "100%",
        }}
        className="row"
      >
        {/* Friends, Photos - Left Div Start */}
        <FriendsPhotosLeft />
        {/* Friends, Photos - Left Div End */}
        {/* Posts - Right Div Start */}
        <PostsRight />
        {/* Posts - Right Div End */}
      </div>
      {/* Intro, Friends, Posts, Photos Div End */}
    </>
  );
};
