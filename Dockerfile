FROM node:25-alpine

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install 

COPY . /app/

CMD ["npm", "run", "dev", "--", "--host"]

# docker build -t elem .

# docker run -d -p 5100:5173 elem:latest