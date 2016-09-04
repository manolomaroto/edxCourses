var video;

function init(){
    //function called when the page is loaded
    video = document.querySelector('#myVideo');

    //for initial value
    video.width = window.innerWidth;
    video.height = window.innerHeight;

    //for dealing with window resize
    window.onresize = function(){
        video.width = window.innerWidth;
        video.height = window.innerHeight;
    }
}

addEventListener('load',init);