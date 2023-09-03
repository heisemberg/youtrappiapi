import { vidList } from "./vidList.js";
import { playVideo } from "./playVideo.js";
import {rightSidebar} from "./rightSidebar.js";
import { searhAll } from "./searchVideos.js";


var menuIcon = document.querySelector('.menu-icon');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector('.container');

menuIcon.onclick = function() {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be40207a68msh9d88c42288f1fe9p1feffcjsna064c36b2551',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

vidList(options);
playVideo(options);
rightSidebar(options);

document.querySelector("#chartSearch").addEventListener("change", (e)=>{
  searhAll(e.target.value,options)
});
