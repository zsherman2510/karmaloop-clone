var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: false
  
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.IGcontainer', {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: false
});

