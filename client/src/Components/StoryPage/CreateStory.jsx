import { useRef, useState } from 'react';
import { useStateValue } from "../../Context/StateProvider";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import ImageIcon from '@mui/icons-material/Image';
import db from "../../firebase"
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import { Link } from 'react-router-dom';
import styles from "../../StyleModules/StoryPage.module.css"

const CreateStory = () => {
    const fileUpload = useRef(null);
    const [statusImg, setStatusImg] = useState("false");
    const [{ user }] = useStateValue();
    const [progress, setProgress] = useState(0);
    const handleClick = () => {
        document.getElementById("fileInput").click();
    }
    const handleChange = async (e) => {
        var newImg = e.target.files[0];
        const storageRef = ref(storage, `/files/${newImg.name}`)
        const uploadTask = uploadBytesResumable(storageRef, newImg);
        uploadTask.on('state_changed',
            (snapshot) => {
                //progress function
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(prog);
            },
            (err) => {
                console.log(err)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => setStatusImg(url))
            })
    }
    const postPost = async () => {
        db.collection("users").doc(`${user.uid}`).collection("stories").add({
            image: statusImg,
        })
        setStatusImg("false");
    }
    return(
       <div className={styles.container}>
            {/* left div */}
            <div className={`${styles.leftDiv} ${styles.backToStatus}`} >
               <Link to="/stories"> <CancelRoundedIcon fontSize="large" color="success" /></Link>
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
                    <Link to="/stories">
                        <button onClick={postPost}>Share To story</button>
                    </Link>
                    
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