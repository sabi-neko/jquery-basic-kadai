//読み込み完了後コンソールに出力
$(window).on('load',function(){
  console.log('loadイベントが発生しました');
});
//画面をスクロールした時コンソールに出力
$(window).on('scroll',function(){
  console.log('scrollイベントが発生しました');
});