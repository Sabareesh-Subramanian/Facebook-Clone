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
    const [statusUpload, setStatusUpload] = useState(false);
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
        setStatusUpload(true)
    }
    const postPost = async () => {
        db.collection("users").doc(`${user.uid}`).collection("stories").add({
            image: statusImg,
            profilePhoto: user.photoURL
        })
        console.log("User90: ", user)
        setStatusImg("false");
        setStatusUpload(false)
    }
    return(
       <div className={styles.container}>
            {/* left div */}
            <div className={`${styles.leftDiv} ${styles.backToStatus}`} >
               <Link to="/stories"> <CancelRoundedIcon fontSize="large" color="success" className={styles.CancelRoundedIcon} /></Link>
                <FacebookRoundedIcon fontSize="large" color="success" className={styles.FacebookRoundedIcon}/>
                <div className={`${styles.leftHeading} ${styles.CreateStoryHeading}`}>
                        <div>
                            <h3>Your story</h3>
                        </div>
                        <div className={styles.setting}>
                            <SettingsIcon/>
                        </div>
                </div>
                <div className={`${styles.leftHeading} ${styles.profileStoryCreatePage}`}>
                        <div className={styles.CreateStoryImage}>
                            <div>
                                <img src={user.photoURL} alt="profile" className={styles.createStoryProfile} />
                            </div>
                            <div>
                                <h6>{user.displayName}</h6>
                            </div>
                        </div>
                </div>
                {statusUpload&&<div>
                    <Link to="/create">
                        <button onClick={postPost} className={styles.shareToStory}>Discard</button>
                    </Link>
                    <Link to="/stories">
                        <button onClick={postPost} className={styles.shareToStory}>Share To story</button>
                    </Link>
                    
                </div>}
            </div>
            {
                statusImg ==="false" ?
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
                        <img src={statusImg} alt="" style={{ height: "50vw", width: "70vw", padding:"40px" }} />
                        <div>

                        </div>
                    </div>
            }
        </div>
    )
}

export default CreateStory;