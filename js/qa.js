/**
 * Q&A 페이지: 질문 등록, 답변 완료 목록 표시
 */
(function () {
  'use strict';

  var form = document.getElementById('qaForm');
  var listEl = document.getElementById('qaList');
  var emptyEl = document.getElementById('qaEmpty');

  function renderAnsweredList() {
    if (!listEl || typeof window.StorageQA === 'undefined') return;
    var list = window.StorageQA.getAnsweredQuestions();
    listEl.innerHTML = '';
    if (list.length === 0) {
      if (emptyEl) emptyEl.hidden = false;
      return;
    }
    if (emptyEl) emptyEl.hidden = true;
    list.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'qa-item';
      li.innerHTML =
        '<q>' + escapeHtml(item.question) + '</q>' +
        '<div class="answer">' + escapeHtml(item.answer) + '</div>' +
        '<div class="meta">답변일: ' + escapeHtml(item.createdAt) + '</div>';
      listEl.appendChild(li);
    });
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var textarea = form.querySelector('#question');
      var text = (textarea && textarea.value || '').trim();
      if (!text) return;
      if (typeof window.StorageQA === 'undefined') return;
      window.StorageQA.addQuestion(text);
      textarea.value = '';
      renderAnsweredList();
      try {
        if (window.Notification && Notification.permission === 'granted') {
          new Notification('새 질문이 등록되었습니다.');
        }
      } catch (err) {}
    });
  }

  renderAnsweredList();

  // Q&A 페이지에서도 미답변 배지 표시 (관리자용)
  if (typeof window.StorageQA !== 'undefined') {
    var count = window.StorageQA.getUnansweredCount();
    var qaLink = document.querySelector('a[href="qa.html"]');
    if (count > 0 && qaLink && !qaLink.querySelector('.badge')) {
      var badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = count > 99 ? '99+' : count;
      qaLink.appendChild(badge);
    }
  }

  // 모바일 네비 메뉴 토글
  var navLinks = document.querySelector('.nav-links');
  var navToggle = document.querySelector('.nav-toggle');
  if (navLinks && navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-label', navLinks.classList.contains('is-open') ? '메뉴 닫기' : '메뉴 열기');
    });
  }
})();
