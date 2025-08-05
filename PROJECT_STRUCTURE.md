# NextBoard 프로젝트 구조 설계

## 기술 스택
- **Frontend**: Next.js 14 (App Router)
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: bcrypt (비밀번호 암호화)
- **Styling**: Tailwind CSS
- **Container**: Docker (PostgreSQL)

## 프로젝트 구조

```
nextBoard/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── members/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── edit/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── delete/
│   │   │   │       └── page.tsx
│   │   │   └── board/
│   │   │       ├── page.tsx
│   │   │       ├── write/
│   │   │       │   └── page.tsx
│   │   │       ├── [id]/
│   │   │       │   ├── page.tsx
│   │   │       │   └── edit/
│   │   │       │       └── page.tsx
│   │   │       └── delete/
│   │   │           └── page.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── register/
│   │   │   │   │   └── route.ts
│   │   │   │   └── logout/
│   │   │   │       └── route.ts
│   │   │   ├── members/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   └── board/
│   │   │       ├── route.ts
│   │   │       └── [id]/
│   │   │           └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Nav.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── members/
│   │   │   ├── MemberList.tsx
│   │   │   ├── MemberDetail.tsx
│   │   │   └── MemberForm.tsx
│   │   └── board/
│   │       ├── BoardList.tsx
│   │       ├── BoardDetail.tsx
│   │       └── BoardForm.tsx
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── docker/
│   └── docker-compose.yml
├── public/
│   └── images/
├── .env.example
├── .env.local
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── README.md
└── SETUP_MANUAL.md
```

## 데이터베이스 스키마

### Users 테이블
- id (Primary Key)
- email (Unique)
- password (암호화)
- name
- role (ADMIN, USER)
- createdAt
- updatedAt

### Posts 테이블
- id (Primary Key)
- title
- content
- authorId (Foreign Key -> Users.id)
- createdAt
- updatedAt

## 주요 기능

### 인증 시스템
- 회원가입 (비밀번호 bcrypt 암호화)
- 로그인 (암호화된 비밀번호 검증)
- 로그아웃
- 세션 관리

### 회원 관리
- 회원 리스트 (로그인 상태에서만 접근)
- 회원 상세 정보
- 회원 정보 수정
- 회원 탈퇴

### 게시판
- 게시글 작성
- 게시글 목록
- 게시글 상세 보기
- 게시글 수정
- 게시글 삭제

### 권한 관리
- 로그인 상태 확인
- 관리자 권한 확인
- 본인 글만 수정/삭제 가능

## 보안 고려사항
- 비밀번호 bcrypt 암호화
- JWT 토큰 기반 인증
- CSRF 보호
- 입력값 검증
- SQL Injection 방지 (Prisma 사용) 