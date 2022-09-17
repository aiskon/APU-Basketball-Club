var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var boxContainer = document.getElementById("box-container")
var backBtn = document.getElementById("backBtn")

box1.onclick = function(){
  box1.style.display="block";
  box2.style.display="none";
  box3.style.display="none";
  box4.style.display="none";
  box5.style.display="none";
  box6.style.display="none";
  box1.style.width="auto";
  box1.style.height="auto";
  box1.style.marginLeft="50px";
  backBtn.style.display="block";  
};

backBtn.onclick = function(){
location.reload();
};

box2.onclick = function(){
  box1.style.display="none";
  box2.style.display="block";
  box3.style.display="none";
  box4.style.display="none";
  box5.style.display="none";
  box6.style.display="none";
  box2.style.width="auto";
  box2.style.height="auto";
  box2.style.marginLeft="50px";
  backBtn.style.display="block";  
};

box3.onclick = function(){
  box1.style.display="none";
  box2.style.display="none";
  box3.style.display="block";
  box4.style.display="none";
  box5.style.display="none";
  box6.style.display="none";
  box3.style.width="auto";
  box3.style.height="auto";
  box3.style.marginLeft="50px";
  backBtn.style.display="block";  
};

box4.onclick = function(){
  box1.style.display="none";
  box2.style.display="none";
  box3.style.display="none";
  box4.style.display="block";
  box5.style.display="none";
  box6.style.display="none";
  box4.style.width="auto";
  box4.style.height="auto";
  box4.style.marginLeft="50px";
  backBtn.style.display="block";  
};

box5.onclick = function(){
  box1.style.display="none";
  box2.style.display="none";
  box3.style.display="none";
  box4.style.display="none";
  box5.style.display="block";
  box6.style.display="none";
  box5.style.width="auto";
  box5.style.height="auto";
  box5.style.marginLeft="50px";
  backBtn.style.display="block";  
};

box6.onclick = function(){
  box1.style.display="none";
  box2.style.display="none";
  box3.style.display="none";
  box4.style.display="none";
  box5.style.display="none";
  box6.style.display="block";
  box6.style.width="auto";
  box6.style.height="auto";
  box6.style.marginLeft="50px";
  backBtn.style.display="block";  
};
