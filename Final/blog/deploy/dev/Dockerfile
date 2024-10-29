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
WORKDIR /usr/fsrtn
COPY common/ ./common/
WORKDIR /usr/fsrtn/server
COPY server/package.json ./
COPY server/prisma ./prisma
COPY server/src ./src


# execute
CMD npm i && \
    npm i -g prisma && \
    prisma generate && \
    prisma migrate deploy && \
    npm run start ./src/server.ts