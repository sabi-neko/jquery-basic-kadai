$(function(){
  // クリックしたら文字色を変える
  $('#change-color').on('click', function(){
    $('#target').css('color','blue');
  });

  // クリックしたら文字内容を変える
  $('#change-text').on('click', function(){
    $('#target').text('まろんです！');
  });

  // クリックしたらフェードアウトする
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });

    // クリックしたらフェードインする
    $('#fade-in').on('click', function(){
      $('#target').fadeIn();
    });
});