import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from '../Loader.js';
import { Link } from 'react-router-dom';
import './MainMovieSelection.css';
import '../Navbar.css';



const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=94bc82bd42936b3c014223890c398da9&with_networks=213&append_to_response=videos";
/*
 * List of top 10s videos.
 */
class MainMovieSelection extends Component {
    constructor(props) {
        super(props);

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

            <div className="container">
              <div className="containerNavbar">

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
                     <Link to="/Profile" >
                        <button className="FormField__Button mr-20 buttonProfile">Profile</button>
                      </Link>
                    </div>

                </nav>
              </div>




                <div className="listVideos">




                  <div className="containerWordsVideos">
                    <div className="GeneralVideos">
                      <h1>Have fun! Choose a video</h1>
                    </div>

                    <div className="listVideoTiles">{listVideoTiles}</div>
                  </div>
                </div>
            </div>

          );


    }
};

export default MainMovieSelection;
