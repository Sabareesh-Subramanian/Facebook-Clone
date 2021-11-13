import React, { useState } from 'react'
import StoryPage from '../StoryPage/Story';
import "../styles/StoryReel.css"
import Story from "./Story";

import { Link } from "react-router-dom";
function StoryReel() {
    const [story, setStory] = useState(false);

    const handleClick = () => {
        setStory(true);
    }
    return (
        <Link to="/story">
        <div className="storyReel" onClick={handleClick}>
            <Story
                image="https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Piyush Ranjan"
            />
            <Story
                image="https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Piyush Ranjan"
            />
            <Story
                image="https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Piyush Ranjan"
            />
            <Story
                image="https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Piyush Ranjan"
            />
            <Story
                image="https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Piyush Ranjan"
            />
             </div>
            </Link>
       
    )
}

export default StoryReel
