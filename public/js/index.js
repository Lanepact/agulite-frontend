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


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})