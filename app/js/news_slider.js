(function n($) {
var hwSlideSpeed = 700;
var hwTimeOut = 2000;
var hwNeedLinks = true;
var dots = false;

$(document).ready(function(e) {
	if( $('.news-slide').length ) {


	$('.news-slide').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNumber = 0;
	var slideTime;
	slideCount = $("#news-slider .news-slide").size();

	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.news-slide').eq(slideNumber).fadeOut(hwSlideSpeed);
		if(arrow == "next"){
			if(slideNumber == (slideCount-1)){slideNumber=0;}
			else{slideNumber++}
			}
		else if(arrow == "prew")
		{
			if(slideNumber == 0){slideNumber=slideCount-1;}
			else{slideNumber-=1}
		}
		else{
			slideNumber = arrow;
			}
		$('.news-slide').eq(slideNumber).fadeIn(hwSlideSpeed, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNumber).addClass('active');

		console.log('slideNumber', slideNumber);
		}

	if(hwNeedLinks){
	var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
		.prependTo('#news-slider');		
		$('#nextbutton').click(function(){
			animSlide("next");
			return false;
			})
		$('#prewbutton').click(function(){
			animSlide("prew");
			return false;
			})
	}
	var $adderSpan = '';
	$('.news-slide').each(function(index) {
			$adderSpan += '<span class = "control-slide">' + index + '</span>';
		});
	$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
	$(".control-slide:first").addClass("active");
	$('.control-slide').click(function(){
	var goToNum = parseFloat($(this).text());
	animSlide(goToNum);
	});
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
			}
	$('#slider-wrap').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();
	
	} else {
		console.log('erros about_slider.js')
	}
});
})(jQuery);