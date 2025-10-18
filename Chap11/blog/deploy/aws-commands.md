## create your docker image

docker build -f ./Dockerfile -t fsrtn:1.0 ..

## confirm existing images if needed

docker images --filter reference=fsrtn

## setup registry (can be done with console as well)

aws ecr create-repository --repository-name <name> --region <region>

## tag your image with repositoryUri

docker tag <imagename:tag> <repository-uri>

## aws configure (you will be asked to login to sso start url)

aws configure sso

## login to cli sso session

aws ecr get-login-password --region <region> --profile <profile> | docker login --username AWS --password-stdin <your registry>

## after building your package push it to repo

docker push <repository-uri>
