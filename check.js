function verify(){
var name= document.getElementById("name");
var phonenumber=document.getElementById("number");
var email=document.getElementById("email");
if(name!=Boolean){
    alert("name should have only letter");
}
else if(phonenumber!=Number){
    alert("enter only numbers");
} 
else{
    document.write("document submitted")
}
}