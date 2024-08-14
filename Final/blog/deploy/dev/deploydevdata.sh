# truncate db data
psql postgresql://fsrtn:fsrtn@localhost:5432/fsrtn -f ../deploy/dev/resetdbdevdata.sql

# add testing data
node ../deploy/dev/adddevdata.js