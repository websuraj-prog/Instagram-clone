import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/loginPage-signUpPage/LoginPage';
import SignUpPage from './components/loginPage-signUpPage/SignUpPage';
import SearchPage from './components/pages/search/Search';
import ExplorePage from './components/pages/explore/Explore';
import ReelsPage from './components/pages/reels/Reels';
import MessagesPage from './components/pages/messages/MessagesPage';
import NotificationsPage from './components/pages/notifications/NotificationsPage';
import CreatePage from './components/pages/create/CreatePage';
import ProfilePage from './components/pages/profile/ProfilePage';
import AIStudioPage from './components/pages/aiStudio/AIStudioPage';
import MorePage from './components/pages/more/MorePage';
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
      <Route path="/search" element={<SearchPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/reels" element={<ReelsPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/aiStudio" element={<AIStudioPage />} />
      <Route path="/more" element={<MorePage />} />

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
