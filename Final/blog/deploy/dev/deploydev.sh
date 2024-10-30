# Note must run from deploy folder

db_name="fsrtn-db"
api_name="fsrtn-api"

echo "clear docker images"
container_ids=$(docker ps -q --filter "name=$db_name" --filter "name=$api_name")
if [ -z "$container_ids" ]; then
  echo "No container id found using image: $db_name or image: $api_name"
else
  echo "Stopping and removing containers using images: $db_name, $api_name"
  pwd
  docker stop $container_ids
  docker rm $container_ids
  rm -rf ../server/dbdata
fi

echo "build new images"
docker compose -p fsrtn -f ./dev/docker-compose.dev.yml up -d --build
