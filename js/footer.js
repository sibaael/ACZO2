/* JS Document */

/******************************

[Table of Contents]


******************************/

$(document).ready(function () {
	"use strict";


	setFooter();


	function setFooter() {
		const subfolder = "/ACZO2";
		var rootSite = window.location.origin + subfolder;
		//var rootSite = window.location.origin;
		console.log(rootSite);
		$("#footerdiv").load(rootSite + "/footer.html");
	}

});