$(document).ready(function () {
    $(window).scroll(function () {
      $('nav').toggleClass('sticky' , $(this).scrollTop() > 150);
    });
  });

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
// =================================================================================================

  
$(document).ready(function () {
  $('#cart').hide();
  $('.bi-cart').mouseover(function () {
    $('#cart').show();
  });

  $('#cart').mouseleave(function () {
    $('#cart').hide();
  });

  var cart_item_count = 0;
  $('.add-cart-btn').click(function () {
    cart_item_count++;
    var img_src = $(this).parents('.card').children(".card-img").children('img').attr("src");
    var title = $(this).parents('.card-body').find('.card-title').text();
    var price = $(this).parents('.card-body').find('.card-price .price').text();

    
    var cart_item = `


<div class="main w-100 d-flex py-2 border border-end-0 border-start-0 border-top-0 bg-dark text-white">
    <div class="col-md-3 border border-left-0 border-top-0 border-bottom-0 d-flex justify-content-between">
       <img src="${img_src}" class="w-50 mx-auto"  alt="">
  </div>

<div id="title" class="col-md-4 px-2 d-flex flex-wrap align-content-center justify-content-center">
  <h6 style="font-size: 13px; ">${title}</h6>
</div>

<div class="col-md-2 d-flex flex-wrap align-content-center justify-content-center">
  <span class="mx-2 text-center"> 1 </span>
</div>


<div class="col-md-2 d-flex flex-wrap align-content-center justify-content-center" id="t_price">
  <h6 class="mt-2 d-flex"><span>$</span> <span class="cart-item-price">${price}</span></h6>
</div>


<div class="col-md-1 d-flex flex-wrap align-content-center justify-content-center">
  <span class="close" style="cursor: pointer; font-size: 25px;">&times;</span>
</div>
</div>
      
    `;
   
    


    $('#order').append(cart_item);

    $('#cart_item_count').text(cart_item_count);
    $('.close').click(function () {
      $(this).parents('.main').remove();
      
      item_count();
    });
    item_count();
  });

  function  item_count() {
    var res = $('#order').children().length;
    $('#cart_item_count').text(res);
  }
  $("#order-btn").click(function(){
    $(window).prepend(signal)
  })

});





$(document).ready(function () {
  $('.card').click(function () {
    $('.round').attr('src',$(this).children('.card-img').find('img').attr('src'));
    $('.product-name').text($(this).children('.card-body').find('.card-title').text())
    $('.product-price').text($(this).children('.card-body').children('.card-price').children('.price').text());
    $('.download').attr('href',$(this).children('.card-img').find('img').attr('src'));
  });
  $(window).resize(function () {
    if ( $(window).width() < 600) {
      
      $('.modal-content').css('transform','scaleX(1)');

    } else {
      $('.modal-content').css('transform','scaleX(1.4)');
      
    }
  });
 });