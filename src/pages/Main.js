import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import MainMovieSelection from './MainMovieSelection';
import PlayVideo from './PlayVideo';
import Profile from './Profile';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/movies/list' component={MainMovieSelection}></Route>
      <Route exact path='/movies/play/:videoId' component={PlayVideo}></Route>
      <Route exact path='/profile' component={Profile}></Route>
    </Switch>
  );
}

export default Main;
