-- @param {BigInt} $1:followerId
-- @param {Int} $2:pageSize  
-- @param {BigInt} $3:lastCursor

SELECT
    w.id,
    w."updatedAt",
    w.title,
    w.description,
    w.content,
    w."authorId",
    p."userName",
    p."fullName",
    p.description AS "authorDesc",
    COALESCE(
        json_agg(
            DISTINCT jsonb_build_object(
                'topic', jsonb_build_object(
                    'id', t.id,
                    'name', t.name
                )
            )
        ) FILTER (WHERE t.id IS NOT NULL),
        '[]'::json
    ) AS "workTopics",
    COALESCE(
        json_agg(
            DISTINCT jsonb_build_object(
                'id', wl.id
            )
        ) FILTER (WHERE wl.id IS NOT NULL),
        '[]'::json
    ) AS "workLikes"
FROM "Work" w
INNER JOIN "Profile" p ON w."authorId" = p.id
LEFT JOIN "WorkTopic" wt ON w.id = wt."workId"
LEFT JOIN "Topic" t ON wt."topicId" = t.id
LEFT JOIN "WorkLike" wl ON w.id = wl."workId"
INNER JOIN "Follow" f ON f."followedId" = w."authorId"
WHERE f."followerId" = $1
    AND ($3 = -1 OR w.id < $3)
GROUP BY w.id, w."updatedAt", w.title, w.description, w.content, w."authorId", p."userName", p."fullName", p.description
ORDER BY w.id DESC
LIMIT $2;