import React from 'react';
import "./Body.css";
import Header from "./Header";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';

function Body({spotify}) {
	const[{discover_weekly}]=useDataLayerValue();
	console.log(discover_weekly);
	return(
		<div className="body">
		<Header spotify={spotify}/>
		<div className="body_info">
		<img src={discover_weekly?.images[0].url} alt=""/>
		<div className="body_infotext">
			<strong>PLAYLIST</strong>
			<h2>Discover Weekly</h2>
			<p>{discover_weekly?.description}</p>
		</div>
		</div>
		<div className="body_songs">
		<div className="body_icons">
		<PlayCircleOutlineIcon className="body_shuffle"/>
		<FavoriteIcon fontSize="large"/>
		<MoreHorizIcon/>
		</div>
		{discover_weekly?.tracks.items.map((item)=>(
			<SongRow track={item.track}/>
		))}
		</div>
		 
		</div>
	)
}

export default Body;