var fullImageBox = document.getElementById("full_ImageBox");
var fullImage = document.getElementById("full_image");

function openFullImg(pic){
    fullImageBox.style.display = "flex";
    fullImage.src = pic;
}

function closeFullImg(){
    fullImageBox.style.display = "none";
}


