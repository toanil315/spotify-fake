import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loading from './component/Loading/Loading';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import {createBrowserHistory} from 'history'
import { Route, Router, Switch } from 'react-router-dom';
import { TOKEN } from './utils/config';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import DetailTrack from './page/Detail/DetailTrack';
import DetailPlaylist from './page/Detail/DetailPlaylist';
import DetailArtist from './page/Detail/DetailArtist';
import Search from './page/Search/Search';


export const history = createBrowserHistory();


function App() {
  useEffect(() => {
    if(!localStorage.getItem(TOKEN)) {
      history.push("/login");
    }
  })

  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/track/:id" exact Component={DetailTrack} />
        <HomeTemplate path="/playlist/:id" exact Component={DetailPlaylist} />
        <HomeTemplate path="/artist/:id" exact Component={DetailArtist} />
        <HomeTemplate path="/search" exact Component={Search} />
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
