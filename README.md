# 회원가입 & 로그인 & 마이페이지 구현

## 주소
https://jaek1783.github.io/sign
## 구현내용
 * 회원가입 버튼, 로그인 버튼 구현 => 클릭시 하단에 회원가입Contaienr와 로그인Container가 Display:none에서 Display:flex로 변경되도록 구현
 
 * 이름, 이메일(ID), 비밀번호를 통해 회원가입 되도록 구현
 
 * Firebase와 연동하여 Firebase의 Firestore로 이름, 이메일(ID)가 저장되도록 구현
 
 * 저장된 이메일(ID)과 비밀번호를 가지고 로그인 구현
 
 * 로그인되면 자동으로 하단에 마이페이지 생성
 
 * 회원가입 시 자동으로 Firestore에 img:null필드가 추가되게 하여 추후 마이페이지에서 사진 업로드를 통해 경로가 img필드에 저장되도록 구현

## 서비스 이미지
<img width="500" alt="image" src="https://user-images.githubusercontent.com/73649967/189257352-3cfffc47-b868-4a21-93c8-7e7fc37b3d4b.png"> <img width="500" alt="image" src="https://user-images.githubusercontent.com/73649967/189257282-ce5a6e40-d505-4436-bfd8-2c6a060bcf38.png">
<img width="500" alt="image" src="https://user-images.githubusercontent.com/73649967/189257186-95eb3de3-c2fa-4078-b544-2e040fed6c05.png"> <img width="500" alt="image" src="https://user-images.githubusercontent.com/73649967/189257569-b652ad68-76eb-4278-88a9-1f34e96939c1.png">
<img width="500" alt="image" src="https://user-images.githubusercontent.com/73649967/189257636-ba328441-c38c-414e-ae09-f48e02ffa82e.png"> <img width="500" alt="image" src="https://user-images.githubusercontent.com/73649967/189258009-665a18ba-d4a6-45bc-b790-4db09d3135f7.png">

## 사용스택
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

## 참고자료
### 스파르타코딩클럽 심화반 1주차 ~ 3주차
* 비동기 Promise와 async, await
* 파이어베이스와 연동하여 회원가입, 로그인 구현하기
### 파이어베이스 Docs
* doc, setDoc을 통한 이미지 업데이트
