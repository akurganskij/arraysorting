$(document).ready(function(){
  $('.header').height($(window).height());
});
$(document).ready(function(){
    $('a.nav-link').click(function() {
      let navigationHeight = $(".navbar").innerHeight();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - navigationHeight
          }, 1000);
        return false;
      });
});
$(document).ready(function(){
    $('a.navbar-brand').click(function() {
        $('html, body').animate({
            scrollTop: "0"
          }, 1000);
        return false;
      });
});
$(document).ready(function(){
  $('#toarray').click(function() {
    let navigationHeight = $(".navbar").innerHeight();  
    $('html, body').animate({
          scrollTop: $($("#arraysorting")).offset().top - navigationHeight
        }, 1000);
      return false;
    });
});