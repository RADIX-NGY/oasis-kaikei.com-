

/********************************************************************************

	ページトップへ

********************************************************************************/

// top画面 お知らせ
$(function(){
 
    // 「ページトップへ」の要素を隠す
    $('#pagetop').hide();
 
    // スクロールした場合
    $(window).scroll(function(){
        // スクロール位置が100を超えた場合
        if ($(this).scrollTop() > 100) {
            // 「ページトップへ」をフェードイン
            $('#pagetop').fadeIn();
        }
        // スクロール位置が100以下の場合
        else {
            // 「ページトップへ」をフェードアウト
            $('#pagetop').fadeOut();
        }
    });
 
});


/********************************************************************************

	ハンバーガーメニュー

********************************************************************************/

$(function(){
  $('.el_humburger').on('click',function(){
    spNavInout();
  });
});
 
//spナビ開く処理
function spNavIn(){
  $('body').removeClass('js_humburgerClose');
  $('body').addClass('js_humburgerOpen');
  $(".navigation").addClass("js_appear");
  $(".navigation").css({opacity:0});
  $(".navigation").animate({
    opacity: 1
  },200);
  scrollBlocker(true);
}
 
//spナビ閉じる処理
function spNavOut(){
  $(".navigation").animate({
    opacity: 0
  },200)
  $('body').removeClass('js_humburgerOpen');
  $('body').addClass('js_humburgerClose');
  setTimeout(function(){
    $(".navigation").removeClass("js_appear");
  },200);
  scrollBlocker(false);
}
 
//spナビ開閉処理
function spNavInout(){
  if($('body.spNavFreez').length){
    return false;
  }
  if($('body').hasClass('js_humburgerOpen')){
   spNavOut();
  } else {
   spNavIn();
  }
}
 
//ナビ向けスクロール無効化処理
 
var scrollBlockerFlag;
 
function scrollBlocker(flag){
  if(flag){
    scrollpos = $(window).scrollTop();
    $('body').addClass('js_fixed').css({'top': -scrollpos});
    scrollBlockerFlag = true;
  } else {
    $('body').removeClass('js_fixed').css({'top': 0});
    window.scrollTo( 0 , scrollpos );
    scrollBlockerFlag = false;
  }
}

//spアンカーリンククリックで閉じる
//$(function() {
//  $('.navigation li a').on('click', function(){
//      $('.el_humburger').click();
//  });
//});


/********************************************************************************

	PCとSPの画像を入れ替え

********************************************************************************/

$(function () {
 //変数セット
 var $elem = $('.toggleImg');
 var sp = '_sp.';
 var pc = '_pc.';
// var replaceWidth = 768; 
 var replaceWidth = 992; 
 
 function imageSwitch() {
 
 var windowWidth = parseInt($(window).width());
 
 $elem.each(function () {
 var $this = $(this);
 if (windowWidth >= replaceWidth) {
 $this.attr('src', $this.attr('src').replace(sp, pc));
 } else {
 $this.attr('src', $this.attr('src').replace(pc, sp));
 }
 });
 }
 imageSwitch();
 
 var delayStart;
 var delayTime = 200; //ミリSec
 $(window).on('resize', function () {
 clearTimeout(delayStart);
 delayStart = setTimeout(function () {
 imageSwitch();
 }, delayTime);
 });
});



/********************************************************************************

	タブ切り替え

********************************************************************************/

// top画面 お知らせ
document.addEventListener('DOMContentLoaded', function(){
	// タブに対してクリックイベントを適用
	const tabs = document.getElementsByClassName('tab');
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', tabSwitch, false);
	}

	// タブをクリックすると実行する関数
	function tabSwitch(){
		// タブのclassの値を変更
		document.getElementsByClassName('is-active')[0].classList.remove('is-active');
		this.classList.add('is-active');
		// コンテンツのclassの値を変更
		document.getElementsByClassName('is-show')[0].classList.remove('is-show');
		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);
		document.getElementsByClassName('panel')[index].classList.add('is-show');
	};
}, false);









