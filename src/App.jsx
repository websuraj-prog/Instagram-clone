import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/loginPage-signUpPage/LoginPage';
import SignUpPage from './components/loginPage-signUpPage/SignUpPage';
import LeftSide from './components/leftSide/LeftSide';
import MiddleSide from './components/middleSide/MiddleSide';
import RightSide from './components/rightSide/RightSide';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <div className="App">
              <div className="leftSideHome">
                <LeftSide />
              </div>
              <div className="middleSide">
                <MiddleSide />
              </div>
              <div className="rightSideHome">
                <RightSide />
              </div>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
