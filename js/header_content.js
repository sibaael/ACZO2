$(document).ready(function () {
	"use strict";

	// const subfolder = "/ACZO2";
	// var rootSite = window.location.origin + subfolder;
	var rootSite = window.location.origin;
	console.log(rootSite);
	setHeaderContent();

	function setHeaderContent() {
		$("#header_content").load(rootSite + "/header_content.html");
	}
});