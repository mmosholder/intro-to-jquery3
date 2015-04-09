$(document).on('ready', function() {
  $('button').on('click', function(){

  	$('body').append('<div class="lightboxBG"><div class="lightbox"><div><h3>Hello</h3><p>Cupcake ipsum dolor sit amet. Gummies lemon drops pastry topping wypas jujubes gummi bears. Cotton candy powder topping bear claw halvah jelly beans bear claw. Chocolate cake ice cream gummies apple pie muffin wafer gummi bears. Cupcake ipsum dolor sit amet. Gummies lemon drops pastry topping wypas jujubes gummi bears. Cotton candy powder topping bear claw halvah jelly beans bear claw. Chocolate cake ice cream gummies apple pie muffin wafer gummi bears.</p><div class="button"><button class="close">Close</button></div></div></div></div>');

  	$('.lightboxBG').on('click', '.close', function(){
  		$('.lightboxBG').remove();
  	});
  });
});