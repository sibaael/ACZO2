/* JS Document */

/******************************

[Table of Contents]


******************************/

$(document).ready(function()
{
	"use strict";


	setMenu();


	function setMenu() {
		var subdomain = window.location.hostname.split('/')[0];
		if (subdomain === 'www' || subdomain === window.location.hostname) {
			subdomain = ''; // or handle the case where there's no subdomain
		}
		$("#menudiv").load(subdomain + "/menu.html"); 
	}

});