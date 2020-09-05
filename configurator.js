var previewImg = document.querySelector("#preview-img");
var shape1 = document.querySelector(".shape-1");
var shape1Clicked = false;
var shape2Clicked = false;
var shape3Clicked = false;
var shape4Clicked = false;
var customInputText = document.querySelector(".text-area");
var presetOptions = document.querySelector("preset-options");

document.querySelector(".shape-1").addEventListener("click", function(){
previewImg.src="New images/Untitled design (2) (1).png";
previewImg.style.marginTop="50px";
previewImg.style.height="400px";
shape1Clicked = true;
document.querySelector(".shape-1").classList.add("active");
document.getElementById("shape-2").classList.remove("active");
document.getElementById("shape-3").classList.remove("active");
document.getElementById("shape-4").classList.remove("active");
});

document.getElementById("shape-2").addEventListener("click", function(){
  previewImg.src="images/265g_3.png";
previewImg.style.marginTop="-150px";
previewImg.style.height="650px";
shape2Clicked = true;
document.querySelector(".shape-1").classList.remove("active");
document.getElementById("shape-2").classList.add("active");
document.getElementById("shape-3").classList.remove("active");
document.getElementById("shape-4").classList.remove("active");

});

document.getElementById("shape-3").addEventListener("click", function(){
  previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/Untitled%20design%20(1)%20(1).png?raw=true";
  previewImg.style.height="400px";
  previewImg.style.marginTop="50px";
  shape3Clicked = true;
  document.querySelector(".shape-1").classList.remove("active");
  document.getElementById("shape-3").classList.add("active");
  document.getElementById("shape-2").classList.remove("active");
  document.getElementById("shape-4").classList.remove("active");
});

document.getElementById("shape-4").addEventListener("click", function(){
  previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/Untitled%20design%20(4).png?raw=true";
  previewImg.style.height="400px";
  previewImg.style.marginTop="50px";
  shape4Clicked=true;
  document.querySelector(".shape-1").classList.remove("active");
  document.getElementById("shape-3").classList.remove("active");
  document.getElementById("shape-2").classList.remove("active");
  document.getElementById("shape-4").classList.add("active");
});


document.querySelector(".sizes-1").addEventListener("click", function(){
  previewImg.style.height = "400px";
  previewImg.style.width = "700px";
  previewImg.style.marginTop = "45px";
  previewImg.style.marginLeft = "90px";
  document.querySelector(".sizes-1").classList.add("active");
  document.querySelector(".sizes-2").classList.remove("active");
  document.querySelector(".sizes-3").classList.remove("active");
})

document.querySelector(".sizes-2").addEventListener("click", function(){
  previewImg.style.height = "500px";
  previewImg.style.width = "800px";
  previewImg.style.marginTop = "15px";
  previewImg.style.marginLeft = "50px";
  document.querySelector(".sizes-1").classList.remove("active");
  document.querySelector(".sizes-2").classList.add("active");
  document.querySelector(".sizes-3").classList.remove("active");
})

document.querySelector(".sizes-3").addEventListener("click", function(){
  previewImg.style.height = "550px";
  previewImg.style.width = "900px";
  previewImg.style.marginTop = "-20px";
  previewImg.style.marginLeft = "0px";
  document.querySelector(".sizes-1").classList.remove("active");
  document.querySelector(".sizes-2").classList.remove("active");
  document.querySelector(".sizes-3").classList.add("active");
})

document.querySelector(".color-1").addEventListener("click", function(){
  if(shape1Clicked===true){
    previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/rectan%201%20black.png?raw=true";

  }
  else {
    shape1Clicked===false;
  }
  if(shape3Clicked===true){
    previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/book%202%20black%20outline.png?raw=true";

  }
  else{shape3Clicked===false;}

if(shape4Clicked===true){
  previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/heart%202.png?raw=true"

}
else{shape4Clicked===false;}
})



document.querySelector(".color-2").addEventListener("click", function(){
  if(shape1Clicked===true){
    previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/rectangle%203.png?raw=true";

  }
  else {
    shape1Clicked===false;
  }
  if(shape3Clicked===true){
    previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/book%201.png?raw=true";

  }
  else{shape3Clicked===false;}

if(shape4Clicked===true){
  previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/heart%201.png?raw=true"

}
else{shape4Clicked===false;}
})



document.querySelector(".color-3").addEventListener("click", function(){
  if(shape1Clicked===true){
    previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/rectan%201%20black.png?raw=true";

  }
  else {
    shape1Clicked===false;
  }
  if(shape3Clicked===true){
    previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/book%202%20black%20outline.png?raw=true";

  }
  else{shape3Clicked===false;}

if(shape4Clicked===true){
  previewImg.src="https://github.com/shailesh-sachdev/solitaire-creations-configurator/blob/master/New%20images/heart%202.png?raw=true"

}
else{shape4Clicked===false;}
})

document.querySelector(".custom-text-btn").addEventListener("click", function(){
  document.querySelector(".custom-input-text").style.display="block";
  document.querySelector(".custom-input-text").innerHTML=customInputText.value;
  document.querySelector(".custom-input-text").style.border="none"
  document.querySelector(".custom-input-text").style.boxShadow="none";
  document.querySelector(".custom-input-text").style.color="#cfb53b"
  document.querySelector(".custom-input-text").style.marginTop="-250px";
  document.querySelector(".custom-input-text").style.textShadow="1px 1px 5px #000000"


})

document.querySelector(".preset-btn").addEventListener("click", function(){
  document.querySelector(".preset-text-btn").style.display="block";
  document.querySelector(".preset-text-btn").style.border="none"
  document.querySelector(".preset-text-btn").style.boxShadow="none";
  document.querySelector(".preset-text-btn").style.color="#cfb53b"
  document.querySelector(".preset-text-btn").style.marginTop="0px";
  document.querySelector(".preset-text-btn").style.textShadow="1px 1px 5px #000000"
  document.querySelector('.preset-text-btn').innerHTML= presetOptions.value;


})
