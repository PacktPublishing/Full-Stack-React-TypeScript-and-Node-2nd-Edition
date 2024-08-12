FROM ubuntu:22.04

RUN  apt-get update -y && \
     apt-get upgrade -y && \
     apt-get dist-upgrade -y && \
     apt-get -y autoremove && \
     apt-get clean && \
     apt-get install -y mlocate && \
     apt-get install curl -y && \
     apt-get install zip -y

# install node
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get install -y nodejs

ENV NODE_ENV=production
WORKDIR /usr/src/fsrtn
COPY package.json ./
COPY prisma ./prisma
COPY src ./src

# execute
CMD npm i && \
    npm i -g prisma@5.18.0 && \
    prisma generate && \
    prisma migrate deploy && \
    npm run start ./src/server.ts