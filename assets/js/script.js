$('.accordion__item').on('click', function () {
    $(this).find('.accordion__item-body').slideToggle();

    // Меняем иконку на плюс/икс
    $(this).find('.fa-btn').toggleClass('fa-btn-close');
});

// Изначальное состояние аккордеонов закрыто
$('.accordion__item-body').hide();

$(".balance__pay-item").on("click", function() {
    // Сбросим цвет всех кнопок, кроме текущей
    $(".balance__pay-item").not(this).css("background-color", "#25272E");
  
    // Изменим цвет текущей кнопки
    $(this).css("background-color", "#134B64");
});  