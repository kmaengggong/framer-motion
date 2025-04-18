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
- index
	- 음악 재생
	- 이미지 대체
	+ 글 필요하면 추가
- chara
	+ DB 연결
	- 디자인 수정
- notes
	- 디자인
	- 크롤링
- stats
	- 투표
	- 디자인 수정
- guest
	- 카드 디자인
	- 카드 선택 시 hero 효과 추가
- about
- others
	- repo 포팅
	- README 정리
	- 언어(KR, EN, JP)
	- 리팩토링
