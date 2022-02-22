import React from "react";
import "./editUser.css";
import {Link} from "react-router-dom";
import {
  Person,
  Publish,
  MyLocation,
  Email,
  Today,
  PhoneIphone,
} from "@mui/icons-material";

export default function editUser() {
  return (
    <div className="editUser">
      <div className="editUserTitleContainer">
        <h1 className="editUserTitle">Update editUser</h1>
        <Link className="link" to="/newUser">
        
        <button className="editUserAddButton">Create</button>
        </Link>
      </div> 
      <div className="editUserContainer">
        <div className="editUserShow">
          <div className="editUserShowTop">
            <img
              className="editUserShowImg"
              src="https://images.pexels.com/photos/8217706/pexels-photo-8217706.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Al Mamun"
            />
            <div className="editUserShowTopTitle">
              <span className="editUserShowName">Al Mamun</span>
              <span className="editUserShowTitle">Software Engineer</span>
            </div>
          </div>
          <div className="editUserShowBottom">
            <span className="editUserShowInfoTitle">Account Details</span>
            <div className="editUserShowInfoContainer">
              <Person className="editUserShowInfoIcon" />
              <span className="editUserShowInfo">imalmamun100</span>
            </div>

            <div className="editUserShowInfoContainer">
              <Today className="editUserShowInfoIcon" />
              <span className="editUserShowInfo">05.05.1999</span>
            </div>

            <span className="editUserShowInfoTitle">Contact</span>
            <div className="editUserShowInfoContainer">
              <PhoneIphone className="editUserShowInfoIcon" />
              <span className="editUserShowInfo">+8801706803700</span>
            </div>

            <div className="editUserShowInfoContainer">
              <Email className="editUserShowInfoIcon" />
              <span className="editUserShowInfo">imalmamun100@gmail.com</span>
            </div>
            <div className="editUserShowInfoContainer">
              <MyLocation className="editUserShowInfoIcon" />
              <span className="editUserShowInfo">Jaldhaka | Nilphamari</span>
            </div>
          </div>
        </div>
        <div className="editUserUpdate">
          <span className="editUserUpdateTitle">Update editUser</span>
          <form className="editUserUpdateForm">
            <div className="editUserUpdateleft">
              <div className="editUserUpdateItem">
                <label>editUsername</label>
                <input
                  type="text"
                  className="editUserUpdateInput"
                  placeholder="almamun100"
                />
              </div>
              <div className="editUserUpdateItem">
                <label>editUsername</label>
                <input
                  type="text"
                  className="editUserUpdateInput"
                  placeholder="almamun100"
                />
              </div>
              <div className="editUserUpdateItem">
                <label>editUsername</label>
                <input
                  type="text"
                  className="editUserUpdateInput"
                  placeholder="almamun100"
                />
              </div>
              <div className="editUserUpdateItem">
                <label>editUsername</label>
                <input
                  type="text"
                  className="editUserUpdateInput"
                  placeholder="almamun100"
                />
              </div>
              <div className="editUserUpdateItem">
                <label>editUsername</label>
                <input
                  type="text"
                  className="editUserUpdateInput"
                  placeholder="almamun100"
                />
              </div>
            </div>
            <div className="editUserUpdateRight">
              <div className="editUserUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/8217706/pexels-photo-8217706.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="Al Mamun"
                  className="editUserUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="editUserUpdateuploadIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="editUserUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
