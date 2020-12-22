import React, { useEffect } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify=new SpotifyWebApi();
function App() {
  const [{user,token,playlists},dispatch] = useDataLayerValue();
  
  
  useEffect(() => {
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        console.log("user",user);  // pulling it from the data layer
        dispatch({
          type:"SET_USER",
          user:user
        });
      });
        spotify.getUserPlaylists().then((playlists)=>{
          console.log(playlists);
          dispatch({
            type:"SET_PLAYLISTS",
            playlists:playlists,
          });
        });

          
      spotify.getPlaylist('0c5Yu6jxYscZrJQO8ocPGj').then((response)=>{
         console.log(response);
         dispatch({
           type:"SET_DISCOVER_WEEKELY",
           discover_weekly:response,
         });
      });
      

    }
   
   
    console.log("i have a token",token);
  }, []);

  console.log("i donot have token",token);
  console.log("user",user);
  console.log("playlists",playlists);
  
  
  return(
    <div className="app">
    {
      token?(
        <Player/>
      ):(
        <Login/>
      )
    }    
    </div>
  );
}

export default App;
