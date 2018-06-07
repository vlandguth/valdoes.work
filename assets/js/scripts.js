$(window).scroll(function(){
    if ($(window).scrollTop() >= 120) {
      $('.sticky-header').addClass('fixed');
     }
     else {
      $('.sticky-header').removeClass('fixed');
     }
  });
  
  var words = ['UX Designer', 'Web Designer', 'Graduate! (soon)', 'Front-End Developer', 'UI Designer', 'Bulma Hater' ];
  setInterval(function(){
  var randomIndex = Math.floor(Math.random() * words.length); 
  var randomElement = words[randomIndex];
      $('.type-it').typeIt({
          content : randomElement
      });
  }, 4000);