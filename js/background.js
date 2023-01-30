window.onresize = function(src) {
    backgroundResize(imgsrc)
}
var backgroundResize = function(src) {
    let cw = document.body.clientWidth
    let ch = document.body.clientHeight
    var img = new Image()
    img.src = src
    var cR = cw / ch;
    var dR = img.width / img.height;
    if(cR <= dR) {
        $('div.background-img').css({ 'background-size': 'auto 100%', 'background-image': 'url()' + src + ')'});
    } else {
        $('div.background-img').css({ 'background-size': '100% auto', 'background-image': 'url()' + src + ')'});
    }
}
backgroundResize(imgsrc)