// mv

// catchの左からフェードイン
$(function () {
  var cth = $('.js-catch');

  var txt_array = cth.text().split('');

  $('.js-catch').html('');

  $.each(txt_array, function (index, element) {
    var new_element = $("<span/>").text(element).css({ opacity: 0 });
    cth.append(new_element);
    new_element.delay(index * 100);
    new_element.animate({ opacity: 1 }, 3000);
  });
    $('.js-catch').children('span:nth-child(17)').html('<span>,</span><br>');
});
// mvからaboutへのダウン
$(function () {
  $('.js-mv__icon').click(function () {
    var $target = $('#about').offset().top;
    var $headerHeight = $('.header').height();
    $('html, body').stop().animate({ "scrollTop": $target - $headerHeight }, 1000)
  });
});

// gnav
// gnavからのスクロール
$(function () {
  $('.js-header__gnav-link').click(function () {
    var $target = $($(this).attr("href")).offset().top;
    var $headerHeight = $('.header').height();
    $('html, body').stop().animate({ "scrollTop": $target - $headerHeight }, 500)
    return false;
  });
});


// ページトップ
$(function () {
  $(window).scroll(function () {
    var $height = $(this).scrollTop();
    var $headerHeight = $('.header').height();
    if ($height > $headerHeight) {
      $(".js-back__btn").stop().animate({ 'opacity': 1 }, 10);
    } else {
      $(".js-back__btn").stop().animate({ 'opacity': 0 }, 50);
    }
  });
});

$(function () {
  $(".js-back__btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});


// スキルバー
window.addEventListener('DOMContentLoaded', () => {

  // DOM要素を取得
  const skillEls = document.querySelectorAll('.skills__chart');

  // カウントアップの設定
  const animationDuration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const easeOut = t => t * (2 - t);
  const animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOut(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  // Intersection observerに渡すコールバック関数
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const proficiencyVal = entry.target.dataset.proficiency;
        const skillBar = entry.target.querySelector('.skills__bar');
        const percentage = entry.target.querySelector('.skills__percent');
        const countup = entry.target.querySelector('.countup');

        skillBar.style.width = proficiencyVal + '%';
        percentage.style.opacity = 1;
        countup.textContent = proficiencyVal;
        animateCountUp(countup);

        observer.unobserve(entry.target);
      }
    });
  };

  // Intersection observerに渡すオプション
  const options = {
    rootMargin: "-50px 0px"
  };

  // IntersectionObserver初期化
  const io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100; // Polyfillの設定
  skillEls.forEach(el => {
    io.observe(el);
  });

});

// マーカーアニメーション
$(window).scroll(function () {
  $(".marker-animation").each(function () {
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight) { //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass('active'); //クラス「active」を与える
    }
  });
});
