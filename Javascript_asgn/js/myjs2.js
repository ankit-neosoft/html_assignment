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

	var ph= document.myForm.phone.value;

	if (ph=="")  
	{
		alert("Please enter 10 digit phone number.");
		document.myForm.phone.focus();
		return false;
	}

	if (isNaN(ph))  
	{
		alert("Please enter valid phone number");
		document.myForm.phone.focus();
		return false;
	}
	if (ph.length!=10)  
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

	if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailID.length || emailID.match(/\.{2}/))
	{
		alert("Please enter valid Email ID");
		document.myForm.email.focus();
		return false;
	}


	var pswd1=document.myForm.password1.value;
	var pswd2=document.myForm.password2.value;

	if(pswd1=="")
	{
		alert("Please enter the password");
		document.myForm.password1.focus();
		return false;
	}

	if(pswd1.length<8 || pswd1.length>12)
	{
		alert("password must be of 8-12 characters");
		document.myForm.password1.focus();
		return false;
	}

	if( /[^a-zA-Z0-9]/.test( pswd1 ) ) {
       alert("Please enter only alphanumeric password");
       document.myForm.password1.focus();
       return false;
    }

	if(pswd2=="")
	{
		alert("Please re-enter the password");
		document.myForm.password2.focus();
		return false;
	}

	if(pswd1!=pswd2)
	{
		alert("Please enter the same password as above");
		document.myForm.password2.focus();
		return false;
	}

	var Mnth=document.myForm.month.value;
	var dy=document.myForm.day.value;
	var yr=document.myForm.year.value;

	if(Mnth=="-1")
	{
		alert("Please provide month of DOB");
		document.myForm.month.focus();
		return false;
	}

	if(dy=="-1")
	{
		alert("Please provide day of DOB");
		document.myForm.day.focus();
		return false;
	}

	if(yr=="-1")
	{
		alert("Please provide year of DOB");
		document.myForm.year.focus();
		return false;
	}

	var radio1 = document.getElementById('residence1').checked;
	var radio2 = document.getElementById('residence2').checked;

	if((radio1=="") && (radio2==""))
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
	
	var Mnth=document.myForm.month.value;
	var dy=document.myForm.day.value;
	var yr=document.myForm.year.value;

	var d = new Date(yr,Mnth,dy);
	var dd = new Date();
	var ddd = (dd - d)/(1000 * 60 * 60 * 24 * 365.2425);
	var date1=Math.round(ddd * 10 ) / 10;
	document.myForm.age.value=date1;
	
	
}



