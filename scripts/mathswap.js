function oncheckclick(){
    var field1 = document.getElementById("field1")
    var field2 = document.getElementById("field2")
    var field3 = document.getElementById("field3")
    var field4 = document.getElementById("field4")
    var field5 = document.getElementById("field5")
    var field6 = document.getElementById("field6")

    if(String(field1.innerHTML).includes(">c<") &&
       String(field6.innerHTML).includes(">c<") && 
       ( (String(field2.innerHTML).includes(">a<") &&
       String(field3.innerHTML).includes(">a<") &&
       String(field4.innerHTML).includes(">b<") &&
       String(field5.innerHTML).includes(">b<"))||
       (String(field2.innerHTML).includes(">b<") &&
       String(field3.innerHTML).includes(">b<") &&
       String(field4.innerHTML).includes(">a<") &&
       String(field5.innerHTML).includes(">a<")))){
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
    }
  });

  //remaining lists
  $('ul.float, ul.inline').sortable({
    update: function(evt) {
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
      var t = $(droptarget).children();
      var p = $(this).parent()
      $(droptarget).children().detach()
      $(this).appendTo(droptarget).draggable('stop');
      $(t).appendTo(p).draggable('stop');
    }
  });

  //off switch
  $('.off').on('click', function() {
    $('.sortable').each(function() { $(this).sortable('destroy'); });
    $('.draggable').each(function() { $(this).draggable('destroy'); });
  });
});