#!/bin/bash
# Note must run from deploy folder

docker compose -p fsrtn-blog -f ./dev/docker-compose.dev.yml down --rmi all

rm -rf ../server/dbdata

docker compose -p fsrtn-blog -f ./dev/docker-compose.dev.yml up -d --build
