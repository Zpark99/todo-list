# 📌 프로젝트 이름
Todo_list

## ✨ 프로젝트의 한줄 설명
간단한 할 일 목록을 만들고 관리할 수 있는 Todo List 웹 애플리케이션.

## 제작 기간
2025.07.14 ~ 2025.07.29

## 기능 및 구조

- 할 일 추가 / 수정 / 삭제
- Todo list 체크, 쓰레기통 표시 눌렀을때 화면 우측 현황 숫자 연동

시연 영상

![Image](https://github.com/user-attachments/assets/50a9e95d-d812-42b1-8283-a6a4f45d22a4)

## 💾 데이터 저장 방식
- 로컬스토리지 사용  
(※ 백엔드 연동은 없음)

## 🖥 주요 페이지 구성
- 메인 페이지: Todo 입력, 리스트 출력
  
## ✔️ 리팩토링 시 추가 필요 구성
- 모니터 크기에 따른 Todo 카드 사이즈 최적화

※ 노트북 모니터(14인치 그램)엔 Todo card 사이즈가 맞으나
<img width="956" height="469" alt="Image" src="https://github.com/user-attachments/assets/21b872e5-2abc-48c2-9e0d-a6f581a59a01" />

-> 와이드 모니터의 경우 Todo 카드 사이즈가 안맞는 경우 발생
 <img width="852" height="345" alt="Image" src="https://github.com/user-attachments/assets/a0f95303-27a8-4815-af10-4b64397c1246" />

++ Todo-card 클릭 시 수정 창 따로 구현 필요

## 🛠 사용 기술 스택
- <img src="https://img.shields.io/badge/Html5-E34F26?style=for-the-badge&logo=Html5&logoColor=white"><img src="https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=CSS&logoColor=white"><img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">  

## 🚀 설치 & 실행 방법
```bash
npm install
cd Todo-list
npm run dev
