1. README 정리 -> 기술스택, 페이지 등등 설명
2. 포팅
3. TODO 정리 -> 할 거 목록표.

## 러프
### 기술 스택
1. Stacks
- Frontend: Next.js
- Backend: Next.js
- DB: PostgreSQL + Neon
- Server: Vercel

2. Packages
- bcrypt
- clsx
- next: 15
- next-auth: 5
- tailwindcss
- zod

3. Environment
- node: 22
- npm: recent

### 페이지
/: music, rain, charas, logo -> simple but dynamic.  // no db
/chara: each chara, text and link.  // no db
/guest: guestbook and some animated things.  // db
/stats: graph for loveline.  // db
/notes: info about goods or events.  // db + crawling
/about: simple self-produce page.  // no db
/ccmbr: hidden page for ave mujica. with mutsumi.  // no db

### !
- navbar 약간 다이나믹 아일랜드 비슷하게?

### TODO
- repo 포팅
- chara, / -> guest -> stats -> about -> // ccmbr -> // info
- README 정리
- TODO 정리
- 메인 페이지부터 차례대로
- 각 페이지의 핵심 기능 개발
- 디자인
- 처음부터 너무 설계하지 말고 일단 코딩부터
- 리팩토링