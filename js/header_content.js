$(document).ready(function () {
	"use strict";

	setHeaderContent();


	function setHeaderContent() {
		var rootSite = window.location.origin;
		console.log(rootSite);
		$("#header_content").load(rootSite + "/header_content.html");
	}
});