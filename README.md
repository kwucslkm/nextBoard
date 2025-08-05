# NextBoard - 회원제 게시판 SaaS 서비스

NextBoard는 Next.js, Prisma, PostgreSQL을 기반으로 한 현대적인 회원제 게시판 SaaS 서비스입니다.

## 🚀 주요 기능

### 👤 회원 관리
- 회원가입 (비밀번호 암호화)
- 로그인/로그아웃
- 회원 정보 조회/수정/삭제
- 회원 리스트 (로그인 상태에서만 접근)

### 📝 게시판
- 게시글 작성/조회/수정/삭제
- 게시글 목록 및 상세 보기
- 본인 글만 수정/삭제 가능

### 🔐 보안 기능
- bcrypt를 통한 비밀번호 암호화
- JWT 토큰 기반 인증
- 로그인 상태 확인
- 권한 기반 접근 제어

## 🛠 기술 스택

- **Frontend**: Next.js 14 (App Router)
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: bcryptjs, jsonwebtoken
- **Styling**: Tailwind CSS
- **Container**: Docker

## 📋 사전 요구사항

- Node.js 18.0.0 이상
- Docker Desktop
- Git

## 🚀 빠른 시작

### 1. 프로젝트 클론
```bash
git clone [repository-url]
cd nextBoard
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
```bash
cp .env.example .env.local
# .env.local 파일을 편집하여 실제 값으로 변경
```

### 4. PostgreSQL 컨테이너 실행
```bash
docker-compose up -d
```

### 5. 데이터베이스 마이그레이션
```bash
npx prisma migrate dev
npx prisma generate
```

### 6. 개발 서버 실행
```bash
npm run dev
```

### 7. 브라우저에서 확인
- http://localhost:3000 접속

## 📁 프로젝트 구조

```
nextBoard/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # 인증 관련 페이지
│   │   ├── (dashboard)/    # 대시보드 페이지
│   │   └── api/            # API 라우트
│   ├── components/          # 재사용 가능한 컴포넌트
│   ├── lib/                # 유틸리티 함수
│   └── types/              # TypeScript 타입 정의
├── prisma/                 # Prisma 스키마 및 마이그레이션
├── docker/                 # Docker 설정
└── public/                 # 정적 파일
```

## 🔧 개발 가이드

### API 엔드포인트

#### 인증
- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인
- `POST /api/auth/logout` - 로그아웃

#### 회원 관리
- `GET /api/members` - 회원 목록
- `GET /api/members/[id]` - 회원 상세
- `PUT /api/members/[id]` - 회원 정보 수정
- `DELETE /api/members/[id]` - 회원 삭제

#### 게시판
- `GET /api/board` - 게시글 목록
- `POST /api/board` - 게시글 작성
- `GET /api/board/[id]` - 게시글 상세
- `PUT /api/board/[id]` - 게시글 수정
- `DELETE /api/board/[id]` - 게시글 삭제

### 데이터베이스 스키마

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  role      Role     @default(USER)
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔐 보안 고려사항

- **비밀번호 암호화**: bcrypt를 사용한 단방향 암호화
- **JWT 토큰**: 세션 관리 및 인증
- **입력값 검증**: 모든 사용자 입력에 대한 검증
- **SQL Injection 방지**: Prisma ORM 사용
- **권한 기반 접근 제어**: 역할별 접근 권한 관리

## 🧪 테스트

```bash
# 단위 테스트 실행
npm run test

# E2E 테스트 실행
npm run test:e2e
```

## 📦 배포

### 프로덕션 빌드
```bash
npm run build
npm start
```

### 환경 변수 설정
프로덕션 환경에서는 다음 환경 변수를 설정해야 합니다:
- `DATABASE_URL`: 프로덕션 데이터베이스 URL
- `JWT_SECRET`: 강력한 JWT 시크릿 키
- `NEXTAUTH_SECRET`: NextAuth 시크릿
- `NEXTAUTH_URL`: 프로덕션 URL

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 지원

프로젝트에 대한 질문이나 문제가 있으시면 이슈를 생성해 주세요.

## 🔮 향후 계획

- [ ] SNS 로그인 (Google, GitHub, Facebook)
- [ ] 파일 업로드 기능
- [ ] 댓글 시스템
- [ ] 실시간 알림
- [ ] 관리자 대시보드
- [ ] 다국어 지원
- [ ] PWA 지원
- [ ] API 문서화 (Swagger)

## 📊 프로젝트 통계

![GitHub stars](https://img.shields.io/github/stars/username/nextboard)
![GitHub forks](https://img.shields.io/github/forks/username/nextboard)
![GitHub issues](https://img.shields.io/github/issues/username/nextboard)
![GitHub pull requests](https://img.shields.io/github/issues-pr/username/nextboard) 