import React from 'react'
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid,Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
	return (
		<div className="footer_body">
		<div className="footer_left">
		 <img className="footer_albumlogo" src="https://tse1.mm.bing.net/th?id=OIP.wMIrtwv5jhKzDfQ3T4XjxgHaEK&pid=Api&rs=1&c=1&qlt=95&w=214&h=120" alt=""/>
		 <div className="footer_songInfo">
		 <h4>Yeah!</h4>
		 <p>User</p>
		 </div>
		</div>
		<div className="footer_center">
		<SkipPreviousIcon className="footer_icon"/>
		<ShuffleIcon className="footer_green"/>
		<PlayCircleOutlineIcon fontsixe="large" className="footer_icon"/>
		<SkipNextIcon className="footer_icon"/>
		<RepeatIcon className="footer_green"/>
		
		</div>
		<div className="footer_right">
		<Grid container spacing={2}>
        <Grid item>
    <PlaylistPlayIcon />
  </Grid>
   <Grid  item xs>
        <VolumeDownIcon/>
  </Grid>
  <Grid  item xs={12} >
        <Slider aria-labelledby="continous-slider" />
  </Grid>
</Grid>
	
	</div>
		
			
		</div>
	)
}

export default Footer;
