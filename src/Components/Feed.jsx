import React from 'react'
import "./styles/Feed.css";
import StoryReel from "./Story/StoryReel"
import MessageSender from './Message/MessageSender';
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                message="WOW ! this works "
                timestamp="this is timestamp"
                username="Rahul raj"
                image="https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-6/p843x403/255340924_421612029538499_3583402966166126585_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=H8QhiolXthsAX9c-UOk&_nc_ht=scontent.fpat3-2.fna&oh=558c582017cccab4f6cf9ee29f193ffb&oe=61925058"
            />
            <Post
                profilePic="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                message="WOW ! this works "
                timestamp="this is timestamp"
                username="Rahul raj"
                image="https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-6/p843x403/255340924_421612029538499_3583402966166126585_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=H8QhiolXthsAX9c-UOk&_nc_ht=scontent.fpat3-2.fna&oh=558c582017cccab4f6cf9ee29f193ffb&oe=61925058"
            />
           
            
            
            {/*Messagesender */}

            
        </div>
    )
}

export default Feed
