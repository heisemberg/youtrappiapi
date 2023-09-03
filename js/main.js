import { vidList } from "./vidList.js";
import { playVideo } from "./playVideo.js";
import {rightSidebar} from "./rightSidebar.js";


var menuIcon = document.querySelector('.menu-icon');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector('.container');

menuIcon.onclick = function() {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}

/* const url = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9e65797cfmshef45753f8b867fep1f0cf6jsneb94bce604e7',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// ---------------------videos---------------------

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/channel/videos/',
  params: {
    id: 'UC8fkwsjcI_MhralEX1g4OBw',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'f9e65797cfmshef45753f8b867fep1f0cf6jsneb94bce604e7',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


// --------------------search

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/channel/search/',
  params: {
    id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
    q: 'john cena',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'f9e65797cfmshef45753f8b867fep1f0cf6jsneb94bce604e7',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


// ---------------------videos detalils---------------------
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/video/details/',
  params: {
    id: 'kJQP7kiw5Fk',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'f9e65797cfmshef45753f8b867fep1f0cf6jsneb94bce604e7',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9e65797cfmshef45753f8b867fep1f0cf6jsneb94bce604e7',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};


vidList(options);
playVideo(options);
rightSidebar(options);

