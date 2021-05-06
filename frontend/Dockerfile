FROM node:alpine AS BUILDER

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js vue.config.js .env.production ./

ARG VUE_APP_MAPBOX_KEY
RUN sed -i -e "s|_VUE_APP_MAPBOX_KEY|$VUE_APP_MAPBOX_KEY|" .env.production

ARG VUE_APP_BASE_URL
RUN sed -i -e "s|_VUE_APP_BASE_URL|$VUE_APP_BASE_URL|" .env.production

ADD src ./src
ADD public ./public

RUN npm run build

FROM node:alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=BUILDER /app/dist ./

CMD serve -s -l $PORT
