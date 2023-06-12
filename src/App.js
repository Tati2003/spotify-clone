import './App.css';
import Login from './components/Login/Login';
import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player/Player';
import { useDataLayerValue } from './DataLayer';
import { response } from 'express';

const spotify = new SpotifyWebApi();
function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })


      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user,


        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      });
      spotify.getPlaylist('37i9dQZEVXcQ8HvBOBq1mp').then((response => dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })))

    }

    // console.log("I HAVE THE TOKEN >>>", token);
  }, []);
  console.log("user:", user);
  console.log("token:", token);

  return (
    <div className="App">
      {
        token ? (
          // <Player />
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
