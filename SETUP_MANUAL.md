# NextBoard 프로젝트 세팅 매뉴얼

## 사전 요구사항

### 필수 설치 항목
- Node.js 18.0.0 이상
- Docker Desktop
- Git

### 권장 개발 도구
- VS Code
- PostgreSQL 클라이언트 (pgAdmin, DBeaver 등)

## 1. 프로젝트 초기 설정

### 1.1 Next.js 프로젝트 생성
```bash
npx create-next-app@latest nextBoard --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd nextBoard
```

### 1.2 필요한 패키지 설치
```bash
npm install prisma @prisma/client bcryptjs jsonwebtoken
npm install -D @types/bcryptjs @types/jsonwebtoken
```

## 2. 환경 변수 설정

### 2.1 .env.example 파일 생성
```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/nextboard"

# JWT
JWT_SECRET="your-super-secret-jwt-key"

# Next.js
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 2.2 .env.local 파일 생성
```bash
cp .env.example .env.local
# .env.local 파일을 편집하여 실제 값으로 변경
```

## 3. Docker 설정

### 3.1 docker-compose.yml 생성
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    container_name: nextboard-postgres
    environment:
      POSTGRES_DB: nextboard
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

### 3.2 PostgreSQL 컨테이너 실행
```bash
docker-compose up -d
```

## 4. Prisma 설정

### 4.1 Prisma 초기화
```bash
npx prisma init
```

### 4.2 schema.prisma 설정
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

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
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  ADMIN
}
```

### 4.3 데이터베이스 마이그레이션
```bash
npx prisma migrate dev --name init
npx prisma generate
```

## 5. 개발 서버 실행

### 5.1 개발 서버 시작
```bash
npm run dev
```

### 5.2 브라우저에서 확인
- http://localhost:3000 접속

## 6. 프로젝트 구조 생성

### 6.1 디렉토리 구조 생성
```bash
mkdir -p src/app/(auth)/login
mkdir -p src/app/(auth)/register
mkdir -p src/app/(dashboard)/members/[id]/edit
mkdir -p src/app/(dashboard)/members/delete
mkdir -p src/app/(dashboard)/board/write
mkdir -p src/app/(dashboard)/board/[id]/edit
mkdir -p src/app/(dashboard)/board/delete
mkdir -p src/app/api/auth/login
mkdir -p src/app/api/auth/register
mkdir -p src/app/api/auth/logout
mkdir -p src/app/api/members/[id]
mkdir -p src/app/api/board/[id]
mkdir -p src/components/layout
mkdir -p src/components/auth
mkdir -p src/components/members
mkdir -p src/components/board
mkdir -p src/lib
mkdir -p src/types
mkdir -p public/images
```

## 7. 개발 워크플로우

### 7.1 코드 작성 순서
1. Prisma 스키마 정의
2. API 라우트 작성
3. 컴포넌트 작성
4. 페이지 작성
5. 스타일링 적용

### 7.2 데이터베이스 변경 시
```bash
npx prisma migrate dev --name [migration-name]
npx prisma generate
```

### 7.3 Prisma Studio 실행 (선택사항)
```bash
npx prisma studio
```

## 8. 배포 준비

### 8.1 프로덕션 빌드
```bash
npm run build
```

### 8.2 환경 변수 확인
- 프로덕션 환경에서 .env.local 대신 환경 변수 설정
- DATABASE_URL을 프로덕션 데이터베이스로 변경
- JWT_SECRET을 강력한 시크릿으로 변경

## 9. 문제 해결

### 9.1 PostgreSQL 연결 문제
```bash
# 컨테이너 상태 확인
docker ps

# 컨테이너 재시작
docker-compose restart

# 로그 확인
docker-compose logs postgres
```

### 9.2 Prisma 문제
```bash
# Prisma 클라이언트 재생성
npx prisma generate

# 데이터베이스 리셋 (개발 환경에서만)
npx prisma migrate reset
```

### 9.3 Next.js 문제
```bash
# 캐시 삭제
rm -rf .next
npm run dev
```

## 10. 추가 개발 팁

### 10.1 환경별 설정
- 개발: .env.local
- 테스트: .env.test
- 프로덕션: 환경 변수

### 10.2 코드 품질
- ESLint 규칙 준수
- TypeScript 타입 정의 철저히
- 컴포넌트 단위 테스트 작성 권장

### 10.3 보안 체크리스트
- [ ] 비밀번호 암호화 확인
- [ ] JWT 토큰 검증 확인
- [ ] 입력값 검증 확인
- [ ] SQL Injection 방지 확인
- [ ] CSRF 보호 확인 