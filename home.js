function validate()
{
if(document.form.name.value=='')
{
alert("Please enter your name");
document.form.name.focus();
return false;
}
else
if(document.form.alias.value=='')
{
alert("Please Enter Alias.");
document.form.alias.focus();
return false;
}
else
if(document.form.password.value=='')
{
alert("Please Enter Password.");
document.form.password.focus();
return false;
}
else
if(document.form.password.value.length<6)
{
alert("Password Must Be Greater than 6 characters.");
document.form.password.focus();
return false;
}
else
if(document.form.confm.value=='')
{
alert("Password don't match, please try again.");
document.form.confm.focus();
return false;
}
else
if(document.form.password.value!=document.form.confm.value)
{
alert("Please Enter correct Re type Password");
document.form.confm.focus();
return false;
}
else
if(document.form.email.value=='')
{
alert("Please Enter E-Mail.");
document.form.email.focus();
return false;
}
else
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

if(!document.form.email.value.match(emailExp))
     {
alert('Invalid Email');
document.form.email.focus();
return false;
     }

return true;
}