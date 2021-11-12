import logo from './logo.svg';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import "./App.css"



function App() {
  const user="piyush"
  return (
    <>
      <div className="app">
        {!user ? (<h1>Login</h1>) : (
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
