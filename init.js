$(document).ready(function(){
	$('#slider').slidertron({
		viewerSelector:			'.viewer',
		reelSelector:			'.viewer .reel',
		slidesSelector:			'.viewer .reel .slide',
		navPreviousSelector:    '.previous-button',
		navNextSelector:        '.next-button',
		advanceDelay:			3000,
		speed:					'slow',
		activeSlideClass:		'slide-active',
		captionLines:			1,
		captionLineSelector:	'.captionLine',
		slideCaptionSelector:	'.caption'
	});
});