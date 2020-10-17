$(document).ready(function () {
  var tabsItem = $('.tabs__item')
  var contentItem = $('.content__item')

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tabsItem.removeClass('tabs__item_active');
    contentItem.removeClass('content__item_active trending__wrapper');
    $(activeContent).addClass('content__item_active trending__wrapper');
    $(this).addClass('tabs__item_active');
  });

  var reviewsSlider = new Swiper('.reviews-slider', {  
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  // autoplay: {
  //   delay: 7000,
  //   },
  pagination: {
    el: '.reviews__pagination',
    bulletClass: "reviews__bullet",
    bulletActiveClass: "reviews__bullet_active",
    },  
  });

  // $(".reviews-slider").mouseenter(function() {
  //   reviewsSlider.autoplay.stop();    
  // });
  // $(".reviews-slider").mouseleave(function() {
  //   reviewsSlider.autoplay.start();    
  // });
  
  var storySlider = new Swiper(".story-slider", {    
    loop: true,
    autoHeight: true,    
    navigation: {
      nextEl: ".story__button_next",
      prevEl: ".story__button_prev",
    },
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  var modalBg = $(".modal__bg");
  var modal = $(".modal");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  modalBg.on('click', closeModal);  

  function openModal() {        
    modal.addClass('modal_visible');
    modalBg.addClass('modal__bg_closed');
  }
  function closeModal() {    
    modal.removeClass('modal_visible');
    modalBg.removeClass('modal__bg_closed');
  }
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      modal.removeClass('modal_visible');
      modalBg.removeClass('modal__bg_closed');
    };
  });
  
  $('.subscribe__form').validate({
      errorClass: "error",
      messages: {        
        subscribe: {
          required: "укажите почту",
          email: "пример email адреса: name@domain.com",
        },        
      },
    });
});
