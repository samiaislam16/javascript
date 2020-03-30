var userName = document.getElementById('userName');
var Email = document.getElementById('Email');
var Phone_num = document.getElementById('Phone_num');
var Password = document.getElementById('Password');
var Re_Password = document.getElementById('Re_Password');






function form_submit()
 {
 	if(userName.value=='' || Email.value=='' || Phone_num.value==''||Password.value==''||Re_Password.value=='')
 	{
 		if (userName.value=='') 
 	{
 		userName.style.borderColor="blue";
 		document.getElementById('userName_mgs').innerHTML="please fill out this field";

 		
 	}

 	if (Email.value=='') 
 	{
 		Email.style.borderColor="blue";
 		document.getElementById('Email_mgs').innerHTML="please fill out this field";

 		
 	}

 	if (Phone_num.value=='') 
 	{
 		Phone_num.style.borderColor="blue";
 		document.getElementById('Phone_num_mgs').innerHTML="please fill out this field";
 		

 		
    }



 	if (Password.value=='') 
 	{
 		 Password.style.borderColor="blue";
 		document.getElementById('Password_mgs').innerHTML="please fill out this field";
 		

 		}

 	if (Re_Password.value=='') 
 	{
 		Re_Password.style.borderColor="blue";
 		document.getElementById('Re_Password_mgs').innerHTML="please fill out this field";
	    
    
 	}
 
	return false;

 	}
 
	}
	/*  */
