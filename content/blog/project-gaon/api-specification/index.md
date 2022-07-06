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
| Endpoint | /user/join/                     |

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
| Endpoint | /user/login/    |

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
| 기능       | 시스템에 재료를 등록한다    |
| Method   | POST             |
| Endpoint | /api/ingredient/ |

#### 2.1.2 Request Header
| name         | value |
|--------------|-------|
| Content-Type | Json  |

#### 2.1.3 Request Body
| Parameter | Data Type | Required | Description |
|-----------|-----------|----------|-------------|
| email     | string    | Y        | 회원 이메일      |
| password  | string    | Y        | 회원 비밀번호     |

#### 2.1.4 Response Body
| Parameter | Data Type | Description   |
|-----------|-----------|---------------|
| msg       | string    | 로그인에 대한 안내메시지 |

#### 2.1.5 Response Example
```json
{
    "msg": "로그인이 완료되었습니다."
}
```