var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("mobile-dashboard");


menuBtn.onclick = function(){
    if(sideNav.style.left == "-250px"){
        sideNav.style.left ="0";
    }
    else{
        sideNav.style.left ="-250px";
    }
}

// var lesBtn = document.getElementById("lesToggleBtn");
// var lesSide = document.getElementById("lesSideNav");

// lesBtn.onclick = function(){
//     console.log('start');
//     if(lesSide.style.left == "-250px"){
//         lesSide.style.left ="0";
//     }
//     else{
//         lesSide.style.left ="-250px";
//     }
// }