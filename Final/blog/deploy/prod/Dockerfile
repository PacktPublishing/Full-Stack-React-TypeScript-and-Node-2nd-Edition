FROM ubuntu:22.04

RUN  apt-get update -y && \
     apt-get upgrade -y && \
     apt-get dist-upgrade -y && \
     apt-get -y autoremove && \
     apt-get clean && \
     apt-get install -y mlocate curl zip gnupg2 ca-certificates lsb-release software-properties-common

# Install node
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get install -y nodejs

# Install postgres
RUN sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list' && \
    wget -qO - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
    apt-get update -y && \
    apt-get install -y postgresql-14

# Install NGINX
RUN apt-get install -y nginx

# Setup env and copy files
ENV NODE_ENV=production
WORKDIR /usr/src/blog
COPY client/ ./client/
COPY common/ ./common/
COPY server/package.json ./server
COPY server/prisma ./server/prisma
COPY server/src ./server/src

# Start PostgreSQL service
RUN service postgresql start
# Set up PostgreSQL database and user
RUN su - postgres -c "psql -c \"CREATE DATABASE fsrtnpg;\"" && \
    su - postgres -c "psql -c \"CREATE USER fsrtnpg WITH ENCRYPTED PASSWORD 'fsrtnpg';\"" && \
    su - postgres -c "psql -c \"GRANT ALL PRIVILEGES ON DATABASE fsrtnpg TO fsrtnpg;\""

# Copy nginx.conf
COPY deploy/nginx.conf /etc/nginx/nginx.conf

# Build
RUN npm i && \
    npm i -g prisma@5.18.0 && \
    prisma generate && \
    prisma migrate deploy
WORKDIR /usr/src/blog/client
RUN npm run build ./client

# Exec
WORKDIR /usr/src/blog/server
CMD service postgresql start && \
    service nginx start && \
    npm run start ./src/server.ts