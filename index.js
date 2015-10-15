$( ".question" ).click(function() {
//  alert( "Handler for .click() called." );
  $( ".answer" ).slideDown( "slow", function() {
    // Animation complete.
  });
});