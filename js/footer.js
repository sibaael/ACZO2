/* JS Document */

/******************************

[Table of Contents]


******************************/

$(document).ready(function()
{
	"use strict";

	const subfolder = "/ACZO2";
	var rootSite = window.location.origin + subfolder;
	// var rootSite = window.location.origin;
	console.log(rootSite);
	setFooter();


	function setFooter() {
		$("#footerdiv").load(rootSite + "/footer.html"); 
	}

});