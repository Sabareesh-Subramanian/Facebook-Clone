import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ShowStory from './ShowStory';
import styles from "../../StyleModules/StoryPage.module.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const StoryPage = () => {
    const [active, setActive] = useState(false);
    const [img, setImage] = useState(null);
    const [profileImg, setProfileImg] = useState("");
    const toggleState = () => {
        active ? setActive(!active) : setActive(active);
    }
    const handleClick = (img1, img2) => {
        setImage(img1);
        setProfileImg(img2);
        setActive(true);
    }
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
                            <img src="https://cdn-icons.flaticon.com/png/512/2475/premium/2475252.png?token=exp=1635926912~hmac=67a6126709deb33e7a555ed4ddd5985f" alt="" />
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
                     <Link to="/create" style={{textDecoration:"none"}}>
                    <div className={styles.addStory}>
                        
                        <div className={styles.Image}>
                            <AddCircleRoundedIcon fontSize="large"/>
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
                            <p>A collection of stories from friends, Pages and groups that you follow</p>
                        </div>
                        <div>
                            <a href="#">Play All</a>
                        </div>
                    </div>
                    <div className={styles.storyContainer}>
                        <div className={styles.parent} onClick={()=> handleClick("https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1636630403~hmac=88ef45a182757eb6c6c9452ca51b81d0")}>
                            <img className={styles.image1} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="logo" onClick={handleClick}/>
                            <img className={styles.image2} src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1636630403~hmac=88ef45a182757eb6c6c9452ca51b81d0" alt="status" />
                        </div>
                        <div className={styles.parent} onClick={()=> handleClick("https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg","https://cdn-icons.flaticon.com/png/512/706/premium/706807.png?token=exp=1636630403~hmac=cdd6b035b7eb243067119abbb60014f2")}>
                            <img className={styles.image1} src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons.flaticon.com/png/512/706/premium/706807.png?token=exp=1636630403~hmac=cdd6b035b7eb243067119abbb60014f2" alt="status" />
                        </div>
                        <div className={styles.parent} onClick={()=> handleClick("https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg","https://cdn-icons.flaticon.com/png/512/3006/premium/3006876.png?token=exp=1636630403~hmac=764a8d4a92b33c8ba947ccf5ff3daeaf")}>
                            <img className={styles.image1} src="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons.flaticon.com/png/512/3006/premium/3006876.png?token=exp=1636630403~hmac=764a8d4a92b33c8ba947ccf5ff3daeaf" alt="status" />
                        </div>
                        <div className={styles.parent} onClick={()=>handleClick("https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://cdn-icons.flaticon.com/png/512/1785/premium/1785896.png?token=exp=1636630403~hmac=f329c46ad0bfa152cb3a51c0a3865bac")}>
                            <img className={styles.image1} src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons.flaticon.com/png/512/1785/premium/1785896.png?token=exp=1636630403~hmac=f329c46ad0bfa152cb3a51c0a3865bac" alt="status" />
                        </div>
                        <div className={styles.parent} onClick={()=>handleClick("https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5faad4255239c9448d6c7bcd%2F0x0.jpg","https://cdn-icons-png.flaticon.com/512/4333/4333609.png")}>
                            <img className={styles.image1} src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5faad4255239c9448d6c7bcd%2F0x0.jpg" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" alt="status" />
                        </div>
                        <div className={styles.parent} onClick={()=>handleClick("https://www.filmibeat.com/ph-big/2020/02/v-2020_158253142110.jpg","https://cdn-icons-png.flaticon.com/512/924/924874.png")}>
                            <img className={styles.image1} src="https://www.filmibeat.com/ph-big/2020/02/v-2020_158253142110.jpg" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons-png.flaticon.com/512/924/924874.png" alt="status" />
                        </div>
                        <div className={styles.parent} onClick={()=>handleClick("http://webmeup.com/upload/blog/lead-image-105.png","https://cdn-icons.flaticon.com/png/512/1785/premium/1785911.png?token=exp=1636630403~hmac=3fd55fa2a23720adbd9b36cf0c4d64f6")}>
                            <img className={styles.image1} src="http://webmeup.com/upload/blog/lead-image-105.png" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons.flaticon.com/png/512/3107/premium/3107148.png?token=exp=1636631767~hmac=dc69a68c779c139c89d5acaadc7f580e" alt="profile" />
                        </div>
                        <div className={styles.parent} onClick={()=>handleClick("https://www.online-image-editor.com/styles/2019/images/power_girl.png","https://cdn-icons.flaticon.com/png/512/4134/premium/4134175.png?token=exp=1636630403~hmac=9fab4440981d0bbe314b1d16a2b9abcc")}>
                            <img className={styles.image1} src="https://www.online-image-editor.com/styles/2019/images/power_girl.png" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons.flaticon.com/png/512/4134/premium/4134177.png?token=exp=1636631767~hmac=bcbe42ca5041d51e0c7e54966fb6b4b9" alt="profile" />
                        </div>
                        <div className={styles.parent} onClick={()=>handleClick("https://images.sadhguru.org/mahashivratri/wp-content/uploads/2020/02/Shiva-Wallpaper-Divya-Darshanam-Scene-3.jpg","https://cdn-icons.flaticon.com/png/512/4134/premium/4134175.png?token=exp=1636630403~hmac=9fab4440981d0bbe314b1d16a2b9abcc")}>
                            <img className={styles.image1} src="https://images.sadhguru.org/mahashivratri/wp-content/uploads/2020/02/Shiva-Wallpaper-Divya-Darshanam-Scene-3.jpg" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons.flaticon.com/png/512/4134/premium/4134198.png?token=exp=1636631703~hmac=4ef31617ec5b0339c34bcaaf65cf34da" alt="profile" />
                        </div>
                        <div className={styles.parent} onClick={()=>handleClick("https://lh3.googleusercontent.com/proxy/DTLwODJpDpo1YdnprDhABlcqf4hRn9eSWj9naQHxpDz4BA4BqdM8YIH_A5W0WLnVAR3vJEjdRUxUID7_7DVAGuwg2VgahPt8C8-3QJwYCsNH6djwmiuLMPZGf3j59uLEFr8sgo_2zMx94h0NdWne2einKg","https://cdn-icons.flaticon.com/png/512/3146/premium/3146501.png?token=exp=1636631362~hmac=1e730820b10a1241735db45c2233a254")}>
                            <img className={styles.image1} src="https://lh3.googleusercontent.com/proxy/DTLwODJpDpo1YdnprDhABlcqf4hRn9eSWj9naQHxpDz4BA4BqdM8YIH_A5W0WLnVAR3vJEjdRUxUID7_7DVAGuwg2VgahPt8C8-3QJwYCsNH6djwmiuLMPZGf3j59uLEFr8sgo_2zMx94h0NdWne2einKg" alt="logo"/>
                            <img className={styles.image2} src="https://cdn-icons.flaticon.com/png/512/3146/premium/3146501.png?token=exp=1636631362~hmac=1e730820b10a1241735db45c2233a254" alt="profile" />
                        </div>
                    </div>
                    {active && <ShowStory img={img} profileImg={profileImg} toggleState={toggleState}/>}
                </div>
            </div>
        </div>
    )
}

export default StoryPage;