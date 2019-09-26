import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from '../Loader.js';
import { Link } from 'react-router-dom';


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
      let listLastUserVideos = this.state.length === 0 || this.state.userVideos === null || this.state.userVideos.length === 0 ? <Loader /> :
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
        <div>

          <div className="FormField">
           <Link to="/movies/list" >
              <button className="FormField__Button mr-20">Videos List</button>
            </Link>
          </div>
          <div>Email:{this.state.email}</div>
          <div>Name:{this.state.name}</div>
          <div>{this.state.userVideos}</div>

          <div className="UserVideos">
            <h1>You are seeing</h1>
          </div>
          <div className="listUserVideos">{listLastUserVideos}</div>

        </div>

        )
    }
  };

export default Profile;
