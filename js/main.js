$(document).ready(function () {
  // переключение вкладки тренды
  var tabsItem = $('.tabs__item')
  var contentItem = $('.content__item')

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tabsItem.removeClass('tabs__item_active');
    contentItem.removeClass('content__item_active trending__wrapper');
    $(activeContent).addClass('content__item_active trending__wrapper');
    $(this).addClass('tabs__item_active');
  });
  // слайдер отзывов
  var reviewsSlider = new Swiper('.reviews-slider', {  
  direction: 'horizontal',
  loop: true,
  autoHeight: true,  
  autoplay: {
    delay: 7000,
    },
  pagination: {
    el: '.reviews__pagination',
    bulletClass: "reviews__bullet",
    bulletActiveClass: "reviews__bullet_active",
    clickable: true,    
    },  
  });

  $(".reviews-slider").mouseenter(function() {
    reviewsSlider.autoplay.stop();    
  });
  $(".reviews-slider").mouseleave(function() {
    reviewsSlider.autoplay.start();    
  });
  // слайдер историй
  var storySlider = new Swiper(".story-slider", {    
    loop: true,
    autoHeight: true,    
    navigation: {
      nextEl: ".story__button_next",
      prevEl: ".story__button_prev",
    },    
  });
  // настройка кнопок слайдера историй
  var sliderButtonPrev = $('.story__button_prev');
  var sliderButtonNext = $('.story__button_next');  
  sliderButtonPrev.on('click', rename);
  function rename () {
    sliderButtonPrev.addClass('story__button_prev-active');
    sliderButtonNext.removeClass('story__button_next-active');
  };    
  sliderButtonNext.on('click', active);
  function active () {
    sliderButtonNext.addClass('story__button_next-active');
    sliderButtonPrev.removeClass('story__button_prev-active');
  };  
  // окно мобильного меню
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
  // окно входа
  var modalLoginButton = $('[data-toggle=modal-logIn]');
  var closeModalLoginButton = $(".modal-logIn__close");
  var modalLoginBg = $(".modal-logIn_bg");
  var modalLogin = $(".modal-logIn");
  modalLoginButton.on('click', openLogin);
  closeModalLoginButton.on('click', closeLogin);
  modalLoginBg.on('click', closeLogin);  

  function openLogin() {        
    modalLogin.addClass('modal-logIn_visible');
    modalLoginBg.addClass('modal-logIn_bg-closed');
  }
  function closeLogin() {    
    modalLogin.removeClass('modal-logIn_visible');
    modalLoginBg.removeClass('modal-logIn_bg-closed');
  }
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      modalLogin.removeClass('modal-logIn_visible');
      modalLoginBg.removeClass('modal-logIn_bg-closed');
    };
  });
  // валидатор форм
  $('.subscribe__form').validate({
      errorClass: "subscribe__error",
      messages: {        
        subscribe: {
          required: "укажите почту",
          email: "пример email адреса: name@domain.com",
        },
      },
    });

  $('.modal-logIn__form').validate({
      errorClass: "error",
      messages: {        
        email: {
          required: "укажите почту",
          email: "пример email адреса: name@domain.com",
        },
        username: {
          required: "укажите логин",
          minlength: "логин должен быть больше 4 символов"
        },
      },
    });

  // якоря по вкладкам
  $(function () {
    $('.go-anchor').on('click', function(event) {
      event.preventDefault ();
      var sc = $(this).attr("href"),
          dn = $(sc). offset ().top;
      $('html, body'). animate({scrollTop: dn}, 500);
    });
  });
  var btn = $('.button-up');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 450) {
       btn.addClass('button-up_show');
    } else {
       btn.removeClass('button-up_show');
      }
  });
  btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '500');
  });
});
