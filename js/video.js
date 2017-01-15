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
$("#speed0").click(function() {
    clearInterval(intervalRewind);
    video.playbackRate = 1.0;
    video.pause();
});
$("#speedpoint5").click(function() {
    clearInterval(intervalRewind);
    if (video.paused) video.play();
    setTimeout(function() {
      // Not sure why, but setting the playback to
      // less than 1.0 only works when out of band
      // or the video is already playing.
      video.playbackRate = 0.5;
      console.log('delayed');
    }, 0);
});
$("#speed1").click(function() {
    clearInterval(intervalRewind);
    video.playbackRate = 1.0;
    if (video.paused) video.play();
});
$("#speed2").click(function() {
    clearInterval(intervalRewind);
    video.playbackRate = 2.0;
    if (video.paused) video.play();
});
$("#speed3").click(function() {
    clearInterval(intervalRewind);
    video.playbackRate = 3.0;
    if (video.paused) video.play();
});
$("#speed-point5").click(function() {
   rewind(0.5);
});
$("#speed-1").click(function() {
   rewind(1.0);
});
$("#speed-2").click(function() {
   rewind(2.0);
});
$("#speed-3").click(function() {
   rewind(3.0);
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

    
    