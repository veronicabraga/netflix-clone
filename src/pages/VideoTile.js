import React, { Component } from 'react';
import { HashRouter as Link} from 'react-router-dom';
import { Route, Redirect } from "react-router"
import PlayVideo from './PlayVideo.js';
import { NavLink } from 'react-router-dom';
import './VideoTile.css';

/*
 * Video tile information.
 */
class VideoTile extends Component {
    constructor(props) {
        super(props);
        this.onClickVideoTile = this.onClickVideoTile.bind(this);
    }
    onClickVideoTile() {
      let path = `/movies/play`;
      this.context.router.push({pathname: path, props: {videoId: this.props.id}});
    }
    render() {
        return (
            <NavLink to={'/movies/play/'+ this.props.id }>
              <div className='videoTile' >


                      <div className='videoTile__poster__value'>
                        <img className='imagePoster' src={"https://image.tmdb.org/t/p/w500" + this.props.poster} alt="Video Poster"/>
                      </div>



              </div>
            </NavLink>
        );
    }
};

export default VideoTile;
