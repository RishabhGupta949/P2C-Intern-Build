//Logic Starts from here-


const next = document.getElementById("change_button");
const mimage = document.getElementById("mimage");
const seccircle = document.getElementById("second_circle");
const firstcircle = document.getElementById("first_circle");
const thirdcicle = document.getElementById("third_circle");

function changebg() {
    console.log("click Test");
    if (mimage.src.match("./images/image-1.png")){
        document.body.style.background = "url('./images/back-2.png')";
        mimage.src = "./images/image-2.png";
        seccircle.innerHTML = "&#9679;";
        seccircle.style.color = "#4169E1";
        firstcircle.innerHTML = "&#9675;";
    }
    else if (mimage.src.match("./images/image-2.png")){
        console.log("third output");
        document.body.style.background = "url('./images/back-3.png')";
        mimage.src = "./images/image-3.png";
        thirdcicle.innerHTML = "&#9679;";
        thirdcicle.style.color = "#4169E1";
        firstcircle.innerHTML = "&#9675;";
        seccircle.innerHTML = "&#9675;";
    }
}

seccircle.addEventListener('click',()=>{
    document.body.style.background = "url('./images/back-2.png')";
    mimage.src = "./images/image-2.png";
    seccircle.innerHTML = "&#9679;";
    seccircle.style.color = "#4169E1";
    firstcircle.innerHTML = "&#9675;";
    thirdcicle.innerHTML = "&#9675;";
});

thirdcicle.addEventListener('click',()=>{
    document.body.style.background = "url('./images/back-3.png')";
    mimage.src = "./images/image-3.png";
    thirdcicle.innerHTML = "&#9679;";
    thirdcicle.style.color = "#4169E1";
    firstcircle.innerHTML = "&#9675;";
    seccircle.innerHTML = "&#9675;";
});

firstcircle.addEventListener('click',()=>{
    document.body.style.background = "url('./images/back-1.png')";
    mimage.src = "./images/image-1.png";
    thirdcicle.innerHTML = "&#9675;";
    seccircle.innerHTML = "&#9675;";
    firstcircle.innerHTML = "&#9679;";
});
//