function init(){
    var visor = document.getElementById('visor');
    var video = document.createElement('video');
    video.src = "https://www.paypalobjects.com/webstatic/en_GB/mktg/wright/videos/uk-brand-campaign.mp4";
    video.controls = true;
    visor.appendChild(video);
}

addEventListener('load',init);