import * as $runtime from "../runtime/library"

/**
 * @param followerId
 * @param pageSize
 * @param lastCursor
 */
export const selectWorksOfFollowed: (followerId: number | bigint, pageSize: number, lastCursor: number | bigint) => $runtime.TypedSql<selectWorksOfFollowed.Parameters, selectWorksOfFollowed.Result>

export namespace selectWorksOfFollowed {
  export type Parameters = [followerId: number | bigint, pageSize: number, lastCursor: number | bigint]
  export type Result = {
    id: bigint
    updatedAt: Date
    title: string
    description: string
    content: string
    authorId: bigint
    userName: string
    fullName: string
    authorDesc: string | null
    workTopics: $runtime.JsonValue | null
    workLikes: $runtime.JsonValue | null
  }
}
