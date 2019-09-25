import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from '../Loader.js';
import { Link } from 'react-router-dom';
import './MainMovieSelection.css';


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
        // fetch('https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213')
        // .then(response => response.json())
        // .then(data => {
        //   this.setState(data);


        // });
        // let data = this.state;

        // let data = {
        //   "page": 1,
        //   "total_results": 591,
        //   "total_pages": 30,
        //   "results": [
        // {
        //   "original_name": "The I-Land",
        //   "name": "The I-Land",
        //   "popularity": 215.787,
        //   "vote_count": 24,
        //   "first_air_date": "2019-09-12",
        //   "backdrop_path": "/daWYx20ZS3Z34A7Z0IQchIkqN8M.jpg",
        //   "original_language": "en",
        //   "id": 90755,
        //   "vote_average": 5.6,
        //   "overview": "Wiped clean of memories and thrown together, a group of strangers fight to survive harsh realities -- and the island that traps them.",
        //   "poster_path": "/Muev370hN3vdjGsC1ip1HcWqbT.jpg"
        // },
        // {
        //   "original_name": "Lucifer",
        //   "name": "Lucifer",
        //   "popularity": 101.872,
        //   "vote_count": 1075,
        //   "first_air_date": "2016-01-25",
        //   "backdrop_path": "/6kZCuvbirx6ibJfaWqwV2p90yPI.jpg",
        //   "original_language": "en",
        //   "id": 63174,
        //   "vote_average": 7.4,
        //   "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
        //   "poster_path": "/1sBx2Ew4WFsa1YY32vlHt079O03.jpg"
        // }]};
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

          let listUserVideos = this.state.length === 0 ? <Loader /> :
              this.state.results.map((video, index) =>

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

                <div className="listVideos">


                  <div className="FormField">
                   <Link to="/Login" >
                      <button className="FormField__Button mr-20">Log out</button>
                    </Link>
                  </div>
                  <div className="FormField">
                   <Link to="/Profile" >
                      <button className="FormField__Button mr-20">Profile</button>
                    </Link>
                  </div>


                  <div className="UserVideos">
                    <h1>You are seeing</h1>
                  </div>
                  <div className="listUserVideos">{listUserVideos}</div>

                  <div className="GeneralVideos">
                    <h1>Videos more viewed</h1>
                  </div>
                  <div className="listVideoTiles">{listVideoTiles}</div>
                </div>
              </div>

          );


    }
};

export default MainMovieSelection;
