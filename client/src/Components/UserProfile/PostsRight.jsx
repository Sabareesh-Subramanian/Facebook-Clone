import { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import db from "../../firebase"
import firebase from "firebase/compat/app";
import "../styles/MessageSender.css"
import collections from "../../Icons/collections.svg";
import more from "../../Icons/more.svg";
import comment from "../../Icons/comment.svg";
import share from "../../Icons/share.svg";
import videocam from "../../Icons/videocam.svg";
import flag from "../../Icons/flag.svg";
import like from "../../Icons/like.svg";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar } from '@material-ui/core'
import styles from "../../StyleModules/PostsRight.module.css";
import styled from "styled-components";
import { useEffect } from "react";
const ParentDiv = styled.div`
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const PostsRight = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [posts, setPosts] = useState([]);
  const [{ user }] = useStateValue();
  const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("users").doc(`${user.uid}`).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            ProfilePic: user.photoURL,
            username:user.first_name,
            image:imageUrl
        })

        setInput("");
        setImageUrl("");
  }

  useEffect(() => {
    db.collection("users").doc(`${user.uid}`).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      snapshot.docs.map(doc => console.log(doc.data()));
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    });
  },[])
  return (
    <>
      {/* Posts - Right Div Start */}
      <ParentDiv className="col-5 ms-3 text-light" >
        {/* Add Post Div */}
        <div style={{ background: "#242526", height:"160px", }} className="p-3 mt-3 rounded">
           <div  className={styles.postStatus}>
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form >
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender_input" placeholder={`what's on your mind , ${user.first_name}` }/>
                    <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="Image URL (optional)" />
                    <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
                </form>

            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>

                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>

                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
          </div>
        </div>
        {/* First Post */}
        {posts && posts.map((post) => {
          return (
            <div style={{ background: "#242526" }} className="p-3 mt-3 rounded">
              <div className="d-flex justify-content-between">
                <Avatar src={user.photoURL}/>
                <div className={styles.postsContainer} >
                  <b>Biswajit Das</b> is with <b>Masai School</b> and{" "}
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
              <div className={styles.postsData}>
                <h5>{post.data.message}</h5>
                {post.data.image && <img src={post.data.image} alt="" /> }
              </div>
              <div className="d-flex justify-content-between">
                {/* <div>
              <AvatarGroup max={2}>
                <Avatar alt="Remy Sharp" src={like} />
                <Avatar alt="Cindy Baker" src={haha} />
              </AvatarGroup>
            </div> */}
               
                {/* <p>Liked by Masai School and 10 others.</p>
                <p>8 Comments</p> */}
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
