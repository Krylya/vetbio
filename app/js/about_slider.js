(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 4000;
var hwNeedLinks = false;
var dots = false;

$(document).ready(function(e) {

	if($('.about-slider__item').length ) {

	$('.about-slider__item').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $("#about-slider .about-slider__item").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.about-slider__item').eq(slideNum).fadeOut(hwSlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.about-slider__item').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
		}
// if(hwNeedLinks){
// var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
// 	.prependTo('#slider');		
// 	$('#nextbutton').click(function(){
// 		animSlide("next");
// 		return false;
// 		})
// 	$('#prewbutton').click(function(){
// 		animSlide("prew");
// 		return false;
// 		})
// }
	// var $adderSpan = '';
	// $('.about-slider__item').each(function(index) {
	// 		$adderSpan += '<span class = "control-slide__about">' + index + '</span>';
	// 	});
	// $('<div class ="sli-links__about">' + $adderSpan +'</div>').appendTo('#slider-wrap');
	// $(".control-slide:first").addClass("active");
	// $('.control-slide').click(function(){
	// var goToNum = parseFloat($(this).text());
	// animSlide(goToNum);
	// });
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
