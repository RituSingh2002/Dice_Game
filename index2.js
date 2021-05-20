var random=Math.random();
var num=random*6;
num=Math.floor(num)+1;
var nam1_images="images/"+"dice"+num+".png";
 var im=document.querySelectorAll("img")[0];
 im.setAttribute("src",nam1_images);
 var random1=Math.random();
 var num1=random1*6;
 num1=Math.floor(num1)+1;
 var nam2_images="images/"+"dice"+num1+".png";
  var im1=document.querySelectorAll("img")[1];
  im1.setAttribute("src",nam2_images);
  if(num>num1){
      document.querySelector(".container #win").innerHTML="🚩Player1 win🤩"
  }
  else if(num==num1){
    document.queryCommandValue("h1").innerHTML="Draw 😐"
  }
  else{
    document.querySelector("h1").innerHTML="🚩Player2 win 😃"
  }
 
 