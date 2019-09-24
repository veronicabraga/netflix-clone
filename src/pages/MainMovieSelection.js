import React, { Component } from 'react';
import VideoTile from './VideoTile.js';
import Loader from '../Loader.js';


/*
 * List of top 10s videos.
 */
class MainMovieSelection extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = [];
    }

    render() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213')
        .then(response => response.json())
        .then(data => {
          this.setState(data)
        });
        let data = this.state;

        let listVideoTiles = data.length === 0 ? <Loader /> :
            data.results.map((video, index) =>

                <VideoTile
                    key={index}
                    id={video.id}
                    title={video.title}
                    views={video.views}
                    activeVideo={this.props.activeVideo}
                />
            );
        return (
            <div>
                <div>{listVideoTiles}</div>
            </div>
        );
    }
};

export default MainMovieSelection;
