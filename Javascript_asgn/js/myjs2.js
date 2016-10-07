function validity()
{
	if(document.myForm.firstname.value=="")
	{
		alert("Please provide your firstname!");
		document.myForm.firstname.focus();
		return false;
	}

	if(document.myForm.lastname.value=="")
	{
		alert("Please provide your lastname!");
		document.myForm.lastname.focus();
		return false;
	}

	var phone= document.myForm.phone.value;

	if (phone=="")  
	{
		alert("Please enter 10 digit phone number.");
		document.myForm.phone.focus();
		return false;
	}

	if (isNaN(phone))  
	{
		alert("Please enter valid phone number");
		document.myForm.phone.focus();
		return false;
	}
	if (phone.length!=10)  
	{
		alert("Please enter 10 digit phone number");
		document.myForm.phone.focus();
		return false;
	}

	var officeNo=document.myForm.office.value;

	

	if(isNaN(officeNo))
	{
		alert("Please enter valid office number");
		document.myForm.office.focus();
		return false;
	}

	var emailID= document.myForm.email.value;
	if (emailID=="") 
	{
		alert("Please enter the Email ID");
		document.myForm.email.focus();
		return false;
	}

	var atpos = emailID.indexOf("@");
	var dotpos = emailID.lastIndexOf(".");

	if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailID.length || emailID.match(/\.{2}/) || emailID.match(/@@/g) )
	{
		alert("Please enter valid Email ID");
		document.myForm.email.focus();
		return false;
	}


	var password=document.myForm.password1.value;
	var confirmPassword=document.myForm.password2.value;

	if(password=="")
	{
		alert("Please enter the password");
		document.myForm.password1.focus();
		return false;
	}

	if(password.length<8 || password.length>12)
	{
		alert("password must be of 8-12 characters");
		document.myForm.password1.focus();
		return false;
	}

	var alphaNumeric = /[^a-zA-Z0-9]/;
	if(alphaNumeric.test(password)) 
	{
       alert("Please enter only alphanumeric password");
       document.myForm.password1.focus();
       return false;
    }

	if(confirmPassword=="")
	{
		alert("Please re-enter the password");
		document.myForm.password2.focus();
		return false;
	}

	if(password!=confirmPassword)
	{
		alert("Please enter the same password as above");
		document.myForm.password2.focus();
		return false;
	}

	var month=document.myForm.month.value;
	var day=document.myForm.day.value;
	var year=document.myForm.year.value;

	if(month=="-1")
	{
		alert("Please provide month of DOB");
		document.myForm.month.focus();
		return false;
	}

	if(day=="-1")
	{
		alert("Please provide day of DOB");
		document.myForm.day.focus();
		return false;
	}

	if(year=="-1")
	{
		alert("Please provide year of DOB");
		document.myForm.year.focus();
		return false;
	}

	var male = document.getElementById('residence1').checked;
	var female = document.getElementById('residence2').checked;

	if((male=="") && (female==""))
	{
		alert("Please select your gender");
		return false;
	}

	var Biking = document.getElementById('checkbox_sample18').checked;
	var Reading = document.getElementById('checkbox_sample19').checked;
	var Playing = document.getElementById('checkbox_sample20').checked;

	if((Biking=="") && (Reading=="") && (Playing==""))
	{
		alert("Please select at least one interest");
		return false;
	}

	var txtArea= document.myForm.about.value;
	if(txtArea=="")
	{
		alert("Please tell something about you.");
		document.myForm.about.focus();
		return false;
	}
	else
	{
		alert("Your form has been submited");
		return true;
	}
}




function ageVal()
{
	
	var month=document.myForm.month.value;
	var day=document.myForm.day.value;
	var year=document.myForm.year.value;

	var DOB = new Date(year,month,day);
	var currrentDate = new Date();
	var ageTemp = (currrentDate - DOB)/(1000 * 60 * 60 * 24 * 365.2425);
	var age=Math.round(ageTemp * 10 ) / 10;
	document.myForm.age.value=age;
	
	
}



