var left = document.getElementById("leftarrow");
var right = document.getElementById("rightarrow");
var close = document.getElementById("x-mark");
var images = document.getElementsByClassName("images");
var imageId = 0;

//bigimage was completed with a TA who directed me towards https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp for assistance.
//Molly okayed everything that I completed here. 
function bigimage(imgs) {
    imageId = imgs.getAttribute("id");
    console.log(imageId);
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

function moveleft() {
    var src = document.getElementById("expandedImg").getAttribute("src");
    console.log(src);
    if (imageId != 1) {
        imageId--;
        var img = document.getElementById(imageId);
        bigimage(img);
    }
}

function moveright() {
    var src = document.getElementById("expandedImg").getAttribute("src");
    console.log(src);
    if (imageId != 12) {
        imageId++;
        var img = document.getElementById(imageId);
        bigimage(img);
    }
}




