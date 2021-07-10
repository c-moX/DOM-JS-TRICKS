// document.getElementById();---- id.
// document.getElementsByTagName();------ p,a,h,etc.
// document.getElementsByClassName();------ Class.
// document.querySelector(); ------- Tags,Class,id,etc.
//------------------------------------------------------------//


// 01.Slider Image In JavaSr //
//--------------------------------//
var photos = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
var imageTag = document.querySelector("img");

var count = 0;

// For Button Next //
function next() {
    count++;

    if (count >= photos.length) {
        count = 0;
        imageTag.src = photos[count];
    } else {
        imageTag.src = photos[count];
    }

}

// For Button Previous //
function prev() {
    count--;

    if (count < 0) {
        count = photos.length - 1;
        imageTag.src = photos[count];
    } else {
        imageTag.src = photos[count];
    }
}


// 02.Add Style In Javascript //
//--------------------------------//
var paraTag = document.querySelector("#paraId");

//For Add Button //
function addStyle() {
    paraTag.classList.add("para-style");

}
//For Remove Button //
function removeStyle() {
    paraTag.classList.remove("para-style");

}



// 03.Javascript Add Event Style//
//---------------------------------------//
var myVar = document.querySelector(".addEvent");
//-----01
myVar.addEventListener("mouseover", function () {
    myVar.classList.add("my-style");
});
//----------02
myVar.addEventListener("mouseout", texy);
function texy() {
    myVar.classList.remove("my-style");
}
//-----------------03
myVar.addEventListener("click", function () {
    alert("Hello");
});



// 04.Javascript Add Multiple Event//
//---------------------------------------//
var len = document.querySelectorAll(".myButton").length;

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {

        var text = this.innerHTML;
        document.querySelector(".h2_text").innerHTML = text + " is clicked";
    });
}



// 05.Javascript Add Audio Play//
//---------------------------------------//
for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".audioButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);

    });
}

function audioPlay(text) {
    switch (text) {
        case "a":
            var audio = new Audio("sounds/a.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("sounds/b.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("sounds/c.mp3");
            audio.play();
            break;
    }
}

// 05+06.Javascript Audio Animation //
//---------------------------------------//
function playAnimation(text) {
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");

    setTimeout(function () {
        selectedButton.classList.remove("anim");

    }, 1000);

}


// 07.Javascript Keypress And Counting //
//------------------------------------------//
var count = 0;
document.querySelector("#textArea").addEventListener("keypress", function (event) {
    count++;
    var text = event.key;

    document.querySelector(".para_text").innerHTML = "You have typeing " + count + " charecter";

});


// 08.Javascript Keypress And Counting //
//------------------------------------------//
