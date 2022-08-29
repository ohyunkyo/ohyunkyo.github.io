---
title: "재고관리 웹 프로젝트 명세서"
date: "2022-08-18"
last_modified_at: "2022-08-29"
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
```
- 1.1 품목 리스트
  - 각 품목으로 이동 가능한 링크를 제공한다.
- 1.2 품목 상세
  - 해당 품목을 제어하는 버튼을 제공한다.
  - 각 구성요소(상품, 부자재, 패키지)로 이동 가능한 버튼을 제공한다.
- 1.3 품목 등록
- 1.4 품목 수정
- 1.5 품목 재고 리스트
  - 각 상품과 부자재의 재고 관련 정보를 출력한다.
- 2.1 상품 리스트
  - 각 상품으로 이동 가능한 링크를 제공한다.
- 2.2 상품 상세
  - 해당 상품을 제어하는 버튼을 제공한다.
  - 패키지에 등록 가능한 화면을 제공한다.
- 2.3 상품 추가
- 2.4 상품 수정
- 3.1 부자재 리스트
  - 각 부자재로 이동 가능한 링크를 제공한다.
- 3.2 부자재 상세
  - 해당 부자재를 제어하는 버튼을 제공한다.
  - 패키지에 등록 가능한 화면을 제공한다.
- 3.3 부자재 추가
- 3.4 부자재 수정
- 4.1 패키지 리스트
  - 각 패키지로 이동 가능한 링크를 제공한다.
- 4.2 패키지 상세
  - 해당 패키지를 제어하는 버튼을 제공한다.
  - 해당 패키지의 구성품을 제어하는 버튼을 제공한다. 
- 4.3 패키지 추가
- 4.4 패키지 수정
- 5.1 상품 재고 기록 리스트
  - 각 재고 기록을 제어하는 버튼을 제공한다.
- 5.2 상품 재고 기록 등록
- 5.3 상품 재고 기록 수정
- 6.1 부자재 월별 재고 기록
  - 각 월별로 해당 월에 남아있던 재고를 출력한다
- 6.1 부자재 재고 기록 리스트
  - 각 재고 기록을 제어하는 버튼을 제공한다.
- 6.2 부자재 재고 기록 등록
- 6.3 부자재 재고 기록 수정
- 7.1 월별 재고 기록
  - 각 월별로 해당 월에 남아있던 재고 를 출력한다
- 8.1 재고 처리 방법 리스트
  - 각 재고 처리 방법을 제어하는 버튼을 제공한다.
- 8.2 재고 처리 방법 추가
- 8.3 재고 처리 방법 수정
- 9.1 발주서 리스트
  - 특정 시간에 유입된 발주서로 이동 가능한 링크를 제공한다.
- 9.2 발주서 큐
  - 해당 시간에 유입된 발주 건을 모두 출력한다.
  - 해당 시간에 유입된 발주 건을 제어하는 버튼을 제공한다.
- 9.3 발주서 상세
- 9.4 발주서 등록
  - 엑셀 파일 형식 지정하여 업로드 하는 기능을 제공한다.
```
  
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
#### 3.3.3 성능
- 동시접속자 50명을 가정하고 적절한 성능의 인프라 구축.(dev-ops)
#### 3.3.4 배포
- [젠킨스를 사용한 장고 배포](/devops/deploy-django-with-jenkins/) 와 동일한 방식으로 배포.(dev-ops)

## 4. DB 설계
### 4.1 모델 명세서
모델 명세서에는 django 의 `models.py` 파일에서 필요한 필드 이름, 옵션등을 서술한다.  

#### 4.1.1 Business - 품목
| no  | Field Name  | Field Type | Option                     | 설명    |
|-----|-------------|------------|----------------------------|-------|
| 1   | name        | CharField  | max_length=20, unique=True | 품목명   | 
| 2   | description | TextField  | null=True, blank=True      | 품목 설명 | 
 
#### 4.1.2 Product - 상품
| no  | Field Name       | Field Type        | Option                         | 설명    |
|-----|------------------|-------------------|--------------------------------|-------|
| 1   | name             | CharField         | max_length=64, unique=True     | 상품 명  | 
| 2   | description      | TextField         | null=True, blank=True          | 상품 설명 | 
| 3   | business         | ForeignKey        | to=Business, on_delete=PROTECT | 품목    | 
| 4   | maximum_quantity | SmallIntegerField |                                | 최대수량  | 

#### 4.1.3 Supplement - 부자재
| no  | Field Name       | Field Type        | Option                         | 설명     |
|-----|------------------|-------------------|--------------------------------|--------|
| 1   | name             | CharField         | max_length=64, unique=True     | 부자재 명  | 
| 2   | description      | TextField         | null=True, blank=True          | 부자재 설명 | 
| 3   | business         | ForeignKey        | to=Business, on_delete=PROTECT | 품목     | 
| 4   | maximum_quantity | SmallIntegerField |                                | 최대수량   | 

#### 4.1.4 Package - 패키지
| no  | Field Name   | Field Type   | Option                                            | 설명        |
|-----|--------------|--------------|---------------------------------------------------|-----------|
| 1   | name         | CharField    | max_length=64, unique=True                        | 패키지 명     | 
| 2   | description  | TextField    | null=True, blank=True                             | 패키지 설명    | 
| 3   | serial_code  | CharField    | max_length=64, unique=True, null=True, blank=True | 제품번호      | 
| 4   | product_code | CharField    | max_length=64, null=True, blank=True              | 판매자 상품코드  | 
| 5   | is_split     | BooleanField | default=True                                      | 분할여부      | 
| 6   | memo         | TextField    | null=True, blank=True                             | 설명        | 
| 7   | business     | ForeignKey   | to=Business, on_delete=PROTECT                    | 품목        | 
| 8   | product      | ForeignKey   | to=Product, through='PackageProduct'              | 구성품 - 상품  | 
| 9   | supplement   | ForeignKey   | to=Supplement, through='PackageSupplement'        | 구성품 - 부자재 | 

#### 4.1.5 PackageProduct - 패키지_상품
| no  | Field Name | Field Type         | Option                        | 설명  |
|-----|------------|--------------------|-------------------------------|-----|
| 1   | package    | ForeignKey         | to=Package, on_delete=PROTECT | 패키지 | 
| 2   | product    | ForeignKey         | to=Product, on_delete=PROTECT | 상품  |
| 3   | quantity   | SmallIntegerField  |                               | 수량  |

#### 4.1.6 PackageSupplement - 패키지_부자재
| no  | Field Name | Field Type          | Option                           | 설명  |
|-----|------------|---------------------|----------------------------------|-----|
| 1   | package    | ForeignKey          | to=Package, on_delete=PROTECT    | 패키지 | 
| 2   | supplement | ForeignKey          | to=supplement, on_delete=PROTECT | 부자재 |
| 3   | quantity   | SmallIntegerField   |                                  | 수량  |

#### 4.1.7 PurchaseOrder - 발주서 기록
| no  | Field Name               | Field Type    | Option                                                               | 설명      |
|-----|--------------------------|---------------|----------------------------------------------------------------------|---------|
| 1   | order_number             | CharField     | max_length=64, null=True, blank=True                                 | 주문번호    | 
| 2   | orderer                  | CharField     | max_length=30                                                        | 주문자     | 
| 3   | orderer_phone_number     | CharField     | max_length=15                                                        | 주문자 연락처 | 
| 4   | recipient                | CharField     | max_length=30                                                        | 수령인     | 
| 5   | recipient_phone_number   | CharField     | max_length=30                                                        | 수령인 연락처 | 
| 6   | package                  | ForeignKey    | to=Package, on_delete=PROTECT                                        | 패키지     | 
| 7   | options                  | CharField     | max_length=20, null=True, blank=True                                 | 옵션      | 
| 8   | order_quantity           | IntegerField  | max_length=10, null=True, blank=True                                 | 주문 수량   | 
| 9   | postal_code              | CharField     | max_length=10, null=True, blank=True                                 | 우편번호    | 
| 10  | address                  | TextField     | max_length=30                                                        | 주소      | 
| 11  | epost                    | CharField     | max_length=10, null=True, blank=True                                 | 우체국택배   | 
| 12  | fare_type                | CharField     | max_length=10, null=True, blank=True                                 | 운임구분    | 
| 13  | product_code             | CharField     | max_length=30, null=True, blank=True                                 | 상품코드번호  | 
| 14  | payment_code             | CharField     | max_length=30, null=True, blank=True                                 | 결제코드    | 
| 15  | member_code              | CharField     | max_length=30, null=True, blank=True                                 | 멤버코드    | 
| 16  | group_code               | CharField     | max_length=10, null=True, blank=True                                 | 분류코드    | 
| 17  | baggage_number           | CharField     | max_length=64, null=True, blank=True                                 | 송장번호    | 
| 18  | counsel_history          | CharField     | max_length=10, null=True, blank=True                                 |         | 
| 19  | memo                     | TextField     | null=True, blank=True                                                | 메모      | 
| 20  | created_at               | DateTimeField |                                                                      | 발주서 생성일 | 
| 21  | status                   | CharField     | max_length=10, default='pending', choices=common_const.COMMON_STATUS | 발주상태    | 
| 22  | product_order_number     | CharField     | max_length=64, null=True, blank=True                                 |         |

#### 4.1.7 InventoryProcess - 재고 처리 방법
| no  | Field Name | Field Type       | Option         | 설명          |
|-----|------------|------------------|----------------|-------------|
| 1   | name       | CharField        | max_length=15  | 재고 처리 방법 이름 |
| 2   | effect     | BooleanField     |                | 재고 처리       |

#### 4.1.8 ProductHistory - 상품 재고 처리 기록
| no  | Field Name        | Field Type    | Option                                                               | 설명          |
|-----|-------------------|---------------|----------------------------------------------------------------------|-------------|
| 1   | business          | ForeignKey    | to=Business, on_delete=models.PROTECT, blank=True                    | 품목          |
| 2   | product           | ForeignKey    | to=Product, on_delete=models.PROTECT, blank=True                     | 상품          |
| 3   | status            | CharField     | max_length=20, default='pending', choices=common_const.COMMON_STATUS | 상태          |
| 4   | quantity          | IntegerField  |                                                                      | 수량          |
| 5   | inventory_process | ForeignKey    | to=InventoryProcess, on_delete=PROTECT                               | 재고 처리 방법    |
| 6   | expiry_at         | DateField     | null=True, blank=True                                                | 만료일         |
| 7   | created_at        | DateTimeField | auto_now_add=True                                                    | 재고 처리일      |
| 8   | updated_at        | DateTimeField | auto_now=True                                                        | 수정일         |
| 9   | reserved_at       | DateTimeField | null=True, blank=True                                                | 예약일         |
| 10  | admin             | ForeignKey    | to=User, on_delete=PROTECT, blank=True                               | 재고 처리한 관리자  |

#### 4.1.9 SupplementHistory - 부자재 재고 처리 기록
| no  | Field Name        | Field Type    | Option                                                               | 설명         |
|-----|-------------------|---------------|----------------------------------------------------------------------|------------|
| 1   | business          | ForeignKey    | to=Business, on_delete=models.PROTECT, blank=True                    | 품목         |
| 2   | supplement        | ForeignKey    | to=Supplement, on_delete=models.PROTECT, blank=True                  | 부자재        |
| 3   | status            | CharField     | max_length=20, default='pending', choices=common_const.COMMON_STATUS | 상태         |
| 4   | quantity          | IntegerField  |                                                                      | 수량         |
| 5   | inventory_process | ForeignKey    | to=InventoryProcess, on_delete=PROTECT                               | 재고 처리 방법   |
| 6   | expiry_at         | DateField     | null=True, blank=True                                                | 만료일        |
| 7   | created_at        | DateTimeField | auto_now_add=True                                                    | 재고 처리일     |
| 8   | updated_at        | DateTimeField | auto_now=True                                                        | 수정일        |
| 9   | reserved_at       | DateTimeField | null=True, blank=True                                                | 예약일        |
| 10  | admin             | ForeignKey    | to=User, on_delete=PROTECT, blank=True                               | 재고 처리한 관리자 |

### 4.2 ERD
`models.py` 파일을 참조해 생성된 데이터베이스 테이블의 ERD 이다. 

![erd](420-erd-v1.0.png)

## 5. API 명세서
각 API Endpoint 의 상세 정보를 담은 문서로, 내용이 많기 때문에 별도의 페이지를 통해 관리한다.

[API 명세서](/projects/inventory-manage/api-specification/)

## 6. 화면설계서
![prototype](610-prototype-v1.0.png)

## 7. 개발일지

[개발일지](https://munthe.tistory.com/category/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80/%EC%9E%AC%EA%B3%A0%EA%B4%80%EB%A6%AC%EC%9B%B9)

## 99. 개발 후 소감
개발을 다 끝내고 보니 부족한 부분이 많이 보였다.  
특히 구조적인 문제가 눈에 많이 들어왔는데, 완료한 이후에도 코드는 수정하면 되지만 전체적인 구조는 상대적으로 바꾸기 어렵다. (ex: 상품, 부자재를 분류하여 관리하는 것)  

재고관리 웹은 기획 없이 간략한 요구사항 만을 가지고 개발을 시작했었다.    
하지만 다음 프로젝트에서는 더 많이 공부하고 많이 알아봐서 더 좋은 기획을 통해 더 좋은 구조, 더 나은 소스코드를 가진 결과물이 나오도록 해야겠다. 

## References
[3.2 비기능 요구사항](https://ee-22-joo.tistory.com/2)  
[6. 화면설계서 - 와이어프레임과 프로토타입](https://blog.adobe.com/ko/publish/2018/03/06/everything-you-need-to-know-about-wireframes-and-prototypes)  
[6. 프로토타입 예제](https://ditoday.com/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84%EA%B3%BC-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EA%B5%AC%EB%B3%84%ED%95%98%EA%B8%B0/)
