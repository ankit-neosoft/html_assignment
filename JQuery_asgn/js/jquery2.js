$(document).ready(function(){
	$("#firstname_error").hide();
	$("#lastname_error").hide();

	var	error_firstname = false;
	var	error_lastname = false;
	var error_phone = false;
	var error_office  = false;
	var error_email  = false;
	var error_password = false;
	var error_confirm_password = false;
	var error_gender = false;

	$("#form_firstname").focusout(function(){
		check_firstname();
	});

	$("#form_lastname").focusout(function(){
		check_lastname();
	});

	$("#form_phone").focusout(function(){
		check_phone();
	});

	$("#form_office").focusout(function(){
		check_office();
	});

	$("#form_email").focusout(function(){
		check_email();
	});

	$("#form_password").focusout(function(){
		check_password();
	});

	$("#form_confirm_password").focusout(function(){
		check_confirm_password();
	});

	




	function check_firstname(){
		var firstname_length = $("#form_firstname").val().length;
		 if(firstname_length<2){
		 	$("#firstname_error").text("Enter your valid First Name");
		 	$("#firstname_error").show();
		 	error_firstname = true;
		 } else{
		 	$("#firstname_error").hide();
		 }
	}

	function check_lastname(){
		var lastname_length = $("#form_lastname").val().length;
		 if(lastname_length<2){
		 	$("#lastname_error").text("Enter your valid Last Name");
		 	$("#lastname_error").show();
		 	error_lastname = true;
		 } else{
		 	$("#lastname_error").hide();
		 }
	}

	function check_phone(){
		var phoneNo = $("#form_phone").val();
		var phoneCheck = /^\d{10}$/;
		 if(!(phoneCheck.test(phoneNo))){
		 	$("#phone_error").text("Enter 10 digit Phone No");
		 	$("#phone_error").show();
		 	error_phone = true;
		 } else{
		 	$("#phone_error").hide();
		 }
	}

	function check_office(){
		var office_length = $("#form_office").val().length;
		 if(office_length<6 ){
		 	$("#office_error").text("Enter Valid Office No");
		 	$("#office_error").show();
		 	error_office = true;
		 } else{
		 	$("#office_error").hide();
		 }
	}

	function check_email(){
		var emailfilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
		var emailId = $("#form_email").val();
		var returnval = emailfilter.test(emailId);
		if(returnval == false){
			$("#email_error").text("Enter valid email ID");
			$("#email_error").show(); 
			error_email = true;
			} else{
				$("#email_error").hide();
			}
		}

		function check_password(){

			var password = $("#form_password").val();
			var password_length = $("#form_password").val().length;
			var alphaNumeric = /^[a-zA-Z0-9]{8,}$/;

			if(!(alphaNumeric.test(password))){
				$("#password_error").text("Enter 8-12 alphaNumeric password");
				$("#password_error").show(); 
				error_password = true;
				} else{
				$("#password_error").hide();
			}				
			}

		function check_confirm_password(){
			var confirm_password = $("#form_confirm_password").val();
			var password = $("#form_password").val();
		 if(confirm_password!=password ){
		 	$("#confirm_password_error").text("password do not match");
		 	$("#confirm_password_error").show();
		 	error_confirm_password = true;
		 } else{
		 	$("#confirm_password_error").hide();
		 }
	}

  $("#registration_form").submit(function(){
  	var	error_firstname = false;
		var	error_lastname = false;
		var error_phone = false;
		var error_office  = false;
		var error_email  = false;
		var error_password = false;
		var error_confirm_password = false;

		check_firstname();
		check_lastname();
		check_phone();
		check_office();
		check_email();
		check_password();
		check_confirm_password();

		if(error_firstname==false && error_lastname==false && error_phone==false && error_office==false && error_email==false && error_password==false && error_confirm_password){
			return true;
		} else{
			return false;
		}

	  });


  	

});