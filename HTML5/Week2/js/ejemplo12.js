function iniciar(){
    var zoom = 1,
        rotate = 0;
    
    var stage = document.getElementById('stage'),
        v = document.getElementsByTagName('video')[0];
        controls = document.getElementById('controls');

    var properties = ['transform', 'WebkitTransform','MozTransform','msTransform','OTransfrom'],
        prop = properties[0];

    var i,j,t;

    //find out wich CSS transform the browser supports
    for(i=0,j=properties.length;i<j;i++){
        if(typeof stage.style[properties[i]] !== 'undefined'){
            prop = properties[i];
            break;
        }
    }

    v.style.left = 0;
    v.style.top = 0;

    if(controls){
        controls.innerHTML = '<button class="play">play</button>'+
                            '<div id="change">'+
                            '<button class="zoomin">+</button>'+
                            '<button class="zoomout">-</button>'+
                            '<button class="left">left</button>'+
                            '<button class="right">right</button>'+
                            '<button class="up">up</button>'+
                            '<button class="down">down</button>'+
                            '<button class="rotateleft">&#x21bb;</button>' +
                            '<button class="rotateright">&#x21ba;</button>' +
                            '<button class="reset">reset</button>' +
                          '</div>';

    }
controls.addEventListener('click',function(e){
    t= e.target;
    if(t.nodeName.toLowerCase()==='button'){
        switch(t.className){
            case 'play':
                if(v.paused){
                    v.play();
                    t.innerHTML = 'pause';
                } else {
                    v.pause();
                    t.innerHTML = 'play';
                }
            break;
            case 'zoomin':
                zoom = zoom + 0.1;
                v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
            break;
            case 'zoomout':
                zoom = zoom -0.1;
                v.style[prop]='scale('+zoom+')rotate('+rotate+'deg)';
            break;
            case 'rotateleft':
                rotate = rotate + 5;
                v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
            break;
            case 'rotateright':
                rotate = rotate - 5;
                v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
            break;
            case 'left':
                v.style.left = (parseInt(v.style.left,10) - 5) + 'px';
            break;
            case 'right':
                v.style.left = (parseInt(v.style.left,10)+5)+'px';
            break;
            case 'up':
                v.style.top = (parseInt(v.style.top,10)-5)+'px';
            break;
            case 'down':
                v.style.top = (parseInt(v.style.top,10)+5)+'px'; 
            break;
            case 'reset':
                zoom = 1;
                rotate = 0;
                v.style.top = 0 + 'px';
                v.style.left = 0 + 'px';
                v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
                break;
        }
        e.preventDefault();
    }
});

}

addEventListener('load',iniciar);