var video = document.getElementById('video');
var log = document.getElementById('log');
var intervalRewind;
//var startSystemTime;
//var startVideoTime;

$(video).on('play',function(){
    video.playbackRate = 1.0;
    clearInterval(intervalRewind);
});
$(video).on('ended',function(){
    // this only happens when t=duration (not t==0)
    video.playbackRate = 1.0;
    video.currentTime = 0.0;
    clearInterval(intervalRewind);
});
$(video).on('pause',function(){
    video.playbackRate = 1.0;
    clearInterval(intervalRewind);
});

function rewind(rewindSpeed) {    
   clearInterval(intervalRewind);
   var startSystemTime = new Date().getTime();
   var startVideoTime = video.currentTime;
   
   intervalRewind = setInterval(function(){
       video.playbackRate = 1.0;
       if(video.currentTime == 1.0){
           video.currentTime = 1.0;
           video.pause();
       } else {
           var elapsed = new Date().getTime()-startSystemTime;
           video.currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
       }
   }, 30);
}

    
    