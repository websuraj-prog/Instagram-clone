import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InstagramLogo from "../../assets/instagram-logo.png";
import MicrosoftLogo from "../../assets/microsoft_logo.png";
import "./Login-SignUp.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !fullName || !username || !password) {
      setError("All fields are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(
      (u) => u.username === username || u.email === email
    );

    if (userExists) {
      setError("Email or username already exists.");
      return;
    }

    const newUser = { email, fullName, username, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-page-box">
       <img src={InstagramLogo} alt="InstagramLogo" className="signup-logo" />
        <p className="tagline">Sign up to see photos and videos from your friends.</p>

        <button className="fb-button" onClick={() => window.location.href = "https://www.facebook.com/login.php"}>
            Log in with Facebook</button>

        <div className="divider">
          <div className="line" />
          <span>OR</span>
          <div className="line" />
        </div>

        <form onSubmit={handleSignUp} className="signup-form">
          <input
            type="email"
            placeholder="Mobile Number or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <p className="signup-info-text">
            People who use our service may have uploaded your contact information to Instagram.<b> Learn More</b>
          </p>

        <p className="terms">
          By signing up, you agree to our <b>Terms</b>, <b>Privacy Policy</b> and <b>Cookies Policy</b>.
        </p>
          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>

      </div>

      <div className="login-redirect">
        Have an account? <a href="/login">Log in</a>
      </div>
      <div className="get-app-section">
        <p>Get the app.</p>
        <div className="store-buttons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
          <img
            src={MicrosoftLogo}
            alt="Microsoft Store"
          />
        </div>
      </div>

      <div className="footer-meta">
        <div className="footer-links">
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Top Accounts</span>
          <span>Hashtags</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Contact Uploading & Non-Users</span>
        </div>
        <div className="footer-bottom">
          <select className="lang-select">
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Gujarati</option>
          </select>
          <p>© 2025 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
