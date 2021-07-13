# card-maker

react, firebase, cloudinary를 활욯한 명함만들기 프로젝트

## 실행 명령어

yarn start
<br />

## UI
![로그인화면](https://user-images.githubusercontent.com/68727627/125426998-26c31f07-85ec-44eb-bfca-948a30d8a821.JPG)
(로그인 화면)
![화면1](https://user-images.githubusercontent.com/68727627/125427104-82778609-601e-4054-8c7c-75494cf8e9ae.JPG)
(메인화면)

![반응형구현1](https://user-images.githubusercontent.com/68727627/125427316-c2d9c32a-1dc9-41f6-8e6d-c67193b0061d.JPG)
(반응형 구현)
<br />

## 사용 기술


![html5](https://user-images.githubusercontent.com/68727627/125427746-046b495e-f9cb-43d2-ae32-4626096e4cb1.png)
![react](https://user-images.githubusercontent.com/68727627/125427884-8c76b5b3-dda9-4929-bf19-31198660721f.png)
![postcss](https://user-images.githubusercontent.com/68727627/125427777-dd4196cb-9a33-413d-afec-706e30cf8be4.png)
![router](https://user-images.githubusercontent.com/68727627/125427966-de3d9550-0ae6-4e7a-8833-5ddddcbff1bb.png)
![firebase](https://user-images.githubusercontent.com/68727627/125428014-0b02a560-f316-4c87-a90e-7fdc82287b17.png)
![cloudinary](https://user-images.githubusercontent.com/68727627/125428026-9ba47bf2-0e20-428f-82a9-33d531cf6807.png)

(htme5, css3, react.js, postCSS, router, firebase, cloudinary)

<br />

## 컴포넌트 구조



- App
    - Login (router)
        - Header
        - Footer
    - Maker (router)
        - Header
        - editor
            - CardEditForm
                - ImageFileInput
        - Preview
            - Card
        - Footer

<br />

## API



- firebase Auth API : 구글,페이스북,깃허브 로그인 인증 API
- firebase realtime database API : 사용자 별 카드 정보 DB
- cloudinary API : 이미지 업로드

<br />

## 서비스

- 파이어베이스 초기화 (firebase.js)

```jsx
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
```

- 인증 (auth_service.js)

    login(providerName) : 구글,페이스북,깃허브 플랫폼 팝업으로 로그인

    onAuthChange(onUserChanged) : 현재 로그인한 사용자를 가져옴.

    logout() : 사용자 로그아웃(onAuthStateChanged에서 user값이 null이됨).

- DB에 카드 정보저장 (card_repository.js)

    사용자 정보 : firebaseAuth에 인증된 사용자의 uid

    카드 데이터 : name, company, job, email, tel

    saveCard(userId, card) : firebase DB에 card정보(name, )저장

    removeCard(userId, card) : 해당 카드의 정보 삭제

- 이미지 업로드 ( ImageUpoloader.js )

    upload(file) : cloudinary에 json형식으로 이미지 정보를 보냄(POST).

<br />

### 레퍼런스

- firebase: [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)
- cloudinary: [https://cloudinary.com/documentation/upload_images#example_upload_multiple_files_using_a_form](https://cloudinary.com/documentation/upload_images#example_upload_multiple_files_using_a_form)
