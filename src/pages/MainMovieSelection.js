import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from '../Loader.js';
import { Link } from 'react-router-dom';
import './MainMovieSelection.css';
import '../Navbar.css';



const API_URL = "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213&append_to_response=videos";
/*
 * List of top 10s videos.
 */
class MainMovieSelection extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {results: []};
    }

    componentDidMount() {
      // fetch data and update state
      fetch(API_URL)
      .then(response => response.json())
      .then(data => this.setState({results: data.results})).catch();
   }

    render() {

        let listVideoTiles = this.state.length === 0 ? <Loader /> :
            this.state.results.map((video, index) =>

                <VideoTile
                    key={index}
                    id={video.id}
                    title={video.name}
                    views={video.popularity}
                    activeVideo={this.props.activeVideo}
                    poster={video.poster_path}
                />
            );



        return (

            <div>
              <div className="containerNavbar">

                <nav class="navbar navbar-light bg-light navbar-listvideos">

                 <div className="NetflixLogo ">
                    <h1 className="netflixLogoVideoList"> NETFLIX</h1>
                  </div>


                  <div className="FormField">
                     <Link to="/Login" >
                        <button className="FormField__Button mr-20 buttonLogout">Log out</button>
                      </Link>
                    </div>
                    <div className="FormField">
                     <Link to="/Profile" >
                        <button className="FormField__Button mr-20 buttonProfile">Profile</button>
                      </Link>
                    </div>

                </nav>
              </div>




                <div className="listVideos">




                  <div className="containerWordsVideos">
                    <div className="GeneralVideos">
                      <h1>Choose a video</h1>
                    </div>

                    <div className="listVideoTiles">{listVideoTiles}</div>
                  </div>
                </div>
            </div>

          );


    }
};

export default MainMovieSelection;
