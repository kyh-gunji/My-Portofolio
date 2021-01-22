// mv

// catchの左からフェードイン
$(function () {
  var h1 = $('.js-catch');

  var txt_array = h1.text().split('');

  $('.js-catch').html('');

  $.each(txt_array, function (index, element) {
    var new_element = $("<span/>").text(element).css({ opacity: 0 });
    h1.append(new_element);
    new_element.delay(index * 100);
    new_element.animate({ opacity: 1 }, 3000);
  });
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


