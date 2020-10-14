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
});
