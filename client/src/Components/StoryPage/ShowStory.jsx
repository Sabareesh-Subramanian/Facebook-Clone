import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { useStateValue } from "../../Context/StateProvider";
import styles from "../../StyleModules/ShowStory.module.css";
export default function ShowStory({ img, profileImg, toggleState }) {
    const [{ user }] = useStateValue();
    return (
        <div className={styles.trailer}>
            <div>
                <CancelRoundedIcon fontSize="large" sx={{fontSize:"50px"}} className={styles.close} onClick={toggleState} />
                <FacebookRoundedIcon fontSize="large"  sx={{fontSize:"50px"}} className={styles.logo}/>
                {/* <img src="https://cdn.vectorstock.com/i/1000x1000/00/83/close-icon-vector-23190083.jpg" alt="" className={styles.close} onClick={toggleState} /> */}
            
            </div>
            <div className={styles.parent}>
                <img className={styles.image1} src={img} alt="logo"/>
                <div className={styles.image2} >
                    <img src={profileImg} alt="status" />
                    <h3>{user.displayName}</h3>
                </div>
            </div>
            
        </div>
    )
}