$(document).ready(function(){
  $('.image-overlay i').hover(
    function() {
      $( this ).attr('class', 'ion-heart')
    }, function() {
      $( this ).attr('class', 'ion-ios-heart-outline')
    }
  );


});
