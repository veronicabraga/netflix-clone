import React, { Component } from 'react';
import MainMovieSelection from './pages/MainMovieSelection';
import VideoTile from './pages/VideoTile';


class MainMovieSelectionApp extends Component {
  render() {
    return (
      <Router basename="/netflix_clone/">
        <div className="">
          <div className="">

          <div className="Movies {getClassname()}">
            <Route path="/main-movie-selection" component={MainMovieSelection}>
            </Route>
          </div>



          </div>
        </div>
      </Router>

    );
  }
}




export default MainMovieSelectionApp;
