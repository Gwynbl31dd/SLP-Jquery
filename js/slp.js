/**
 * SLP v 0.1.0
 * @author Anthony Paulin <paulin.anthony@gmail.com>
 * @since 13-04-2017
 */
$(document).ready(function(){
	//Initialise variable
	var $login = $('#login'),
		$password = $('#password'),
		$repassword = $('#repassword'),
		$email = $('#email'),
		$submit = $('#submit'),
		$formControle = $('.form-control');
	
	//Check the key on login
	$formControle.on('focus keyup',function(){
		if($(this).val().length < 5){
			$(this).css("border-color", "red" );
		}
		else{
			$(this).css("border-color", "green" );
		}
	});
	//check the mail validation
	$email.on('focus keyup hover change',function(){
		if(!validateEmail($(this).val())){
			$(this).css("border-color", "red" );
		}
		else{
			$(this).css("border-color", "green" );
		}
	});
	//Check the repassword validation
	$repassword.on('focus keyup change',function(){
		if($repassword.val()){
			if($password.val() != $repassword.val()){
				$repassword.css("border-color", "red");
			}
			else{
				$repassword.css("border-color", "green");
			}
		}
	});
	
	//Finaly, check all the CSS entries
	$submit.click(function(e){
		//Check all the entry
		if($login.css("border-top-color") != "rgb(255, 0, 0)"
				&& $password.css("border-top-color") != "rgb(255, 0, 0)"
				&& $repassword.css("border-top-color") != "rgb(255, 0, 0)"
				&& $email.css("border-top-color") != "rgb(255, 0, 0)" ){
			alert("Form valid !!!");
			/*
			 * Do stuff here
			 */
		}
		else{
			alert("Form invalid");
		}
		e.preventDefault();
	});
	//Use regex to valid emails
	 function validateEmail($email) {
		 if($email.length != 0){
		  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		  return emailReg.test( $email );
		 }
		 else{
			 return false;
		 }
	}
});