FROM node:14.6-alpine as development

WORKDIR /home/app

EXPOSE 3000

COPY ./package*.json ./

COPY ./tsconfig*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/app" ]
