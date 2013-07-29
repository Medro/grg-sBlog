/***************************************************
			SUPER FISH MENU
***************************************************/
jQuery.noConflict()(function($){
$(document).ready(function() {
   $("ul.sf-menu").superfish({ 
            pathClass:  'current',
			autoArrows	: false,
			delay:300,
			speed: 'normal',
			animation:   {height:'show'}

        }); 


    });

/************ FLICKR ******************/
	$('#basicuse').jflickrfeed({
		limit: 14,
		qstrings: {
			id: '37304598@N02'
		},
		itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});
	
	$('#cbox').jflickrfeed({
		limit: 12,
		qstrings: {
			id: '32408409@N03'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" href="{{image_b}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('#cbox a').colorbox();
	});
	
	$('#cycle').jflickrfeed({
		limit: 14,
		qstrings: {
			id: '37304598@N02'
		},
		itemTemplate: '<li><img src="{{image}}" alt="{{title}}" /><div>{{title}}</div></li>'
	}, function(data) {
		$('#cycle div').hide();
		$('#cycle').cycle({
			timeout: 5000
		});
		$('#cycle li').hover(function(){
			$(this).children('div').show();
		},function(){
			$(this).children('div').hide();
		});
	});
	
	$('#nocallback').jflickrfeed({
		limit: 4,
		qstrings: {
			id: '37304598@N02'
		},
		useTemplate: false,
		itemCallback: function(item){
			$(this).append("<li><img src='" + item.image_m + "' alt=''/></li>");
		}
	});

});



/***************************************************
			Content Slider on home page
***************************************************/
jQuery.noConflict()(function($){
$('#ca-container').contentcarousel();
});



jQuery.noConflict()(function($){
$(document).ready(function() {

	
	  /*---- TWITTER ----*/
	  $("#twitter .tweet").tweet({
        	count: 1,
        	username: "zesky",
        	loading_text: "loading twitter..."      
		});

	  /*---- TWITTER ----*/
	  $("#twitter-widget .tweet").tweet({
        	count: 3,
        	username: "envato",
        	loading_text: "loading twitter..."      
		});

	  
	 });
});


/***************************************************
			Nivo Slider
***************************************************/
//jQuery.noConflict()(function($){
//$(document).ready(function() {
//            $('#slider').nivoSlider({
//			effect: 'random',
//			pauseTime: 5000,
//			captionOpacity: 0.7,
//			directionNav: false,
//            });        
//    });
//});

/***************************************************
			ACCORDIAN  SLIDER
***************************************************/

//jQuery.noConflict()(function($){
//	$(document).ready(function() {
//		$('#alphapack-accordian .kwicks').kwicks({
//		max: 800,
//				spacing:  0
//		});
//	});
//});	
