import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';
import {auth} from "./firebase";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {login,logout,selectUser} from './features/userSlice';
import Simulator from './components/desktopComponents/Simulator';
import CrewMission from './components/desktopComponents/CrewMission';
import Upcoming from "./components/desktopComponents/Upcoming";
import Launches from "./components/Launches";
import UpcomingTest from './components/desktopComponents/UpcomingTest';
class App extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        login({
          email: userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
        })
      }
      else{
        logout()
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          {
            !this.props.user ?
            (
              <Login/>
            )
            :(  
              <Switch>
            <Route path="/launches">
              <Navbar/>
              <Launches />
          </Route>
          <Route path="/">
            <div className="app__body">
              <Navbar/>
              <UpcomingTest/>
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
}

const mapStateToProps = state => {
  return {
   user: state.user.user,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
{
  login,
  logout,
},
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)