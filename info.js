
function formValidation()
{
		clearerror();
		var vfname = validatefName();
		var vlname = validatelName();
		var vpassword = validatePassword();
		var vusername = validateUsername();
		var vage = validateAge();
		var vcwd = validateConfirmpassword();
		var vedu = validateEdu();
		if(vfname && vlname && vpassword && vusername && vage && vcwd && vedu)
		{
			alert("success");
		}
		return vfname && vlname && vpassword && vusername && vage && vcwd && vedu;
		
}

function validateConfirmpassword(){
	var errors = document.querySelector("#cpwderr");
	var elem1 = document.signup.password;
	var inputValue1 = elem1.value.trim();
	var elem2 = document.signup.confirmPassword;
	var inputValue2 = elem2.value.trim();
	var passConfirm = true;
	
	document.querySelector("#cpwderr").innerHTML="";

	if(inputValue1 != inputValue2)
	{
		passConfirm = false;
	}
	
	
	if(!passConfirm)
	{
		errors.innerHTML += "Password must be matched";
		elem2.focus();
		return false;
	}
	else
	{
		return true;
	}
	
}

function validateAge(){
	var errors = document.querySelector("#Aerr");
	var passAge = true;
	var elem = document.signup.Age;
	var inputValue = elem.value.trim();
	
	document.querySelector("#Aerr").innerHTML="";
	
	if(parseInt(inputValue) < 18 || parseInt(inputValue) > 60)
	{
		passAge = false;
	}
	
	if(!passAge)
	{
		errors.innerHTML += "Age should be between 18 and 60";
		elem.focus();
		return false;
	}
	else
	{
		return true;
	}
	
}

function validateUsername(){
	var errors = document.querySelector("#Nameerr");
	var passLength = true;
	var passFAlpha= true;
	var alphString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var elem = document.signup.Username;
	var inputValue = elem.value.trim();
	
	document.querySelector("#Nameerr").innerHTML="";
	
	if(inputValue.length < 6)
	{
		passLength = false;
	}
	
	var inputC = inputValue.toUpperCase();
	
	if(inputC.charAt(0) < "A" || inputC.charAt(0) > "Z" )  
	{ 
		passFAlpha = false; 
	}
	
	if(!passLength)
	{
		errors.innerHTML += "Username should be over 6";
		elem.focus();
		return false;
	}
	else if(!passFAlpha)
	{
		errors.innerHTML += "Username should start with a character";
		elem.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function validatePassword(){
    var errors = document.querySelector("#pwderr");
	var passLength = true;
	var passFAlpha= true;
	var passDigit = false;
	var passUpper = false;
	var alphString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var digitString = "0123456789";
	var elem = document.signup.password;
	var inputValue = elem.value.trim();
	
	document.querySelector("#pwderr").innerHTML="";
	
	/* length check*/
	if(inputValue.length != 6)
	{
		passLength = false;
	}
	
	/* first character check */
	var inputC = inputValue.toUpperCase();
	
	if(inputC.charAt(0) < "A" || inputC.charAt(0) > "Z" )  
	{ 
		passFAlpha = false; 
	}
	
	
	/* one Uppercase */
    for (var i = 0; i < inputValue.length; i++) 
	{
	   if (alphString.indexOf(inputValue.substr(i,1))>= 0)   
	   { 
			passUpper=true;
	   }

	} 

	/* one digit */
    for (var i = 0; i < inputValue.length; i++) 
	{
	   if (digitString.indexOf(inputValue.substr(i,1))>= 0)   
	   { 
			passDigit=true;
	   }

	}  
	
	if(!passLength)
	{
		errors.innerHTML += "Password should be 6 characters long";
		elem.focus();
		return false;
	}
	else if(!passFAlpha)
	{
		errors.innerHTML += "Password should start with a character";
		elem.focus();
		return false;
	}
	else if(!passUpper)
	{
		errors.innerHTML += "Password should have at least one Uppercase";
		elem.focus();
		return false;
	}
	else if(!passDigit)
	{
		errors.innerHTML += "Password should have at least one digit";
		elem.focus();
		return false;
	}
	else
	{
		return true;
	}
	
	
}

function clearerror(){
	 document.querySelector(".errorm").innerHTML = "";
}

/* JS B */
function validatefName(){
    var errors = document.querySelector("#ferr");
	var allAlpha = true;
	var passAll = true;
    var elem = document.signup.Fisrtname;
	var inputValue = elem.value.trim();

	document.querySelector("#ferr").innerHTML="";
	
	if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z" )  
	{ 
		allAlpha = false; 
	}
	
	var inputC = inputValue.toUpperCase();
	
	for(var i=0; i < inputValue.length; i++)
	{
		if(inputC.charAt(i) < "A" || inputC.charAt(i) > "Z")
		{
			passAll = false;
		}
	}
	
	if(!allAlpha)
	{
		errors.innerHTML += "First character must be uppercase";
		elem.focus();
		return false;
	} 
	else if(!passAll)
	{
		errors.innerHTML += "All character must be letters";
		elem.focus();
		return false;
	}
	else
	{
		return true; 

	}
}
/* JS C */
function validatelName(){
    var errors = document.querySelector("#lerr");
	var allAlpha = true;
	var passAll = true;
    var elem = document.signup.Lastname;
	var inputValue = elem.value.trim();

	document.querySelector("#lerr").innerHTML="";
	
	if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z" )  
	{ 
		allAlpha = false; 
	}
	
	var inputC = inputValue.toUpperCase();
	
	for(var i=0; i < inputValue.length; i++)
	{
		if(inputC.charAt(i) < "A" || inputC.charAt(i) > "Z")
		{
			passAll = false;
		}
	}
	
	if(!allAlpha)
	{
		errors.innerHTML += "First character must be uppercase";
		elem.focus();
		return false;
	} 
	else if(!passAll)
	{
		errors.innerHTML += "All character must be letters";
		elem.focus();
		return false;
	}
	else
	{
		return true; 

	}

}

function validateEdu(){
	
	var errors = document.querySelector("#Eduerr");
	var passAll = true;
    var elem = document.signup.EducationLevel;
	var inputValue = elem.value.trim();

	document.querySelector("#Eduerr").innerHTML="";
	
	if(inputValue == 0)
	{
		passAll = false;
	}
	
	if(!passAll)
	{
		errors.innerHTML += "Education level should be selected";
		elem.focus();
		return false;
	}
	else
	{
		return true; 

	}
}



