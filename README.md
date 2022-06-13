## 푸망 프로젝트 Back-end 소개

---

- 국내 최대 부동산 포털 [다방](https://www.dabangapp.com/) 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, Notion, Slack, DBdiagram.io, Github를 통해 소통하고 협업해 프로젝트를 관리했습니다.

<br>

### ✔️ 개발 인원 및 기간

- 개발기간 : 2022/4/18 ~ 2022/5/6
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/justcode-4-2nd-poomuh-back)
- [프론트엔드 github 링크](https://github.com/wecode-bootcamp-korea/justcode-4-2nd-poomuh-front)

<br>

### ✔️ 프로젝트 선정이유

- 이전까지 했던 작업물에서 무리하지않는선에서 새로운 기능에 도전하고 싶었습니다.

- 지도API를 사용해 전달되는 위도, 경도, 그리고 지도에 나타나는 범위값을 이용해 해당하는 매물을 전달하는것에 매력을 느꼈습니다.

<br>

### ✔️ 데모 영상(이미지 클릭)

### (/gif/poomang_filter_1.gif)

<br>

### ✔️ 백엔드 API 문서

_링크들어갈 예정_

<br>
<br>

## 적용 기술 및 구현 기능

---

<br>

### ✔️ 적용 기술

> - Front-End : React.js, Sass, Javascript
> - Back-End : Node.js, Json web token, Express, Bcrypt, My SQL
> - Common : Github, Slack, RESTful API

<br>

### ✔️ 구현 기능

- **일반 회원가입 / 로그인**

- **중개인 회원가입/ 로그인**

- **검색API**  
  getmethod를 활용, 검색한 내용에 해당하는 매물을 건물형태에 따라 데이터를 반환하도록 구현.

- **방내놓기 및 수정 API**  
  post, get, put, delete 메소드를 활용, 방정보를 등록하고 수정, 삭제하며 해당 중개인이 올린 방 리스트를 반환하도록 구현.

- **로그인, 인증인가API**  
  중개인,일반고객 로그인을 구분하고 토큰발급, 이후 토큰을 확인해 회원만 사용가능한 페이지 사용권한 부여하도록 구현.

- **필터API**  
  프론트단에서 필터링 기능에서 체크된 조건들만을 백엔드에서 인자로 받아와 해당 체크된 조건에 해당하는 매물들만 데이터를 보여주도록 기능 구현.

- **좋아요(찜한방) API**

  - **좋아요(찜) 변경 API**  
    회원과 부동산 매물을 연결하는 중간테이블에 해당 회원id와 해당부동산id가 없다면 데이터가 저장이 되고, 데이터가 존재한다면 존재하는 데이터가 삭제가 되는 기능 구현.

  - **좋아요 한 방(찜한 방) 보여주는 API**  
    로그인한 해당 유저가 좋아요 해둔 매물들의 데이터를 보여주는 기능 구현.

- **최근 본 방 API**  
  프론트에서 보내준 매물 id들을 이용하여,
  id들의 순서와 조건에 맞는 매물들의 데이터만을 보여주는 기능 구현.

- **_(선택사항, 백에서만 구현됨)_ 사진 업로드 API**  
  multer 라이브러리를 사용하여, 확장자, 파일 갯수, 파일 크기 등의 조건을 걸어 해당 조건에 만족하는 파일만을 백엔드 폴더에 저장하는 기능 구현.

<br>
<br>

## Reference

---

- 이 프로젝트는 [다방](https://www.dabangapp.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 모든 이미지들은 무료 이미지 및 자가제작 이미지들입니다.
