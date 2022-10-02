const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
  },
  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  }
});

document.querySelectorAll(".steps__nav-btn").forEach(function(tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    let path = e.currentTarget.dataset.path;
    console.log(path);

    document.querySelectorAll(".steps__nav-btn").forEach(function(btn) {
      btn.classList.remove("steps__nav-btn_active")
    });

    e.currentTarget.classList.add("steps__nav-btn_active");

    document.querySelectorAll(".steps__item").forEach(function(tabsItem) {
      tabsItem.classList.remove("steps__item_active");
    });
    document.querySelector(`[data-target="${path}"]`).classList.add("steps__item_active");
  });
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".header__nav-link");

burger.addEventListener("click",
  function() {
    burger.classList.toggle("burger_active");

    menu.classList.toggle("header__nav_active");

    document.body.classList.toggle("stop-scroll");
  })

menuLinks.forEach(function (el) {
  el.addEventListener("click",
    function() {
      burger.classList.remove("burger_active");
      menu.classList.remove("header__nav_active");
      document.body.classList.remove("stop-scroll");
    })
});

let searchOpen = document.querySelector(".header__search-open");
let search = document.querySelector(".header__search");
let searchClose = document.querySelector(".search__close");

searchOpen.addEventListener("click",
  function() {
    search.classList.add("header__search_active");
  });

searchClose.addEventListener("click",
  function () {
    search.classList.remove("header__search_active");
  });


