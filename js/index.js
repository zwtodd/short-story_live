$(document).ready( function() {
		document.getElementById('headerText').innerHTML = '<h1>Live</h1>';
		
		var line = 0;
		var outF = false;
		
		$('#story').click ( function() {
			
				if(outF) {
					$('.lineOne').textillate('out');
				} else {
					if(line < story.length) {
						$('.lineOne').find('.texts li:first').text(story[line]);
						$('.lineOne').textillate('start');
					} else {
						$('.lineOne').find('.texts li:first').text("");
						$('.lineOne').textillate('start');
					}
					
				}

				if(line > 0) {
					if(outF) {
						$('.lineTwo').textillate('out');
					} else {
						if(line < story.length) {
							$('.lineTwo').find('.texts li:first').text(story[line-1]);
							$('.lineTwo').textillate('start');
						} else {
							$('.lineTwo').find('.texts li:first').text("");
							$('.lineTwo').textillate('start');
						}
					}
					
					if(line > 1){
						if(outF) {
							$('.lineThree').textillate('out');
						} else {
							if(line < story.length) {
								$('.lineThree').find('.texts li:first').text(story[line-2]);
								$('.lineThree').textillate('start');
							} else {
								$('.lineThree').find('.texts li:first').text("");
								$('.lineThree').textillate('start');
							}
						}
						
						if(line > 2) {
							if(outF) {
								$('.lineFour').textillate('out');
							} else {
								if(line < story.length) {
									$('.lineFour').find('.texts li:first').text(story[line-3]);
									$('.lineFour').textillate('start');
								} else {
									$('.lineFour').find('.texts li:first').text("");
									$('.lineFour').textillate('start');
								}
							}
							
						}
					}
					
					
				}
				
				
				
				if(outF) {
					outF = false;
					line = line + 1;
				}
				else {
					outF = true;
				}
				
				if(line === story.length) {
					$('.titleText').textillate('out');
					$('#liveAgain').toggle();
					$('.reload').find('.texts li:first').text('Live Again');
					$('.reload').textillate('start');
				}
		
			});
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