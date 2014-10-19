
$(document).ready(function(){
    var coffee_selection = $('.coffee-selection').html()
    var input = ""
    var coffee = ""
    var coffeeChoice = $('.coffee-choice')


  $(window).load(function(){


    window.setTimeout(function(){
      $('.circle.three').fadeIn(1000)
    }, 500)

    window.setTimeout(function(){
      $('.placeholder-2').hide()
      $('.circle.two').fadeIn(1000)
    }, 1000)

    window.setTimeout(function(){
      $('.placeholder').hide()
      $('.circle.one').fadeIn(1000)
    }, 1500)

    window.setTimeout(function(){
      $('.oval-container').fadeIn(1000)
    }, 2000)
   });

  coffeeChoice.on('mouseover', function(){
    $(this).find('.steam').fadeIn(200);
  });

  coffeeChoice.on('mouseleave', function(){
    $(this).find('.steam').fadeOut(200);
  });

  coffeeChoice.on('click', function() {
    coffeeChoice.removeClass('grey')
    $(this).addClass('grey');
    $('.pick-a-cup').fadeOut('fast')
    coffee = $(this).data('coffee')
    beverage(coffee)
    hoo()
  });


  $('.button.ok').on('click',function(){
    input = $('.name').val()
    $('.hoo').fadeOut(1000, function(){
    $('.hidden_shit').attr('value', input)
      showForm()
    })
  })

  $('.specify').on('change', function(){

    if( $(this).siblings(':checked').length >= 0) {
      console.log("this" + this);
      console.log(this.checked);
    }
  });

  function beverage(coffee) {
    $('.hidden_cafe').attr('value', coffee)
  }
  function hoo(){
    $('.hoo').fadeIn(1000)
  }
  function showForm(){
    $('.coffee-selection').fadeIn(2000)

  }


})
