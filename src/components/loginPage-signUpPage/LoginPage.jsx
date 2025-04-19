import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import MiscrosoftLogo from "../../assets/microsoft_logo.png";
import MobileHome from "../../assets/home-phones.png";
import InstagramLogo from "../../assets/instagram-logo.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import "./Login-SignUp.css";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        (u.email === identifier || u.username === identifier) &&
        u.password === password
    );

    if (!user) {
      setError("Please enter valid email or username and password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    login();
    navigate("/home");
  };

  // ✅ Image Slider Logic
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-page">
      <div className="Mobileholder">
        <img src={MobileHome} alt="Mobile" />
        <div className="images">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>
      </div>

      <div className="login-container">
        <div className="login-box">
          <img src={InstagramLogo} alt="InstagramLogo" className="login-logo" />

          <form onSubmit={handleLogin} className="login-form">
            <input
              type="text"
              placeholder="Username or Email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>

          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <button className="facebook-login" onClick={() => window.location.href = "https://www.facebook.com/login.php"}>
            Log in with Facebook</button>
          <p className="forgot-password">Forgot password</p>
        </div>

        <div className="signup-box">
          Don’t have an account? <a href="/signup">Sign up</a>
        </div>

        <div className="footer-data">
          <div className="footermetadata">
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>
          </div>
          <div className="footerdata">
          © 2025 Instagram from Meta
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
