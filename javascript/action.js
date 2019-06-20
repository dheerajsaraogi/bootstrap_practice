function openNav(jobbNo) {
    var element = document.getElementsByClassName("job-content");

    for (var i = 0; i < element.length; i++) {
        element[i].style.display = "none";
    }
    document.querySelector("#register-form").style.display = "none";

    var element = document.getElementsByClassName("candid-content");

    for (var i = 0; i < element.length; i++) {
        element[i].style.display = "none";
    }
    document.getElementById(jobbNo).style.display = "flex";


};

function openCandid(candidNo) {
    var element = document.getElementsByClassName("candid-content");

    for (var i = 0; i < element.length; i++) {
        element[i].style.display = "none";
    }
    document.querySelector("#register-form").style.display = "none";
    document.getElementById(candidNo).style.display = "block";
};


document.querySelector(".register").addEventListener("mouseover", function() {
    document.querySelector("#register-form").style.display = "block";
});