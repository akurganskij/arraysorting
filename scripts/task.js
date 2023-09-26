function oncheckclick(){
    var card1 = document.getElementById("card1")
    var card2 = document.getElementById("card2")
    var card3 = document.getElementById("card3")

    if(String(card1.innerHTML).includes("2.png") &&
       String(card3.innerHTML).includes("1.png")){
        document.getElementById("uncorrect").style.display = "none";
        document.getElementById("correct").style.display = "block";
    }
    else{
        document.getElementById("correct").style.display = "none";
        document.getElementById("uncorrect").style.display = "block";
    }
    return false;
};

$(function() {
  //grouped lists
  $('ul.grouped').sortable({
    group: true
  });

  //normal list
  $('ul.normal').sortable({
    autocreate: true,
    update: function(evt) {
      console.log(JSON.stringify($(this).sortable('serialize')));
    }
  });

  //remaining lists
  $('ul.float, ul.inline').sortable({
    update: function(evt) {
      console.log(JSON.stringify($(this).sortable('serialize')));
    }
  });

  //div list
  $('.list.parent').sortable({container: '.list', nodes: ':not(.list)'});

  //draggable
  $('.drag').draggable();
  $('.draggables').draggable({delegate: 'button', placeholder: true});
  $('.draghandle').draggable({handle: '.handle', placeholder: true});
  $('.dragdrop').draggable({
    revert: true,
    placeholder: true,
    droptarget: '.drop',
    drop: function(evt, droptarget) {
      $(this).appendTo(droptarget).draggable('stop');
    }
  });

  //off switch
  $('.off').on('click', function() {
    $('.sortable').each(function() { $(this).sortable('destroy'); });
    $('.draggable').each(function() { $(this).draggable('destroy'); });
  });
});