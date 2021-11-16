import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import { useStateValue } from "../../Context/StateProvider";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ShowStory from "./ShowStory";
import styles from "../../StyleModules/StoryPage.module.css";

const StoryPage = () => {
  const [active, setActive] = useState(false);
  const [img, setImage] = useState(null);
  const [data, setData] = useState([]);
  const [profileImg, setProfileImg] = useState("");
  const [{ user }] = useStateValue();

  const toggleState = () => {
    active ? setActive(!active) : setActive(active);
  };
  const handleClick = (img1, img2) => {
    setImage(img1);
    setProfileImg(img2);
    setActive(true);
  };
  const getStory = async () => {
    console.log("USer%: ", user)
    db.collection("users").doc(`${user.uid}`).collection("stories").onSnapshot((snapshot) => {
            setData(snapshot.docs.map((doc) => doc.data()));
        });
  };
  useEffect(() => {
    getStory();
  }, []);
  return (
    <div className={styles.container}>
      {/* left div */}
      <div className={styles.leftDiv} id="left-div-1">
        <div>
          <div className={styles.leftHeading}>
            <div>
              <h1>Stories</h1>
            </div>
            <div>
              <a href="#">Archieve</a>
              <a href="#">Settings</a>
            </div>
          </div>

          <div className={styles.Color}>
            <div className={styles.Image}>
              <img
                src="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                alt=""
              />
            </div>
            <div>
              <h3>Browse All</h3>
            </div>
          </div>
          <hr />
          <div className={styles.story}>
            <div>
              <h1>Your Story</h1>
            </div>
          </div>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <div className={styles.addStory}>
              <div className={styles.Image}>
                <AddCircleRoundedIcon fontSize="large" />
              </div>
              <div>
                <h4>Add to your story</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* right div */}
      <div className={styles.rightDiv}>
        <div className={styles.storiesContainer}>
          <div className={styles.rightHeading}>
            <div>
              <h4>All Stories</h4>
              <p>
                A collection of stories from friends, Pages and groups that you
                follow
              </p>
            </div>
            <div>
              <a href="#">Play All</a>
            </div>
          </div>
          <div className={styles.storyContainer}>
            {console.log("Data3: ", data)}
            {data.map((item,index) => {
              console.log("item8: ", item)
              return (
                <div
                  key={index}
                  className={styles.parent}
                  onClick={() =>
                    handleClick(
                      `${item.image}`,
                      "https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                    )
                  }
                >
                  <img
                    style={{ objectFit: "cover" }}
                    className={styles.image1}
                    src={item.image}
                    alt="logo"
                    onClick={handleClick}
                  />
                  <img
                    className={styles.image2}
                    src="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                    alt="status"
                  />
                </div>
              );
            })}
          </div>
          {active && (
            <ShowStory
              img={img}
              profileImg={profileImg}
              toggleState={toggleState}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
