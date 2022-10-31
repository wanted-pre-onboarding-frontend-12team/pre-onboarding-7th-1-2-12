# 원티드 프리온보딩 7차 2차 과제

## 과제 설명

> Assignment 2 주제 : - [특정 깃헙 레파지토리](https://github.com/angular/angular-cli)의 이슈 목록과 상세 내용을 확인하는 웹 사이트를 동료학습을 통해 구축합니다.

- 진행 기간 : 2022-10-29 ~ 2022-10-31  


<br />

## 데모 링크

[🚀 GO TO DEMO](https://super-parfait-94f2ba.netlify.app/)

<br />

## 실행 방법

### Local

```bash
# Clone Repo
git clone git@github.com:wanted-pre-onboarding-frontend-12team/assignment-2-team12.git

# Install Dependency
yarn run install

# Run Project
yarn run start
```

<br />

## 12팀 소개

| <img src="https://avatars.githubusercontent.com/u/40523487?v=4"/> | <img src="https://avatars.githubusercontent.com/u/50790145?v=4"/> | <img src="https://avatars.githubusercontent.com/u/108744804?v=4"> | <img src="https://avatars.githubusercontent.com/u/97100045?v=4"/> | <img src="https://avatars.githubusercontent.com/u/92246102?v=4"> | <img src="https://avatars.githubusercontent.com/u/96763714?v=4"> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| <a href="https://github.com/od-log">[팀장] 오다영</a>             | <a href="https://github.com/youngminss">[부팀장] 위영민</a>       | <a href="https://github.com/jong6598">김종현</a>                  | <a href="https://github.com/hopak-e">박상호</a>                   | <a href="https://github.com/forest-6">임승민</a>                 | <a href="https://github.com/kyunghee47">피경희</a>               |


<br/>

## 12팀이 동료학습으로 협업하는 방식  

1. Convention Rule 을 정하고, 모든 팀원이 실천합니다.  

2. 게더 타운에서 만나요~
- 1시부터 6시까지는 12팀이 집중해서 작업하는 코어 시간입니다. 멀리 떨어져 있지만 옆에 있는 것처럼 화면을 공유하고 서로 자유롭게 의견을 나누면서 과제를 해결하기 위해 협업합니다. 

3. gitflow  
- 12팀은 git flow 방식으로 개발하고 있습니다. devlop branch에 자신이 작업한 branch를 merge하려면 최소 두 명 이상의 팀원이 리뷰를 하고, 요청을 수락해야 합니다. 그래서 12팀은 pull request 요청이 오는 즉시 12팀의 디스코드에 알람으로, 메일로 각 팀원들에게 전달되어 빠르게 피드백이 가능하면서도 작업하는 branch의 변경사항을 공유할 수 있는 환경을 구성했습니다.  

4. 피그잼 & 피그마
- 피그잼에 모여서 UI를 고민하는 팀과 데이터를 고민하는 팀으로 나누어서 계획을 짜고, 다시 모여서 함께 짧은 시간동안 완성해야하는 작업을 나눴습니다. 피그잼과 피그마로 함께 만들 소프트웨어를 기획했습니다. UX를 고려한 UI를 만들고 작업을 시작했습니다~

[피그잼에서 고민한 내용 보러가기](https://www.figma.com/file/as4ETRLKXZKBsfxH3q9NNe/Assignment-2---%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%B6%84%EC%84%9D?node-id=2%3A41)  
[피그마에서 기획한 내용 보러가기](https://www.figma.com/file/0zmJkpYLvxIgg0NUWoLPpf/Assignment-2---%EA%B9%83%ED%97%99-%EB%A0%88%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC-%EC%9D%B4%EC%8A%88-%EC%A1%B0%ED%9A%8C-%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=0%3A1)


<br />

## 과제 달성 사항 및 해결 방법

### 필수 요구 사항

- [x] 이슈 목록 및 상세 화면 기능 구현
- [x] Context API를 활용한 API 연동
- [x] 데이터 요청 중 로딩 표시
- [x] 에러 화면 구현
- [x] 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
- [x] 반응형 웹 구현(UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현)

### 선택 사항

- [x] CSS-in-JS 적용  


<br />

## 레포지토리 구조(src)

```jsx
📦src
 ┣ 📂apis
 ┃ ┗  📜issue.ts
 ┣ 📂asset
 ┣ 📂components
 ┃ ┣ 📂feature
 ┃ ┃ ┗ 📂AdsBanner
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂Issue
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂IssueComment
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂IssueHeader
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂IssueNumber
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂IssueTime
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂IssueWriter
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂MarkdownRenderer
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📂Header
 ┃ ┃ ┃  ┗ 📜index.tsx
 ┃ ┣ ┗ 📂Loading
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂shared
 ┃ ┃ ┗ 📜Anchor
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜Avatar
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂constants 
 ┃ ┗ 📜IssueProvider.tsx
 ┃ ┗ 📜StatusProvider.tsx
 ┃ ┗ 📜useStatus.ts
 ┣ 📂pages
 ┃ ┗ 📂Error
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂IssueDetail
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂IssueList
 ┃ ┗ 📜index.ts
 ┣ 📂models
 ┃ ┗ 📜issue.ts
 ┣ 📂pages
 ┃ ┣ 📜ErrorPage.tsx
 ┃ ┣ 📜IssueDetailPage.tsx
 ┃ ┗ 📜IssuesPage.tsx
 ┣ 📂router
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜routePath.ts
 ┣ 📂shared
 ┃ ┣ 📜Title
 ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜styled.d.ts
 ┃ ┣ 📜theme.ts
 ┣ 📂utils
 ┃ ┣ 📜checkArray.ts
 ┃ ┣ 📜dateFormat.ts
 ┃ ┣ 📜interface.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜vite-enc.d.ts
```


## 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
<img src="https://img.shields.io/badge/eslint-181717?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/react-router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">

