---
title: "재고관리 웹 API 명세서"
date: "2022-08-23"
last_modified_at: "2022-08-24"
category: inventory-manage
---

## 0. 서론
API 명세서를 마크다운 형식으로 관리하기 위해 개별 문서 생성.  
각 모델별로 관리한다.

### 0.1 Request Header
특별히 서술하지 않는 이상 POST, PATCH, DELETE 메소드에서 다음과 같이 헤더를 설정해야 한다.

| name         | value |
|--------------|-------|
| Content-Type | Json  |

## 1. 품목 관련 API
### 1.1 품목 추가
#### 1.1.1 개요
| name     | value          |
|----------|----------------|
| 기능       | 품목을 추가한다.      |
| Method   | POST           |
| Endpoint | /api/business/ |

#### 1.1.2 Request Body
| Parameter   | Data Type | Required | Description |
|-------------|-----------|----------|-------------|
| name        | string    | Y        | 품목명         |
| description | string    |          | 품목 설명       |

#### 1.1.3 Response Body
| Parameter   | Data Type | Description |
|-------------|-----------|-------------|
| name        | string    | 품목명         |
| description | string    | 품목 설명       |

#### 1.1.4 Response Example
```json
{
    "name": "테스트 품목",
    "description": "설명입니다."
}
```

### 1.2 품목 수정
#### 1.2.1 개요
| name     | value              |
|----------|--------------------|
| 기능       | 품목을 수정한다.          |
| Method   | PATCH              |
| Endpoint | /api/business/{id} |

#### 1.2.2 Request Body
| Parameter   | Data Type | Required | Description |
|-------------|-----------|----------|-------------|
| name        | string    | Y        | 품목명         |
| description | string    |          | 품목 설명       |

#### 1.2.3 Response Body
| Parameter   | Data Type | Description |
|-------------|-----------|-------------|
| name        | string    | 품목명         |
| description | string    | 품목 설명       |

#### 1.2.4 Response Example
```json
{
    "name": "테스트 품목",
    "description": "설명입니다."
}
```

### 1.3 품목 리스트
#### 1.3.1 개요
| name     | value          |
|----------|----------------|
| 기능       | 품목 리스트를 출력한다.  |
| Method   | GET            |
| Endpoint | /api/business/ |

#### 1.3.2 Response Body
| Parameter   | Data Type | Description |
|-------------|-----------|-------------|
| id          | int       | 품목 PK       |
| name        | string    | 품목명         |
| description | string    | 품목 설명       |

#### 1.3.3 Response Example
```json
[
    {
        "id": 1,
        "name": "테스트 품목",
        "description": "설명입니다."
    },
    {
        "id": 2,
        "name": "시험용 품목",
        "description": "설명입니다."
    }
]
```

### 1.4 품목 상세
#### 1.4.1 개요
| name     | value              |
|----------|--------------------|
| 기능       | 품목 상세 정보를 출력한다.    |
| Method   | GET                |
| Endpoint | /api/business/{id} |

#### 1.4.2 Response Body
| Parameter   | Data Type | Description |
|-------------|-----------|-------------|
| name        | string    | 품목명         |
| description | string    | 품목 설명       |

#### 1.4.3 Response Example
```json
{
    "name": "테스트 품목",
    "description": "설명입니다."
}
```

### 1.5 품목 삭제
#### 1.5.1 개요
| name     | value              |
|----------|--------------------|
| 기능       | 품목을 삭제한다           |
| Method   | DELETE             |
| Endpoint | /api/business/{id} |

## 2. 상품 관련 API
### 2.1 상품 추가
#### 2.1.1 개요
| name     | value         |
|----------|---------------|
| 기능       | 상품을 추가한다.     |
| Method   | POST          |
| Endpoint | /api/product/ |

#### 2.1.2 Request Body
| Parameter        | Data Type | Required | Description |
|------------------|-----------|----------|-------------|
| name             | string    | Y        | 상품명         |
| description      | string    |          | 상품 설명       |
| business         | int       | Y        | 품목 PK       |
| maximum_quantity | int       | Y        | 최대 수량       |

#### 2.1.3 Response Body
| Parameter        | Data Type | Description |
|------------------|-----------|-------------|
| name             | string    | 상품명         |
| description      | string    | 상품 설명       |
| business         | int       | 품목 PK       |
| maximum_quantity | int       | 최대 수량       |

#### 2.1.4 Response Example
```json
{
    "name": "테스트 상품",
    "description": "설명입니다.",
    "business": 1,
    "maximum_quantity": 7
}
```

### 2.2 상품 수정
#### 2.2.1 개요
| name     | value             |
|----------|-------------------|
| 기능       | 상품을 수정한다.         |
| Method   | PATCH             |
| Endpoint | /api/product/{id} |

#### 2.2.2 Request Body
| Parameter        | Data Type | Required | Description |
|------------------|-----------|----------|-------------|
| name             | string    | Y        | 상품명         |
| description      | string    |          | 상품 설명       |
| maximum_quantity | int       | Y        | 최대 수량       |

#### 2.2.3 Response Body
| Parameter        | Data Type | Description |
|------------------|-----------|-------------|
| name             | string    | 상품명         |
| description      | string    | 상품 설명       |
| business         | int       | 품목 PK       |
| maximum_quantity | int       | 최대 수량       |

#### 2.2.4 Response Example
```json
{
    "name": "테스트 상품",
    "description": "설명입니다.",
    "business": 1,
    "maximum_quantity": 7
}
```

### 2.3 상품 리스트
#### 2.3.1 개요
| name     | value         |
|----------|---------------|
| 기능       | 상품 리스트를 출력한다. |
| Method   | GET           |
| Endpoint | /api/product/ |

#### 2.3.2 Response Body
| Parameter        | Data Type | Description |
|------------------|-----------|-------------|
| name             | string    | 상품명         |
| description      | string    | 상품 설명       |
| business         | int       | 품목 PK       |
| maximum_quantity | int       | 최대 수량       |

#### 2.3.3 Response Example
```json
[
    {
        "id": 1,
        "name": "테스트 상품",
        "description": "설명입니다.",
        "business": 1,
        "maximum_quantity": 7
    },
    {
        "id": 2,
        "name": "시험용 상품",
        "description": "설명입니다.",
        "business": 1,
        "maximum_quantity": 12
    }
]
```

### 2.4 상품 상세
#### 2.4.1 개요
| name     | value             |
|----------|-------------------|
| 기능       | 상품 상세 정보를 출력한다.   |
| Method   | GET               |
| Endpoint | /api/product/{id} |

#### 2.4.2 Response Body
| Parameter            | Data Type  | Description       |
|----------------------|------------|-------------------|
| name                 | string     | 상품명               |
| description          | string     | 상품 설명             |
| maximum_quantity     | int        | 최대 수량             |
| business_id          | int        | 품목 PK             |
| business_name        | string     | 품목명               |
| package_product_list | json       | 구성품 연결 정보         |
| - id                 | int        | 구성품 연결 정보 PK      |
| - package_name       | string     | 연결된 패키지 이름        |
| - product_name       | string     | 상품 이름             |
| - quantity           | int        | 패키지에 할당된 수량       |
| - package            | int        | 패키지 PK            |
| - product            | int        | 상품 PK             |
| package_list         | json       | 해당 품목의 전체 패키지 리스트 |
| - id                 | int        | 패키지 PK            |
| - business_name      | string     | 품목 이름             |
| - name               | string     | 패키지명              |
| - description        | string     | 패키지 설명            |
| - serial_code        | int        | 제품번호              |
| - product_code       | int        | 판매자 상품코드          |
| - is_split           | int        | 분할 여부             |
| - memo               | string     | 메모                |
| - business           | int        | 품목 PK             |
| - product            | array      | 연결된 상품 리스트        |
| - supplement         | array      | 연결된 부자재 리스트       |

#### 2.4.3 Response Example
```json
{
    "id": 2,
    "name": "시험용 상품",
    "description": "설명입니다.",
    "maximum_quantity": 12,
    "business_id": 1,
    "business_name": "테스트 품목",
    "package_product_list": [
        {
            "id": 22,
            "package_name": "패키지 입니다",
            "product_name": "시험용 상품",
            "quantity": 1,
            "package": 226,
            "product": 50
        }
    ],
    "package_list": [
        {
            "id": 226,
            "business_name": "테스트 품목",
            "name": "패키지 입니다",
            "description": "테스트용 패키지",
            "serial_code": "127",
            "product_code": null,
            "is_split": false,
            "memo": "",
            "business": 1,
            "product": [
                3,
                4
            ],
            "supplement": [
                1,
                6,
                7,
                8,
                10
            ]
        }
    ]
}
```

### 2.5 상품 삭제
#### 2.5.1 개요
| name     | value             |
|----------|-------------------|
| 기능       | 상품을 삭제한다          |
| Method   | DELETE            |
| Endpoint | /api/product/{id} |

## 3. 부자재 관련 API
### 3.1 부자재 추가
#### 3.1.1 개요
| name     | value            |
|----------|------------------|
| 기능       | 부자재를 추가한다.       |
| Method   | POST             |
| Endpoint | /api/supplement/ |

#### 3.1.2 Request Body
| Parameter        | Data Type | Required | Description |
|------------------|-----------|----------|-------------|
| name             | string    | Y        | 부자재명        |
| description      | string    |          | 부자재 설명      |
| business         | int       | Y        | 품목 PK       |
| maximum_quantity | int       | Y        | 최대 수량       |

#### 3.1.3 Response Body
| Parameter        | Data Type | Description |
|------------------|-----------|-------------|
| name             | string    | 부자재명        |
| description      | string    | 부자재 설명      |
| business         | int       | 품목 PK       |
| maximum_quantity | int       | 최대 수량       |

#### 3.1.4 Response Example
```json
{
    "name": "테스트 부자재",
    "description": "설명입니다.",
    "business": 1,
    "maximum_quantity": 7
}
```

### 3.2 부자재 수정
#### 3.2.1 개요
| name     | value                |
|----------|----------------------|
| 기능       | 부자재를 수정한다.           |
| Method   | PATCH                |
| Endpoint | /api/supplement/{id} |

#### 3.2.2 Request Body
| Parameter        | Data Type | Required | Description |
|------------------|-----------|----------|-------------|
| name             | string    | Y        | 부자재명        |
| description      | string    |          | 부자재 설명      |
| maximum_quantity | int       | Y        | 최대 수량       |

#### 3.2.3 Response Body
| Parameter        | Data Type | Description |
|------------------|-----------|-------------|
| name             | string    | 부자재명        |
| description      | string    | 부자재 설명      |
| business         | int       | 품목 PK       |
| maximum_quantity | int       | 최대 수량       |

#### 3.2.4 Response Example
```json
{
    "name": "테스트 부자재",
    "description": "설명입니다.",
    "business": 1,
    "maximum_quantity": 7
}
```

### 3.3 부자재 리스트
#### 3.3.1 개요
| name     | value            |
|----------|------------------|
| 기능       | 부자재 리스트를 출력한다.   |
| Method   | GET              |
| Endpoint | /api/supplement/ |

#### 3.3.2 Response Body
| Parameter        | Data Type | Description |
|------------------|-----------|-------------|
| name             | string    | 부자재명        |
| description      | string    | 부자재 설명      |
| business         | int       | 품목 PK       |
| maximum_quantity | int       | 최대 수량       |

#### 3.3.3 Response Example
```json
[
    {
        "id": 1,
        "name": "테스트 부자재",
        "description": "설명입니다.",
        "business": 1,
        "maximum_quantity": 7
    },
    {
        "id": 2,
        "name": "시험용 부자재",
        "description": "설명입니다.",
        "business": 1,
        "maximum_quantity": 12
    }
]
```

### 3.4 부자재 상세
#### 3.4.1 개요
| name     | value                |
|----------|----------------------|
| 기능       | 부자재 상세 정보를 출력한다.     |
| Method   | GET                  |
| Endpoint | /api/supplement/{id} |

#### 3.4.2 Response Body
| Parameter               | Data Type  | Description       |
|-------------------------|------------|-------------------|
| name                    | string     | 상품명               |
| description             | string     | 상품 설명             |
| maximum_quantity        | int        | 최대 수량             |
| business_id             | int        | 품목 PK             |
| business_name           | string     | 품목명               |
| package_supplement_list | json       | 구성품 연결 정보         |
| - id                    | int        | 구성품 연결 정보 PK      |
| - package_name          | string     | 연결된 패키지 이름        |
| - supplement_name       | string     | 부자재 이름            |
| - quantity              | int        | 패키지에 할당된 수량       |
| - package               | int        | 패키지 PK            |
| - supplement            | int        | 부자재 PK            |
| package_list            | json       | 해당 품목의 전체 패키지 리스트 |
| - id                    | int        | 패키지 PK            |
| - business_name         | string     | 품목 이름             |
| - name                  | string     | 패키지명              |
| - description           | string     | 패키지 설명            |
| - serial_code           | int        | 제품번호              |
| - product_code          | int        | 판매자 상품코드          |
| - is_split              | int        | 분할 여부             |
| - memo                  | string     | 메모                |
| - business              | int        | 품목 PK             |
| - product               | array      | 연결된 상품 리스트        |
| - supplement            | array      | 연결된 부자재 리스트       |

#### 3.4.3 Response Example
```json
{
    "id": 2,
    "name": "시험용 부자재",
    "description": "설명입니다.",
    "maximum_quantity": 12,
    "business_id": 1,
    "business_name": "테스트 품목",
    "package_supplement_list": [
        {
            "id": 22,
            "package_name": "패키지 입니다",
            "supplement_name": "시험용 부자재",
            "quantity": 1,
            "package": 226,
            "supplement": 50
        }
    ],
    "package_list": [
        {
            "id": 226,
            "business_name": "테스트 품목",
            "name": "패키지 입니다",
            "description": "테스트용 패키지",
            "serial_code": "127",
            "product_code": null,
            "is_split": false,
            "memo": "",
            "business": 1,
            "product": [
                3,
                4
            ],
            "supplement": [
                1,
                6,
                7,
                8,
                10
            ]
        }
    ]
}
```

### 3.5 부자재 삭제
#### 3.5.1 개요
| name     | value                |
|----------|----------------------|
| 기능       | 부자재를 삭제한다            |
| Method   | DELETE               |
| Endpoint | /api/supplement/{id} |

## 4. 패키지 관련 API
### 4.1 패키지 추가
#### 4.1.1 개요
| name     | value           |
|----------|-----------------|
| 기능       | 패키지를 추가한다.      |
| Method   | POST            |
| Endpoint | /api/package/   |

#### 4.1.2 Request Body
| Parameter    | Data Type | Required | Description |
|--------------|-----------|----------|-------------|
| name         | string    | Y        | 패키지명        |
| description  | string    |          | 패키지 설명      |
| serial_code  | string    |          | 제품번호        |
| product_code | string    |          | 판매자 상품코드    |
| is_split     | boolean   | Y        | 분할여부        |
| memo         | string    |          | 메모          |
| business     | int       | Y        | 품목          |

#### 4.1.3 Response Body
| Parameter     | Data Type | Description |
|---------------|-----------|-------------|
| id            | int       | 패키지 PK      |
| business_name | string    | 품목 이름       |
| name          | string    | 패키지명        |
| description   | string    | 패키지 설명      |
| serial_code   | int       | 제품번호        |
| product_code  | int       | 판매자 상품코드    |
| is_split      | int       | 분할 여부       |
| memo          | string    | 메모          |
| business      | int       | 품목 PK       |
| product       | array     | 연결된 상품 리스트  |
| supplement    | array     | 연결된 부자재 리스트 |

#### 4.1.4 Response Example
```json
{
    "id": 226,
    "business_name": "테스트 품목",
    "name": "패키지 입니다",
    "description": "테스트용 패키지",
    "serial_code": "127",
    "product_code": null,
    "is_split": false,
    "memo": "",
    "business": 1,
    "product": [],
    "supplement": []
}
```

### 4.2 패키지 수정
#### 4.2.1 개요
| name     | value             |
|----------|-------------------|
| 기능       | 패키지를 수정한다.        |
| Method   | PATCH             |
| Endpoint | /api/package/{id} |

#### 4.2.2 Request Body
| Parameter    | Data Type | Required | Description |
|--------------|-----------|----------|-------------|
| name         | string    | Y        | 패키지명        |
| description  | string    |          | 패키지 설명      |
| serial_code  | string    |          | 제품번호        |
| product_code | string    |          | 판매자 상품코드    |
| is_split     | boolean   | Y        | 분할여부        |
| memo         | string    |          | 메모          |
| business     | int       | Y        | 품목          |

#### 4.2.3 Response Body
| Parameter     | Data Type | Description |
|---------------|-----------|-------------|
| id            | int       | 패키지 PK      |
| business_name | string    | 품목 이름       |
| name          | string    | 패키지명        |
| description   | string    | 패키지 설명      |
| serial_code   | int       | 제품번호        |
| product_code  | int       | 판매자 상품코드    |
| is_split      | int       | 분할 여부       |
| memo          | string    | 메모          |
| business      | int       | 품목 PK       |
| product       | array     | 연결된 상품 리스트  |
| supplement    | array     | 연결된 부자재 리스트 |

#### 4.2.4 Response Example
```json
{
    "id": 226,
    "business_name": "테스트 품목",
    "name": "패키지 입니다",
    "description": "테스트용 패키지",
    "serial_code": "127",
    "product_code": null,
    "is_split": false,
    "memo": "",
    "business": 1,
    "product": [
        3,
        4
    ],
    "supplement": [
        1,
        6,
        7,
        8,
        10
    ]
}
```

### 4.3 패키지 리스트
#### 4.3.1 개요
| name     | value           |
|----------|-----------------|
| 기능       | 패키지 리스트를 출력한다.  |
| Method   | GET             |
| Endpoint | /api/package/   |

#### 4.3.2 Response Body
| Parameter     | Data Type | Description |
|---------------|-----------|-------------|
| id            | int       | 패키지 PK      |
| business_name | string    | 품목 이름       |
| name          | string    | 패키지명        |
| description   | string    | 패키지 설명      |
| serial_code   | int       | 제품번호        |
| product_code  | int       | 판매자 상품코드    |
| is_split      | int       | 분할 여부       |
| memo          | string    | 메모          |
| business      | int       | 품목 PK       |
| product       | array     | 연결된 상품 리스트  |
| supplement    | array     | 연결된 부자재 리스트 |

#### 4.3.3 Response Example
```json
[
    {
        "id": 226,
        "business_name": "테스트 품목",
        "name": "패키지 입니다",
        "description": "테스트용 패키지",
        "serial_code": "127",
        "product_code": null,
        "is_split": false,
        "memo": "",
        "business": 1,
        "product": [
            3,
            4
        ],
        "supplement": [
            1,
            6,
            7,
            8,
            10
        ]
    }
]
```

### 4.4 패키지 상세
#### 4.4.1 개요
| name     | value              |
|----------|--------------------|
| 기능       | 패키지 상세 정보를 출력한다.   |
| Method   | GET                |
| Endpoint | /api/package/{id}  |

#### 4.4.2 Response Body
| Parameter      | Data Type | Description |
|----------------|-----------|-------------|
| id             | int       | 패키지 PK      |
| business_name  | string    | 품목 이름       |
| name           | string    | 패키지명        |
| description    | string    | 패키지 설명      |
| serial_code    | int       | 제품번호        |
| product_code   | int       | 판매자 상품코드    |
| is_split       | int       | 분할 여부       |
| memo           | string    | 메모          |
| business       | int       | 품목 PK       |
| product        | array     | 연결된 상품 리스트  |
| supplement     | array     | 연결된 부자재 리스트 |

#### 4.4.3 Response Example
```json
{
    "id": 226,
    "business_name": "테스트 품목",
    "name": "패키지 입니다",
    "description": "테스트용 패키지",
    "serial_code": "127",
    "product_code": null,
    "is_split": false,
    "memo": "",
    "business": 1,
    "product": [
        3,
        4
    ],
    "supplement": [
        1,
        6,
        7,
        8,
        10
    ]
}
```

### 4.5 패키지 삭제
#### 4.5.1 개요
| name     | value               |
|----------|---------------------|
| 기능       | 패키지를 삭제한다           |
| Method   | DELETE              |
| Endpoint | /api/package/{id}   |

## 5. 패키지 구성 상품 관련 API
### 5.1 패키지 구성 상품 추가
#### 5.1.1 개요
| name     | value                 |
|----------|-----------------------|
| 기능       | 패키지에 구성 상품을 추가한다.     |
| Method   | POST                  |
| Endpoint | /api/package_product/ |

#### 5.1.2 Request Body
| Parameter | Data Type | Required | Description |
|-----------|-----------|----------|-------------|
| package   | string    | Y        | 패키지 PK      |
| product   | string    | Y        | 상품 PK       |
| quantity  | int       | Y        | 수량          |

#### 5.1.3 Response Body
| Parameter    | Data Type | Description  |
|--------------|-----------|--------------|
| id           | int       | 패키지 구성 상품 PK |
| package      | int       | 패키지 PK       |
| package_name | string    | 패키지명         |
| product      | int       | 상품 PK        |
| product_name | string    | 상품명          |
| quantity     | int       | 수량           |

#### 5.1.4 Response Example
```json
{
    "id": 226,
    "package": 22,
    "package_name": "패키지 입니다",
    "product": 33,
    "product_name": "127",
    "quantity": 6
}
```

### 5.2 패키지 구성 상품 리스트
#### 5.2.1 개요
| name     | value                 |
|----------|-----------------------|
| 기능       | 패키지 구성 상품 리스트를 출력한다.  |
| Method   | GET                   |
| Endpoint | /api/package_product/ |

#### 5.2.2 Response Body
| Parameter      | Data Type | Description  |
|----------------|-----------|--------------|
| id             | int       | 패키지 구성 상품 PK |
| package        | int       | 패키지 PK       |
| package_name   | string    | 패키지명         |
| product        | int       | 상품 PK        |
| product_name   | string    | 상품명          |
| quantity       | int       | 수량           |

#### 5.2.3 Response Example
```json
[
    {
        "id": 226,
        "package": 22,
        "package_name": "패키지 입니다",
        "product": 33,
        "product_name": "127",
        "quantity": null
    }
]
```

### 5.3 패키지 구성 상품 삭제
#### 5.3.1 개요
| name     | value                     |
|----------|---------------------------|
| 기능       | 패키지 구성상품을 삭제한다            |
| Method   | DELETE                    |
| Endpoint | /api/package_product/{id} |

## 6. 패키지 구성 부자재 관련 API
### 6.1 패키지 구성 부자재 추가
#### 6.1.1 개요
| name     | value                    |
|----------|--------------------------|
| 기능       | 패키지에 구성 부자재를 추가한다.       |
| Method   | POST                     |
| Endpoint | /api/package_supplement/ |

#### 6.1.2 Request Body
| Parameter      | Data Type   | Required | Description  |
|----------------|-------------|----------|--------------|
| package        | string      | Y        | 패키지 PK       |
| supplement     | string      | Y        | 부자재 PK       |
| quantity       | int         | Y        | 수량           |

#### 6.1.3 Response Body
| Parameter       | Data Type | Description   |
|-----------------|-----------|---------------|
| id              | int       | 패키지 구성 부자재 PK |
| package         | int       | 패키지 PK        |
| package_name    | string    | 패키지명          |
| supplement      | int       | 부자재 PK        |
| supplement_name | string    | 부자재명          |
| quantity        | int       | 수량            |

#### 6.1.4 Response Example
```json
{
    "id": 226,
    "package": 22,
    "package_name": "패키지 입니다",
    "supplement": 33,
    "supplement_name": "127",
    "quantity": 6
}
```

### 6.2 패키지 구성 부자재 리스트
#### 6.2.1 개요
| name     | value                    |
|----------|--------------------------|
| 기능       | 패키지 구성 부자재 리스트를 출력한다.    |
| Method   | GET                      |
| Endpoint | /api/package_supplement/ |

#### 6.2.2 Response Body
| Parameter           | Data Type | Description   |
|---------------------|-----------|---------------|
| id                  | int       | 패키지 구성 부자재 PK |
| package             | int       | 패키지 PK        |
| package_name        | string    | 패키지명          |
| supplement          | int       | 부자재 PK        |
| supplement_name     | string    | 부자재명          |
| quantity            | int       | 수량            |

#### 6.2.3 Response Example
```json
[
    {
        "id": 226,
        "package": 22,
        "package_name": "패키지 입니다",
        "supplement": 33,
        "supplement_name": "127",
        "quantity": null
    }
]
```

### 6.3 패키지 구성 부자재 삭제
#### 6.3.1 개요
| name     | value                        |
|----------|------------------------------|
| 기능       | 패키지 구성 부자재를 삭제한다             |
| Method   | DELETE                       |
| Endpoint | /api/package_supplement/{id} |

## 7. 발주서 관련 API
### 7.1 발주서 추가(json)
#### 7.1.1 개요
| name     | value                |
|----------|----------------------|
| 기능       | 외부에서 발주서를 추가한다.      |
| Method   | POST                 |
| Endpoint | /api/purchase_order/ |

#### 7.1.2 Request Body
| Parameter                | Data Type | Required | Description  |
|--------------------------|-----------|----------|--------------|
| purchase_order           | array     | Y        | 발주서 정보       |
| - recipient              | string    | Y        | 인수자          |
| - recipient_phone_number | string    | Y        | 인수자 연락처      |
| - serial_code            | string    | Y        | 패키지 제품 번호    |
| - order_quantity         | string    | Y        | 주문 수량        |
| - postal_code            | string    | Y        | 우편번호         |
| - address                | string    | Y        | 주소           |
| - product_code           | string    | Y        | 패키지 판매자 상품코드 |
| - payment_code           | string    | Y        |              |
| - member_code            | string    |          |              |

#### 7.1.3 Response Body
| Parameter   | Data Type | Description        |
|-------------|-----------|--------------------|
| status      | boolean   | 결과 상태              |
| result_code | int       | 결과 코드              |
| message     | string    | 결과 메시지             |

#### 7.1.4 Response Example
```json
{
    "status": false,
    "result_code": 2000,
    "message": "등록되지 않은 패키지 입니다(serial_code: 9999)"
}
```

### 7.2 발주서 추가(excel)
#### 7.2.1 헤더 정보
| name         | value               |
|--------------|---------------------|
| Content-Type | multipart/form-data |

#### 7.2.2 개요
| name     | value                                         |
|----------|-----------------------------------------------|
| 기능       | 재고관리 웹에서 발주서 데이터가 있는 엑셀 파일을 업로드 하여 발주서를 추가한다. |
| Method   | POST                                          |
| Endpoint | /api/purchase_order/                          |

#### 7.2.3 Request Body
| Parameter           | Data Type | Required | Description |
|---------------------|-----------|----------|-------------|
| purchase_order_file | file      | Y        | 엑셀 파일       |
| open_market         | string    | Y        | 오픈마켓 정보     |

#### 7.2.4 Response Body
| Parameter   | Data Type | Description        |
|-------------|-----------|--------------------|
| status      | boolean   | 결과 상태              |
| result_code | int       | 결과 코드              |
| message     | string    | 결과 메시지             |
| date_string | string    | 발주서 생성일시 - 그룹화에 사용 |

#### 7.2.5 Response Example
```json
{
    "status": true,
    "result_code": 1000,
    "message": "완료했습니다.",
    "date_string": "20220824084340"
}
```

### 7.3 발주서 리스트
#### 7.3.1 개요
| name     | value                |
|----------|----------------------|
| 기능       | 그룹화 된 발주서 리스트를 출력한다. |
| Method   | GET                  |
| Endpoint | /api/purchase_order/ |

#### 7.3.2 Response Body
| Parameter        | Data Type | Description       |
|------------------|-----------|-------------------|
| created_at       | string    | 발주서 생성 일시         |
| count            | int       | 해당 일시에 생성된 발주서 수량 |

#### 7.3.3 Response Example
```json
[
    {
        "created_at": "2022-08-24 08:43:40",
        "count": 34
    },
    {
        "created_at": "2022-08-23 14:25:24",
        "count": 23
    }
]
```

### 7.4 상품 상세
#### 7.4.1 개요
| name     | value                    |
|----------|--------------------------|
| 기능       | 발주서 상세 정보를 출력한다.         |
| Method   | GET                      |
| Endpoint | /api/purchase_order/{id} |

#### 7.4.2 Response Body
| Parameter              | Data Type  | Description |
|------------------------|------------|-------------|
| id                     | int        | 발주서 PK      |
| package_name           | string     | 발주한 패키지 명   |
| order_number           | string     | 주문번호        |
| orderer                | string     | 주문자         |
| orderer_phone_number   | string     | 주문자 연락처     |
| recipient              | string     | 인수자         |
| recipient_phone_number | string     | 인수자 연락처     |
| options                | string     | 옵션          |
| order_quantity         | int        | 주문수량        |
| postal_code            | string     | 우편번호        |
| address                | string     | 주소          |
| epost                  | string     | 우체국택배       |
| fare_type              | string     | 운임구분        |
| product_code           | string     | 상품코드번호      |
| payment_code           | string     | 결제코드        |
| member_code            | string     | 멤버코드        |
| group_code             | string     | 분류코드        |
| baggage_number         | string     | 송장번호        |
| counsel_history        | string     |             |
| memo                   | string     |             |
| created_at             | string     | 생성일         |
| status                 | string     | 상태          |
| product_order_number   | string     |             |
| package                | int        | 패키지 PK      |

#### 7.4.3 Response Example
```json
{
    "id": 54498,
    "package_name": "테스트 패키지",
    "order_number": "20220824",
    "orderer": "테스트주식회사",
    "orderer_phone_number": "0000-0000",
    "recipient": "오현교",
    "recipient_phone_number": "010-4478-4006",
    "options": null,
    "order_quantity": 1,
    "postal_code": "00000",
    "address": "경기도 성남시 분당구 테스트로 00-0",
    "epost": null,
    "fare_type": null,
    "product_code": "100601",
    "payment_code": "233615",
    "member_code": "327330",
    "group_code": null,
    "baggage_number": null,
    "counsel_history": null,
    "memo": null,
    "created_at": "2022-08-24T08:43:40.430903",
    "status": "complete",
    "product_order_number": null,
    "package": 4
}
```

### 7.5 발주서 큐
#### 7.5.1 개요
| name     | value                                   |
|----------|-----------------------------------------|
| 기능       | 특정 시간에 유입된 발주서들을 출력한다                   |
| Method   | GET                                     |
| Endpoint | /api/purchase_order_queue/{date_string} |

#### 7.5.2 Response Body
| Parameter                | Data Type | Description      |
|--------------------------|-----------|------------------|
| status                   | string    | 발주서 상태           |
| total_count              | int       | 해당 시간 발주서 수량     |
| date_string              | string    | 발주서 생성 일시 - 문자형식 |
| created_at               | string    | 발주서 생서 일시        |
| split_list               | array     | 분할 되는 발주서 리스트    |
| - id                     | int       | 발주서 PK           |
| - recipient              | string    | 주문자              |
| - recipient_phone_number | string    | 주문자 연락처          |
| - order_quantity         | int       | 발주 수량            |
| - package_name           | string    | 패키지 명            |
| - package_id             | int       | 패키지 PK           |
| not_split_list           | array     | 분할 되지 않는 발주서 리스트 |
| - id                     | int       | 발주서 PK           |
| - recipient              | string    | 주문자              |
| - recipient_phone_number | string    | 주문자 연락처          |
| - order_quantity         | int       | 발주 수량            |
| - package_name           | string    | 패키지 명            |
| - package_id             | int       | 패키지 PK           |

#### 7.5.3 Response Example
```json
{
    "status": "complete",
    "total_count": 34,
    "date_string": "20220824084340",
    "created_at": "2022-08-24T08:43:40",
    "split_list": [
        {
            "id": 54498,
            "recipient": "오현교",
            "recipient_phone_number": "010-4478-4006",
            "order_quantity": 6,
            "package_name": "테스트 패키지",
            "package_id": 4
        }
    ],
    "not_split_list": [
        {
            "id": 54495,
            "recipient": "오현교",
            "recipient_phone_number": "010-4478-4006",
            "order_quantity": 12,
            "package_name": "테스트용 패키지",
            "package_id": 19
        }
    ]
}
```

### 7.6 발주서 다운로드
#### 7.6.1 개요
| name     | value                                      |
|----------|--------------------------------------------|
| 기능       | 특정 생성 일시에 생성된 발주서를 재고 처리하고 다운로드 한다         |
| Method   | GET                                        |
| Endpoint | /api/purchase_order_download/{date_string} |

#### 7.6.2 Response 
`xls` 확장자를 가진 스프레드 시트 파일이 리턴됩니다.

#### 7.6.3 Response Example
`purchase_order_20220824144432.xls`

### 7.7 발주서 삭제
#### 7.7.1 개요
| name     | value                             |
|----------|-----------------------------------|
| 기능       | 특정 시간에 들어온 발주서를 모두 삭제한다.          |
| Method   | DELETE                            |
| Endpoint | /api/purchase_order/{date_string} |

## 8. 재고 처리 방법 관련 API
### 8.1 재고 처리 방법 추가
#### 8.1.1 개요
| name     | value                   |
|----------|-------------------------|
| 기능       | 품목을 추가한다.               |
| Method   | POST                    |
| Endpoint | /api/inventory_process/ |

#### 8.1.2 Request Body
| Parameter | Data Type | Required | Description |
|-----------|-----------|----------|-------------|
| name      | string    | Y        | 재고 처리 방법 이름 |
| effect    | boolean   | Y        | 재고 증감       |

#### 8.1.3 Response Body
| Parameter | Data Type  | Description |
|-----------|------------|-------------|
| name      | string     | 재고 처리 방법 이름 |
| effect    | boolean    | 재고 증감       |

#### 8.1.4 Response Example
```json
{
    "name": "출고",
    "effect": false
}
```

### 8.2 재고 처리 방법 수정
#### 8.2.1 개요
| name     | value                       |
|----------|-----------------------------|
| 기능       | 재고 처리 방법을 수정한다.             |
| Method   | PATCH                       |
| Endpoint | /api/inventory_process/{id} |

#### 8.2.2 Request Body
| Parameter | Data Type | Required | Description |
|-----------|-----------|----------|-------------|
| name      | string    | Y        | 재고 처리 방법 이름 |
| effect    | boolean   | Y        | 재고 증감       |

#### 8.2.3 Response Body
| Parameter | Data Type  | Description |
|-----------|------------|-------------|
| name      | string     | 재고 처리 방법 이름 |
| effect    | boolean    | 재고 증감       |

#### 8.2.4 Response Example
```json
{
  "name": "출고",
  "effect": false
}
```

### 8.3 재고 처리 방법 리스트
#### 8.3.1 개요
| name     | value                   |
|----------|-------------------------|
| 기능       | 재고 처리 방법 리스트를 출력한다.     |
| Method   | GET                     |
| Endpoint | /api/inventory_process/ |

#### 8.3.2 Response Body
| Parameter | Data Type | Description |
|-----------|-----------|-------------|
| id        | int       | 재고 처리 방법 PK |
| name      | string    | 재고 처리 방법 이름 |
| effect    | boolean   | 재고 증감       |

#### 8.3.3 Response Example
```json
[
    {
        "id": 3,
        "name": "초기재고",
        "effect": true
    },
    {
        "id": 4,
        "name": "반품",
        "effect": true
    },
    {
        "id": 5,
        "name": "출고",
        "effect": false
    },
    {
        "id": 6,
        "name": "입고",
        "effect": true
    }
]
```

### 8.4 재고 처리 방법 삭제
#### 8.4.1 개요
| name     | value                       |
|----------|-----------------------------|
| 기능       | 재고 처리 방법을 삭제한다              |
| Method   | DELETE                      |
| Endpoint | /api/inventory_process/{id} |

## 9. 상품 재고 처리 기록 관련 API
### 9.1 상품 재고 처리 기록 추가
#### 9.1.1 개요
| name     | value                 |
|----------|-----------------------|
| 기능       | 상품 재고 처리 기록을 추가한다.    |
| Method   | POST                  |
| Endpoint | /api/product_history/ |

#### 9.1.2 Request Body
| Parameter         | Data Type | Required | Description |
|-------------------|-----------|----------|-------------|
| status            | string    | Y        | 상태          |
| quantity          | int       | Y        | 수량          |
| expiry_at         | string    |          | 유통기한        |
| inventory_process | int       | Y        | 재고 처리 방법 PK |
| product           | int       | Y        | 상품 PK       |

#### 9.1.3 Response Body
| Parameter              | Data Type | Description    |
|------------------------|-----------|----------------|
| admin                  | int       | 관리자 PK         |
| business               | int       | 품목 PK          |
| business_name          | string    | 품목명            |
| created_at             | string    | 재고 처리 기록 생성 일시 |
| expiry_at              | string    | 유통기한           |
| id                     | int       | 재고 처리 기록 PK    |
| inventory_process      | int       | 재고 처리 방법 PK    |
| inventory_process_name | string    | 재고 처리 방법 이름    |
| product                | int       | 상품 PK          |
| product_name           | string    | 상품명            |
| quantity               | int       | 수량             |
| quantity_abs           | int       | 수량 절대값         |
| reserved_at            | string    | 재고처리 예약일       |
| status                 | string    | 재고 처리 기록 상태    |
| updated_at             | string    | 재고 처리 기록 수정일   |

#### 9.1.4 Response Example
```json
{
    "admin": 1,
    "business": 24,
    "business_name": "테스트 품목",
    "created_at": "2022-08-24 15:51:07",
    "expiry_at": "2022-08-31",
    "id": 1953,
    "inventory_process": 3,
    "inventory_process_name": "초기재고",
    "product": 36,
    "product_name": "재고관리용 테스트 상품",
    "quantity": 100,
    "quantity_abs": 100,
    "reserved_at": null,
    "status": "complete",
    "updated_at": "2022-08-24T15:51:07.990533"
}
```

### 9.2 상품 재고 처리 기록 수정
#### 9.2.1 개요
| name     | value                        |
|----------|------------------------------|
| 기능       | 상품 재고 처리 기록을 수정한다.           |
| Method   | PATCH                        |
| Endpoint | /api/product_history/{id}    |

#### 9.2.2 Request Body
| Parameter         | Data Type | Required | Description |
|-------------------|-----------|----------|-------------|
| status            | string    | Y        | 상태          |
| quantity          | int       | Y        | 수량          |
| expiry_at         | string    |          | 유통기한        |
| inventory_process | int       | Y        | 재고 처리 방법 PK |
| product           | int       | Y        | 상품 PK       |

#### 9.2.3 Response Body
| Parameter              | Data Type | Description    |
|------------------------|-----------|----------------|
| admin                  | int       | 관리자 PK         |
| business               | int       | 품목 PK          |
| business_name          | string    | 품목명            |
| created_at             | string    | 재고 처리 기록 생성 일시 |
| expiry_at              | string    | 유통기한           |
| id                     | int       | 재고 처리 기록 PK    |
| inventory_process      | int       | 재고 처리 방법 PK    |
| inventory_process_name | string    | 재고 처리 방법 이름    |
| product                | int       | 상품 PK          |
| product_name           | string    | 상품명            |
| quantity               | int       | 수량             |
| quantity_abs           | int       | 수량 절대값         |
| reserved_at            | string    | 재고처리 예약일       |
| status                 | string    | 재고 처리 기록 상태    |
| updated_at             | string    | 재고 처리 기록 수정일   |

#### 9.2.4 Response Example
```json
{
    "admin": 1,
    "business": 24,
    "business_name": "테스트 품목",
    "created_at": "2022-08-24 15:51:07",
    "expiry_at": "2022-08-31",
    "id": 1953,
    "inventory_process": 3,
    "inventory_process_name": "초기재고",
    "product": 36,
    "product_name": "재고관리용 테스트 상품",
    "quantity": 100,
    "quantity_abs": 100,
    "reserved_at": null,
    "status": "complete",
    "updated_at": "2022-08-24T15:51:07.990533"
}
```

### 9.3 상품 재고 처리 기록 리스트
#### 9.3.1 개요
| name     | value                  |
|----------|------------------------|
| 기능       | 상품 재고 처리 기록 리스트를 출력한다. |
| Method   | GET                    |
| Endpoint | /api/product_history/  |

#### 9.3.2 Response Body
| Parameter              | Data Type | Description    |
|------------------------|-----------|----------------|
| id                     | int       | 재고 처리 기록 PK    |
| business_name          | string    | 품목명            |
| product_name           | string    | 상품명            |
| inventory_process_name | string    | 재고 처리 방법 이름    |
| created_at             | string    | 재고 처리 기록 생성 일시 |
| quantity_abs           | int       | 수량 절대값         |
| status                 | string    | 재고 처리 기록 상태    |
| quantity               | int       | 수량             |
| expiry_at              | string    | 유통기한           |
| updated_at             | string    | 재고 처리 기록 수정일   |
| reserved_at            | string    | 재고처리 예약일       |
| business               | int       | 품목 PK          |
| product                | int       | 상품 PK          |
| inventory_process      | int       | 재고 처리 방법 PK    |
| admin                  | int       | 관리자 PK         |

#### 9.3.3 Response Example
```json
[
    {
        "id": 1952,
        "business_name": "키즈텐",
        "product_name": "키즈텐 홍삼",
        "inventory_process_name": "출고",
        "created_at": "2022-08-18 14:23:01",
        "quantity_abs": 12,
        "status": "complete",
        "quantity": -12,
        "expiry_at": "2023-06-02",
        "updated_at": "2022-08-18T14:23:01.098394",
        "reserved_at": null,
        "business": 1,
        "product": 11,
        "inventory_process": 5,
        "admin": 1
    }
]
```

### 9.4 상품 재고 처리 기록 삭제
#### 9.4.1 개요
| name     | value                     |
|----------|---------------------------|
| 기능       | 상품 재고 처리 기록을 삭제한다         |
| Method   | DELETE                    |
| Endpoint | /api/product_history/{id} |

## 10. 부자재 재고 처리 기록 관련 API
### 10.1 부자재 재고 처리 기록 추가
#### 10.1.1 개요
| name     | value                    |
|----------|--------------------------|
| 기능       | 부자재 재고 처리 기록을 추가한다.      |
| Method   | POST                     |
| Endpoint | /api/supplement_history/ |

#### 10.1.2 Request Body
| Parameter           | Data Type | Required | Description |
|---------------------|-----------|----------|-------------|
| status              | string    | Y        | 상태          |
| quantity            | int       | Y        | 수량          |
| expiry_at           | string    |          | 유통기한        |
| inventory_process   | int       | Y        | 재고 처리 방법 PK |
| supplement          | int       | Y        | 부자재 PK      |

#### 10.1.3 Response Body
| Parameter              | Data Type | Description    |
|------------------------|-----------|----------------|
| admin                  | int       | 관리자 PK         |
| business               | int       | 품목 PK          |
| business_name          | string    | 품목명            |
| created_at             | string    | 재고 처리 기록 생성 일시 |
| expiry_at              | string    | 유통기한           |
| id                     | int       | 재고 처리 기록 PK    |
| inventory_process      | int       | 재고 처리 방법 PK    |
| inventory_process_name | string    | 재고 처리 방법 이름    |
| supplement             | int       | 부자재 PK         |
| supplement_name        | string    | 부자재명           |
| quantity               | int       | 수량             |
| quantity_abs           | int       | 수량 절대값         |
| reserved_at            | string    | 재고처리 예약일       |
| status                 | string    | 재고 처리 기록 상태    |
| updated_at             | string    | 재고 처리 기록 수정일   |

#### 10.1.4 Response Example
```json
{
    "admin": 1,
    "business": 24,
    "business_name": "테스트 품목",
    "created_at": "2022-08-24 15:51:07",
    "expiry_at": "2022-08-31",
    "id": 1953,
    "inventory_process": 3,
    "inventory_process_name": "초기재고",
    "supplement": 36,
    "supplement_name": "재고관리용 테스트 부자재",
    "quantity": 100,
    "quantity_abs": 100,
    "reserved_at": null,
    "status": "complete",
    "updated_at": "2022-08-24T15:51:07.990533"
}
```

### 10.2 부자재 재고 처리 기록 수정
#### 10.2.1 개요
| name     | value                         |
|----------|-------------------------------|
| 기능       | 부자재 재고 처리 기록을 수정한다.           |
| Method   | PATCH                         |
| Endpoint | /api/supplement_history/{id}  |

#### 10.2.2 Request Body
| Parameter           | Data Type | Required | Description |
|---------------------|-----------|----------|-------------|
| status              | string    | Y        | 상태          |
| quantity            | int       | Y        | 수량          |
| expiry_at           | string    |          | 유통기한        |
| inventory_process   | int       | Y        | 재고 처리 방법 PK |
| supplement          | int       | Y        | 부자재 PK      |

#### 10.2.3 Response Body
| Parameter              | Data Type | Description    |
|------------------------|-----------|----------------|
| admin                  | int       | 관리자 PK         |
| business               | int       | 품목 PK          |
| business_name          | string    | 품목명            |
| created_at             | string    | 재고 처리 기록 생성 일시 |
| expiry_at              | string    | 유통기한           |
| id                     | int       | 재고 처리 기록 PK    |
| inventory_process      | int       | 재고 처리 방법 PK    |
| inventory_process_name | string    | 재고 처리 방법 이름    |
| supplement             | int       | 부자재 PK         |
| supplement_name        | string    | 부자재명           |
| quantity               | int       | 수량             |
| quantity_abs           | int       | 수량 절대값         |
| reserved_at            | string    | 재고처리 예약일       |
| status                 | string    | 재고 처리 기록 상태    |
| updated_at             | string    | 재고 처리 기록 수정일   |

#### 10.2.4 Response Example
```json
{
    "admin": 1,
    "business": 24,
    "business_name": "테스트 품목",
    "created_at": "2022-08-24 15:51:07",
    "expiry_at": "2022-08-31",
    "id": 1953,
    "inventory_process": 3,
    "inventory_process_name": "초기재고",
    "supplement": 36,
    "supplement_name": "재고관리용 테스트 부자재",
    "quantity": 100,
    "quantity_abs": 100,
    "reserved_at": null,
    "status": "complete",
    "updated_at": "2022-08-24T15:51:07.990533"
}
```

### 10.3 부자재 재고 처리 기록 리스트
#### 10.3.1 개요
| name     | value                    |
|----------|--------------------------|
| 기능       | 부자재 재고 처리 기록 리스트를 출력한다.  |
| Method   | GET                      |
| Endpoint | /api/supplement_history/ |

#### 10.3.2 Response Body
| Parameter              | Data Type | Description    |
|------------------------|-----------|----------------|
| id                     | int       | 재고 처리 기록 PK    |
| business_name          | string    | 품목명            |
| supplement_name        | string    | 부자재명           |
| inventory_process_name | string    | 재고 처리 방법 이름    |
| created_at             | string    | 재고 처리 기록 생성 일시 |
| quantity_abs           | int       | 수량 절대값         |
| status                 | string    | 재고 처리 기록 상태    |
| quantity               | int       | 수량             |
| expiry_at              | string    | 유통기한           |
| updated_at             | string    | 재고 처리 기록 수정일   |
| reserved_at            | string    | 재고처리 예약일       |
| business               | int       | 품목 PK          |
| supplement             | int       | 부자재 PK         |
| inventory_process      | int       | 재고 처리 방법 PK    |
| admin                  | int       | 관리자 PK         |

#### 10.3.3 Response Example
```json
[
    {
        "id": 1952,
        "business_name": "키즈텐",
        "supplement_name": "키즈텐 홍삼",
        "inventory_process_name": "출고",
        "created_at": "2022-08-18 14:23:01",
        "quantity_abs": 12,
        "status": "complete",
        "quantity": -12,
        "expiry_at": "2023-06-02",
        "updated_at": "2022-08-18T14:23:01.098394",
        "reserved_at": null,
        "business": 1,
        "supplement": 11,
        "inventory_process": 5,
        "admin": 1
    }
]
```

### 10.4 부자재 재고 처리 기록 삭제
#### 10.4.1 개요
| name     | value                        |
|----------|------------------------------|
| 기능       | 부자재 재고 처리 기록을 삭제한다           |
| Method   | DELETE                       |
| Endpoint | /api/supplement_history/{id} |