import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import ImageIcon from '@mui/icons-material/Image';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import { Link } from 'react-router-dom';
import styles from "../../StyleModules/StoryPage.module.css"
import { useRef } from 'react';
const CreateStory = () => {
    const fileUpload = useRef(null);
    const handleClick = () => {
        document.getElementById("fileInput").click();
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
            </div>

            {/* right div */}
            <div className={styles.rightDiv}>
                <input type="file" style={{ display: "none" }} id="fileInput" ref={fileUpload}/>
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
        </div>
    )
}

export default CreateStory;