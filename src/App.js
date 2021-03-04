import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import {auth} from "./firebase";
import {useDispatch} from 'react-redux';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {login,logout,selectUser} from './features/userSlice';
import Simulator from './components/Simulator';
import CrewMission from './components/CrewMission';
import Upcoming from "./components/Upcoming";
import Launches from "./components/Launches";
function App() {

  const dispatch=useDispatch();
  const user=useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
 dispatch(login({
   email: userAuth.email,
   uid:userAuth.uid,
   displayName:userAuth.displayName,
 }));
      }
      else{
 dispatch(logout())
      }
    });
   }, []);
  return (
    <Router>
    <div className="app">
{!user ?(
  <div>
  <Login/>
</div>
):(  
<Switch>
<Route path="/launches">
<Navbar/>
<Launches />
</Route>
<Route path="/">
 <div className="app__body">
<Navbar/>
<Upcoming/>
<CrewMission />
<Simulator/>
<Footer />
</div>
</Route>

</Switch>
)

}
</div>
</Router>
);
}

export default App;
