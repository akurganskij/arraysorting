function oncheckclick(){
    var codefield = document.getElementById("code").innerHTML
    var l1 = String(codefield).indexOf("line1")
    var l2 = String(codefield).indexOf("line2")
    var l3 = String(codefield).indexOf("line3")
    var l4 = String(codefield).indexOf("line4")
    var l5 = String(codefield).indexOf("line5")
    var l6 = String(codefield).indexOf("line6")
    var l7 = String(codefield).indexOf("line7")
    var l8 = String(codefield).indexOf("line8")
    if(l2 < l5 && l5 < l7 && l7 < l4 && l4 < l3 && l3 < l1 && l1 < l8 && l8 < l6){
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