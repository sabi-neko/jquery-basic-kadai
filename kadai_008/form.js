$(function(){
  // class属性がクリックの要素がクリックされたら
  $('.btn').on('click', function(){
    // テキストボックスにクリックしました！と表示する
    $('.text-box').val('クリックしました！');

  });
});