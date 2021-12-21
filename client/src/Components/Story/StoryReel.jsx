import React, { useState } from 'react'
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
                image="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
                profileSrc="https://user-images.githubusercontent.com/78302050/136450736-0bc9f56c-450b-4623-8ebe-cc0f7735d888.png"
                title="Piyush Ranjan"
            />
            <Story
                image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                title="Sabreesh Subraminan"
            />
            <Story
                image="http://webmeup.com/upload/blog/lead-image-105.png"
                profileSrc="https://media.istockphoto.com/photos/living-that-urban-life-picture-id1165314750?k=20&m=1165314750&s=612x612&w=0&h=QcN0aTHS8IpSbNEnSU9Vno8vUjCEFQs4gbZ72dG6yvM="
                title="Biswajit Das"
            />
            <Story
                image="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg"
                profileSrc="https://api.time.com/wp-content/uploads/2017/12/joey-degrandis-hsam-memory.jpg"
                title="Prajal Bankoti"
            />
            <Story
                image="https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg"
                profileSrc="https://www.gannett-cdn.com/presto/2019/12/23/PNAS/29812a55-ea4b-4e0a-9139-f9c1b1025871-Anthony_Donaldson_2.jpg"
                title="Nagendra Singh"
            />
             </div>
            </Link>
       
    )
}

export default StoryReel
