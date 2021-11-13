import { Routes, Route } from "react-router-dom";
import CreateStory from "../Components/StoryPage/CreateStory";
import StoryPage from "../Components/StoryPage/Story";
import LoginPage from "../Components/Login/LoginPage";
import { UserProfile } from "../Components/UserProfile/UserProfile";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />}></Route>
      <Route exact path="/stories" element={<StoryPage />}></Route>
      <Route exact path="/profile" element={<UserProfile />}></Route>
      <Route path="/create" element={<CreateStory />}></Route>
    </Routes>
  );
};
export { AllRoutes };
