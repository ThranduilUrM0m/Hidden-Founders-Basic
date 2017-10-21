function menu() {
  var $toggle = document.getElementById('menu_toggle');
  var $sideMenu = document.getElementById('side-menu');
  var $close = document.getElementById('close');
  var $tl       = new TimelineMax();
  $toggle.addEventListener('click', function(){
    classie.toggle($sideMenu, "sideMenuToggle");
    $tl.staggerFrom('li', .5, {alpha:0, xPercent:"-=50", ease:Back.easeOut},0.2);
  });
  $close.addEventListener('click', function(){
    classie.remove($sideMenu, "sideMenuToggle");
  });
}
menu();
