import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from '../Loader.js';
import { Link } from 'react-router-dom';
import './PlayVideo.css';


const API_URL = "https://api.themoviedb.org/3/movie/"
const API_ARGUMENTS = "?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213&append_to_response=videos";

/*
 * List of top 10s videos.
 */
class PlayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: {results: [{key: null}]},};
    }

    componentDidMount() {
      // fetch data and update state
      fetch(API_URL + this.props.match.params.videoId + API_ARGUMENTS)
      .then(response => response.json())
      .then(data => this.setState({videos: data.videos})).catch();
   }

    render() {
        let videoKey = this.state.length === 0 || this.state.videos.results.length === 0 ? <Loader /> :
            this.state.videos.results[0].key
        let videoId = this.props.match.params.videoId;
        let currentUserEmail = localStorage.getItem("current_user_email");
        let watchedVideos = JSON.parse(localStorage.getItem(currentUserEmail+'_watched_videos'));
        if (watchedVideos === null) {
          watchedVideos = [];
        }
        if(!watchedVideos.slice(watchedVideos.length-5, watchedVideos.length).includes(videoId)) {
          watchedVideos.push(videoId);
          localStorage.setItem(currentUserEmail+'_watched_videos', JSON.stringify(watchedVideos));
        }

        return (
            <div className="containerPlayVideo">

              <nav className="navbar navbar-light bg-light navbar-listvideos">

               <div className="NetflixLogo ">
                  <h1 className="netflixLogoVideoList"> NETFLIX</h1>
                </div>


                <div className="FormField">
                 <Link to="/Login" >
                    <button className="FormField__Button mr-20 buttonLogout">Log out</button>
                  </Link>
                </div>

                <div className="FormField">
                 <Link to="/movies/list" >
                    <button className="FormField__Button mr-20 buttonListVideos">Videos List</button>
                  </Link>
                </div>
              </nav>


              <div className="playVideo">
                <iframe className="video"
                  src={"https://www.youtube.com/embed/"+videoKey}>
                </iframe>



              </div>

            </div>
          );


    }
};

export default PlayVideo;
