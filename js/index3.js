$(document).ready( function() {
		document.getElementById('headerText').innerHTML = '<h1>Live</h1>';
		
		var line = 0;
		var end = false;
		var once = true;
		
		$('#story').click ( function() {
				if(!end) {
					if(once) {
						inFadeFunc();
						once = false;
					} else {
						outFadeFunc();
					}
				}
			});

		function outFadeFunc() {
			$('.lineOne').textillate('out');
			$('.lineTwo').textillate('out');
			$('.lineThree').textillate('out');
			$('.lineFour').textillate('out');
			if (line < story.length) {
				setTimeout(inFadeFunc, 600);
			} else {
				setTimeout(endFadeFunc, 600);
			}
		}

		function inFadeFunc() {
			$('.lineOne').find('.texts li:first').text(story[line]);
			$('.lineOne').textillate('in');

			if(line > 0) {
				$('.lineTwo').find('.texts li:first').text(story[line-1]);
				$('.lineTwo').textillate('in');
			}
					
			if(line > 1){
				$('.lineThree').find('.texts li:first').text(story[line-2]);
				$('.lineThree').textillate('in');
			}
						
			if(line > 2) {
				$('.lineFour').find('.texts li:first').text(story[line-3]);
				$('.lineFour').textillate('in');
			}
			
			line = line + 1;
		}
				
		function endFadeFunc() {
			$('.lineOne').find('.texts li:first').text("");
			$('.lineOne').textillate('start');
			$('.lineTwo').find('.texts li:first').text("");
			$('.lineTwo').textillate('start');
			$('.lineThree').find('.texts li:first').text("");
			$('.lineThree').textillate('start');
			$('.lineFour').find('.texts li:first').text("");
			$('.lineFour').textillate('start');
			$('.titleText').textillate('out');
			$('#liveAgain').toggle();
			$('.reload').find('.texts li:first').text('Live Again');
			$('.reload').textillate('start');
			end = true;
			line = story.length + 1;
		}
	});

// For Textillate.JS
$(function () {
		$('.titleText').textillate({ in: { effect: 'fadeInLeft', delayScale: 5, delay: 100, sync: false, reverse: true}, out: {effect: 'fadeOutLeft', delayScale: 5, delay: 100, sync: false, reverse: true}, type: 'char' });

		$('.lineOne').textillate({ in: { effect: 'fadeInDown', delayScale: 5, delay: 100, sync: true, reverse: false},  out: {effect: 'fadeOutDown', delayScale: 5, delay: 100, sync: true, reverse: false}, type: 'word' });

		$('.lineTwo').textillate({ in: { effect: 'fadeInDown', delayScale: 5, delay: 100, sync: true, reverse: false},  out: {effect: 'fadeOutDown', delayScale: 5, delay: 100, sync: true, reverse: false}, type: 'word' });

		$('.lineThree').textillate({ in: { effect: 'fadeInDown', delayScale: 5, delay: 100, sync: true, reverse: false},  out: {effect: 'fadeOutDown', delayScale: 5, delay: 100, sync: true, reverse: false}, type: 'word' });

		$('.lineFour').textillate({ in: { effect: 'fadeInDown', delayScale: 5, delay: 100, sync: true, reverse: false},  out: {effect: 'fadeOutDown', delayScale: 5, delay: 100, sync: true, reverse: false}, type: 'word' });
		
		$('.reload').textillate({ in: { effect: 'fadeIn', delayScale: 5, delay: 100, sync: true, reverse: false}, type: 'word' });
	});
	

