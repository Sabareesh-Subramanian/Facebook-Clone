import { Avatar } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import "../styles/MessageSender.css"
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from '../../Context/StateProvider';
import db from "../../firebase"
import firebase from "firebase/compat/app";

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
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
    return (
        <div className="messageSender" >
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
    )
}

export default MessageSender
