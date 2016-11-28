$(document).ready(function(){
	'use strict';

	var browserW,
		browserH;

	$('body').prepend('<div id="browserW" style="padding:10px;background-color:#fff;position:fixed;top:0;left:0;z-index:9999;">'+browserW+'</div>');
	$(window).resize(function(e) {
		browserW = $(window).width();
		browserH = $(window).height();

		$('#browserW').text(browserW);
	}).resize();
});