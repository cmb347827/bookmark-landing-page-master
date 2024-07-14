'use strict'; 

$(window).resize(function(){
	location.reload();
});


$(window).on('load',function(){
		
	$("#navbarCollapse").on("show.bs.collapse", function(){
        //menu is collapsed, show close icon.
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('show');
    });
	$("#navbarCollapse").on("hide.bs.collapse", function(){
        $('#close').toggleClass('show');
		$('#open').toggleClass('hidden');
		
    });
	  
});
