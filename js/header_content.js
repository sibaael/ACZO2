$(document).ready(function () {
	"use strict";


	setHeaderContent();

	function setHeaderContent() {
		const subfolder = "/ACZO2";
		var rootSite = window.location.origin + subfolder;
		//  var rootSite = window.location.origin;
		console.log(rootSite);
		$("#header_content").load(rootSite + "/header_content.html");
	}
});