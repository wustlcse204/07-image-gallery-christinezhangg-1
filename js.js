var left = document.getElementById("leftarrow");
var right = document.getElementById("rightarrow");
var close = document.getElementById("x-mark");
var images = document.getElementsByClassName("images");
var imageId = 0;

//First function for this assignment is to close the image that is currently open by hitting the x.
close.addEventListener("click", closeimage);
function closeimage() {
    for (i = 0; i < images.length; ++i){
        images[i].style.display = 'none';
    }
}

//Second function for this assignment is to increase the size of the image that is clicked on. 
for (i = 0; i < images.length; ++i){
    images[i].addEventListener("click", bigimage);
}
function bigimage() {
    this.style.width = '200%';
    this.style.height = 'auto';
}

//Third function will focus on the right arrow moving from picture to picture.
//Simply just the javascript, will not work unlike the top two functions.  This is because I have not yet set up the final image structure.  
right.addEventListener("click", moveright);
function moveright() {
    if (imageId == 11){
        imageId = 0;
    } else {
        imageId += 1;
    }
}



