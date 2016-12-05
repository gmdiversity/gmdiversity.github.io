$(document).ready(function(){

	$('.word-prev').on('click', function(){
    $(this).parent().prev('.definition').toggle(this);
	});
	
	$('.word-next').on('click', function(){
    $(this).parent().next('.definition').toggle(this);
	});

	$('.word-next-mob').on('click', function(){
    $(this).parent().next('.definition-mob').toggle(this);
	});

	$('.word-prev-mob').on('click', function(){
    $(this).parent().prev('.definition-mob').toggle(this);
	});
	
	$( "#johnR-btn" ).click(function() {
		hideStories();
	  $( "#johnR" ).fadeIn( "slow", function() {
	  });
	});

	$( "#eddieG-btn" ).click(function() {
		hideStories();
	  $( "#eddieG" ).fadeIn( "slow", function() {
	  });
	});

	$( "#damonJ-btn" ).click(function() {
		hideStories();
	  $( "#damonJ" ).fadeIn( "slow", function() {
	  });
	});

	$( "#jimP-btn" ).click(function() {
		hideStories();
	  $( "#jimP" ).fadeIn( "slow", function() {
	  });
	});

	// THIS IS TO MAKE THE OTHER STORIES DISAPPEAR
	var the_stories = ["#johnR", "#eddieG","#damonJ","#jimP"];
	
	
	function hideStories() {
		for (i = 0; i < the_stories.length; i++) { 
			$(the_stories[i]).fadeOut("fast");
		}
	}

});
