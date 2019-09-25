import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from '../Loader.js';
import { Link } from 'react-router-dom';


const API_URL = "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213&append_to_response=videos";


class Profile extends Component {
    constructor() {
        super();
        let email = localStorage.getItem("current_user_email");
        console.log(email);
        this.state = {
            name: JSON.parse(localStorage.getItem(email)).name,
            email: email,
            picture: '',
            userVideos: JSON.parse(localStorage.getItem('watched_videos')),
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

      let listUserVideos = this.state.length === 0 ? <Loader /> :
          this.state.allResults.filter(video => {
            console.log(video.id)
            return this.state.userVideos.includes(String(video.id));
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
          <div className="listUserVideos">{listUserVideos}</div>

        </div>

        )
    }
  };

export default Profile;
