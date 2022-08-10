function validateForm(){
    let x = document.forms["messageForm"]["Phone"].value;
    if (!x){
alert("Phone evaluated to false");
return false;
    }
}