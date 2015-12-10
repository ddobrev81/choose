var animationSpeed = 500;
	videos = new Array();
	// url = 'http://maersk-norway.propeoplelabs.com/';
	url = 'http://chosenby.maerskoil.com/';
	lang = "en";
	otherLang = "http://valgtav.maerskoil.com/";
	first = true;


$(function() {

	window.addEventListener('popstate', function(event) {
		var id = window.location.href.substring(url.length);
		if(first == false) {
			if(id != "") {
				$('#flag-icon a').attr('href', otherLang + id);
				addOverlay($('#article' + id));
			} else {
				removeOverlay($('.active'));
			}			
		} else {
			first = false;
		}
		
	});

	var offset = 76;

	if($(window).width() < 640) {
		offset = 53;
	}

	FastClick.attach(document.body);

	$('video').each(function(index) {
		video = new Array();
		video['video'] = document.getElementById($(this).attr('id'));
		video['height'] = $(this).attr('data-height');
		video['width'] = $(this).attr('data-width');
		videos[index] = video;
	});

	// FOR VIDEO PLAYER WITH ICON
	// NOT WOKING IN ANDROID STANDARD BROWSER

	if(!($('body').hasClass('android'))) {

		// IF NOT ANDROID

		$('.icon.play').click(function() {
			var video = document.getElementById(($(this).attr('data-id')));
			video.play();
			$(this).hide();
			video.controls = true;
		});

		$('video').on('ended', function(event) {
			var video = document.getElementById(($(this).attr('id')));
			video.controls = false;
			$($(this).attr('data-play')).show();
		});

		$('video').on('pause', function(event) {
			var video = document.getElementById(($(this).attr('id')));
			video.controls = false;
			$($(this).attr('data-play')).show();
		});

	}

	

	setVideoHeight();	

	$('#burger-icon').click(function() {
		toggleMenu();
	});

	$('.open-article').click(function() {
		addOverlay($($(this).attr('data-id')));
	});

	$('#open-shortcuts').click(function() {
		addOverlay($('#shortcuts'));
	});

	$('#open-contact').click(function() {
		addOverlay($('#contact'));
	});

	$('.close').click(function() {
		if ($(this).attr('data-id') == 'all') {
			removeAllOverlays();
		} else {
			removeOverlay($($(this).attr('data-id')));
		}
	});

	$('#article-overlay').click(function() {
		$('#menu').removeClass('active');
		$('#shortcuts').removeClass('active');
		$('#contact').removeClass('active');
		$(this).fadeOut(animationSpeed);
		setTimeout(function() {
			moveOut($('#menu'));
			moveOut($('#shortcuts'));
			moveOut($('#contact'));
		}, animationSpeed);
	});

	$('#overlay').click(function() {
		removeAllOverlays();
	});

	$('.twitter').click(function() {
		ShareOnTwitter();
	});

	$('.facebook').click(function() {
		ShareOnFacebook();
	});

	$('.scroll').bind('click',function(e){
        var elem = $(this);     
        	topOffset = 0;

        $('#article-list article').each(function(index) {
        	if($(this).attr('data-order') < elem.attr('data-order')) {

        		topOffset += $(this).height();
        	}     		
        });

        $('#wrapper').stop().animate({
            scrollTop: topOffset
        }, 500,'easeInOutExpo');

		e.preventDefault();
    });

    $(window).resize(function() {
        if($(window).width() < 640) {
			offset = 53;
		} else {
			offset = 76;
		}
		setVideoHeight();
    });

});



function pauseVideos() {
	for (var i = 0; i < videos.length; i++) {
		var video = videos[i]['video'];
		if(video.paused == false) {
			video.pause();
		}		
	};
}

function setVideoHeight() {
	for (var i = 0; i < videos.length; i++) {
		var ratio = videos[i]['height'] / videos[i]['width'];
			width = $('.graphic').width();
		videos[i]['video'].height = width * ratio;		
	};
}

function toggleMenu() {
	var menu = $('#menu');
	if(menu.hasClass('active')) {
		removeOverlay(menu);
	} else {
		addOverlay(menu);
	}
}

function addOverlay(elem) {

	pauseVideos();

	var menu = $('#menu');
		shortcuts = $('#shortcuts');
		contact = $('#contact');
		articles = $('.sidebar.article');
		body = $('body');
		menuActive = menu.hasClass('active');
		shortcutsActive = shortcuts.hasClass('active');
		var articleActive = false;
		if($('.sidebar.article.active').length > 0) {
			articleActive = $('.sidebar.article.active');
		} 
		

	if(elem.hasClass('article')) {

		if (window.location.href.substring(url.length) != elem.attr('id').substring(7)) {
			window.history.pushState(null, elem.find('.title').html(), url + elem.attr('id').substring(7));
			$('#flag-icon a').attr('href', otherLang + elem.attr('id').substring(7));
		}		

		if(articleActive) {
			if(elem.attr('id') != articleActive.attr('id')) {
				moveDown(articleActive);
				toTop(elem);
				setTimeout(function() {
					moveOut(menu);
					moveOut(shortcuts);					
					articleActive.removeClass('top middle active');				
				}, animationSpeed);
			} else {
				menu.removeClass('active');
				shortcuts.removeClass('active');
				contact.removeClass('active');
				$('#article-overlay').fadeOut(animationSpeed);
				setTimeout(function() {
					moveOut(menu);
					moveOut(shortcuts);		
					moveOut(contact);						
				}, animationSpeed);
			}
		} else {
			toTop(elem);
			setTimeout(function() {
				moveOut(menu);
				moveOut(shortcuts);	
				moveOut(contact);									
			}, animationSpeed);
		}
		

	} else if(elem.attr('id') == 'menu') {

		if(articleActive) {

			$('#article-overlay').fadeIn(animationSpeed);

			if(shortcutsActive) {				
				articleActive.removeClass('middle');
				shortcuts.addClass('middle');
				shortcuts.removeClass('top');
				setTimeout(function() {
					shortcuts.removeClass('top middle active');
				}, animationSpeed);
			} else {
				articleActive.addClass('middle');
				articleActive.removeClass('top');
			}

		} else if(shortcutsActive) {

			shortcuts.addClass('middle');
			shortcuts.removeClass('top');
			setTimeout(function() {
				shortcuts.removeClass('top middle active');
			}, animationSpeed);

		}
		
		elem.addClass('active top');

	} else if(elem.attr('id') == 'shortcuts') {

		if(menuActive) {
			if(articleActive) {
				if(menu.hasClass('top')) {
					moveDown(menu);
				}				
				moveDown(articleActive);
			} else {
				moveDown(menu);
			}			
		} 
		toTop(elem);
		
	} else if(elem.attr('id') == 'contact') {

		if(articleActive) {
			if(menu.hasClass('top')) {
				moveDown(menu);
			}				
			moveDown(articleActive);
		} else {
			moveDown(menu);
		}	
		toTop(elem);


	}

	$('#overlay').fadeIn(animationSpeed);

}

function removeAllOverlays() {

	var menu = $('#menu');
		shortcuts = $('#shortcuts');
		contact = $('#contact');
		articles = $('.sidebar.article');
		body = $('body');
		var articleActive = false;
		if($('.sidebar.article.active').length > 0) {
			articleActive = $('.sidebar.article.active');
		} 

	window.history.pushState(null, null, url);
	$('#flag-icon a').attr('href', otherLang);

	$('#overlay').fadeOut(animationSpeed);
	$('#article-overlay').fadeOut(animationSpeed);
	menu.removeClass('active');
	contact.removeClass('active');
	shortcuts.removeClass('active');
	if(articleActive) {
		setTimeout(function() {
			moveOut(menu);
		moveOut(contact);
		moveOut(shortcuts);
			moveOut(articleActive);
		}, animationSpeed);
	}
}

function removeOverlay(elem) {

	pauseVideos();

	var menu = $('#menu');
		shortcuts = $('#shortcuts');
		contact = $('#contact');
		articles = $('.sidebar.article');
		body = $('body');
		menuActive = menu.hasClass('active');
		shortcutsActive = shortcuts.hasClass('active');
		var articleActive = false;
		if($('.sidebar.article.active').length > 0) {
			articleActive = $('.sidebar.article.active');
		} 
		

	if(elem.hasClass('article')) {

		elem.removeClass('active');
		$('#overlay').fadeOut(animationSpeed);
		$('#article-overlay').fadeOut(animationSpeed);
		setTimeout(function() {
			moveOut(elem);
		}, animationSpeed);	

		window.history.pushState(null, null, url);	
		$('#flag-icon a').attr('href', otherLang);	

	} else if(elem.attr('id') == 'menu') {

		menu.removeClass('active');
		shortcuts.removeClass('active');
		contact.removeClass('active');
		$('#overlay').fadeOut(animationSpeed);
		$('#article-overlay').fadeOut(animationSpeed);
		setTimeout(function() {
			moveOut(menu);
			moveOut(shortcuts);	
			moveOut(contact);								
		}, animationSpeed);

	} else if(elem.attr('id') == 'shortcuts') {

		shortcuts.removeClass('active');
		moveUp(menu);
		moveUp(articleActive);
		setTimeout(function() {
			moveOut(shortcuts);
		}, animationSpeed);
		
		
	} else if(elem.attr('id') == 'contact') {

		contact.removeClass('active');
		moveUp(menu);
		moveUp(articleActive);
		setTimeout(function() {
			moveOut(contact);
		}, animationSpeed);
		
	} 	

}


function moveDown(elem) {
	if(elem.hasClass('top')) {
		elem.addClass('middle');
		elem.removeClass('top');
	} else if (elem.hasClass('middle')) {
		elem.removeClass('middle');
	}
}
function moveUp(elem) {
	if(elem.hasClass('middle')) {
		elem.removeClass('middle');
		elem.addClass('top');		
	} else {
		elem.addClass('middle');
	}
}
function toTop(elem) {
	elem.addClass('active top');
}
function moveOut(elem) {
	elem.removeClass('active top middle');
}

function ShareOnTwitter() {
    var title = 'Maersk Oil Norway Choices';
    var url = location.href;
    var maxLength = 140 - (url.length + 1);
    if (title.length > maxLength) {
        title = title.substr(0, (maxLength - 3)) + '...';
    }
    var TwitterLink = 'http://twitter.com/home?status=' + encodeURIComponent(title + ' ' + url);
    window.open(TwitterLink);
}
function ShareOnFacebook() {
	window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href), 
      'facebook-share-dialog', 
      'width=626,height=436'); 
    return false;
}