let imgtag = document.createElement("img");

let slidediv = document.getElementById("slideshow");
slidediv.append(imgtag);
let currentIndex = 0;


var movieImages = [
    "https://img5.hkrtcdn.com/22813/bnr_2281254_o.jpg",
    "https://img1.hkrtcdn.com/22085/bnr_2208460_o.jpg",
    "https://img9.hkrtcdn.com/22746/bnr_2274518_o.jpg",
    "https://img1.hkrtcdn.com/22813/bnr_2281220_o.jpg",
    "https://img1.hkrtcdn.com/22806/bnr_2280500_o.jpg",
    "https://img3.hkrtcdn.com/22812/bnr_2281192_o.jpg"
];

slideshowFun(movieImages);

function slideshowFun(images) {
    imgtag.setAttribute("src", images[currentIndex]);
    if (currentIndex == images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
}

window.addEventListener("load", function () {
    setInterval(slideshowFun, 2000, movieImages);

    // add event-listeners;
});
/////////////////////////////////////////////////
let imgtags = document.createElement("img");

let slidedivs = document.getElementById("slideshow1");
slidedivs.append(imgtags);
let currentIndexs = 0;


var movieImagess = [
    "https://img5.hkrtcdn.com/22743/bnr_2274254_o.jpg",
    "https://img9.hkrtcdn.com/22743/bnr_2274258_o.jpg",
    "https://img1.hkrtcdn.com/22559/bnr_2255890_o.jpg"
];

slideshowFuns(movieImagess);

function slideshowFuns(images) {
    imgtags.setAttribute("src", images[currentIndexs]);
    if (currentIndexs == images.length - 1) {
        currentIndexs = 0;
    } else {
        currentIndexs++;
    }
}

window.addEventListener("load", function () {
    setInterval(slideshowFuns, 3000, movieImagess);

    // add event-listeners;
});
/////////////////////////////////////////////////
let imgtagss = document.createElement("img");

let slidedivss = document.getElementById("slideshow2");
slidedivss.append(imgtagss);
let currentIndexsss = 0;


var movieImagesss = [
    "https://img1.hkrtcdn.com/22781/bnr_2278000_o.png",
    "https://img3.hkrtcdn.com/22781/bnr_2278002_o.jpg",
    "https://img5.hkrtcdn.com/22791/bnr_2279024_o.jpg",
    "https://img5.hkrtcdn.com/22801/bnr_2280074_o.jpg"
];

slideshowFunss(movieImagesss);

function slideshowFunss(images) {
    imgtagss.setAttribute("src", images[currentIndexsss]);
    if (currentIndexsss == images.length - 1) {
        currentIndexsss = 0;
    } else {
        currentIndexsss++;
    }
}

window.addEventListener("load", function () {
    setInterval(slideshowFunss, 2000, movieImagesss);

    // add event-listeners;
});
/////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
let bttnn = document.querySelectorAll(".jk")

bttnn.forEach(element => {
    element.addEventListener("click", () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Signup or Login First',
            footer: '<a href="./login1.html">You need to Login Or signup for this.</a>'
        })
    })
});




