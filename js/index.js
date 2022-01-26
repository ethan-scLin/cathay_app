$(document).ready(function () {

  function initZone() {
    section3top = $("#section-3").offset().top;
    section4top = $("#section-4").offset().top;
  }

  initZone();

  $(".qa-item").on("click", function () {
    var isItemActive = $(this).hasClass("active");

    if(isItemActive) {
      $(this).removeClass("active");
      return;
    }

    $(".qa-item").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function(e) {
    return;
   });

  $(".set-anchor").on("click", function (event) {
    var id = event.currentTarget.id,
      targetId = "#" + id.replace("anchor-", "");
    yTop = $(targetId).offset().top;

    if (targetId === "#section-1") {
      yTop = yTop - 140;
    }

    if (targetId === "#section-3" || targetId === "#section-5") {
      yTop = yTop - 40;
    }

    closeNav();

    $("html,body").stop().animate({ scrollTop: yTop }, 500);
  });

  $("#berger").on("click", function () {
    switchSideBar();
  });

  // offsetY
  $("html,body").stop().animate({ scrollTop: 0 }, 50);

  setTimeout(function() {
    $(".kv-1").addClass("active");
  }, 1000);

  setTimeout(function() {
    $(".kv-title").addClass("active");
  }, 1200);

  setTimeout(function() {
    $(".kv-subtitle").addClass("active");
  }, 1400);

  setTimeout(function() {
    $(".kv-money").addClass("active");
  }, 1500);

  function switchSideBar() {
    var isActive = $("#berger").hasClass("active");

    if (isActive) {
      closeNav();
      return;
    }

    $("#mask").addClass("active");
    $("#nav-bar").addClass("active");
    $("#berger").addClass("active");
  }

  function closeNav() {
    $("#mask").removeClass("active");
    $("#nav-bar").removeClass("active");
    $("#berger").removeClass("active");
  }

  function checkArrow() {
    if($('.discount-box-item-1').hasClass('active')) {
      $('.arrow-right').removeClass('disabled');
      $('.arrow-left').addClass('disabled');
    };
    if($('.discount-box-item-2').hasClass('active')) {
      $('.arrow-right').removeClass('disabled');
      $('.arrow-left').removeClass('disabled');
    };
    if($('.discount-box-item-3').hasClass('active')) {
      $('.arrow-right').addClass('disabled');
      $('.arrow-left').removeClass('disabled');
    };
  }

  function handleNextItem() {
    var nextEle = $('.discount-box-item.active').next().next();

    if(nextEle.length > 0) {
     $('.discount-box-item').removeClass('active');
     $(nextEle).addClass('active');
     checkArrow();
    }
  }

  function handlePrevItem() {
    var preEle = $('.discount-box-item.active').prev().prev();

    if(preEle.length > 0) {
     $('.discount-box-item').removeClass('active');
     $(preEle).addClass('active');
     checkArrow();
    }
  }

  $('.arrow-left').on('click', function() {
    handlePrevItem();
  });

  $('.arrow-right').on('click', function() {
    handleNextItem();
  });
});
