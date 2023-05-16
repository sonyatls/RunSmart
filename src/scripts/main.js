$(document).ready(function () {
   //Каурсель
   $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/chevron-left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/chevron-right-solid.png"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true,
               arrows: false,
            }
         }
      ]
   });
   //Табы
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   // Скрипт для карточки
   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__box').eq(i).toggleClass('catalog-item__box_active');
         })
      });
   };

   toggleSlide('.catalog-item__link');
   toggleSlide('.catalog-item__back');

   //Modal
   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn('slow');
      $('.modal__close').on('click', function () {
         $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });
      //При нажатии на товар - показывается название выбранного товара
      //Для каждой кнопки выполняется операция, перебираем элемент
      $('.button_catalog').each(function (i) {
         $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
         });
      });
   });

   //Валидация форм
   function validateForms(form) {
      $(form).validate({
         rules: {
            name: "required",
            phone: "required",
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите своё номер телефона",
            email: {
               required: "Пожалуйста, введите свою почту",
               email: "Неправильно введён адрес почты"
            }
         }
      });
   }

   validateForms('#consultation-form');
   validateForms('#consultation form');
   validateForms('#order form');

   //Плавный скролл
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1600) {
         $('.pageup').fadeIn();
      } else {
         $('.pageup').fadeOut();
      }
   });

   //Универсальный плавный скролл
   $("a[href^='#']").on("click", function () {
      const href = $(this).attr("href");

      $("html, body").animate({
         scrollTop: $(href).offset().top
      });

      return false;
   });
});
