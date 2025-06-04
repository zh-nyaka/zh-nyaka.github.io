$(document).ready(function () {
  // красивый select
  if ($(".js-select").length) {
    $(".js-select").select2({
      minimumResultsForSearch: Infinity,
      // closeOnSelect: false,
    });
  }
  $(window).resize(function () {
    $(".js-select").select2({
      minimumResultsForSearch: Infinity,
    });
  });
  // /красивый select
  // плавный скролл к якорю
  $("a[href*='#']").click(function (e) {
    e.preventDefault()
    $('.js-mobile-menu').removeClass('open')
    $(".js-mobile-menu__content").slideUp();

    $("html").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 60,
      },
      300
    );
    return false;
  });
  // плавный скролл к якорю
  // маска для инаупов
  if ($("[data-inputmask]").length) {
    $(":input").inputmask();
  }
  // /маска для инпупов
  // меню
  $(".js-mobile-menu__opener").on("click", function () {
    $('.js-mobile-menu').toggleClass('open')
    $(".js-mobile-menu__content").slideToggle();
  });
  // /меню

  gsap.registerPlugin(ScrollTrigger);

// Получите все элементы с классом .projects__logo
const projectLogos = document.querySelectorAll('.projects__logo');
const projectContents = document.querySelectorAll('.projects__content');

// Анимация контента
projectContents.forEach(content => {
  gsap.from(content, {
      y: 300,
      opacity: 0,
      scrollTrigger: {
        trigger: content.closest('.projects__item'),
        start: 'top 80%', 
        end: 'top 40%',
        scrub: 2, 
      }
  });
});


projectLogos.forEach(content => {
  gsap.from(content, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: content.closest('.projects__item'), 
      start: 'top 80%', 
      end: 'top 40%',
      scrub: 1, 
    }
});
});


$('.top-banner__benefit-val').each(function() {
  const element = $(this)[0]; // получаем DOM-элемент
  const endValue = parseInt($(this).data('end-value'), 10);
  let startValue = 0;
  let increment = endValue > 10000 ? 10000 : endValue > 100 ? 20 : 1;

  const formatNumber = (num) => '>' + num.toLocaleString('ru-RU');

  const animateNumber = () => {
    if (startValue < endValue) {
      startValue += increment;
      if (startValue > endValue) startValue = endValue;
      element.textContent = formatNumber(startValue);
      requestAnimationFrame(animateNumber);
    }
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber();
        obs.unobserve(entry.target); // запуск только один раз
      }
    });
  }, {
    threshold: 0.5, // 50% блока должно быть видно
  });

  observer.observe(element);
});


// 
if ($(window).width() > 1200 ) {
let $pixel = $('.top-banner__img');
let pixelSize = 14
let w = Math.round($pixel.width() / pixelSize);  // Округляем до целого
let h = Math.round($pixel.height() / pixelSize);
console.log('Width:', w);
console.log('Height:', h);

function pixel() {
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            let span = $('<span></span>'); // Use jQuery to create a span
            let random = Math.random() * 0.5;
            let randomFixed = random.toFixed(2);

            // Append it to the '#pixel' element without the 'animated' class
            $('#pixel').append(span); 
            span.css({
                width:  pixelSize + 'px',
                height: pixelSize + 'px',
                left: j * pixelSize + 'px',
                top: i * pixelSize + 'px',
                backgroundPosition: `${-j * pixelSize}px ${-i * pixelSize}px, center`,
                backgroundSize: $pixel.width() + 'px, auto',
                animationDelay: randomFixed + 's'
            });
        }
    }
    
    // Add the 'animated' class to all spans after the pixels have been created
    $('#pixel span').addClass('animated');
}

pixel();
}

})
