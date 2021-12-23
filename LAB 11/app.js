function required()
{
var empty = document.forms["email"]["text1"].value;
if (empty == "")
{
alert("This field must be filled");
return false;
}
else 
{
alert('Email was accepted ');
return true; 
}
}