$(function(){
	//pcとspの切り替え
		if ($('.pagetop.pc').is(':visible')) {
		var pc = true;
		} else {
		var pc = false;
		}
	//anchor link
	$('a[href^="#"]').on('click',function(){var speed = 600;var href= $(this).attr("href");var target = $(href == "#" || href == "" ? 'html' : href);if( !$(target).get(0) ){ return false; } var position = target.offset().top;$("html, body").animate({scrollTop:position}, speed, "easeOutQuad");return false;});
	
	//pagetop set
	var topBtn = $('.pagetop');
	if(pc){
		$(window).on('scroll',function(){var scTp = $(window).scrollTop();(scTp>500)?topBtn.addClass('show'):topBtn.removeClass('show');});
	}
	//メニュー表示非表示
	$('.naviBtn').on('click', function() {if($(this).hasClass('show')) {$('.navigationBtn, .navigationWrap, .naviBtn').removeClass('show');}else{$('.navigationBtn, .navigationWrap, .naviBtn').addClass('show');}});
	//メニュー非表示  >  AnchorLink
	     $('.navigationList>li>a').on('click', function() {if($('.navigationBtn').hasClass('show')) {$('.navigationBtn, .navigationWrap').removeClass('show');}});
	
	//Magnific Popup -----youtube
	     $('.youtube').magnificPopup({disableOn:700,mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false,type:'iframe',iframe:{patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?rel=0&autoplay=1'}}}});
	
	
	
	//ストーリー背景スクロール
	function storyBgScroll(stpos,scroll,windowHeight) {
		var stBgScl = (scroll + windowHeight - stpos) * (-0.2);
		$('.storyBgCopy .bg').css('transform','translateY(' + stBgScl + 'px)');
	}
	
	//スクロールアニメーション
	$(window).scroll(function (){
		$(".scrollAnime").each(function(){
			var position = $(this).offset().top;
			var stpos = $('#story').offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight + 100){
				$(this).addClass('show');
			}
			if (scroll > stpos - windowHeight){
				storyBgScroll(stpos,scroll,windowHeight);
			}
		});
	});
	
	//アクセス元取得
	var ref = document.referrer;
	var hereHost = window.location.hostname;
	var herePath = window.location.pathname;
	var sStr = "^http?://" + hereHost + herePath;
	var rExp = new RegExp( sStr, "i" );
	
	//サイト外のときロード後にムービー再生
		$(document).ready(function() {
			if(!ref.match( rExp )) {
				$('.loadMovie').magnificPopup({disableOn:700,mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false,type:'iframe',iframe:{patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?rel=0&autoplay=1'}}}}).magnificPopup('open');
			}
		});
	
	//load event
	jQuery.event.add(window,"load",function() {
		$('#overlay').fadeOut(800);
		$('.afterLoadingAnime').delay(100).queue(function() {
		$(this).addClass('show').dequeue();
		});
	});
});
