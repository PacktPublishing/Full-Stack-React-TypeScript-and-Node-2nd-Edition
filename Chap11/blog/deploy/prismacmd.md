# create migration files with a specific name

# note: if you have already deployed the docker container for a prior chapter you'll need to do it again before running this command

# since you have a prior instance of the database and this command is setting a branch new schema migration

npx prisma migrate dev --name init

# generate js client

npx prisma generate

# generate sql code for typedSql

npx prisma generate --sql

# production deploy migration

npx prisma migrate deploy

# drop and reset db (starting from scratch and losing all data)

npx prisma migrate reset
