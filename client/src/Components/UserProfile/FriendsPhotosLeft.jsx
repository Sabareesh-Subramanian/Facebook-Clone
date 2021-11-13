import copyright from "../../Icons/copyright.svg";
import school from "../../Icons/school.svg";
import location from "../../Icons/location.svg";
import heart from "../../Icons/heart.svg";
import avatar from "../../Icons/avatar.jpg";

export const FriendsPhotosLeft = () => {
  return (
    <>
      {/* Friends, Photos - Left Div Start */}
      <div className=" col-3 offset-2 text-light p-0">
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
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
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
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
            </div>
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
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
            </div>
            <div className="col-4 mt-3 rounded">
              <img className="img-fluid rounded" src={avatar} alt="" />
              <div>Sabareesh</div>
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
