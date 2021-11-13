import { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import ImageIcon from '@mui/icons-material/Image';
import db from "../../firebase"
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import { Link } from 'react-router-dom';
import styles from "../../StyleModules/StoryPage.module.css"

const CreateStory = () => {
    const fileUpload = useRef(null);
    const [statusImg, setStatusImg] = useState("false")
    const handleClick = () => {
        document.getElementById("fileInput").click();
        var img = document.getElementById("fileInput");
        console.log(img)
    }
    const handleChange = (e) => {
        console.log("Hi")
        console.log("file: ",e.target.files[0]);
        var newImg = URL.createObjectURL(e.target.files[0])
        setStatusImg(newImg)
    }
    const postPost = async () => {
        db.collection("story").add({
            image: statusImg,
        })
    }
    return(
       <div className={styles.container}>
            {/* left div */}
            <div className={`${styles.leftDiv} ${styles.backToStatus}`} >
               <Link to="/story"> <CancelRoundedIcon fontSize="large" color="success" /></Link>
                <FacebookRoundedIcon fontSize="large" color="success" />
                <div className={styles.leftHeading}>
                        <div>
                            <h2>Your Stories</h2>
                        </div>
                        <div className={styles.setting}>
                            <SettingsIcon/>
                        </div>
                </div>
                <div>
                    <button onClick={postPost}>Share To story</button>
                </div>
            </div>
            {
                // console.log("Img: ", statusImg)
                statusImg=="false" ?
            <div className={styles.rightDiv}>
                <input type="file" style={{ display: "none" }} id="fileInput" ref={fileUpload} onChange={handleChange}/>
                <div className={styles.cardContainer}>
                    <Card className={styles.firstCard} id="card1" onClick={handleClick}>
                        <CardActions className={styles.uploadFile}>
                            <ImageIcon sx={{color:"white"}}/>
                        </CardActions>
                        <Typography variant="h6" className={`${styles.uploadtext}`}>
                            Create a photo story
                        </Typography>
                    </Card>
                    <Card className={`${styles.secondCard}`}>
                        <CardActions className={styles.uploadFile}>
                            <SortByAlphaIcon sx={{color:"white"}}/>
                        </CardActions>
                        <Typography variant="h6" className={`${styles.uploadtext}`}>
                            Create a text story
                        </Typography>
                    </Card> 
                        </div>
                </div>
                    :
                    
                    <div>
                        <img src={statusImg} alt="" style={{ height: "80%", width: "100%" }} />
                        <div>

                        </div>
                    </div>
            }
        </div>
    )
}

export default CreateStory;