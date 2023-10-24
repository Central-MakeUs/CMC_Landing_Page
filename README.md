# CMC 홈페이지

## Project setup

```bash
// 저장소 복제
$ git clone https://github.com/Central-MakeUs/CMC_Landing_Page.git

// clone한 폴더로 이동
$ cd CMC_Landing_Page

// yarn 환경구성
$ yarn install
```

## Project 데이터 추가방법

현재 프로젝트 구조에서 `src` 폴더안의 `data`안에 **`app.json` 파일과 `logo` 폴더**가 존재합니다.

```bash
├── src
    └── data
          ├── logo
          └── app.json
```

각 파일에 대해 설명하면 다음과 같습니다.

- `logo`: 기수별 로고 이미지가 저장되어있는 폴더입니다.
- `app.json`: 홈페이지에 표시될 프로젝트 데이터가 저장되어있는 파일입니다.

### logo

예를들어 13기 프로젝트들의 로고 이미지를 저장하고 싶다면 `logo` 폴더안에 `13기` 폴더를 생성하고, 그 안에 로고 이미지들을 저장하면 됩니다.

### app.json

현재 데이터들은 기수 기준 내림차순으로 들어가 있습니다.따라서 13기 프로젝트 데이터 -> 12기 프로젝트 데이터 -> ... 순으로 들어갑니다.

데이터를 넣을때에는 아래와 같은 형식으로 넣어주시면 됩니다.

```json
[
  {
    "name": "Qfeed",
    "year": "13",
    "description": "친구에 자신의 마음을 표현하고 싶지만, 주변 친구들과의 관계가 망가질까 주저하지 마세요.",
    "link": {
      "ios": "", // 링크가 없으면 빈칸
      "android": "https://play.google.com/store/apps/details?id=com.qfeed&pcampaignid=web_share"
    },
    "logo": "./logo/13/qfeed.png"
  },
  ...
]
```

따라서 14기면 아래와 같은 형식으로 프로젝트 데이터가 들어갑니다.

```json
[
  {
    "name": "프로젝트 이름",
    "year": "14",
    "description": "프로젝트 설명",
    "link": {
      "ios": "{링크 없으면 빈칸으로 두세요}",
      "android": "링크주소"
    },
    "logo": "./logo/14/{파일이름}.png"
  },
  ...
]
```

> ‼️ logo 경로를 잘 맞춰주셔야 합니다! ‼️

로고 경로가 맞지 않으면 오류가 발생할 수 있습니다.
