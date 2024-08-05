'use strict'; 

$(window).resize(function(){
	location.reload();
});


const data ={
	check:'',
	timer:'',
	timeOutVal:3000,
	regex : /^\w+@\w+\.{1}(com|net){1}$/,
	email: document.getElementById('email'),
	subscribe: document.getElementById('contact'),
	//feedback: document.querySelector('.invalid-feedback'),
	//erricon:document.getElementById('error-icon'),
	errors: document.getElementById('errors'),
}


$(window).on('load',function(){
    
	$("#navbarCollapse").on("show.bs.collapse", function(){
        //menu is collapsed, show close icon.
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('show');
		$('#nav').addClass('custom-nav');
    });
	$("#navbarCollapse").on("hide.bs.collapse", function(){
        $('#close').toggleClass('show');
		$('#open').toggleClass('hidden');
		$('#nav').removeClass('custom-nav');
    });
	
	$(data.subscribe).on('click',function(){
		dataFailed();
	});
    //User has pressed the keyboard ,and entered some data in the input field
    data.email.addEventListener('keyup',keyUp);
    data.email.addEventListener('keypress',keyPress);

    data.subscribe.addEventListener('click',(e)=>{
        e.preventDefault();
		keyPress(e);
	})
});
