var PHONE_1_MAP = [
  {
    title: "步驟一",
    content: "授權管理員（主管）登入企業網銀 APP，點選企業 APP 存款啟用",
  },
  {
    title: "步驟二",
    content: "輸入公司及被授權人資料，線上即時審查。(店名、店號、員工編號、存款人姓名可由管理員自行設定)",
  },
  {
    title: "步驟三",
    content: "輸入行動 OTP 認證密碼，成功放行",
  },
];

var PHONE_2_MAP = [
    {
      title: "步驟一",
      content: "員工登入企業網銀 APP，點選企業 APP 存款",
    },
    {
      title: "步驟二",
      content: "成功開啟 QR Code，即可至 ATM 存款機掃碼存款",
    }
  ];

function renderPagination(pagination) {
  return "<h4>" + pagination.title + "</h4><p>" + pagination.content + "</p>";
}

$(document).ready(function () {
  var currentPhone1Page = 0,
    currentPhone2Page = 0;

  var myPhoneSwiper1 = new Swiper(".phone-swiper-container-1", {
    // Optional parameters
    effect: "fade",
    speed: 1000,
    // autoplay: true,   
    pagination: {
      el: ".phone-swiper-pagination-1",
      clickable: true,
    },
  });

  myPhoneSwiper1.on('slideChange', function (e) {
    if(currentPhone1Page < 2) {
      currentPhone1Page++
    } else {
      currentPhone1Page = 0;
    }
    var pagination = renderPagination(PHONE_1_MAP[currentPhone1Page]);
    $("#phone-swiper-1").html(pagination);   
  });

  $("#arrow-1").on("click", function () {
    if (currentPhone1Page >= 2) {
      myPhoneSwiper1.slideTo(0);
      return;
    }
    myPhoneSwiper1.slideNext();
  });

  var myPhoneSwiper2 = new Swiper(".phone-swiper-container-2", {
    // Optional parameters
    effect: "fade",
    speed: 1000,
    pagination: {
      el: ".phone-swiper-pagination-2",
      clickable: true,
    },
  });

  myPhoneSwiper2.on('slideChange', function (e) {
    if(currentPhone2Page < 1) {
      currentPhone2Page++
    } else {
      currentPhone2Page = 0;
    }
    var pagination = renderPagination(PHONE_2_MAP[currentPhone2Page]);
    $("#phone-swiper-2").html(pagination);   
  });

  $("#arrow-2").on("click", function () {
    if (currentPhone2Page >= 1) {
      myPhoneSwiper2.slideTo(0);
      return;
    }
    myPhoneSwiper2.slideNext();
  });
});
