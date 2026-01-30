# 개인 소개 웹사이트

HTML, CSS, Vanilla JavaScript만 사용한 개인 소개/포트폴리오 사이트입니다.  
**곽승준** 소개 페이지이며, 다크 테마로 구성되어 있습니다.

## 구성

### 메인 페이지 (`index.html`)

- **히어로**: 프로필 사진, 이름, 한 줄 소개, 키워드
- **자기소개**: ABOUT ME 그리드(이름·생년월일·위치·연락처·이메일·학력), 개발 계기, 가치관, 협업 스타일
- **기술 스택**: HTML, CSS, JavaScript, SQL, Python, C, Git, GitHub
- **프로젝트**: 사과 게임, 오늘 날씨, 캘린더, 오늘의 급식, Q&A (각 GitHub Pages 링크)
- **성장 경험**: 실패와 배운 점, 성장한 순간, 강점
- **연락처**: 이메일, GitHub, Q&A 링크

### Q&A

- 메인 네비게이션의 Q&A는 **외부 사이트** [https://gsj864.github.io/qna/](https://gsj864.github.io/qna/)로 연결됩니다.
- 로컬 `qa.html`, `admin.html`은 LocalStorage 기반 Q&A용으로 남겨 두었습니다 (선택 사용).

## 사용 방법

1. `index.html`을 브라우저에서 열거나 로컬 서버로 실행합니다.
2. 메인에서 소개·기술 스택·프로젝트·성장·연락처를 확인할 수 있습니다.
3. 프로젝트 카드의 "사이트 보기" 버튼으로 각 배포 링크로 이동합니다.

## 기술 스택

- HTML5, CSS3, Vanilla JavaScript
- 외부 라이브러리/프레임워크 없음
- 반응형 (모바일 우선), 다크 테마

## 파일 구조

```
introduce/
├── index.html      # 메인
├── qa.html         # Q&A (로컬용)
├── admin.html      # 관리자 (로컬 Q&A 관리)
├── assets/
│   └── profile.png # 프로필 사진
├── css/
│   └── style.css   # 공통 스타일
├── js/
│   ├── storage.js  # LocalStorage Q&A 유틸
│   ├── main.js     # 메인 페이지 (네비 토글 등)
│   ├── qa.js       # Q&A 페이지 로직
│   └── admin.js    # 관리자 페이지 로직
└── README.md
```

## 프로젝트 링크

| 프로젝트 | URL |
|---------|-----|
| 사과 게임 | https://gsj864.github.io/apple/ |
| 오늘 날씨 | https://gsj864.github.io/weather/ |
| 캘린더 | https://gsj864.github.io/calender/ |
| 오늘의 급식 | https://gsj864.github.io/meal/ |
| Q&A | https://gsj864.github.io/qna/ |
