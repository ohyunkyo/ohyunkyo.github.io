---
title: "API 명세서 - 가온"
date: "2022-07-05"
last_modified_at: "2022-07-00"
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
| Endpoint | /api/user/join/                 |

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
| name     | value            |
|----------|------------------|
| 기능       | 로그인 정보를 받아 검증한다  |
| Method   | POST             |
| Endpoint | /api/user/login/ |

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

## 2. 재료 관련 API
### 2.1 재료 추가
#### 2.1.1 개요
| name     | value            |
|----------|------------------|
| 기능       | 시스템에 재료를 추가한다    |
| Method   | POST             |
| Endpoint | /api/ingredient/ |

#### 2.1.2 Request Body
| Parameter | Data Type | Required | Description |
|-----------|-----------|----------|-------------|
| name      | string    | Y        | 재료명         |

#### 2.1.3 Response Body
| Parameter | Data Type | Description    |
|-----------|-----------|----------------|
| msg       | string    | 재료추가에 대한 안내메시지 |

#### 2.1.4 Response Example
```json
{
    "msg": "재료추가가 완료되었습니다."
}
```

## 3. 나의 냉장고 관련 API
### 3.1 나의 냉장고에 추가
#### 3.1.1 개요
| name     | value                |
|----------|----------------------|
| 기능       | 나의 냉장고에 보유한 재료를 추가한다 |
| Method   | POST                 |
| Endpoint | /api/my_fridge/      |

#### 3.1.2 Request Body
| Parameter  | Data Type | Required | Description |
|------------|-----------|----------|-------------|
| ingredient | int       | Y        | 재료          |
| user       | int       | Y        | 사용자         |
| detail     | string    | Y        | 재료 상세 정보    |
| unit       | string    | Y        | 단위          |

#### 3.1.3 Response Body
| Parameter | Data Type | Description           |
|-----------|-----------|-----------------------|
| msg       | string    | 나의 냉장고에 추가에 대한 안내 메시지 |

#### 3.1.4 Response Example
```json
{
    "msg": "나의 냉장고에 추가 완료되었습니다."
}
```

### 3.2 나의 냉장고 목록
#### 3.2.1 개요
| name     | value                     |
|----------|---------------------------|
| 기능       | 나의 냉장고에 보유한 재료 목록을 표시한다   |
| Method   | GET                       |
| Endpoint | /api/my_fridge/?user={id} |

#### 3.2.2 Response Body
| Parameter       | Data Type | Description |
|-----------------|-----------|-------------|
| ingredient_id   | int       | 재료 PK       |
| ingredient_name | string    | 재료 이름       |
| detail          | string    | 재료 상세 정보    |
| unit            | string    | 단위          |

#### 3.2.3 Response Example
```json
[
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
```

### 3.3 나의 재료 상세
#### 3.3.1 개요
| name     | value                             |
|----------|-----------------------------------|
| 기능       | 나의 냉장고에 있는 재료의 상세 정보와 사용 이력을 표시한다 |
| Method   | GET                               |
| Endpoint | /api/my_fridge/{id}               |

#### 3.3.2 Response Body
| Parameter       | Data Type | Description |
|-----------------|-----------|-------------|
| ingredient_id   | int       | 재료 PK       |
| ingredient_name | string    | 재료 이름       |
| detail          | string    | 재료 상세 정보    |
| unit            | string    | 단위          |
| my_fridge_log   | json      | 사용 이력       |
| - recipe_id     | int       | 사용된 레시피 PK  |
| - recipe_name   | string    | 사용된 레시피 이름  |
| - quantity      | int       | 사용된 수량      |
| - method        | string    | 재료 처리 방법    |
| - created_at    | datetime  | 기록 생성 일시    |

#### 3.3.3 Response Example
```json
{
    "ingredient_id": "2",
    "ingredient_name": "자두",
    "detail": "큰거",
    "unit": "개",
    "my_fridge_log": [
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

## 4. 레시피 관련 API
### 4.1 레시피 등록
#### 4.1.1 개요
| name     | value         |
|----------|---------------|
| 기능       | 레시피를 등록한다.    |
| Method   | POST          |
| Endpoint | /api/recipe/  |

#### 4.1.2 Request Body
| Parameter   | Data Type | Required | Description |
|-------------|-----------|----------|-------------|
| user        | int       | Y        | 사용자         |
| name        | string    | Y        | 레시피 이름      |
| ingredients | string    | Y        | 레시피에 사용된 재료 |
| methods     | string    | Y        | 레시피 제작 방법   |

#### 4.1.3 Response Body
| Parameter | Data Type | Description       |
|-----------|-----------|-------------------|
| msg       | string    | 레시피 등록에 대한 안내 메시지 |

#### 4.1.4 Response Example
```json
{
    "msg": "레시피 등록이 완료되었습니다."
}
```

### 4.2 레시피 목록
#### 4.2.1 개요
| name     | value                                      |
|----------|--------------------------------------------|
| 기능       | 레시피 목록을 출력한다                               |
| Method   | GET                                        |
| Endpoint | /api/recipe/?with={with}&without={without} |

#### 4.2.2 Response Body
| Parameter | Data Type | Description |
|-----------|-----------|-------------|
| id        | int       | 레시피 PK      |
| user      | int       | 사용자         |
| name      | string    | 레시피 이름      |

#### 4.2.3 Response Example
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
        "name": ""
    }
]
```

### 4.3 레시피 상세
#### 4.3.1 개요
| name     | value            |
|----------|------------------|
| 기능       | 레시피 상세 정보를 출력한다  |
| Method   | GET              |
| Endpoint | /api/recipe/{id} |

#### 4.3.2 Response Body
| Parameter   | Data Type | Description |
|-------------|-----------|-------------|
| id          | int       | 레시피 PK      |
| user        | int       | 사용자         |
| name        | string    | 레시피 이름      |
| ingredients | string    | 레시피에 사용된 재료 |
| methods     | string    | 레시피 제작 방법   |

#### 4.3.3 Response Example
```json
{
    "id": "1",
    "user": "2",
    "name": "자두 슬러쉬",
    "ingredients": [
        {
            "my_fridge": "4",
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

### 4.4 레시피 수정
#### 4.4.1 개요
| name     | value            |
|----------|------------------|
| 기능       | 레시피 정보를 수정한다     |
| Method   | PATCH            |
| Endpoint | /api/recipe/{id} |

#### 4.4.2 Request Body
| Parameter   | Data Type | Required | Description |
|-------------|-----------|----------|-------------|
| name        | string    | Y        | 레시피 이름      |
| ingredients | string    | Y        | 레시피에 사용된 재료 |
| methods     | string    | Y        | 레시피 제작 방법   |

#### 4.4.3 Response Body
| Parameter | Data Type | Description       |
|-----------|-----------|-------------------|
| msg       | string    | 레시피 수정에 대한 안내 메시지 |

#### 4.4.3 Response Example
```json
    {
        "msg": "레시피 수정이 완료되었습니다."
    }
```