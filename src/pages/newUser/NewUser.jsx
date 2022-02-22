import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Create User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="almamun108" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="almamun108" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="almamun108" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="almamun108" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="text" placeholder="almamun108" />
        </div>
        <div className="newUserItem">
          <label>Adress</label>
          <input type="text" placeholder="almamun108" />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
            
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="newUserButton">Create</button>
    </div>
  );
}
