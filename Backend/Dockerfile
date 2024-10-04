
FROM node:21-alpine3.18

RUN apk add --no-cache \
    build-base \
    cairo-dev \
    libpng-dev \
    g++ \
    pango-dev \
    python3 \ 
    ;


WORKDIR /usr/src/app

COPY ./ /usr/src/app

RUN npm install --force

CMD ["npm", "run", "start"]

# EXPOSE 4000

