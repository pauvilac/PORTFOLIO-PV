var vid = document.getElementById('video');
var intervalRewind;
var isLooping = false;

$('#btn1').on('click', function(){
	vid.play();
});
$('#btn2').on('click', function(){
	vid.pause();
});
$('#btn3').on('click', function(){
	vid.currentTime = 4.0;
	timedPlay(2);
});
$('#btn4').on('click', function(){
	vid.currentTime = 2.0;
	timedReverse(2);
});
$('#btn5').on('click', function(){
	vid.currentTime = 6.0;
	timedPlay(4);
});
$('#btn6').on('click', function(){
	vid.currentTime = 1.0;
	rewind(1.0);
});

function timedPlay(time){
	vid.play();
	setTimeout(pause, time*1000);
};
function timedReverse(time){
	rewind(1.0);
	setTimeout(pause, time*1000);
};

function pause(){
	vid.pause();
};
