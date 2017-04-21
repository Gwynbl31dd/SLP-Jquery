/**
 * SLP v 0.2.0
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
		$formControle = $('.form-control:not(#email)'),
		minLength = 5;
	
	//Check the key on login
	$formControle.on('focus keyup hover change',function(){
		if($(this).val().length < minLength){
			$(this).parent().removeClass("has-success");
			$(this).parent().addClass("has-error");
			if(!$(this).parent().find('.alert').is(':animated')){
				$(this).parent().find('.alert').text('You should use more than '+minLength+' characters');
				$(this).parent().find('.alert').show("slow");
			}
		}
		else{
			$(this).parent().removeClass("has-error");
			$(this).parent().addClass("has-success");
			if(!$(this).parent().find('.alert').is(':animated')){
				$(this).parent().find('.alert').hide("slow");
			}
		}
	});
	//check the mail validation
	$email.on('focus keyup hover change',function(){
		if(!validateEmail($(this).val())){
			$(this).parent().removeClass("has-success");
			$(this).parent().addClass("has-error");
			if(!$(this).parent().find('.alert').is(':animated')){
				$(this).parent().find('.alert').text('You should use a valid Email');
				$(this).parent().find('.alert').show("slow");
			}
		}
		else{
			$(this).parent().removeClass("has-error");
			$(this).parent().addClass("has-success");
			if(!$(this).parent().find('.alert').is(':animated')){
				$(this).parent().find('.alert').hide("slow");
			}
		}
	});
	//Check the repassword validation
	$repassword.on('focus keyup hover change',function(){
		if($repassword.val()){
			if($password.val() != $repassword.val()){
				$repassword.parent().removeClass("has-success");
				$repassword.parent().addClass("has-error");
			}
			else{
				$repassword.parent().removeClass("has-error");
				$repassword.parent().addClass("has-success");
			}
		}
	});
	
	//Finaly, check all the CSS entries
	$submit.click(function(e){
		//Check all the entry
		
		if($login.parent().hasClass("has-error") == false
				&& $password.parent().hasClass("has-error") == false
				&& $repassword.parent().hasClass("has-error") == false
				&& $email.parent().hasClass("has-error") == false ){
			
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