import * as $runtime from "../runtime/library"

/**
 * @param followedId
 * @param pageSize
 * @param lastCursor
 */
export const selectWorksOfOneFollowed: (followedId: number | bigint, pageSize: number, lastCursor: number | bigint) => $runtime.TypedSql<selectWorksOfOneFollowed.Parameters, selectWorksOfOneFollowed.Result>

export namespace selectWorksOfOneFollowed {
  export type Parameters = [followedId: number | bigint, pageSize: number, lastCursor: number | bigint]
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
