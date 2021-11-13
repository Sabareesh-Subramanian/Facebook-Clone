import logo from './logo.svg';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import Login from './Components/Login';
import "./App.css"
import { useStateValue } from './Context/StateProvider';



function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div className="app">
        {!user ? (<Login/>) : (
          <>
           <Header />
      <div className="app_body">
        <Sidebar />
          <Feed />
          <Widgets/>
            </div>
            </>
          
        )}
       
      </div>
      
      </>
    
  );
}

export default App;
