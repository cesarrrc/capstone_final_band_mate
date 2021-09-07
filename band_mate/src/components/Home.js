import React from 'react';
import Box from '@material-ui/core/Box'
import bandPlaying from '../images/bandPlaying.png'
import '../App.css';
import LoginPage from './LoginPage';

const Home = (props) => {
  return (
    <div>

      <div className="homeBody" style={{backgroundColor:"white", color:"black"}} >
        
        <div className="homeContainer">
          
          <div className="homeTitle">
            <p className="homeIntro">Welcome to</p>
            <p className="myBandTitle">MyBand</p>
            <h2>A place dedicated to musicians who are looking for other musicians to talk with, jam out with, find local shows, or book events. </h2>
          </div>
          
          <div className="loginContainer">
            <LoginPage loginUser={props.loginUser} />
          </div>
       
        </div>
        
        <img className="homeImage" src={bandPlaying}/>
      
      </div>
    </div>
  );
}

export default Home;
