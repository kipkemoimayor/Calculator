function add(num1,num2){
return num1+num2;


}
function sab(num1,num2){
return num1-num2;
}
var n=parseFloat(prompt("enter a number"));
var m=parseFloat(prompt("enter second value"));
var re=add(n,m);
document.write("Addition results is "+re +"\n");
var ss=sab(n,m)
document.write("\n substraction re is "+ss)
