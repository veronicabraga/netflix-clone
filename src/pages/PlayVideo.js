import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from '../Loader.js';
import { Link } from 'react-router-dom';

const API_URL = "https://api.themoviedb.org/3/tv/"
const API_ARGUMENTS = "?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213&append_to_response=videos";

/*
 * List of top 10s videos.
 */
class PlayVideo extends Component {
    constructor(props) {
        super(props);
        // const { videoId } = this.props;
        this.state = {videos: {results: [{key: null}]},};
    }

    componentDidMount() {
      // fetch data and update state
      fetch(API_URL + this.props.match.params.videoId + API_ARGUMENTS)
      .then(response => response.json())
      .then(data => this.setState({videos: data.videos})).catch();
   }

    render() {
        console.log(this.state);
        let videoKey = this.state.length === 0 || this.state.videos.results.length === 0 ? <Loader /> :
            this.state.videos.results[0].key
        let watchedVideos = JSON.parse(localStorage.getItem('watched_videos'));
        if (watchedVideos === null) {
          watchedVideos = [];
        }
        watchedVideos.push(this.props.match.params.videoId);
        localStorage.setItem('watched_videos', JSON.stringify(watchedVideos));




        return (
            <div>

              <div className="FormField">
               <Link to="/movies/list" >
                  <button className="FormField__Button mr-20">Videos List</button>
                </Link>
              </div>
              <div className="playVideo">
                <iframe width="420" height="315"
                  src={"https://www.youtube.com/embed/"+videoKey}>
                </iframe>
                {"https://www.youtube.com/embed/"+videoKey}
              </div>
            </div>
          );


    }
};

export default PlayVideo;
