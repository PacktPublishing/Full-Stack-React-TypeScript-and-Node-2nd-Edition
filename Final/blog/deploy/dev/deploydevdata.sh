# truncate db data
psql postgresql://freeauth:freeauth@localhost:5432/freeauth -f ./tools/resetdbdevdata.sql

# add testing data
node ./tools/adddevdata.js