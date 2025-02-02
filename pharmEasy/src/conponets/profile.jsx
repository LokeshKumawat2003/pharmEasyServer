import React, { useState, useEffect } from "react";
import axios from "axios";
import "../componetnsStyle/profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let em = localStorage.getItem("Email");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://pharmeasyserver-adov.onrender.com/register");

        if (response.status === 200) {
          const filteredUser = response.data.filter((u) => u.email === em);

          if (filteredUser.length > 0) {
            setUser(filteredUser[0]);
          } else {
            console.error("No user found with this email");

            navigate("/login");
          }
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [em, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={user.profilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-picture"
        />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.number}</p>{" "}
        <div className="profile-actions">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
