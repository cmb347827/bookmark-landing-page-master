function validateEmail(email){
    //assuming an email containing charcters : a-z , A-Z, 0-9 and underscore. And from either a .com or .net account
	const regex = /^\w+@\w+\.{1}(com|net){1}$/;
	//get email entered by user input value
	const val = email.value;
    //check the validy of the email 
    const check = regex.test(val);
	return check;
}
const keyUp = (event)=>{
	//The user may be done typing the email address , check to see if it's valid before enabling submit button
	window.clearTimeout(data.timer); // prevent errant multiple timeouts from being generated
    data.timer = window.setTimeout(() => {
       data.check = validateEmail(data.email.value);
	   console.log('in keyup',data.email.value, ' data check',data.check);
	   //on check is true(valid email), enablebutton.
	   if(data.check){
		 //data.subscribe);
		 $('.invalid-feedback').css('display','none');
		 
	   }else{
		  //disableButton(data.subscribe);
		 $('.invalid-feedback').css('display','block');
	   }
    }, data.timeOutVal);
}
const keyPress =(event)=>{
	//The user may accidently delete part of the email after typing it, prevent submit even after button enabled
	window.clearTimeout(data.timer); // prevent errant multiple timeouts from being generated
	data.check = validateEmail(data.email.value);
	if(data.check){
	   $('.invalid-feedback').css('display','none');
	}else{
	   //disableButton(data.subscribe);
	}
}