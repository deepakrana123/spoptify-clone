export const  authEndpoint="https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/";

const clientId="626aa892a6a04ffb960256ce4c5fbefb";


const scopes=[
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",

];

// accesstoken=mysupersecretKey&name=sonnyandkaszi
// get token from the url,access token get 
export const getTokenFromUrl=()=>{
	return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
		let parts =item.split('=');
		initial[parts[0]]=decodeURIComponent(parts[1])
		return initial;       // pooling the access form the url in which we are know, just getting the access token from the url
	
	},{});
}

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`


 // a token is a pause


