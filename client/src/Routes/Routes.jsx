import { Routes, Route } from "react-router-dom";
import CreateStory from "../Components/StoryPage/CreateStory";
import StoryPage from "../Components/StoryPage/Story";

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<StoryPage/>}>
                
            </Route>
            <Route path="/create" element={<CreateStory/>}>
                
            </Route>
        </Routes>
    )
}
export { AllRoutes };