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
	var error_interest = false;
	var	error_about = false;
	var error_year = false;

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

	$("#residence1, #residence2").on("click",function(){
		check_gender();
	});

	$("#checkbox_sample18,#checkbox_sample19,#checkbox_sample20 ").on("click",function(){
		check_interest();
	});

	$("#form_about").focusout(function(){
		check_about();
	});

	$("#month, #day, #year").on("change",function(){
		check_dob();
	});



	function check_firstname(){
		var firstname_length = $("#form_firstname").val().length;
		var firstname = $("#form_firstname").val();
		var firstnamecheck = /^[a-zA-Z]+$/;
		 if(firstname_length<2){
		 	$("#firstname_error").text("Enter your valid First Name");
		 	$("#firstname_error").show();
		 	error_firstname = true;
		 	return error_firstname;
		 } else if(!(firstnamecheck.test(firstname))){
		 	$("#firstname_error").text("First Name should be alphabetic");
		 	$("#firstname_error").show();
		 	error_firstname = true;
		 }
		 else{
		 	$("#firstname_error").hide();
		 }
	}

	function check_lastname(){
		var lastname_length = $("#form_lastname").val().length;
		var lastname = $("#form_lastname").val();
		var lastnamecheck = /^[a-zA-Z]+$/;
		 if(lastname_length<2){
		 	$("#lastname_error").text("Enter your valid Last Name");
		 	$("#lastname_error").show();
		 	error_lastname = true;
		 	return error_lastname;
		 } else if(!(lastnamecheck.test(lastname))){
		 	$("#lastname_error").text("Last Name should be alphabetic");
		 	$("#lastname_error").show();
		 	error_lastname = true;
		 }
		 else{
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
		 	return error_phone;
		 } else{
		 	$("#phone_error").hide();
		 }
	}

	function check_office(){
		var office_length = $("#form_office").val().length;
		var officeNo = $("#form_office").val();
		var officeCheck = /^\d{6}$/;
		if(office_length>0){
		 if(!(officeCheck.test(officeNo))){
		 	$("#office_error").text("Enter Valid Office No");
		 	$("#office_error").show();
		 	error_office = true;
		 	return error_office;
		 } else{
		 	$("#office_error").hide();
		 }
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
			return error_email;
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
				return error_password;
				} else{
				$("#password_error").hide();
			}				
			}

		function check_confirm_password(){
			var confirm_password = $("#form_confirm_password").val();
			var password = $("#form_password").val();
			if(confirm_password!=password ){
		 	$("#confirm_password_error").text("Password do not match");
		 	$("#confirm_password_error").show();
		 	error_confirm_password = true;
		 	return error_confirm_password;
		 } else{
		 	$("#confirm_password_error").hide();
		 }
		}

		function check_gender(){

		if($("input[name=gender]:checked").length<=0){
			$("#gender_error").html("Select gender");
			$("#gender_error").show();
			error_gender = true;
			return error_gender;
		} else{
			$("#gender_error").hide();
		}
		}

		function check_interest(){
			
		if(!$('input[name=checkbox1]:checked').val()){
			$("#interest_error").html("Choose atleast one interest");
			$("#interest_error").show();
			error_interest = true;
			return error_interest;
		} else{
			$("#interest_error").hide();
		}
	}

	function check_about(){
		var about_length = $("#form_about").val().length;
		 if(about_length<1){
		 	$("#about_error").text("Tell something about you");
		 	$("#about_error").show();
		 	error_about = true;
		 	return error_about;
		 } else{
		 	$("#about_error").hide();
		 }
	}

	function check_dob(){
		var month = $("#month").val();
		var day = $("#day").val();
		var year = $("#year").val();

		var DOB = new Date(year,month,day);
		var currrentDate = new Date();
		var ageTemp = (currrentDate - DOB)/(1000 * 60 * 60 * 24 * 365.2425);
		var age=Math.round(ageTemp * 10 ) / 10;

		if((month=="-1" || day=="-1" || year=="-1"))
	{
		$("#dob_error").text("Provide your DOB");
		 	$("#dob_error").show();
		 	$("#age").val('');	
		 	error_dob = true;
		 	return error_dob;
	}else {
		$("#age").val(age);	
		$("#dob_error").hide();
	}

}
	

	
 $("#registration_form").submit(function(){
  var	error_firstname = false;
	var	error_lastname = false;
	var error_phone = false;
	var error_password = false;
	var error_confirm_password = false;
	var error_gender = false;
	var error_interest = false;
	var error_about = false;
	var error_dob = false;

	var f = check_firstname();
	var l = check_lastname();
	var p = check_phone();
	var o = check_office();
	var e = check_email();
	var ps = check_password();
	var cp = check_confirm_password();
	var g = check_gender();
	var i = check_interest();
	var a = check_about();
	var d = check_dob();

	if(!f && !l && !p && !o && !e && !ps && !cp && !g && !i && !a && !d){
		return true;
	} else{
		return false;
	}

  });	

});