/**
 * 메인 페이지: 네비게이션 토글
 */
(function () {
  'use strict';

  var navLinks = document.querySelector('.nav-links');
  var navToggle = document.querySelector('.nav-toggle');
  if (navLinks && navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      var expanded = navLinks.classList.contains('is-open');
      navToggle.setAttribute('aria-label', expanded ? '메뉴 닫기' : '메뉴 열기');
    });
  }
})();
