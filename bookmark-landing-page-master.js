'use strict'; 

$(window).resize(function(){
	location.reload();
});


const data ={
	check:'',
	timer:'',
	timeOutVal:3000,
	email: document.getElementById('email'),
	subscribe: document.getElementById('contact'),
	feedback: document.querySelector('.invalid-feedback'),
}

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
	 
	$(data.subscribe).on('click',function(){
		$(data.feedback).css('display','block');
		data.subscribe.setAttribute('aria-disabled','true');
		data.subscribe.setAttribute('disabled','true');
	});
    //User has pressed the keyboard ,and entered some data in the input field
    data.email.addEventListener('keyup',keyUp);
    data.email.addEventListener('keypress',keyPress);

    data.subscribe.addEventListener('click',(e)=>{
        e.preventDefault();
		console.log('wo');
		keyPress(e);
	})
});
