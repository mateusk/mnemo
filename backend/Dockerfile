FROM node:alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD /bin ./bin

## When running nodemon inside a Docker container,
## you have to use Legacy watch (-L)
CMD [ "./node_modules/.bin/nodemon", "-L" ]