import { useState, useEffect } from "react"; 
import { useStateValue } from "../../Context/StateProvider";
import db from "../../firebase";
import copyright from "../../Icons/copyright.svg";
import school from "../../Icons/school.svg";
import location from "../../Icons/location.svg";
import heart from "../../Icons/heart.svg";
import avatar from "../../Icons/avatar.jpg";

export const FriendsPhotosLeft = () => {
  const [posts, setPosts] = useState([]);
    const [{ user }] = useStateValue();
    useEffect(() => {
        db.collection("users").doc(`${user.uid}`).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        });
    }, []);
  return (
    <>
      {/* Friends, Photos - Left Div Start */}
      <div className=" col-3 offset-2 text-light p-0" style={{height:"100%"}}>
        {/* Intro Div */}
        <div style={{ background: "#242526" }} className="p-3 mt-3 rounded">
          <p className="h4">Intro</p>
          <button
            style={{ background: "#3a3b3c" }}
            className="btn mb-4 text-light border-0 col-12"
          >
            Add Bio
          </button>
          <p>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/0WfUR2KWqGs.png"alt="Location" style={{height:"20px", marginRight:"10px"}} />
            <span style={{textAlign:"center"}}>
              Studied at <b> LIT - Lakshya Institute of Technology - BCA , BSc ITM and BSc CS</b>
            </span>
          </p>
          <p>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/0WfUR2KWqGs.png"alt="Location" style={{height:"20px", marginRight:"10px", fill:"grey"}} />
            <span style={{textAlign:"center"}}>
              Studied at <b> Panchayat Samiti Junior College Dharampura,Suliapada</b>
            </span>
          </p>
          <p>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/0WfUR2KWqGs.png"alt="Location" style={{height:"20px", marginRight:"10px"}} />
            <span style={{textAlign:"center"}}>
              Went to  <b> BAGHADA NEW GOVT. HIGH SCHOOL</b>
            </span>
          </p>
          <p>
            <img src={location} alt="Location" />
            <span>
              From <b>Tiruchirappalli</b>
            </span>
          </p>
          <p>
            <img src={heart} alt="Location" />
            <span>Single</span>
          </p>
          <button
            style={{ background: "#3a3b3c" }}
            className="btn text-light border-0 col-12"
          >
            Edit Details
          </button>
          <button
            style={{ background: "#3a3b3c" }}
            className="btn mt-4 text-light border-0 col-12"
          >
            Add Hobbies
          </button>
          <div className="row">
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " src={avatar} alt="" />
            </div>
          </div>
          <button
            style={{ background: "#3a3b3c" }}
            className="btn mt-4 text-light border-0 col-12"
          >
            Edit Featured
          </button>
        </div>
        {/* Photos Div */}
        <div style={{ background: "#242526" }} className="p-3 mt-3 rounded">
          <div className="d-flex justify-content-between">
            <p>Photos</p>
            <a style={{ textDecoration: "none" }} href="/">
              See All Photos
            </a>
          </div>
          <div className="row">
            {posts && posts.map((post) => (
              post.data.image && 
                  <div className="col-4 mt-3 rounded"
                    key={post.id}
                  >
                    <img className="img-fluid rounded " src={post.data.image} alt="" />
                  </div>
              
            ))}
          </div>
        </div>
        {/* Friends Div */}
        <div style={{ background: "#242526" }} className="p-3 mt-3 rounded">
          <div className="d-flex justify-content-between">
            <p>Friends</p>
            <a style={{ textDecoration: "none" }} href="/">
              See All Friends
            </a>
          </div>
          <div>1,199 Friends</div>
          <div className="row">
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " style={{height:"150px"}} src="https://www.gannett-cdn.com/presto/2019/12/23/PNAS/29812a55-ea4b-4e0a-9139-f9c1b1025871-Anthony_Donaldson_2.jpg" alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " style={{height:"150px"}} src="https://www.koimoi.com/wp-content/new-galleries/2021/11/rani-mukerji-on-her-financial-struggles-people-are-also-poor-in-film-families-producers-were-left-on-the-roads-read-on-001.jpg"alt="" />
              <div>rani Mukharjee</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " style={{height:"150px"}} src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f64397931669e167fc57eaf%2F0x0.jpg" alt="" />
              <div>Niket Nayan</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " style={{height:"150px"}} src="https://www.morganstanley.com/content/dam/msdotcom/people/Careers/wide-audrey-gibson.jpg/_jcr_content/renditions/wide_16x9.jpg" alt="" />
              <div>Alexa</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " style={{height:"150px"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/normal-people-paul-mescal-1590484961.jpg?crop=0.718xw:0.716xh;0.0435xw,0.284xh&resize=480:*" alt="" />
              <div>Benjamin</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " style={{height:"150px"}} src="https://i.insider.com/5d9b875e72fd8239fe6c7eea?width=1000&format=jpeg&auto=webp" alt="" />
              <div>Isabella</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " style={{height:"150px"}} src="https://i.insider.com/5d9b7be4a4107d386b3576bc?width=1136&format=jpeg"alt="" />
              <div>Aishwarya Rai</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded " style={{height:"150px"}} src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6183ef605f4f76fd1ccebda8%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1503%26cropY1%3D0%26cropY2%3D845" alt="" />
              <div>Olivia</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded  " style={{height:"150px"}} src="https://i.pinimg.com/564x/e2/29/5f/e2295f7b9b470f873d0cc4b088ac0726.jpg" alt="" />
              <div>Rahul</div>
            </div>
          </div>
        </div>
        {/* Life Events div */}
        <div style={{ background: "#242526" }} className="p-3 mt-3 rounded">
          <div className="d-flex justify-content-between">
            <p>Life Events</p>
            <a style={{ textDecoration: "none" }} href="/">
              See All
            </a>
          </div>
          <div className="row">
            <div className="btn border-0 text-light btn-outline-secondary col-6 mt-3 rounded text-center py-5">
              <img src={school} alt="Scholar" />
              <div>Started Studying at Masai School</div>
              <div>2021</div>
            </div>
            <div className="btn border-0 text-light btn-outline-secondary col-6 mt-3 rounded text-center py-5">
              <img src={school} alt="Scholar" />
              <div>Started Studying at Masai School</div>
              <div>2021</div>
            </div>
          </div>
        </div>
        <div>
          Privacy | Terms | Advertising | Ad Choices | Cookies | More | Meta
          <img src={copyright} alt="Copyright"></img> 2021
        </div>
      </div>
      {/* Friends, Photos - Left Div End */}
    </>
  );
};
