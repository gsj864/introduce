/**
 * 관리자 페이지: 질문 목록, 답변 작성
 */
(function () {
  'use strict';

  var listEl = document.getElementById('adminList');
  var emptyEl = document.getElementById('adminEmpty');

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  function renderList() {
    if (!listEl || typeof window.StorageQA === 'undefined') return;
    var list = window.StorageQA.getAllQuestions();
    listEl.innerHTML = '';
    if (list.length === 0) {
      if (emptyEl) emptyEl.hidden = false;
      return;
    }
    if (emptyEl) emptyEl.hidden = true;
    list.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'admin-item ' + (item.status === 'pending' ? 'pending' : '');
      var isAnswered = item.status === 'answered';
      var html =
        '<div class="question-text">' + escapeHtml(item.question) + '</div>' +
        '<div class="meta">등록일: ' + escapeHtml(item.createdAt) + (isAnswered ? ' · 답변 완료' : '') + '</div>';
      if (isAnswered) {
        html += '<div class="answer-display">' + escapeHtml(item.answer) + '</div>';
      } else {
        html +=
          '<textarea class="answer-input" placeholder="답변을 입력하세요." data-id="' + item.id + '"></textarea>' +
          '<button type="button" class="btn-answer" data-id="' + item.id + '">답변 등록</button>';
      }
      li.innerHTML = html;
      listEl.appendChild(li);

      if (!isAnswered) {
        var btn = li.querySelector('.btn-answer');
        var textarea = li.querySelector('.answer-input');
        if (btn && textarea) {
          btn.addEventListener('click', function () {
            var id = parseInt(btn.getAttribute('data-id'), 10);
            var answer = textarea.value.trim();
            if (!answer) return;
            window.StorageQA.updateAnswer(id, answer);
            renderList();
          });
        }
      }
    });
  }

  var navLinks = document.querySelector('.nav-links');
  var navToggle = document.querySelector('.nav-toggle');
  if (navLinks && navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-label', navLinks.classList.contains('is-open') ? '메뉴 닫기' : '메뉴 열기');
    });
  }

  renderList();
})();
