-- delete existing data and add new test dev data
-- if you need to drop and reset the db use command in prismacmd.md

truncate table 
"WorkImage", "ProfileAvatar", "Follow", "Topic", "WorkTopic", "WorkLike", "Profile", "Work", "WorkResponseLike", "WorkResponse"
restart identity;
