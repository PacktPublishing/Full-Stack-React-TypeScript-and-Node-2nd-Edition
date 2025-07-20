# create migration files and dev deploy to db

npx prisma migrate dev --name init

# generate js client

npx prisma generate

# production deploy migration

npx prisma migrate deploy

# drop and reset db (starting from scratch and losing all data)

npx prisma migrate reset
