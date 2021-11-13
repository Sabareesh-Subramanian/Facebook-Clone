import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Login from "../Components/Login";
import CreateStory from "../Components/StoryPage/CreateStory";
import StoryPage from "../Components/StoryPage/Story";
import { useStateValue } from '../Context/StateProvider';
const AllRoutes = () => {
    const [{ user }, dispatch] = useStateValue()
    return (
    <>
        
            {!user ?<Routes><Route exact path="/" element={<Login />}>
            </Route></Routes> :
                <Routes>
            <Route exact path="/" element={<Header/>}>
                </Route>
            <Route  path="/story" element={<StoryPage/>}>
                
            </Route>
            <Route path="/create" element={<CreateStory/>}>
                
                    </Route>
                </Routes>}
    </>
        
    )
}
export { AllRoutes };