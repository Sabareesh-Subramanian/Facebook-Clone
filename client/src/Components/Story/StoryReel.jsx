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
        <Link to="/stories">
        <div className="storyReel" onClick={handleClick} >
            <Story
                image="https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Piyush Ranjan"
            />
            <Story
                image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Sabreesh Subraminan"
            />
            <Story
                image="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Piyush Ranjan"
            />
            <Story
                image="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Biswajit Das"
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
