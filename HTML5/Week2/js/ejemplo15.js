function init(){
    navigator.getUserMedia = (
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
    );

    if(navigator.getUserMedia){
        navigator.getUserMedia(
            {
                video:true,
                audio:false
            },
            function(localMediaStream){
                var video = document.querySelector('video');
                video.src = window.URL.createObjectURL(localMediaStream);
            },
            function(err){
                console.log("The following error ocurred: " + err);
            }
        );
    }else{
        console.log("getUserMedia not supported");
    }
}

addEventListener('load',init);