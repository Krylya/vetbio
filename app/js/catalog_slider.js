(function ($) {
var hwSlideSpeed = 1000;
var hwTimeOut = 6000;
var hwNeedLinks = false;
var dots = false;

$(document).ready(function(e) {
	if( $('.catalog-slider__item').length ) {

		$('.catalog-slider__item').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $("#catalog-slider .catalog-slider__item").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.catalog-slider__item').eq(slideNum).fadeOut(hwSlideSpeed);
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
		$('.catalog-slider__item').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
		}
	if(hwNeedLinks){
	var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
		.prependTo('#catalog-slider');		
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
	$('.catalog-slider__item').each(function(index) {
			$adderSpan += '<span class = "control-slide">' + index + '</span>';
		});
	$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#catalog-slider__wrap');
	$(".control-slide:first").addClass("active");
	$('.control-slide').click(function(){
	var goToNum = parseFloat($(this).text());
	animSlide(goToNum);
	});
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
			}
	$('#catalog-slider__wrap').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();

	} else {
		console.log('erros catalog_slider.js')
	}
});
})(jQuery);