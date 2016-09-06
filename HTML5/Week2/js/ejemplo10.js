

function playVideo(){
    vid.play();
}

function pauseVideo(){
    vid.pause();
}

function rewindVideo(){
    vid.currentTime=0;
}



function init(){
    var vid = document.querySelector('#vid');
    document.getElementById('play').addEventListener('click',playVideo);
    document.getElementById('pause').addEventListener('click',pauseVideo);
    document.getElementById('rewind').addEventListener('click',rewindVideo);
}

addEventListener('load',init);