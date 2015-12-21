var slide = 0;
var width = 20;
var interval = setTimeout(function(){autoslider();},2000);
$(function(){
    width = 100/$("#slider").children().length;
});

function slider(n) {
    switch(n){
        case 1: 
            $('#slider').css({'transition': 'all 0s ease-out', 'transform': 'translateX('+(width*-4)+'%)'}), slide=-3;
        break;
        case -5: 
            $('#slider').css({'transition': 'all 0s ease-out', 'transform': 'translateX('+(width*0)+'%)'}), slide=-1;
        break;
        default:
            slide=n;
        break;
    }
    setTimeout(function(){sliderloop();},100);
    clearTimeout(interval);
    interval = setTimeout(function(){autoslider();},12000);
}


function autoslider(){
    slide>-4?(slide-=1, $('#slider').css({'transition': 'all 0.9s ease-out'})):(slide=0, $('#slider').css({'transition': 'all 0s ease-out'}));
    $('#slider').css({'transform': 'translateX('+(width*slide)+'%)'});
    interval = setTimeout(function(){autoslider();},6000);
}

function sliderloop(){
     $('#slider').css({'transition': 'all 0.9s ease-out', 'transform': 'translateX('+(width*slide)+'%)'});
}
