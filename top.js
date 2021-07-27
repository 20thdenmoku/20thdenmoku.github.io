$(function(){
		//pcとspの切り替え
		if ($('.pagetop.pc').is(':visible')) {
		var pc = true;
		} else {
		var pc = false;
		}

	//twitter set
	$.getScript('http://platform.twitter.com/widgets.js');
	
	//headerをスクロールor固定
	function headerSet(scroll) {
		if(pc){
			$navi = $('.headerWrap');
			if(scroll <= 120){
				$navi.removeClass('abs fixOff fixOn');
			}else if(scroll > 120 && scroll < 500 ){
			$navi.removeClass('fixOff fixOn').addClass('abs');
			}else if(scroll >= 1000){
				$navi.removeClass('abs fixOff').addClass('fixOn');
			}else{
				$navi.removeClass('abs fixOn').addClass('fixOff');
			}
		}
	}
	//スクロール イベント
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		//headerをスクロールor固定
		headerSet(scroll);
	});

	
	
});
