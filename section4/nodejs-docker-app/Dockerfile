# 베이스 이미지 명시
FROM node:10

WORKDIR /usr/src/app

# docker root 폴더에 package json 복사 -> 전체 복사로 변경
COPY package.json ./

# 추가적으로 필요한 파일 다운
RUN npm install

COPY ./ ./

# 컨테이너 시작시 실행 될 명령어를 명시
CMD ["node", "server.js"]