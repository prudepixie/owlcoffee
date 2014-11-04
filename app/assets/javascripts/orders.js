
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

  $('.cancel-order').on('click', function(){
     var id = $(this).data('id')
     var parent = $(this).parent('tr')
      swal({ title: "Are you sure?",
             text: "No Backsies!",
             type: "warning",
             showCancelButton: true,
             confirmButtonColor: "#DD6B55",
             confirmButtonText: "Yes, delete it!",
             closeOnConfirm: false },
             function(){   swal("Deleted!", "Your order has been deleted.", "success");
         });
    confirmDelete(id, parent)
    confirmCancel()
  })

  function confirmCancel(){
    $('.cancel').on('click', function(){
    })
  }

  function confirmDelete(id, parent){
  $('.confirm').on('click', function(){
       $.ajax({
      type:'POST',
      dataType: 'json',
      url: '/orders/' + id,
      data: {'_method':'delete'},
      complete: function () {
        parent.fadeOut(400);
      }
    });
  })
  }


  $('.button.ok').on('click',function(){
    input = $('.name').val()
    $('.hoo').fadeOut(1000, function(){
    $('.hidden_name').attr('value', input)
      showForm()
    })
  })

  $('.specify').on('change', function(){
    if( $(this).siblings(':checked').length >= 0) {
      console.log("this" + this);
      console.log(this.checked);
    }
  });

  $('.delete-all-order').on('click', function (e){
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/orders/destroy_all',
      data: {'_method': 'delete'},
      complete: function(){
        $('.order-table td').fadeOut(400);
      }
    });
    e.preventDefault()
  });

  $('.confirm').bind('ajax:success', function(){
    $(this).closest('tr').fadeOut('fast')
  })

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
