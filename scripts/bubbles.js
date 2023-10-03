var arr = []

function oncheckclick(){
    var res = true;
    for(var i = 1; i< arr.length; ++i){
        if(arr[i] > arr[i-1]) res = false;
    }
    if(res){
        document.getElementById("uncorrect").style.display = "none";
        document.getElementById("correct").style.display = "block";
    }
    else{
        document.getElementById("correct").style.display = "none";
        document.getElementById("uncorrect").style.display = "block";
    }
    return false;
};

document.addEventListener ( 'DOMContentLoaded', function () {
    function onclick(e){
    
    var g = e.currentTarget;
    var text = g.children[1];
    arr.push(parseInt(text.textContent));
    var style = window.getComputedStyle(g);
    var matrix = new WebKitCSSMatrix(style.transform);
    var y = matrix.m42;
    var x = matrix.m41;
    var r = parseFloat(e.target.getAttribute('r'));
    var intervalID = window.setInterval(move, 100);
    function move(){
        if(y + r > 0){
                g.setAttribute('transform', `translate(${x}, ${y-20})`);
                y -= 20;
                setTimeout(1000);
        }
    }
    return false;
    }
    var es = document.getElementsByClassName("bubble");
    for(var i = 0; i < es.length; ++i){
        es[i].addEventListener('click', onclick, false);
    }
});