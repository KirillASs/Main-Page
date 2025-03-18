let swiper = new Swiper(".topSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 10000,
    //     disableOnInteraction: false,
    // },
});

let arr = [1962, 1981, 1990, 1992]

let historySwiper = new Swiper(".historySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (arr[index]) + "</span>";
      },
    },
  });

