var isTrust = false;
var _this = this;
var cookie = undefined;

$('.button').on('click', function(){
	if($(this).hasClass('yes')){
		if(isTrust){
			$('body').fadeOut();	
			
		}
		else{
			setCookie('isTrusted','false',1);
			$('#byelink').click();
		}
	}
	else if($(this).hasClass('no')){
		resetButtons();
	}
	else if($(this).hasClass('trust')){
		isTrust = true;
		setCookie('isTrusted','true',1);
		$('#trustlink').trigger('click');	
		$('#trustlink').click();
	}
	else if($(this).hasClass('bye')){
		isTrust = false;
		_this.activateYesNo();
	}
	else{
		alert('SOMETHING IS WRONG WITH YOUR CHOICE')
	}
});

this.activateYesNo = function(){
	$('.trust').addClass('yes');
	$('.trust').removeClass('trust');
	$('.yes').html('<a id="byelink" class="" href="./bye.html">YES</a>');

	$('.bye').addClass('no');
	$('.bye').removeClass('bye');
	$('.no').html('NO');

	_this.showAreYouSure(true);
}

this.resetButtons = function(){
	$('#trust').removeClass('yes');
	$('#bye').removeClass('no');
	$('#trust').addClass('trust');
	$('#bye').addClass('bye');

	$('#trust').html('<a id="trustlink" class="" href="./trust.html"> TRUST </a>');
	$('#bye').html('BYE');


	_this.showAreYouSure(false);
	$('.sure-message').css('opacity', 0);
}

this.showAreYouSure = function(show){
	if(show) $('.sure-message').css('opacity', 1);
	else $('.sure-message').css('opacity', 0);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$( document ).ready(function() {
	if(getCookie('isTrusted') == "true") {
		cookie = "trusted";
		$('#trustlink').trigger('click');	
		$('#trustlink').click();
	}
	else if(getCookie('isTrusted') == "false"){
		cookie = "byed";
		$('#byelink').click();
	}
	else alert("I'm undefined");
});