---
title: "재고관리 웹 프로젝트 명세서"
date: "2022-08-18"
last_modified_at: "2022-08-00"
category: inventory-manage
---

## 0. 서론
업무상 상품 재고를 관리하는 웹 사이트가 필요한 일이 생겼었다.  
기존에는 수동으로 작업하던 '물류센터 발주서 생성' 과 '발송된 재고 처리' 를 자동화 하려는것이 가장 큰 목적이였다.

현재는 이 목적을 모두 만족하는 웹 사이트를 개발 완료한 상태인데, 기획 및 개발 완료한 결과물을 토대로 이 문서를 작성한다.   
또한 이 문서로 프로젝트 산출물을 대체할 예정이다.

## 1. 개요
- 프로젝트 이름 : 재고관리 웹
- 개발 기간 : 2021-11-12 ~ 2022-06-15
  - 각 절차별 개발 기간 :
    - 요구사항 분석 : 2021-11-12 ~ 2021-11-15
    - DB 설계 : 2021-11-15 ~ 2021-11-16
    - 인프라 세팅 : 2021-11-16 ~ 2021-11-17
    - 웹 개발 : 2021-11-18 ~ 2021-12-21
    - 유지보수 및 요청사항 반영 : 2021-12-22 ~ 2022-03-14
    - front / back 분리 : 2022-03-15 ~ 2022-04-29
    - backend 배포 : 2022-05-02 ~ 2022-05-13
    - frontend 배포 : 2022-05-16 ~ 2022-05-20
    - backend 배포 고도화 : 2022-05-20 ~ 2022-06-15
- 목적 : 재고관리 자동화
- 주요 기능 :
  - 물류센터 양식으로 된 발주서 생성 자동화
  - 발송된 재고 처리 자동화

## 3. 요구사항 분석
### 3.1 페이지 요구사항(front-end)
- 품목 리스트
  - 각 품목으로 이동 가능한 링크를 제공한다.
- 품목 상세
  - 해당 품목을 제어하는 버튼을 제공한다.
  - 각 구성요소(상품, 부자재, 패키지)로 이동 가능한 버튼을 제공한다.
- 품목 등록
- 품목 수정
- 품목 재고 리스트
  - 각 상품과 부자재의 재고 관련 정보를 출력한다.
- 상품 리스트
  - 각 상품으로 이동 가능한 링크를 제공한다.
- 상품 상세
  - 해당 상품을 제어하는 버튼을 제공한다.
  - 패키지에 등록 가능한 화면을 제공한다.
- 상품 추가
- 상품 수정
- 부자재 리스트
  - 각 부자재로 이동 가능한 링크를 제공한다.
- 부자재 상세
  - 해당 부자재를 제어하는 버튼을 제공한다.
  - 패키지에 등록 가능한 화면을 제공한다.
- 부자재 추가
- 부자재 수정
- 패키지 리스트
  - 각 패키지로 이동 가능한 링크를 제공한다.
- 패키지 상세
  - 해당 패키지를 제어하는 버튼을 제공한다.
  - 해당 패키지의 구성품을 제어하는 버튼을 제공한다. 
- 패키지 추가
- 패키지 수정
- 상품 월별 재고 기록
  - 각 월별로 해당 월에 남아있던 재고를 출력한다
- 상품 재고 기록 리스트
  - 각 재고 기록을 제어하는 버튼을 제공한다.
- 상품 재고 기록 등록
- 상품 재고 기록 수정
- 부자재 월별 재고 기록
  - 각 월별로 해당 월에 남아있던 재고를 출력한다
- 부자재 재고 기록 리스트
  - 각 재고 기록을 제어하는 버튼을 제공한다.
- 부자재 재고 기록 등록
- 부자재 재고 기록 수정
- 재고 처리 방법 리스트
  - 각 재고 처리 방법을 제어하는 버튼을 제공한다.
- 재고 처리 방법 추가
- 재고 처리 방법 수정
- 발주서 리스트
  - 특정 시간에 유입된 발주서로 이동 가능한 링크를 제공한다.
- 발주서 큐
  - 해당 시간에 유입된 발주 건을 모두 출력한다.
  - 해당 시간에 유입된 발주 건을 제어하는 버튼을 제공한다.
- 발주서 상세
- 발주서 등록
  - 엑셀 파일 형식 지정하여 업로드 하는 기능을 제공한다.
  
### 3.2 기능 요구사항(Functional Requirements, back-end)
- 외부 데이터 수신
  - 외부 사이트에서 전달하는 데이터를 수신하여 저장한다.
- 엑셀 업로드
  - 엑셀 파일 업로드 하여 데이터를 저장한다.

### 3.3 비기능 요구사항(Non-Functional Requirements)
#### 3.3.1 개발 스택
- Application and Data
  - front-end : javascript, Vue.js, Amazon S3
  - back-end : python, django, nginx, gunicorn, Amazon EC2
  - database : mariadb, Amazon RDS
- dev-ops
  - 버전관리 : Git, GitHub
  - CI/CD : Jenkins
  - 가상화 : docker
#### 3.3.2 소프트웨어 버전
- Vue.js : latest
- python : 3.8
- django : 3.2.6
- nginx : docker image(nginx:latest)
- gunicorn : latest
- mariadb : latest(Amazon RDS)
- Jenkins : docker image(jenkins/jenkins:lts)
- docker : latest
#### 3.3.3 사용성
- 각 페이지에서 필요한 기능의 API Endpoint 를 제공한다.(back-end)
#### 3.3.4 성능
- 동시접속자 50명을 가정하고 적절한 성능의 인프라 구축.(dev-ops)
#### 3.3.5 배포
- [젠킨스를 사용한 장고 배포](/DevOps/deploy-django-with-jenkins/) 와 동일한 방식으로 배포.(dev-ops)

## 4. DB 설계
### 4.1 모델 명세서
모델 명세서에는 django 의 `models.py` 파일에서 필요한 필드 이름, 옵션등을 서술한다.  

#### 4.1.1 Business - 품목
| no  | Field Name  | Field Type | Option                     | 설명    |
|-----|-------------|------------|----------------------------|-------|
| 1   | name        | CharField  | max_length=20, unique=True | 품목명   | 
| 1   | description | TextField  | null=True, blank=True      | 품목 설명 | 

#### 4.1.2 Product - 상품
| no  | Field Name       | Field Type        | Option                         | 설명    |
|-----|------------------|-------------------|--------------------------------|-------|
| 1   | name             | CharField         | max_length=64, unique=True     | 상품 명  | 
| 1   | description      | TextField         | null=True, blank=True          | 상품 설명 | 
| 1   | business         | ForeignKey        | to=Business, on_delete=PROTECT | 품목    | 
| 1   | maximum_quantity | SmallIntegerField |                                | 최대수량  | 

#### 4.1.3 Supplement - 부자재
| no  | Field Name       | Field Type        | Option                         | 설명     |
|-----|------------------|-------------------|--------------------------------|--------|
| 1   | name             | CharField         | max_length=64, unique=True     | 부자재 명  | 
| 1   | description      | TextField         | null=True, blank=True          | 부자재 설명 | 
| 1   | business         | ForeignKey        | to=Business, on_delete=PROTECT | 품목     | 
| 1   | maximum_quantity | SmallIntegerField |                                | 최대수량   | 

#### 4.1.4 Package - 패키지
| no  | Field Name   | Field Type   | Option                                            | 설명        |
|-----|--------------|--------------|---------------------------------------------------|-----------|
| 1   | name         | CharField    | max_length=64, unique=True                        | 패키지 명     | 
| 1   | description  | TextField    | null=True, blank=True                             | 패키지 설명    | 
| 1   | serial_code  | CharField    | max_length=64, unique=True, null=True, blank=True | 제품번호      | 
| 1   | product_code | CharField    | max_length=64, null=True, blank=True              | 판매자 상품코드  | 
| 1   | is_split     | BooleanField | default=True                                      | 분할여부      | 
| 1   | memo         | TextField    | null=True, blank=True                             | 설명        | 
| 1   | business     | ForeignKey   | to=Business, on_delete=PROTECT                    | 품목        | 
| 1   | product      | ForeignKey   | to=Product, through='PackageProduct'              | 구성품 - 상품  | 
| 1   | supplement   | ForeignKey   | to=Supplement, through='PackageSupplement'        | 구성품 - 부자재 | 

#### 4.1.5 PackageProduct - 패키지_상품
| no  | Field Name | Field Type         | Option                        | 설명  |
|-----|------------|--------------------|-------------------------------|-----|
| 1   | package    | ForeignKey         | to=Package, on_delete=PROTECT | 패키지 | 
| 1   | product    | ForeignKey         | to=Product, on_delete=PROTECT | 상품  |
| 1   | quantity   | SmallIntegerField  |                               | 수량  |

#### 4.1.6 PackageSupplement - 패키지_부자재
| no  | Field Name | Field Type          | Option                           | 설명  |
|-----|------------|---------------------|----------------------------------|-----|
| 1   | package    | ForeignKey          | to=Package, on_delete=PROTECT    | 패키지 | 
| 1   | supplement | ForeignKey          | to=supplement, on_delete=PROTECT | 부자재 |
| 1   | quantity   | SmallIntegerField   |                                  | 수량  |


### 4.2 ERD
`models.py` 파일을 참조해 생성될 데이터베이스 테이블의 ERD 이다. 

![erd](420-erd-v4.0.png)

## 5. API 명세서
각 API Endpoint 의 상세 정보를 담은 문서로, 내용이 많기 때문에 별도의 페이지를 통해 관리한다.

[API 명세서](/project-gaon/api-specification/)

## 6. 화면설계서
![prototype](610-prototype-v1.0.png)

## 7. 개발일지

[개발일지](/project-gaon/dev-log/)

## References
[0. 어떤 블로그](https://dev-coco.tistory.com/111)  
[3.2 비기능 요구사항](https://ee-22-joo.tistory.com/2)  
[6. 화면설계서 - 와이어프레임과 프로토타입](https://blog.adobe.com/ko/publish/2018/03/06/everything-you-need-to-know-about-wireframes-and-prototypes)  
[6. 프로토타입 예제](https://ditoday.com/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84%EA%B3%BC-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EA%B5%AC%EB%B3%84%ED%95%98%EA%B8%B0/)
