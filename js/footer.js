/* JS Document */

/******************************

[Table of Contents]


******************************/

$(document).ready(function()
{
	"use strict";


	setFooter();


	function setFooter() {
		var subdomain = window.location.hostname.split('/')[0];
		if (subdomain === 'www' || subdomain === window.location.hostname) {
			subdomain = ''; // or handle the case where there's no subdomain
		}
		$("#footerdiv").load(subdomain + "/footer.html"); 
	}

});