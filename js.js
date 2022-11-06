var left = document.getElementById("leftarrow");
var right = document.getElementById("rightarrow");
var close = document.getElementById("x-mark");
var images = document.getElementsByClassName("images");
var imageId = 0;

//bigimage was completed with a TA who directed me towards https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp for assistance.
//Molly okayed everything that I completed here. 
function bigimage(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

function moveleft() {
    for (i = 0; i < images.length; ++i){
        if (imageId == 0){
            imageId = 11;
            bigimage(imageId);
        } else {
            imageId -= 1;
            bigimage(imageId);
        }
    }
}

function moveright() {
    for (i = 0; i < images.length; ++i){
        if (imageId == 11){
            imageId = 0;
            bigimage(imageId);
        } else {
            imageId += 1;
            bigimage(imageId);
        }
    }
}




