function init(){
    var buttonStartWebcam = document.getElementById('start');
    buttonStartWebcam.addEventListener('click',startWebcam);
    var buttonStopWebcam = document.getElementById('stop');
    buttonStopWebcam.addEventListener('click',stopWebcam);

    navigator.getUserMedia = (
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
    );

    var webcamStream;
}

function startWebcam(){
    if(navigator.getUserMedia){
        navigator.getUserMedia(
            //controls
            {
                video:true,
                audio:false
            },
            //successCallBack
            function(localMediaStream){
                var video = document.querySelector('video');
                video.src = window.URL.createObjectURL(localMediaStream);
                webcamStream = localMediaStream.getTracks()[0];
            },
            //errorCallback
            function(err){
                console.log("The following error ocurred: " + err);
            }
        );
    }else{
        console.log(("getUserMedia not supported"));
    }
}

function stopWebcam(){
    webcamStream.stop();
}

addEventListener('load',init);