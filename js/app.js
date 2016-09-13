function clicked(evt){
	var e = evt.target;
	var dim = e.getBoundingClientRect();
	var x = evt.clientX - dim.left;
	var y = evt.clientY - dim.top;
	console.log("x: "+x+" y:"+y); 
} 


$(window).on('beforeunload', function(){
	$(window).scrollTop(0);
});

$(document).ready(function(){

	var width = $(window).width(), height = $(window).height();
	// console.log(width, height);

	var bodyHeight = 2000;
	var logoY = 100;
	var logoContainerY = 60;
	var handY = 700;
	var tripButtonY = 450;
	var tripClickY = 350;
	var tripClickFont = 45;
	var tripEndY = 350;
	var tripEndFont = 55;
	var joinUsY = 400;
	var joinUsFont = 25;
	var subscribeFormY = 470;
	var subscribeFormX = 400;
	var subscribeFormW = 500;
	var seeMoreY = 780;
	var handMove = 300;

	if(width <= 320){

	}
	if(width <= 480){

	}
	if(width <= 768){
		bodyHeight = 10000;
		logoY = 250;
		logoContainerY = 210;
		handY = 600;
		tripButtonY = 550;
		tripClickY = 450;
		tripClickFont = 35;
		tripEndY = 400;
		tripEndFont = 25;
		joinUsY = 450;
		joinUsFont = 20;
		subscribeFormY = 500;
		subscribeFormX = 475;
		subscribeFormW = 350;
		seeMoreY = 700;
		handMove = 100;

		$('#tripend').attr({'y' : tripEndY});
		$('#tripend').css({'font-size' : tripEndFont+'px'});

		$('#joinus').attr({'y' : joinUsY});
		$('#joinus').css({'font-size' : joinUsFont+'px'});

		$('#subscribe-form').attr({'y' : subscribeFormY});
		$('#subscribe-form').attr({'x' : subscribeFormX});
		$('#subscribe-form').attr({'width' : subscribeFormW});

		$('#mce-EMAIL').css({'width' : '230px'});
		$('#mc-embedded-subscribe').css({'width' : '100px'});
	}
	if(width <= 992){

	}
	if(width <= 1200){

	}
    // Get a reference to the <path>
    var path = document.querySelector('#trail-path');
    var fading_speed = 500;

	// Get length of path... ~577px in this case
	var pathLength = path.getTotalLength();

	// Make very long dashes (the length of the path itself)
	path.style.strokeDasharray = pathLength + ' ' + pathLength;

	// Offset the dashes so the it appears hidden entirely
	path.style.strokeDashoffset = pathLength;

	// Jake Archibald says so
	// https://jakearchibald.com/2013/animated-line-drawing-svg/
	path.getBoundingClientRect();

	var firstscroll = true;

	var mappage = false;

	var endpage = false;

	$('body').on('DOMMouseScroll mousewheel', function(e){
		if(firstscroll){
			if(e.originalEvent.wheelDelta > 0) {
	            // console.log('up 3');
	        }
	        else {

	        	$('#scrolldown').animate({ "y": "-=773px" }, "slow" );

	        	

	        	$('#logo').css({'width': '133px','height': '113px', 'y' : '138px', 'x' : '573.5px' });
	        	$("#logo-container").fadeIn(fading_speed);

	        	$("#tripclick").fadeIn(fading_speed*3);
	        	$("#tripbutton").fadeIn(fading_speed*3);

	        	$('#hand').css({'y' : '700px'});

	        	firstscroll = false;

	        	setTimeout(function() {
					$('#scrolldown').remove();
				}, 1000);
	        }
	    }

	});

	$('#scrolldown').on('click', function(e){
		if(firstscroll){
			$('#scrolldown').attr({ "y": "-773" } );

			

			$('#logo').attr({'width': '133px','height': '113px', 'y' : logoY, 'x' : '573.5px' });
			$('#logo-container').attr('y' , logoContainerY);
			$("#logo-container").fadeIn(fading_speed);

			$('#tripclick').css({'font-size' : tripClickFont+'px'});
			$('#tripclick').attr('y' , tripClickY);
			$("#tripclick").fadeIn(fading_speed*3);

			$('#tripbutton').attr('y' , tripButtonY);
			$("#tripbutton").fadeIn(fading_speed*3);

			$('#hand').attr({'y' : handY});

			firstscroll = false;

			setTimeout(function() {
				$('#scrolldown').remove();
			}, 1000);

			
		}

	});

	$('#tripbutton').on('click', function(e){
		
		$('#hand').animate({ "y": "-="+handMove+"px" }, {
			queue: false,
			duration: 300,
			complete: function() {
				setTimeout(function() {
					$('#hand').attr("xlink:href", "./img/hand_click.png");
					$("#tripbutton").attr("xlink:href", "./img/button_onclick.png");

					setTimeout(function() {
						$("#tripclick").fadeOut(fading_speed);

						$("#tripbutton").fadeOut(fading_speed);
						$("#hand").fadeOut(fading_speed - 300, function() {
							$("#see-more").fadeIn(fading_speed);
							$('#see-more').animate({ "y": seeMoreY+"px" }, 50);

							$("#tripclick").remove();
							$("#tripbutton").remove();
							$("#hand").remove();
						});

						$('#bg_small').css({'x' : '-10', 'width' : '1522' , 'height' : '1217', 'opacity' : '1'});

						$('body').css('height', bodyHeight);

						$('#trail-path').fadeIn(fading_speed);

						

						mappage = true;
					}, 300);
				}, 1000);
			}
		});

        // $('#hand').attr("xlink:href", "./img/hand_click.png");


    });

	// When the page scrolls...
	window.addEventListener("scroll", function(e) {
		
		if(mappage){
		  	var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

		  	// Length to offset the dashes
		  	var drawLength = pathLength * scrollPercentage;

		  	var currentPoint = pathLength - drawLength;

		  	
		  	path.style.strokeDashoffset = currentPoint;


		  	console.log(currentPoint);

		  	if (currentPoint < 2906) {
		  		$("#see-more").fadeOut(fading_speed);
		  	} else {
		  		$("#see-more").fadeIn(fading_speed);


				if(width <= 1200){
		  			$('#map-svg').css('transform', 'translate(-50%, -50%)');
				}

		  	}
		  	
		  	if(currentPoint >= 2075 && currentPoint < 2900){

		  		if(width <= 1200){
		  			$('#map-svg').css('transform', 'translate(-27%, -50%)');
				}


		  		$("#loc-1").fadeIn(fading_speed);

		  		
		  	}else if(currentPoint >= 2500){
		  		$("#loc-1").fadeOut(fading_speed);
		  	}

		  	if(currentPoint >= 1629 && currentPoint < 2075){
		  		$("#loc-2").fadeIn(fading_speed);

		  		if(width <= 1200){
		  			$('#map-svg').css('transform', 'translate(-39%, -50%)');
				}
		  		
		  	}else if(currentPoint >= 2075){
		  		$("#loc-2").fadeOut(fading_speed);
		  	}

		  	if(currentPoint >= 850 && currentPoint < 1629){
		  		$("#loc-3").fadeIn(fading_speed);

		  		if(width <= 1200){
		  			$('#map-svg').css('transform', 'translate(-75%, -50%)');
				}
		  	}else if(currentPoint >= 1629){
		  		$("#loc-3").fadeOut(fading_speed);

		  		
		  	}

		  	if(currentPoint >= 300 && currentPoint < 850){
		  		$("#loc-4").fadeIn(fading_speed);

		  		if(width <= 1200){
		  			$('#map-svg').css('transform', 'translate(-70%, -50%)');
				}
		  	}else if(currentPoint >= 850){
		  		$("#loc-4").fadeOut(fading_speed);
		  	}

		  	if(currentPoint >= 10 && currentPoint < 300){
		  		$("#loc-5").fadeIn(fading_speed);

		  		if(width <= 1200){
		  			$('#map-svg').css('transform', 'translate(-47%, -70%)');
				}
		  	}else if(currentPoint >= 300){
		  		$("#loc-5").fadeOut(fading_speed);
		  	}


		  	if(currentPoint < 5){

		  		if(width <= 1200){
		  			$('#map-svg').css('transform', 'translate(-50%, -50%)');
				}

		  		setTimeout(function() {
		  			mappage = false;

		  			$('#bg_small').css({'opacity' : '0.2'});

		  			$("#loc-1").fadeOut(100);
		  			$("#loc-2").fadeOut(100);
		  			$("#loc-3").fadeOut(100);
		  			$("#loc-4").fadeOut(100);
		  			$("#loc-5").fadeOut(100);
		  			$("#see-more").remove();

		  			


		  			$('body').css('height', 'auto');

		  			


		  			$('#trail-path').fadeOut(fading_speed);

		  			setTimeout(function() {
		  				$("#tripend").fadeIn(fading_speed);

		  				$("#joinus").fadeIn(fading_speed);

		  				$("#mid-slide").fadeIn(fading_speed);

		  				$("#left-slide").fadeIn(fading_speed);
		  				$("#right-slide").fadeIn(fading_speed);

		  				$("#facebook").fadeIn(fading_speed);
		  				$("#instagram").fadeIn(fading_speed);


		  				$('#left-slide').css({'x' : '0'});

		  				$('#right-slide').css({'x' : '828'});

		  				$("#subscribe-form").fadeIn(fading_speed*2);

		  				$('#facebook').css({'y' : '600'});
		  				$('#instagram').css({'y' : '600'});
		  			}, 1000);

		  		}, 500);
		  		
		  	}
		  	
		}


	});

	$('#instagram').click(function() {
		window.open('https://www.instagram.com/kaja.today/', '_blank');
	});

	$('#facebook').click(function() {
		window.open('https://www.facebook.com/travify/', '_blank');
	});
});