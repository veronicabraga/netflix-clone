import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import ProfileMessage from './ProfileMessage.js';
import { Link } from 'react-router-dom';
import './Profile.css';
import profilePicture from './profile-picture.jpg';


const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=94bc82bd42936b3c014223890c398da9&with_networks=213&append_to_response=videos";


class Profile extends Component {
    constructor() {
        super();
        let currentUserEmail = localStorage.getItem("current_user_email");
        this.state = {
            name: JSON.parse(localStorage.getItem(currentUserEmail)).name,
            email: currentUserEmail,
            picture: '',
            userVideos: JSON.parse(localStorage.getItem(currentUserEmail+'_watched_videos')),
            allResults: []
        };
      }


    componentDidMount() {
      // fetch data and update state
      fetch(API_URL)
      .then(response => response.json())
      .then(data => this.setState({allResults: data.results})).catch();
   }


    render() {
      let listLastUserVideos = this.state.length === 0 || this.state.userVideos === null || this.state.userVideos.length === 0 ? <ProfileMessage/> :
          this.state.allResults.filter(video => {
            return this.state.userVideos.slice(this.state.userVideos.length-5,this.state.userVideos.length).includes(String(video.id));
          }).map((video, index) =>

              <div><VideoTile
                  key={index}
                  id={video.id}
                  title={video.name}
                  views={video.popularity}
                  activeVideo={this.props.activeVideo}
                  poster={video.poster_path}
              />

              </div>

          );

      return (
        <div className="containerProfile">

          <nav className="navbar navbar-light bg-light navbar-listvideos">

            <div className="NetflixLogo ">
              <h1 className="netflixLogoVideoList"> NETFLIX</h1>
            </div>


            <div className="FormField">
              <Link to="/login" >
                <button className="FormField__Button mr-20 buttonLogout">Log out</button>
              </Link>
            </div>

            <div className="FormField">
              <Link to="/movies/list" >
                <button className="FormField__Button mr-20 buttonListVideos">Videos List</button>
              </Link>
            </div>
          </nav>

          <div className="containerallinformationprofile">

            <div class="profileInformation">
              <div >
                <img className="profilePicture" src={profilePicture} alt="Watching netflix" />
              </div>

              <div>
                <h1>{this.state.name}</h1>
              </div>

              <div>
                <h1>Email: {this.state.email}</h1>
              </div>

            </div>

            <div className="containerWordsPosters">
              <div className="UserlastVideos">
                <h1>You are seeing</h1>
              </div>
              <div className="listlastUserVideos">{listLastUserVideos}</div>
            </div>

          </div>

        </div>

        )
    }
  };

export default Profile;
