var arr = [10, 1, 7, 12, 5];
var id = 0;
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
      var t = $(droptarget).children();
      var p = $(this).parent();
      
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