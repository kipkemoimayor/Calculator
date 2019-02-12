function add(num1,num2){
return num1+num2;


}
function sab(num1,num2){
return num1-num2;
}
function div(num1,num2){
return num1/num2;
}
function mul(num1,num2){
return num1*num2;
}
var n=parseFloat(prompt("enter a number"));
var m=parseFloat(prompt("enter second value"));
var re=add(n,m);
document.write("<b>Addition results is</b> "+re +"\n");
document.write("<br>")
var ss=sab(n,m)
document.write("substraction re is "+ss+"<br>")
var di=div(n,m)
document.write("\n division results is "+di+"<br>")
var ml=mul(n,m)
document.write("\n <b>multiplication results is</b> "+ml)
