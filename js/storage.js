/**
 * LocalStorage 기반 Q&A 데이터 관리
 * questions 배열: { id, question, answer, status, createdAt }
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_questions';

  function getQuestions() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function setQuestions(questions) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
      return true;
    } catch (e) {
      return false;
    }
  }

  function getNextId(questions) {
    if (!questions.length) return 1;
    return Math.max(...questions.map(function (q) { return q.id; })) + 1;
  }

  function addQuestion(text) {
    var questions = getQuestions();
    var newQ = {
      id: getNextId(questions),
      question: text,
      answer: '',
      status: 'pending',
      createdAt: new Date().toISOString().slice(0, 10)
    };
    questions.push(newQ);
    setQuestions(questions);
    return newQ;
  }

  function getAnsweredQuestions() {
    return getQuestions().filter(function (q) { return q.status === 'answered'; });
  }

  function getAllQuestions() {
    return getQuestions();
  }

  function updateAnswer(id, answer) {
    var questions = getQuestions();
    var idx = questions.findIndex(function (q) { return q.id === id; });
    if (idx === -1) return false;
    questions[idx].answer = answer;
    questions[idx].status = 'answered';
    setQuestions(questions);
    return true;
  }

  function getUnansweredCount() {
    return getQuestions().filter(function (q) { return q.status === 'pending'; }).length;
  }

  window.StorageQA = {
    getQuestions: getQuestions,
    addQuestion: addQuestion,
    getAnsweredQuestions: getAnsweredQuestions,
    getAllQuestions: getAllQuestions,
    updateAnswer: updateAnswer,
    getUnansweredCount: getUnansweredCount
  };
})();
