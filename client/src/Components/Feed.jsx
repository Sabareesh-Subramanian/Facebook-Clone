import React, { useState,useEffect } from 'react'
import "./styles/Feed.css";
import StoryReel from "./Story/StoryReel"
import MessageSender from './Message/MessageSender';
import Post from "./Post";
import db from '../firebase';
import { useStateValue } from "../Context/StateProvider";

function Feed() {
    
    const [posts, setPosts] = useState([]);
    const [{ user }] = useStateValue();
    useEffect(() => {
        db.collection("users").doc(`${user.uid}`).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        });
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                
                <Post
                    key={post.id}
                    message={post.data.message}
                    profilePic={post.data.ProfilePic}
                    image={post.data.image}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                />
            ))}
            
        </div>
    )
}

export default Feed
