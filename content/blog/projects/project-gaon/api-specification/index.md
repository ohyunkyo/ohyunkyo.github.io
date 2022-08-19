---
title: "API 명세서"
date: "2022-07-05"
last_modified_at: "2022-07-20"
category: project-gaon
---

## 0. 서론
API 명세서를 마크다운 형식으로 관리하기 위해 개별 문서 생성.  
각 모델별로 관리한다.

### 0.1 Request Header
특별히 서술하지 않는 이상 POST, PATCH, DELETE 메소드에서 다음과 같이 헤더를 설정해야 한다.

| name         | value |
|--------------|-------|
| Content-Type | Json  |

## 1. 사용자 관련 API
### 1.1 회원가입
#### 1.1.1 개요
| name     | value                           |
|----------|---------------------------------|
| 기능       | 회원가입에 필요한 회원 정보를 전달받아 DB에 저장한다. |
| Method   | POST                            |
| Endpoint | /api/user/                      |

#### 1.1.2 Request Body
| Parameter | Data Type | Required | Description |
|-----------|-----------|----------|-------------|
| email     | string    | Y        | 회원 이메일      |
| password  | string    | Y        | 회원 비밀번호     |

#### 1.1.3 Response Body
| Parameter | Data Type | Description    |
|-----------|-----------|----------------|
| msg       | string    | 회원가입에 대한 안내메시지 |

#### 1.1.4 Response Example
```json
{
    "msg": "회원가입이 완료되었습니다."
}
```

### 1.2 로그인
#### 1.2.1 개요
| name     | value           |
|----------|-----------------|
| 기능       | 로그인 정보를 받아 검증한다 |
| Method   | POST            |
| Endpoint | /auth/user/     |

#### 1.2.2 Request Body
| Parameter | Data Type | Required | Description |
|-----------|-----------|----------|-------------|
| email     | string    | Y        | 회원 이메일      |
| password  | string    | Y        | 회원 비밀번호     |

#### 1.2.3 Response Body
| Parameter | Data Type | Description   |
|-----------|-----------|---------------|
| msg       | string    | 로그인에 대한 안내메시지 |

#### 1.2.4 Response Example
```json
{
    "msg": "로그인이 완료되었습니다."
}
```

### 1.3 나의 식재료
#### 1.3.1 개요
| name     | value                    |
|----------|--------------------------|
| 기능       | 회원의 상세 정보및 식재료 목록을 제공한다. |
| Method   | GET                      |
| Endpoint | /api/user/{id}           |

#### 1.3.2 Response Body
| Parameter            | Data Type | Description |
|----------------------|-----------|-------------|
| email                | string    | 회원 이메일      |
| ingredient_inventory | json      | 식재료 재고 리스트  |
| - ingredient_id      | int       | 식재료 PK      |
| - ingredient_name    | string    | 식재료 이름      |
| - detail             | string    | 식재료 상세 정보   |
| - unit               | string    | 단위          |

#### 1.3.3 Response Example
```json
{
    "email": "ohyunkyo.dev@gmail.com",
    "ingredient_inventory": [
        {
            "ingredient_id": "2",
            "ingredient_name": "자두",
            "detail": "큰거",
            "unit": "개"
        },
        {
            "ingredient_id": "5",
            "ingredient_name": "돼지고기 삼겹살",
            "detail": "",
            "unit": "g"
        }
    ]
}
```

## 2. 식재료 관련 API
### 2.1 식재료 추가
#### 2.1.1 개요
| name     | value            |
|----------|------------------|
| 기능       | 시스템에 식재료를 추가한다   |
| Method   | POST             |
| Endpoint | /api/ingredient/ |

#### 2.1.2 Request Body
| Parameter | Data Type | Required | Description |
|-----------|-----------|----------|-------------|
| name      | string    | Y        | 식재료명        |

#### 2.1.3 Response Body
| Parameter | Data Type | Description     |
|-----------|-----------|-----------------|
| msg       | string    | 식재료추가에 대한 안내메시지 |

#### 2.1.4 Response Example
```json
{
    "msg": "식재료추가가 완료되었습니다."
}
```

## 3. 식재료 재고 관련 API
### 3.1 식재료 재고에 추가
#### 3.1.1 개요
| name     | value                      |
|----------|----------------------------|
| 기능       | 식재료 재고에 보유한 식재료를 추가한다      |
| Method   | POST                       |
| Endpoint | /api/ingredient_inventory/ |

#### 3.1.2 Request Body
| Parameter  | Data Type | Required | Description |
|------------|-----------|----------|-------------|
| ingredient | int       | Y        | 식재료         |
| user       | int       | Y        | 사용자         |
| detail     | string    | Y        | 식재료 상세 정보   |
| unit       | string    | Y        | 단위          |

#### 3.1.3 Response Body
| Parameter | Data Type | Description           |
|-----------|-----------|-----------------------|
| msg       | string    | 식재료 재고에 추가에 대한 안내 메시지 |

#### 3.1.4 Response Example
```json
{
    "msg": "식재료 재고에 추가 완료되었습니다."
}
```

### 3.2 식재료 재고 상세
#### 3.2.1 개요
| name     | value                              |
|----------|------------------------------------|
| 기능       | 식재료 재고에 있는 식재료의 상세 정보와 사용 이력을 표시한다 |
| Method   | GET                                |
| Endpoint | /api/ingredient_inventory/{id}     |

#### 3.2.2 Response Body
| Parameter       | Data Type | Description  |
|-----------------|-----------|--------------|
| ingredient_id   | int       | 식재료 PK       |
| ingredient_name | string    | 식재료 이름       |
| detail          | string    | 식재료 상세 정보    |
| unit            | string    | 단위           |
| inventory_log   | json      | 사용 이력        |
| - recipe_id     | int       | 사용된 레시피 PK   |
| - recipe_name   | string    | 사용된 레시피 이름   |
| - quantity      | int       | 사용된 수량       |
| - method        | string    | 식재료 처리 방법    |
| - created_at    | datetime  | 기록 생성 일시     |

#### 3.2.3 Response Example
```json
{
    "ingredient_id": "2",
    "ingredient_name": "자두",
    "detail": "큰거",
    "unit": "개",
    "inventory_log": [
        {
            "recipe_id": "",
            "recipe_name": "",
            "quantity": "5",
            "method": "insert",
            "created_at": "2022-07-07 18:20:00"
        },
        {
            "recipe_id": "7",
            "recipe_name": "자두 슬러쉬",
            "quantity": "2",
            "method": "used",
            "created_at": "2022-07-07 18:50:00"
        }
    ]
}
```

## 4. 재고 기록 관련 API
### 4.1 재고 기록 추가
#### 4.1.1 개요
| name     | value              |
|----------|--------------------|
| 기능       | 재고 기록을 추가한다        |
| Method   | POST               |
| Endpoint | /api/inventory_log |

#### 4.1.2 Request Body
| Parameter            | Data Type | Required | Description |
|----------------------|-----------|----------|-------------|
| ingredient_inventory | int       | Y        | 식재료 재고 PK   |
| user                 | int       | Y        | 사용자 PK      |
| recipe               | int       |          | 사용된 레시피 PK  |
| quantity             | int       | Y        | 사용된 수량      |
| method               | string    | Y        | 식재료 처리 방법   |
| created_at           | datetime  | Y        | 기록 생성 일시    |

#### 4.1.3 Response Body
| Parameter | Data Type | Description         |
|-----------|-----------|---------------------|
| msg       | string    | 재고 기록 추가에 대한 안내 메시지 |

#### 4.1.4 Response Example
```json
{
    "msg": "재고 기록에 추가 완료되었습니다."
}
```

### 4.2 재고 기록 수정
#### 4.2.1 개요
| name     | value              |
|----------|--------------------|
| 기능       | 재고 기록을 추가한다        |
| Method   | POST               |
| Endpoint | /api/inventory_log |

#### 4.2.2 Request Body
| Parameter      | Data Type | Required | Description |
|----------------|-----------|----------|-------------|
| inventory_log  | int       | Y        | 재고 기록 PK    |
| quantity       | int       | Y        | 사용된 수량      |
| method         | string    | Y        | 식재료 처리 방법   |

#### 4.2.3 Response Body
| Parameter | Data Type | Description         |
|-----------|-----------|---------------------|
| msg       | string    | 재고 기록 수정에 대한 안내 메시지 |

#### 4.2.4 Response Example
```json
{
    "msg": "재고 기록 수정이 완료되었습니다."
}
```

## 5. 레시피 관련 API
### 5.1 레시피 등록
#### 5.1.1 개요
| name     | value         |
|----------|---------------|
| 기능       | 레시피를 등록한다.    |
| Method   | POST          |
| Endpoint | /api/recipe/  |

#### 5.1.2 Request Body
| Parameter   | Data Type | Required | Description   |
|-------------|-----------|----------|---------------|
| user        | int       | Y        | 사용자           |
| name        | string    | Y        | 레시피 이름        |
| ingredients | string    | Y        | 레시피에 사용된 식재료  |
| methods     | string    | Y        | 레시피 제작 방법     |

#### 5.1.3 Response Body
| Parameter | Data Type | Description       |
|-----------|-----------|-------------------|
| msg       | string    | 레시피 등록에 대한 안내 메시지 |

#### 5.1.4 Response Example
```json
{
    "msg": "레시피 등록이 완료되었습니다."
}
```

### 5.2 레시피 목록
#### 5.2.1 개요
| name     | value                                      |
|----------|--------------------------------------------|
| 기능       | 레시피 목록을 출력한다                               |
| Method   | GET                                        |
| Endpoint | /api/recipe/?with={with}&without={without} |

#### 5.2.2 Response Body
| Parameter | Data Type | Description |
|-----------|-----------|-------------|
| id        | int       | 레시피 PK      |
| user      | int       | 사용자         |
| name      | string    | 레시피 이름      |

#### 5.2.3 Response Example
```json
[
    {
        "id": "2",
        "user": "2",
        "name": "자두 슬러쉬"
    },
    {
        "id": "3",
        "user": "16",
        "name": "호박죽"
    },
    {
        "id": "4",
        "user": "7",
        "name": "차돌짬뽕"
    }
]
```

### 5.3 레시피 상세
#### 5.3.1 개요
| name     | value            |
|----------|------------------|
| 기능       | 레시피 상세 정보를 출력한다  |
| Method   | GET              |
| Endpoint | /api/recipe/{id} |

#### 5.3.2 Response Body
| Parameter   | Data Type | Description   |
|-------------|-----------|---------------|
| id          | int       | 레시피 PK        |
| user        | int       | 사용자           |
| name        | string    | 레시피 이름        |
| ingredients | string    | 레시피에 사용된 식재료  |
| methods     | string    | 레시피 제작 방법     |

#### 5.3.3 Response Example
```json
{
    "id": "1",
    "user": "2",
    "name": "자두 슬러쉬",
    "ingredients": [
        {
            "ingredient_inventory": "4",
            "quantity": "6",
            "description": "싱싱한 놈으로 준비해주세요~"
        }
    ],
    "methods": [
        {
            "description": "잘 자르고 씨를 제거해주세요~~" 
        },
        {
            "description": "갈아서 먹으면 됩니다~~"
        }
    ]
}
```

### 5.4 레시피 수정
#### 5.5.1 개요
| name     | value            |
|----------|------------------|
| 기능       | 레시피 정보를 수정한다     |
| Method   | PATCH            |
| Endpoint | /api/recipe/{id} |

#### 5.5.2 Request Body
| Parameter   | Data Type | Required | Description   |
|-------------|-----------|----------|---------------|
| name        | string    | Y        | 레시피 이름        |
| ingredients | string    | Y        | 레시피에 사용된 식재료  |
| methods     | string    | Y        | 레시피 제작 방법     |

#### 5.5.3 Response Body
| Parameter | Data Type | Description       |
|-----------|-----------|-------------------|
| msg       | string    | 레시피 수정에 대한 안내 메시지 |

#### 5.5.3 Response Example
```json
    {
  "msg": "레시피 수정이 완료되었습니다."
}
```