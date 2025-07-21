/* JS Document */

/******************************

[Table of Contents]


******************************/

$(document).ready(function () {
	"use strict";


	setMenu();


	function setMenu() {
		// const subfolder = "/ACZO2";
		// var rootSite = window.location.origin + subfolder;
		 var rootSite = window.location.origin;
		console.log(rootSite);
		$("#menudiv").load(rootSite + "/menu.html");
	}

});