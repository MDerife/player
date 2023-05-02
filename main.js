function doPlay(){
    var click1 = document.querySelectorAll(".vjs-big-play-button")[0];
    if (typeof(click1) != 'undefined' && click1 != null){
        click1.click();
    }
    var click1_1 = document.querySelectorAll(".vjs-poster")[0];
    if (typeof(click1_1) != 'undefined' && click1_1 != null){
        click1_1.click();
    }
    var click1_2 = document.querySelectorAll("#video_player")[0];
    if (typeof(click1_2) != 'undefined' && click1_2 != null){
        click1_2.click();
    }
    var click2 = document.querySelectorAll(".player-poster")[0];
    if (typeof(click2) != 'undefined' && click2 != null){
        click2.click();
    }
    document.addEventListener("DOMContentLoaded", function() {
        var click3 = document.querySelectorAll(".play-wrapper")[0];
        if (typeof(click3) != 'undefined' && click3 != null){
            click3.click();
        }
    });
}
doPlay();
setInterval(function () {
    doPlay();
}, 500);
setTimeout(function(){
    doPlay();
}, 1000);
setTimeout(function(){
    doPlay();
}, 2000);
setTimeout(function(){
    doPlay();
}, 3000);
setTimeout(function(){
    doPlay();
}, 10000);
