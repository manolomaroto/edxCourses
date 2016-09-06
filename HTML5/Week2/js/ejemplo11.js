var myVideo;
var mySource;
var currentVideo = 0;
var sources = ["http://html5doctor.com/demos/video-canvas-magic/video.mp4",
 "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"];

 function loadNextVideo(){
     mySource.src = sources[currentVideo % sources.length];
     myVideo.load();
     currentVideo++;
 }

 function loadAndPlayNextVideo(){
     console.log('playing' + sources[currentVideo % sources.length]);
     loadNextVideo();
     myVideo.play();
 }

 function init(){
     myVideo = document.querySelector('#myVideo');
     mySource = document.querySelector('#fuente');
     myVideo.addEventListener('ended', loadAndPlayNextVideo,false);
     loadNextVideo();
 }

 addEventListener('load',init);