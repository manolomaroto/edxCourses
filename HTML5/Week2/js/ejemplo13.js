var output,
    idx = 0,
    filters = [
        'grayscale',
        'sepia',
        'blur',
        'brightness',
        'contrast',
        'hue-rotate',
        'hue-rotate2',
        'hue-rotate3',
        'saturate',
        'invert'
    ];


    output = document.getElementById('output');
    output.addEventListener('click',changeFilter);


function changeFilter(e){
    
    var e1=e.target;
    var effect = filters[idx++ % filters.length];
    e1.classname = effect;

    e.stopPropagation();
    e.preventDefault();
}

console.log('Prueba');