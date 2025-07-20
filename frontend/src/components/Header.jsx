import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import store from "../redux/store";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { setUser } from "../redux/authSlice";
import { toast } from "react-toastify";

const Header = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const logoutHander = async (e) => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message);
    }
  };
  return (
    <>
      <div className="header">
        <div className="header_container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bar-chart3 h-8 w-8 text-blue-600"
              >
                <path d="M3 3v18h18"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
              <h1 className="logoname">Excel Analytics</h1>
            </div>
          </Link>
          <nav>
            <ul>
              {!user ? (
                <div className="auth">
                  <Link to="/login">
                    <button type="button" className="btn btn-primary">
                      Login
                    </button>
                  </Link>

                  <Link to="/Signup">
                    <button type="button" className="btn btn-secondary">
                      Signup
                    </button>
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    to="/upload"
                    className="upload-link"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="upload-icon"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span style={{ textDecoration: "none" }}>Upload</span>
                  </Link>
                  <Link to="/profile">
                    {" "}
                    <FaUserCircle size={40} color="#3B82F6" />
                  </Link>
                  <Link to="/">
                    <button
                      onClick={logoutHander}
                      type="button"
                      className="btn btn-primary"
                    >
                      Logout
                    </button>
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
