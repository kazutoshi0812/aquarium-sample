
// ハンバーガーメニュー
$(function(){
  $('.js-hamburger').click(function(){
      $(".js-hamburger").toggleClass("is-active");
      $(".header__nav-list").toggleClass("open");
      $(".profile-header__navlist").toggleClass("open");
  });
});

// ドロワーメニュークローズ
$(function(){
  $(".header__nav-list a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".js-hamburger").removeClass("is-active");//ボタンの activeクラスを除去し
    $(".header__nav-list").removeClass("open");//ナビゲーションのpanelactiveクラスも除去
  });
});


// スライダーの記述
$('.gallery__slider').slick({
  autoplay: false,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});





// faqセクション
//アコーディオンをクリックした時の動作
jQuery(function ($) {
  $('.faq__accordion-area-q').on('click', function() {//タイトル要素をクリックしたら
    $('.faq__accordion-area-a').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
  
    const findElm = $(this).next(".faq__accordion-area-a");//タイトル直後のアコーディオンを行うエリアを取得
  
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去
    }else{//それ以外は
      $('.close').removeClass('close'); //クラス名closeを全て除去した後
      $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
      $(findElm).slideDown(500);//アコーディオンを開く
    }
  });
  });

// 各セクションへスムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('.s_01 a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    const adjust = 0;
    // スクロールの速度
    const speed = 400; // ミリ秒
    // アンカーの値取得
    const href= $(this).attr("href");
    // 移動先を取得
    const target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    const position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
// ページトップボタンを押すとしたから上に上がる
$(function(){
  const topBtn=$('#pagetop');
  topBtn.hide();
  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
  })
