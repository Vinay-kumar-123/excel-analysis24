import React, { useState, useRef, useEffect } from "react";
import userLogo from "../assets/user.png";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import axios from "axios";
const Profile = () => {
  const { user } = useSelector((store) => store.auth);
  const [image, setImage] = useState("");
  const fileInputRef = useRef();
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async(e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:8000/api/v1/user/upload",formData, {
        headers:{
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const photoURL = `http://localhost:8000/images/${res.data.filename}`;
      const updatedUser = {
        ...user, 
        photoImage: photoURL
      };
      
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setImage(photoURL);
      window.location.reload();
    } catch (error) {
      toast.error("Image upload failed", error);
    }
  };
  
useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser?.photoImage) {
    setImage(storedUser.photoImage);
  }
}, []);

  return (
    <div className="profile-main-container px-lg-0">
      <div className="profile-container">
        <div className="profile">
           <div className="profile-image">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
              accept="image/*"
            />
            <img
              src={image || user?.photoImage || userLogo}
              alt="userPhoto"
              className="profile-logo"
              onClick={handleClick}
              style={{
                cursor: "pointer",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ccc",
              }}
            />
          </div> 
          <div className="user-info">
            <h1 className="user-name">Welcome, {user?.name}</h1>
            <p className="user-email">
              <span style={{ fontWeight: "bold" }}>Email :</span> {user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
