-- delete existing data and add new test dev data

truncate table 
"WorkImage", "ProfileAvatar", "Follow", "Topic", "WorkTopic", "WorkLike", "Profile", "Work", "WorkResponseLike", "WorkResponse"
restart identity;

