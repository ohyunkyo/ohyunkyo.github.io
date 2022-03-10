---
title: "github pages 를 사용하여 블로그 만들기"
date: "2022-03-08"
---

## 0. 서론
요즘 공부한것들 정리할 겸 포트폴리오 제작을 위해 블로그에 글을 쓰고 있었다.  
그러던중 이직을 위해서, 그리고 나를 위해서 처음부터 형식을 잘 갖춰놓는게 좋겠다는 생각이 들어 다른 개발자들의 포트폴리오를 찾아봤다.

다른 개발자들은 각자의 방법으로 포트폴리오를 제작하고, 블로그를 운영하고 있었는데 나는 그중에서 github pages 를 선택했다.  
소스코드 형태로 관리 할 수 있다는것. 그리고 github 답게 수정 기록을 모두 볼수 있는게 내가 생각하는 장점이였다.  
기업에서 제공하는 블로그에선 하지 못할 공부(FE 관련된거)를 해야만 하는것도 선택한 이유중 하나였다.

이럴때 아니면 언제 해보겠어

## 1. github pages 가 뭔데?
github pages 에서 블로그를 만드는것은 일반적으로 생각하는 블로그와 다르다.  
기본적으로는 웹 사이트를 만드는것이라고 생각하면 되는데  
[이 영상](https://youtu.be/2MsN8gpT6jY) 에선 github pages 가 github repository 를 웹 사이트로 바꿔준다고 말한다.  
그리고 웹 사이트를 만드는데 데이터베이스도, 서버도 필요 없다고 설명한다. 심지어는 HTML 을 몰라도 된단다.

하지만 오늘은 사용하는 방법은 그런 지식 없이는 따라하기 힘들 것 같다.

## 2. gatsby 로 시작하기
[gatsby](https://github.com/gatsbyjs/gatsby-starter-blog) 는 웹 사이트를 만들기 위한 react 기반의 프레임워크인데, 공식 테마를 사용하여 쉽게 시작할 수 있다.  
먼저 `gatsby` 모듈을 설치 한 다음 `gatsby new [rootPath] [starter]` 로 소스코드를 다운로드 한다.  
이때 rootPath 에 입력한 인수와 같은 이름을 가진 디렉토리가 생성되고 그안에 소스코드가 다운로드된다. 만약 존재하는 디렉토리라면 디렉토리 생성은 생략된다.
```shell
npm install -g gatsby-cli
gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
```
위 명령어로 설치했다면 로컬에 웹 사이트를 띄워야 하는데  
나는 설치중 sharp 에러가 발생하여 `package.json` 파일의 `dependencies` 필드 가장 마지막에 sharp 부분을 추가 했다.
```json
"sharp": "^0.30.2" 
```
그 다음 모듈을 모두 다운로드 하고 `start` 스크립트를 실행한다.  
`start` 스크립트는 gatsby 소스코드에 설정되어 있는데, 개발서버를 실행시키는 `gatsby develop` 명령어를 실행하는 역할이다.
```shell
npm install
npm run start
```
이렇게 하면 로컬에서 웹 사이트에 접속 가능하다 (http://localhost:8000)

## 3. github 에 올려보자
> 나는 Git GUI 인 소스트리를 사용중인데, 내 생각엔 GUI 가 소스코드를 관리하는 흐름을 직관적으로 파악하기 쉬워보이기 때문에 처음 깃허브를 사용해보는 사람은 CLI 보다는 GUI 로 시작하는것이 나을것 같다.

깃허브에 [username].github.io 라는 이름의 저장소를 추가한다.  
[username] 은 깃허브 주소에서 사용되는 그것이다.

>이렇게 정해진 이름을 사용하지 않고 원하는 프로젝트 이름으로도 사용 가능하지만 설정 방법이 조금 다른데, 그 방법은 나중에 필요할때 해보겠다.  

저장소 추가 이후 소스트리에서 blog 디렉토리를 로컬 저장소로 추가하고 `commit` 한 뒤 방금 만든 저장소를 원격 저장소로 설정하여 푸시한다.

## 4. 배포하기

이제 배포만 하면 끝이다.  
배포를 위해서는 꼭 설정해줘야 하는 파일이 있다.  

* `package.json` 파일
  * `script` 필드 값 추가 `"deploy": "gatsby build && gh-pages -d public"`
  * `homepage` 필드 값 변경 `https://[username].github.io`  
  * `repository` 필드 값 변경 `"url" : "git+https://github.com/[username]/[username].github.io.git"`

값을 모두 수정했다면 다시한번 `commit & push` 하여 원격 저장소에 반영해주자.

이제 `deploy` 스크립트를 실행하면 배포가 완료된다.

```shell
npm install gh-pages
npm run deploy
```

하지만 아직은 완료된게 아니다.

배포가 잘 실행되었다면 `gh-pages` 라는 브랜치가 생성 되었을텐데 이 브랜치를 github pages 가 퍼블리싱 할 브랜치로 설정해줘야 한다. 

깃허브 저장소페이지에 가서 Settings - Pages 탭에 있는 Source 옵션을 gh-pages 로 변경해주고 저장하면  
로컬에서 본 화면을 https://[username].github.io 에서도 볼 수 있다.

## 99. 끝나고 나서
아무것도 모르고 블로그를 만들 생각만 할 때에는 안되던 것들이 있었다.  
그러다 귀찮음을 감수하고 여러번 반복했을때, 그리고 공부하기로 마음먹었을때 신기하게도 문제가 해결됐다.  

뭐든지 시작하는게 제일 힘들다고 한다.  
그래서 시작이 반이라는 말도 있겠지만, 나머지 절반을 채우기 위해선 시작하는것보다 더 큰 노력이 필요하다는 생각을 했다.