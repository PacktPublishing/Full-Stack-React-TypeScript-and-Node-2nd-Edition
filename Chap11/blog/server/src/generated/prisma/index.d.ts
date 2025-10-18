
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>
/**
 * Model WorkImage
 * 
 */
export type WorkImage = $Result.DefaultSelection<Prisma.$WorkImagePayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model ProfileAvatar
 * 
 */
export type ProfileAvatar = $Result.DefaultSelection<Prisma.$ProfileAvatarPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model WorkTopic
 * 
 */
export type WorkTopic = $Result.DefaultSelection<Prisma.$WorkTopicPayload>
/**
 * Model WorkLike
 * 
 */
export type WorkLike = $Result.DefaultSelection<Prisma.$WorkLikePayload>
/**
 * Model WorkResponse
 * 
 */
export type WorkResponse = $Result.DefaultSelection<Prisma.$WorkResponsePayload>
/**
 * Model WorkResponseLike
 * 
 */
export type WorkResponseLike = $Result.DefaultSelection<Prisma.$WorkResponseLikePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Works
 * const works = await prisma.work.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Works
   * const works = await prisma.work.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workImage`: Exposes CRUD operations for the **WorkImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkImages
    * const workImages = await prisma.workImage.findMany()
    * ```
    */
  get workImage(): Prisma.WorkImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileAvatar`: Exposes CRUD operations for the **ProfileAvatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileAvatars
    * const profileAvatars = await prisma.profileAvatar.findMany()
    * ```
    */
  get profileAvatar(): Prisma.ProfileAvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workTopic`: Exposes CRUD operations for the **WorkTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkTopics
    * const workTopics = await prisma.workTopic.findMany()
    * ```
    */
  get workTopic(): Prisma.WorkTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workLike`: Exposes CRUD operations for the **WorkLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkLikes
    * const workLikes = await prisma.workLike.findMany()
    * ```
    */
  get workLike(): Prisma.WorkLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workResponse`: Exposes CRUD operations for the **WorkResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkResponses
    * const workResponses = await prisma.workResponse.findMany()
    * ```
    */
  get workResponse(): Prisma.WorkResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workResponseLike`: Exposes CRUD operations for the **WorkResponseLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkResponseLikes
    * const workResponseLikes = await prisma.workResponseLike.findMany()
    * ```
    */
  get workResponseLike(): Prisma.WorkResponseLikeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Work: 'Work',
    WorkImage: 'WorkImage',
    Profile: 'Profile',
    ProfileAvatar: 'ProfileAvatar',
    Follow: 'Follow',
    Topic: 'Topic',
    WorkTopic: 'WorkTopic',
    WorkLike: 'WorkLike',
    WorkResponse: 'WorkResponse',
    WorkResponseLike: 'WorkResponseLike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "work" | "workImage" | "profile" | "profileAvatar" | "follow" | "topic" | "workTopic" | "workLike" | "workResponse" | "workResponseLike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      WorkImage: {
        payload: Prisma.$WorkImagePayload<ExtArgs>
        fields: Prisma.WorkImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>
          }
          findFirst: {
            args: Prisma.WorkImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>
          }
          findMany: {
            args: Prisma.WorkImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>[]
          }
          create: {
            args: Prisma.WorkImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>
          }
          createMany: {
            args: Prisma.WorkImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>[]
          }
          delete: {
            args: Prisma.WorkImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>
          }
          update: {
            args: Prisma.WorkImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>
          }
          deleteMany: {
            args: Prisma.WorkImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>[]
          }
          upsert: {
            args: Prisma.WorkImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkImagePayload>
          }
          aggregate: {
            args: Prisma.WorkImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkImage>
          }
          groupBy: {
            args: Prisma.WorkImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkImageCountArgs<ExtArgs>
            result: $Utils.Optional<WorkImageCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      ProfileAvatar: {
        payload: Prisma.$ProfileAvatarPayload<ExtArgs>
        fields: Prisma.ProfileAvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileAvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileAvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>
          }
          findFirst: {
            args: Prisma.ProfileAvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileAvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>
          }
          findMany: {
            args: Prisma.ProfileAvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>[]
          }
          create: {
            args: Prisma.ProfileAvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>
          }
          createMany: {
            args: Prisma.ProfileAvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileAvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>[]
          }
          delete: {
            args: Prisma.ProfileAvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>
          }
          update: {
            args: Prisma.ProfileAvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>
          }
          deleteMany: {
            args: Prisma.ProfileAvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileAvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileAvatarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>[]
          }
          upsert: {
            args: Prisma.ProfileAvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAvatarPayload>
          }
          aggregate: {
            args: Prisma.ProfileAvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileAvatar>
          }
          groupBy: {
            args: Prisma.ProfileAvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileAvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileAvatarCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileAvatarCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      WorkTopic: {
        payload: Prisma.$WorkTopicPayload<ExtArgs>
        fields: Prisma.WorkTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>
          }
          findFirst: {
            args: Prisma.WorkTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>
          }
          findMany: {
            args: Prisma.WorkTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>[]
          }
          create: {
            args: Prisma.WorkTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>
          }
          createMany: {
            args: Prisma.WorkTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>[]
          }
          delete: {
            args: Prisma.WorkTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>
          }
          update: {
            args: Prisma.WorkTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>
          }
          deleteMany: {
            args: Prisma.WorkTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>[]
          }
          upsert: {
            args: Prisma.WorkTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTopicPayload>
          }
          aggregate: {
            args: Prisma.WorkTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkTopic>
          }
          groupBy: {
            args: Prisma.WorkTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkTopicCountArgs<ExtArgs>
            result: $Utils.Optional<WorkTopicCountAggregateOutputType> | number
          }
        }
      }
      WorkLike: {
        payload: Prisma.$WorkLikePayload<ExtArgs>
        fields: Prisma.WorkLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>
          }
          findFirst: {
            args: Prisma.WorkLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>
          }
          findMany: {
            args: Prisma.WorkLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>[]
          }
          create: {
            args: Prisma.WorkLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>
          }
          createMany: {
            args: Prisma.WorkLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>[]
          }
          delete: {
            args: Prisma.WorkLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>
          }
          update: {
            args: Prisma.WorkLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>
          }
          deleteMany: {
            args: Prisma.WorkLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>[]
          }
          upsert: {
            args: Prisma.WorkLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLikePayload>
          }
          aggregate: {
            args: Prisma.WorkLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkLike>
          }
          groupBy: {
            args: Prisma.WorkLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkLikeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkLikeCountAggregateOutputType> | number
          }
        }
      }
      WorkResponse: {
        payload: Prisma.$WorkResponsePayload<ExtArgs>
        fields: Prisma.WorkResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>
          }
          findFirst: {
            args: Prisma.WorkResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>
          }
          findMany: {
            args: Prisma.WorkResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>[]
          }
          create: {
            args: Prisma.WorkResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>
          }
          createMany: {
            args: Prisma.WorkResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>[]
          }
          delete: {
            args: Prisma.WorkResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>
          }
          update: {
            args: Prisma.WorkResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>
          }
          deleteMany: {
            args: Prisma.WorkResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>[]
          }
          upsert: {
            args: Prisma.WorkResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponsePayload>
          }
          aggregate: {
            args: Prisma.WorkResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkResponse>
          }
          groupBy: {
            args: Prisma.WorkResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkResponseCountArgs<ExtArgs>
            result: $Utils.Optional<WorkResponseCountAggregateOutputType> | number
          }
        }
      }
      WorkResponseLike: {
        payload: Prisma.$WorkResponseLikePayload<ExtArgs>
        fields: Prisma.WorkResponseLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkResponseLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkResponseLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>
          }
          findFirst: {
            args: Prisma.WorkResponseLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkResponseLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>
          }
          findMany: {
            args: Prisma.WorkResponseLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>[]
          }
          create: {
            args: Prisma.WorkResponseLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>
          }
          createMany: {
            args: Prisma.WorkResponseLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkResponseLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>[]
          }
          delete: {
            args: Prisma.WorkResponseLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>
          }
          update: {
            args: Prisma.WorkResponseLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>
          }
          deleteMany: {
            args: Prisma.WorkResponseLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkResponseLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkResponseLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>[]
          }
          upsert: {
            args: Prisma.WorkResponseLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkResponseLikePayload>
          }
          aggregate: {
            args: Prisma.WorkResponseLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkResponseLike>
          }
          groupBy: {
            args: Prisma.WorkResponseLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkResponseLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkResponseLikeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkResponseLikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    work?: WorkOmit
    workImage?: WorkImageOmit
    profile?: ProfileOmit
    profileAvatar?: ProfileAvatarOmit
    follow?: FollowOmit
    topic?: TopicOmit
    workTopic?: WorkTopicOmit
    workLike?: WorkLikeOmit
    workResponse?: WorkResponseOmit
    workResponseLike?: WorkResponseLikeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkCountOutputType
   */

  export type WorkCountOutputType = {
    workImages: number
    workTopics: number
    workLikes: number
    workResponses: number
  }

  export type WorkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workImages?: boolean | WorkCountOutputTypeCountWorkImagesArgs
    workTopics?: boolean | WorkCountOutputTypeCountWorkTopicsArgs
    workLikes?: boolean | WorkCountOutputTypeCountWorkLikesArgs
    workResponses?: boolean | WorkCountOutputTypeCountWorkResponsesArgs
  }

  // Custom InputTypes
  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCountOutputType
     */
    select?: WorkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountWorkImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkImageWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountWorkTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTopicWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountWorkLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLikeWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountWorkResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkResponseWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    works: number
    followers: number
    following: number
    workLikes: number
    workResponses: number
    workResponseLikes: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | ProfileCountOutputTypeCountWorksArgs
    followers?: boolean | ProfileCountOutputTypeCountFollowersArgs
    following?: boolean | ProfileCountOutputTypeCountFollowingArgs
    workLikes?: boolean | ProfileCountOutputTypeCountWorkLikesArgs
    workResponses?: boolean | ProfileCountOutputTypeCountWorkResponsesArgs
    workResponseLikes?: boolean | ProfileCountOutputTypeCountWorkResponseLikesArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWorkLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLikeWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWorkResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkResponseWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountWorkResponseLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkResponseLikeWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    workTopics: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workTopics?: boolean | TopicCountOutputTypeCountWorkTopicsArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountWorkTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTopicWhereInput
  }


  /**
   * Count Type WorkResponseCountOutputType
   */

  export type WorkResponseCountOutputType = {
    workResponseLikes: number
  }

  export type WorkResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workResponseLikes?: boolean | WorkResponseCountOutputTypeCountWorkResponseLikesArgs
  }

  // Custom InputTypes
  /**
   * WorkResponseCountOutputType without action
   */
  export type WorkResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseCountOutputType
     */
    select?: WorkResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkResponseCountOutputType without action
   */
  export type WorkResponseCountOutputTypeCountWorkResponseLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkResponseLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type WorkSumAggregateOutputType = {
    id: bigint | null
    authorId: bigint | null
  }

  export type WorkMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    description: string | null
    authorId: bigint | null
  }

  export type WorkMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    description: string | null
    authorId: bigint | null
  }

  export type WorkCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    content: number
    description: number
    authorId: number
    _all: number
  }


  export type WorkAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type WorkSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type WorkMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    description?: true
    authorId?: true
  }

  export type WorkMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    description?: true
    authorId?: true
  }

  export type WorkCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    description?: true
    authorId?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _avg?: WorkAvgAggregateInputType
    _sum?: WorkSumAggregateInputType
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    title: string
    content: string
    description: string
    authorId: bigint
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    workImages?: boolean | Work$workImagesArgs<ExtArgs>
    workTopics?: boolean | Work$workTopicsArgs<ExtArgs>
    workLikes?: boolean | Work$workLikesArgs<ExtArgs>
    workResponses?: boolean | Work$workResponsesArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    description?: boolean
    authorId?: boolean
  }

  export type WorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "content" | "description" | "authorId", ExtArgs["result"]["work"]>
  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    workImages?: boolean | Work$workImagesArgs<ExtArgs>
    workTopics?: boolean | Work$workTopicsArgs<ExtArgs>
    workLikes?: boolean | Work$workLikesArgs<ExtArgs>
    workResponses?: boolean | Work$workResponsesArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      author: Prisma.$ProfilePayload<ExtArgs>
      workImages: Prisma.$WorkImagePayload<ExtArgs>[]
      workTopics: Prisma.$WorkTopicPayload<ExtArgs>[]
      workLikes: Prisma.$WorkLikePayload<ExtArgs>[]
      workResponses: Prisma.$WorkResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      title: string
      content: string
      description: string
      authorId: bigint
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workWithIdOnly = await prisma.work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorkCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const workWithIdOnly = await prisma.work.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works and returns the data updated in the database.
     * @param {WorkUpdateManyAndReturnArgs} args - Arguments to update many Works.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Works and only return the `id`
     * const workWithIdOnly = await prisma.work.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workImages<T extends Work$workImagesArgs<ExtArgs> = {}>(args?: Subset<T, Work$workImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workTopics<T extends Work$workTopicsArgs<ExtArgs> = {}>(args?: Subset<T, Work$workTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workLikes<T extends Work$workLikesArgs<ExtArgs> = {}>(args?: Subset<T, Work$workLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workResponses<T extends Work$workResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Work$workResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Work model
   */
  interface WorkFieldRefs {
    readonly id: FieldRef<"Work", 'BigInt'>
    readonly createdAt: FieldRef<"Work", 'DateTime'>
    readonly updatedAt: FieldRef<"Work", 'DateTime'>
    readonly title: FieldRef<"Work", 'String'>
    readonly content: FieldRef<"Work", 'String'>
    readonly description: FieldRef<"Work", 'String'>
    readonly authorId: FieldRef<"Work", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Work createManyAndReturn
   */
  export type WorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work updateManyAndReturn
   */
  export type WorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Work.workImages
   */
  export type Work$workImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    where?: WorkImageWhereInput
    orderBy?: WorkImageOrderByWithRelationInput | WorkImageOrderByWithRelationInput[]
    cursor?: WorkImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkImageScalarFieldEnum | WorkImageScalarFieldEnum[]
  }

  /**
   * Work.workTopics
   */
  export type Work$workTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    where?: WorkTopicWhereInput
    orderBy?: WorkTopicOrderByWithRelationInput | WorkTopicOrderByWithRelationInput[]
    cursor?: WorkTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkTopicScalarFieldEnum | WorkTopicScalarFieldEnum[]
  }

  /**
   * Work.workLikes
   */
  export type Work$workLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    where?: WorkLikeWhereInput
    orderBy?: WorkLikeOrderByWithRelationInput | WorkLikeOrderByWithRelationInput[]
    cursor?: WorkLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkLikeScalarFieldEnum | WorkLikeScalarFieldEnum[]
  }

  /**
   * Work.workResponses
   */
  export type Work$workResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    where?: WorkResponseWhereInput
    orderBy?: WorkResponseOrderByWithRelationInput | WorkResponseOrderByWithRelationInput[]
    cursor?: WorkResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkResponseScalarFieldEnum | WorkResponseScalarFieldEnum[]
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Model WorkImage
   */

  export type AggregateWorkImage = {
    _count: WorkImageCountAggregateOutputType | null
    _avg: WorkImageAvgAggregateOutputType | null
    _sum: WorkImageSumAggregateOutputType | null
    _min: WorkImageMinAggregateOutputType | null
    _max: WorkImageMaxAggregateOutputType | null
  }

  export type WorkImageAvgAggregateOutputType = {
    id: number | null
    workId: number | null
  }

  export type WorkImageSumAggregateOutputType = {
    id: bigint | null
    workId: bigint | null
  }

  export type WorkImageMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    imagePlaceholder: string | null
    image: Uint8Array | null
    workId: bigint | null
  }

  export type WorkImageMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    imagePlaceholder: string | null
    image: Uint8Array | null
    workId: bigint | null
  }

  export type WorkImageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    imagePlaceholder: number
    image: number
    workId: number
    _all: number
  }


  export type WorkImageAvgAggregateInputType = {
    id?: true
    workId?: true
  }

  export type WorkImageSumAggregateInputType = {
    id?: true
    workId?: true
  }

  export type WorkImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imagePlaceholder?: true
    image?: true
    workId?: true
  }

  export type WorkImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imagePlaceholder?: true
    image?: true
    workId?: true
  }

  export type WorkImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imagePlaceholder?: true
    image?: true
    workId?: true
    _all?: true
  }

  export type WorkImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkImage to aggregate.
     */
    where?: WorkImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkImages to fetch.
     */
    orderBy?: WorkImageOrderByWithRelationInput | WorkImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkImages
    **/
    _count?: true | WorkImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkImageMaxAggregateInputType
  }

  export type GetWorkImageAggregateType<T extends WorkImageAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkImage[P]>
      : GetScalarType<T[P], AggregateWorkImage[P]>
  }




  export type WorkImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkImageWhereInput
    orderBy?: WorkImageOrderByWithAggregationInput | WorkImageOrderByWithAggregationInput[]
    by: WorkImageScalarFieldEnum[] | WorkImageScalarFieldEnum
    having?: WorkImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkImageCountAggregateInputType | true
    _avg?: WorkImageAvgAggregateInputType
    _sum?: WorkImageSumAggregateInputType
    _min?: WorkImageMinAggregateInputType
    _max?: WorkImageMaxAggregateInputType
  }

  export type WorkImageGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    imagePlaceholder: string
    image: Uint8Array
    workId: bigint
    _count: WorkImageCountAggregateOutputType | null
    _avg: WorkImageAvgAggregateOutputType | null
    _sum: WorkImageSumAggregateOutputType | null
    _min: WorkImageMinAggregateOutputType | null
    _max: WorkImageMaxAggregateOutputType | null
  }

  type GetWorkImageGroupByPayload<T extends WorkImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkImageGroupByOutputType[P]>
            : GetScalarType<T[P], WorkImageGroupByOutputType[P]>
        }
      >
    >


  export type WorkImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePlaceholder?: boolean
    image?: boolean
    workId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workImage"]>

  export type WorkImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePlaceholder?: boolean
    image?: boolean
    workId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workImage"]>

  export type WorkImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePlaceholder?: boolean
    image?: boolean
    workId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workImage"]>

  export type WorkImageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePlaceholder?: boolean
    image?: boolean
    workId?: boolean
  }

  export type WorkImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "imagePlaceholder" | "image" | "workId", ExtArgs["result"]["workImage"]>
  export type WorkImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $WorkImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkImage"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      imagePlaceholder: string
      image: Uint8Array
      workId: bigint
    }, ExtArgs["result"]["workImage"]>
    composites: {}
  }

  type WorkImageGetPayload<S extends boolean | null | undefined | WorkImageDefaultArgs> = $Result.GetResult<Prisma.$WorkImagePayload, S>

  type WorkImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkImageCountAggregateInputType | true
    }

  export interface WorkImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkImage'], meta: { name: 'WorkImage' } }
    /**
     * Find zero or one WorkImage that matches the filter.
     * @param {WorkImageFindUniqueArgs} args - Arguments to find a WorkImage
     * @example
     * // Get one WorkImage
     * const workImage = await prisma.workImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkImageFindUniqueArgs>(args: SelectSubset<T, WorkImageFindUniqueArgs<ExtArgs>>): Prisma__WorkImageClient<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkImageFindUniqueOrThrowArgs} args - Arguments to find a WorkImage
     * @example
     * // Get one WorkImage
     * const workImage = await prisma.workImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkImageFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkImageClient<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkImageFindFirstArgs} args - Arguments to find a WorkImage
     * @example
     * // Get one WorkImage
     * const workImage = await prisma.workImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkImageFindFirstArgs>(args?: SelectSubset<T, WorkImageFindFirstArgs<ExtArgs>>): Prisma__WorkImageClient<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkImageFindFirstOrThrowArgs} args - Arguments to find a WorkImage
     * @example
     * // Get one WorkImage
     * const workImage = await prisma.workImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkImageFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkImageClient<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkImages
     * const workImages = await prisma.workImage.findMany()
     * 
     * // Get first 10 WorkImages
     * const workImages = await prisma.workImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workImageWithIdOnly = await prisma.workImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkImageFindManyArgs>(args?: SelectSubset<T, WorkImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkImage.
     * @param {WorkImageCreateArgs} args - Arguments to create a WorkImage.
     * @example
     * // Create one WorkImage
     * const WorkImage = await prisma.workImage.create({
     *   data: {
     *     // ... data to create a WorkImage
     *   }
     * })
     * 
     */
    create<T extends WorkImageCreateArgs>(args: SelectSubset<T, WorkImageCreateArgs<ExtArgs>>): Prisma__WorkImageClient<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkImages.
     * @param {WorkImageCreateManyArgs} args - Arguments to create many WorkImages.
     * @example
     * // Create many WorkImages
     * const workImage = await prisma.workImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkImageCreateManyArgs>(args?: SelectSubset<T, WorkImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkImages and returns the data saved in the database.
     * @param {WorkImageCreateManyAndReturnArgs} args - Arguments to create many WorkImages.
     * @example
     * // Create many WorkImages
     * const workImage = await prisma.workImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkImages and only return the `id`
     * const workImageWithIdOnly = await prisma.workImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkImageCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkImage.
     * @param {WorkImageDeleteArgs} args - Arguments to delete one WorkImage.
     * @example
     * // Delete one WorkImage
     * const WorkImage = await prisma.workImage.delete({
     *   where: {
     *     // ... filter to delete one WorkImage
     *   }
     * })
     * 
     */
    delete<T extends WorkImageDeleteArgs>(args: SelectSubset<T, WorkImageDeleteArgs<ExtArgs>>): Prisma__WorkImageClient<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkImage.
     * @param {WorkImageUpdateArgs} args - Arguments to update one WorkImage.
     * @example
     * // Update one WorkImage
     * const workImage = await prisma.workImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkImageUpdateArgs>(args: SelectSubset<T, WorkImageUpdateArgs<ExtArgs>>): Prisma__WorkImageClient<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkImages.
     * @param {WorkImageDeleteManyArgs} args - Arguments to filter WorkImages to delete.
     * @example
     * // Delete a few WorkImages
     * const { count } = await prisma.workImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkImageDeleteManyArgs>(args?: SelectSubset<T, WorkImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkImages
     * const workImage = await prisma.workImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkImageUpdateManyArgs>(args: SelectSubset<T, WorkImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkImages and returns the data updated in the database.
     * @param {WorkImageUpdateManyAndReturnArgs} args - Arguments to update many WorkImages.
     * @example
     * // Update many WorkImages
     * const workImage = await prisma.workImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkImages and only return the `id`
     * const workImageWithIdOnly = await prisma.workImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkImageUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkImage.
     * @param {WorkImageUpsertArgs} args - Arguments to update or create a WorkImage.
     * @example
     * // Update or create a WorkImage
     * const workImage = await prisma.workImage.upsert({
     *   create: {
     *     // ... data to create a WorkImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkImage we want to update
     *   }
     * })
     */
    upsert<T extends WorkImageUpsertArgs>(args: SelectSubset<T, WorkImageUpsertArgs<ExtArgs>>): Prisma__WorkImageClient<$Result.GetResult<Prisma.$WorkImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkImageCountArgs} args - Arguments to filter WorkImages to count.
     * @example
     * // Count the number of WorkImages
     * const count = await prisma.workImage.count({
     *   where: {
     *     // ... the filter for the WorkImages we want to count
     *   }
     * })
    **/
    count<T extends WorkImageCountArgs>(
      args?: Subset<T, WorkImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkImageAggregateArgs>(args: Subset<T, WorkImageAggregateArgs>): Prisma.PrismaPromise<GetWorkImageAggregateType<T>>

    /**
     * Group by WorkImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkImageGroupByArgs['orderBy'] }
        : { orderBy?: WorkImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkImage model
   */
  readonly fields: WorkImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkImage model
   */
  interface WorkImageFieldRefs {
    readonly id: FieldRef<"WorkImage", 'BigInt'>
    readonly createdAt: FieldRef<"WorkImage", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkImage", 'DateTime'>
    readonly imagePlaceholder: FieldRef<"WorkImage", 'String'>
    readonly image: FieldRef<"WorkImage", 'Bytes'>
    readonly workId: FieldRef<"WorkImage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * WorkImage findUnique
   */
  export type WorkImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * Filter, which WorkImage to fetch.
     */
    where: WorkImageWhereUniqueInput
  }

  /**
   * WorkImage findUniqueOrThrow
   */
  export type WorkImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * Filter, which WorkImage to fetch.
     */
    where: WorkImageWhereUniqueInput
  }

  /**
   * WorkImage findFirst
   */
  export type WorkImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * Filter, which WorkImage to fetch.
     */
    where?: WorkImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkImages to fetch.
     */
    orderBy?: WorkImageOrderByWithRelationInput | WorkImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkImages.
     */
    cursor?: WorkImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkImages.
     */
    distinct?: WorkImageScalarFieldEnum | WorkImageScalarFieldEnum[]
  }

  /**
   * WorkImage findFirstOrThrow
   */
  export type WorkImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * Filter, which WorkImage to fetch.
     */
    where?: WorkImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkImages to fetch.
     */
    orderBy?: WorkImageOrderByWithRelationInput | WorkImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkImages.
     */
    cursor?: WorkImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkImages.
     */
    distinct?: WorkImageScalarFieldEnum | WorkImageScalarFieldEnum[]
  }

  /**
   * WorkImage findMany
   */
  export type WorkImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * Filter, which WorkImages to fetch.
     */
    where?: WorkImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkImages to fetch.
     */
    orderBy?: WorkImageOrderByWithRelationInput | WorkImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkImages.
     */
    cursor?: WorkImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkImages.
     */
    skip?: number
    distinct?: WorkImageScalarFieldEnum | WorkImageScalarFieldEnum[]
  }

  /**
   * WorkImage create
   */
  export type WorkImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkImage.
     */
    data: XOR<WorkImageCreateInput, WorkImageUncheckedCreateInput>
  }

  /**
   * WorkImage createMany
   */
  export type WorkImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkImages.
     */
    data: WorkImageCreateManyInput | WorkImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkImage createManyAndReturn
   */
  export type WorkImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * The data used to create many WorkImages.
     */
    data: WorkImageCreateManyInput | WorkImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkImage update
   */
  export type WorkImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkImage.
     */
    data: XOR<WorkImageUpdateInput, WorkImageUncheckedUpdateInput>
    /**
     * Choose, which WorkImage to update.
     */
    where: WorkImageWhereUniqueInput
  }

  /**
   * WorkImage updateMany
   */
  export type WorkImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkImages.
     */
    data: XOR<WorkImageUpdateManyMutationInput, WorkImageUncheckedUpdateManyInput>
    /**
     * Filter which WorkImages to update
     */
    where?: WorkImageWhereInput
    /**
     * Limit how many WorkImages to update.
     */
    limit?: number
  }

  /**
   * WorkImage updateManyAndReturn
   */
  export type WorkImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * The data used to update WorkImages.
     */
    data: XOR<WorkImageUpdateManyMutationInput, WorkImageUncheckedUpdateManyInput>
    /**
     * Filter which WorkImages to update
     */
    where?: WorkImageWhereInput
    /**
     * Limit how many WorkImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkImage upsert
   */
  export type WorkImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkImage to update in case it exists.
     */
    where: WorkImageWhereUniqueInput
    /**
     * In case the WorkImage found by the `where` argument doesn't exist, create a new WorkImage with this data.
     */
    create: XOR<WorkImageCreateInput, WorkImageUncheckedCreateInput>
    /**
     * In case the WorkImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkImageUpdateInput, WorkImageUncheckedUpdateInput>
  }

  /**
   * WorkImage delete
   */
  export type WorkImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
    /**
     * Filter which WorkImage to delete.
     */
    where: WorkImageWhereUniqueInput
  }

  /**
   * WorkImage deleteMany
   */
  export type WorkImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkImages to delete
     */
    where?: WorkImageWhereInput
    /**
     * Limit how many WorkImages to delete.
     */
    limit?: number
  }

  /**
   * WorkImage without action
   */
  export type WorkImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkImage
     */
    select?: WorkImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkImage
     */
    omit?: WorkImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkImageInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    avatarId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: bigint | null
    avatarId: bigint | null
  }

  export type ProfileMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    userName: string | null
    password: string | null
    fullName: string | null
    description: string | null
    socialLinkPrimary: string | null
    socialLinkSecondary: string | null
    avatarId: bigint | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    userName: string | null
    password: string | null
    fullName: string | null
    description: string | null
    socialLinkPrimary: string | null
    socialLinkSecondary: string | null
    avatarId: bigint | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userName: number
    password: number
    fullName: number
    description: number
    socialLinkPrimary: number
    socialLinkSecondary: number
    avatarId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    avatarId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    avatarId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userName?: true
    password?: true
    fullName?: true
    description?: true
    socialLinkPrimary?: true
    socialLinkSecondary?: true
    avatarId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userName?: true
    password?: true
    fullName?: true
    description?: true
    socialLinkPrimary?: true
    socialLinkSecondary?: true
    avatarId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userName?: true
    password?: true
    fullName?: true
    description?: true
    socialLinkPrimary?: true
    socialLinkSecondary?: true
    avatarId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    userName: string
    password: string
    fullName: string
    description: string | null
    socialLinkPrimary: string | null
    socialLinkSecondary: string | null
    avatarId: bigint | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userName?: boolean
    password?: boolean
    fullName?: boolean
    description?: boolean
    socialLinkPrimary?: boolean
    socialLinkSecondary?: boolean
    avatarId?: boolean
    avatar?: boolean | Profile$avatarArgs<ExtArgs>
    works?: boolean | Profile$worksArgs<ExtArgs>
    followers?: boolean | Profile$followersArgs<ExtArgs>
    following?: boolean | Profile$followingArgs<ExtArgs>
    workLikes?: boolean | Profile$workLikesArgs<ExtArgs>
    workResponses?: boolean | Profile$workResponsesArgs<ExtArgs>
    workResponseLikes?: boolean | Profile$workResponseLikesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userName?: boolean
    password?: boolean
    fullName?: boolean
    description?: boolean
    socialLinkPrimary?: boolean
    socialLinkSecondary?: boolean
    avatarId?: boolean
    avatar?: boolean | Profile$avatarArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userName?: boolean
    password?: boolean
    fullName?: boolean
    description?: boolean
    socialLinkPrimary?: boolean
    socialLinkSecondary?: boolean
    avatarId?: boolean
    avatar?: boolean | Profile$avatarArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userName?: boolean
    password?: boolean
    fullName?: boolean
    description?: boolean
    socialLinkPrimary?: boolean
    socialLinkSecondary?: boolean
    avatarId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userName" | "password" | "fullName" | "description" | "socialLinkPrimary" | "socialLinkSecondary" | "avatarId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatar?: boolean | Profile$avatarArgs<ExtArgs>
    works?: boolean | Profile$worksArgs<ExtArgs>
    followers?: boolean | Profile$followersArgs<ExtArgs>
    following?: boolean | Profile$followingArgs<ExtArgs>
    workLikes?: boolean | Profile$workLikesArgs<ExtArgs>
    workResponses?: boolean | Profile$workResponsesArgs<ExtArgs>
    workResponseLikes?: boolean | Profile$workResponseLikesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatar?: boolean | Profile$avatarArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatar?: boolean | Profile$avatarArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      avatar: Prisma.$ProfileAvatarPayload<ExtArgs> | null
      works: Prisma.$WorkPayload<ExtArgs>[]
      followers: Prisma.$FollowPayload<ExtArgs>[]
      following: Prisma.$FollowPayload<ExtArgs>[]
      workLikes: Prisma.$WorkLikePayload<ExtArgs>[]
      workResponses: Prisma.$WorkResponsePayload<ExtArgs>[]
      workResponseLikes: Prisma.$WorkResponseLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      userName: string
      password: string
      fullName: string
      description: string | null
      socialLinkPrimary: string | null
      socialLinkSecondary: string | null
      avatarId: bigint | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avatar<T extends Profile$avatarArgs<ExtArgs> = {}>(args?: Subset<T, Profile$avatarArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    works<T extends Profile$worksArgs<ExtArgs> = {}>(args?: Subset<T, Profile$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends Profile$followersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends Profile$followingArgs<ExtArgs> = {}>(args?: Subset<T, Profile$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workLikes<T extends Profile$workLikesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$workLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workResponses<T extends Profile$workResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$workResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workResponseLikes<T extends Profile$workResponseLikesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$workResponseLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'BigInt'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly userName: FieldRef<"Profile", 'String'>
    readonly password: FieldRef<"Profile", 'String'>
    readonly fullName: FieldRef<"Profile", 'String'>
    readonly description: FieldRef<"Profile", 'String'>
    readonly socialLinkPrimary: FieldRef<"Profile", 'String'>
    readonly socialLinkSecondary: FieldRef<"Profile", 'String'>
    readonly avatarId: FieldRef<"Profile", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.avatar
   */
  export type Profile$avatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    where?: ProfileAvatarWhereInput
  }

  /**
   * Profile.works
   */
  export type Profile$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    cursor?: WorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Profile.followers
   */
  export type Profile$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Profile.following
   */
  export type Profile$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Profile.workLikes
   */
  export type Profile$workLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    where?: WorkLikeWhereInput
    orderBy?: WorkLikeOrderByWithRelationInput | WorkLikeOrderByWithRelationInput[]
    cursor?: WorkLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkLikeScalarFieldEnum | WorkLikeScalarFieldEnum[]
  }

  /**
   * Profile.workResponses
   */
  export type Profile$workResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    where?: WorkResponseWhereInput
    orderBy?: WorkResponseOrderByWithRelationInput | WorkResponseOrderByWithRelationInput[]
    cursor?: WorkResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkResponseScalarFieldEnum | WorkResponseScalarFieldEnum[]
  }

  /**
   * Profile.workResponseLikes
   */
  export type Profile$workResponseLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    where?: WorkResponseLikeWhereInput
    orderBy?: WorkResponseLikeOrderByWithRelationInput | WorkResponseLikeOrderByWithRelationInput[]
    cursor?: WorkResponseLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkResponseLikeScalarFieldEnum | WorkResponseLikeScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model ProfileAvatar
   */

  export type AggregateProfileAvatar = {
    _count: ProfileAvatarCountAggregateOutputType | null
    _avg: ProfileAvatarAvgAggregateOutputType | null
    _sum: ProfileAvatarSumAggregateOutputType | null
    _min: ProfileAvatarMinAggregateOutputType | null
    _max: ProfileAvatarMaxAggregateOutputType | null
  }

  export type ProfileAvatarAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfileAvatarSumAggregateOutputType = {
    id: bigint | null
  }

  export type ProfileAvatarMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    avatar: Uint8Array | null
  }

  export type ProfileAvatarMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    avatar: Uint8Array | null
  }

  export type ProfileAvatarCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    avatar: number
    _all: number
  }


  export type ProfileAvatarAvgAggregateInputType = {
    id?: true
  }

  export type ProfileAvatarSumAggregateInputType = {
    id?: true
  }

  export type ProfileAvatarMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    avatar?: true
  }

  export type ProfileAvatarMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    avatar?: true
  }

  export type ProfileAvatarCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    avatar?: true
    _all?: true
  }

  export type ProfileAvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileAvatar to aggregate.
     */
    where?: ProfileAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAvatars to fetch.
     */
    orderBy?: ProfileAvatarOrderByWithRelationInput | ProfileAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileAvatars
    **/
    _count?: true | ProfileAvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileAvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileAvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileAvatarMaxAggregateInputType
  }

  export type GetProfileAvatarAggregateType<T extends ProfileAvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileAvatar[P]>
      : GetScalarType<T[P], AggregateProfileAvatar[P]>
  }




  export type ProfileAvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileAvatarWhereInput
    orderBy?: ProfileAvatarOrderByWithAggregationInput | ProfileAvatarOrderByWithAggregationInput[]
    by: ProfileAvatarScalarFieldEnum[] | ProfileAvatarScalarFieldEnum
    having?: ProfileAvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileAvatarCountAggregateInputType | true
    _avg?: ProfileAvatarAvgAggregateInputType
    _sum?: ProfileAvatarSumAggregateInputType
    _min?: ProfileAvatarMinAggregateInputType
    _max?: ProfileAvatarMaxAggregateInputType
  }

  export type ProfileAvatarGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    avatar: Uint8Array
    _count: ProfileAvatarCountAggregateOutputType | null
    _avg: ProfileAvatarAvgAggregateOutputType | null
    _sum: ProfileAvatarSumAggregateOutputType | null
    _min: ProfileAvatarMinAggregateOutputType | null
    _max: ProfileAvatarMaxAggregateOutputType | null
  }

  type GetProfileAvatarGroupByPayload<T extends ProfileAvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileAvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileAvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileAvatarGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileAvatarGroupByOutputType[P]>
        }
      >
    >


  export type ProfileAvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatar?: boolean
    profile?: boolean | ProfileAvatar$profileArgs<ExtArgs>
  }, ExtArgs["result"]["profileAvatar"]>

  export type ProfileAvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["profileAvatar"]>

  export type ProfileAvatarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["profileAvatar"]>

  export type ProfileAvatarSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatar?: boolean
  }

  export type ProfileAvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "avatar", ExtArgs["result"]["profileAvatar"]>
  export type ProfileAvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileAvatar$profileArgs<ExtArgs>
  }
  export type ProfileAvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileAvatarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfileAvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileAvatar"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      avatar: Uint8Array
    }, ExtArgs["result"]["profileAvatar"]>
    composites: {}
  }

  type ProfileAvatarGetPayload<S extends boolean | null | undefined | ProfileAvatarDefaultArgs> = $Result.GetResult<Prisma.$ProfileAvatarPayload, S>

  type ProfileAvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileAvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileAvatarCountAggregateInputType | true
    }

  export interface ProfileAvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileAvatar'], meta: { name: 'ProfileAvatar' } }
    /**
     * Find zero or one ProfileAvatar that matches the filter.
     * @param {ProfileAvatarFindUniqueArgs} args - Arguments to find a ProfileAvatar
     * @example
     * // Get one ProfileAvatar
     * const profileAvatar = await prisma.profileAvatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileAvatarFindUniqueArgs>(args: SelectSubset<T, ProfileAvatarFindUniqueArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileAvatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileAvatarFindUniqueOrThrowArgs} args - Arguments to find a ProfileAvatar
     * @example
     * // Get one ProfileAvatar
     * const profileAvatar = await prisma.profileAvatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileAvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileAvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileAvatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAvatarFindFirstArgs} args - Arguments to find a ProfileAvatar
     * @example
     * // Get one ProfileAvatar
     * const profileAvatar = await prisma.profileAvatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileAvatarFindFirstArgs>(args?: SelectSubset<T, ProfileAvatarFindFirstArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileAvatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAvatarFindFirstOrThrowArgs} args - Arguments to find a ProfileAvatar
     * @example
     * // Get one ProfileAvatar
     * const profileAvatar = await prisma.profileAvatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileAvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileAvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileAvatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileAvatars
     * const profileAvatars = await prisma.profileAvatar.findMany()
     * 
     * // Get first 10 ProfileAvatars
     * const profileAvatars = await prisma.profileAvatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileAvatarWithIdOnly = await prisma.profileAvatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileAvatarFindManyArgs>(args?: SelectSubset<T, ProfileAvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileAvatar.
     * @param {ProfileAvatarCreateArgs} args - Arguments to create a ProfileAvatar.
     * @example
     * // Create one ProfileAvatar
     * const ProfileAvatar = await prisma.profileAvatar.create({
     *   data: {
     *     // ... data to create a ProfileAvatar
     *   }
     * })
     * 
     */
    create<T extends ProfileAvatarCreateArgs>(args: SelectSubset<T, ProfileAvatarCreateArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileAvatars.
     * @param {ProfileAvatarCreateManyArgs} args - Arguments to create many ProfileAvatars.
     * @example
     * // Create many ProfileAvatars
     * const profileAvatar = await prisma.profileAvatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileAvatarCreateManyArgs>(args?: SelectSubset<T, ProfileAvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileAvatars and returns the data saved in the database.
     * @param {ProfileAvatarCreateManyAndReturnArgs} args - Arguments to create many ProfileAvatars.
     * @example
     * // Create many ProfileAvatars
     * const profileAvatar = await prisma.profileAvatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileAvatars and only return the `id`
     * const profileAvatarWithIdOnly = await prisma.profileAvatar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileAvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileAvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileAvatar.
     * @param {ProfileAvatarDeleteArgs} args - Arguments to delete one ProfileAvatar.
     * @example
     * // Delete one ProfileAvatar
     * const ProfileAvatar = await prisma.profileAvatar.delete({
     *   where: {
     *     // ... filter to delete one ProfileAvatar
     *   }
     * })
     * 
     */
    delete<T extends ProfileAvatarDeleteArgs>(args: SelectSubset<T, ProfileAvatarDeleteArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileAvatar.
     * @param {ProfileAvatarUpdateArgs} args - Arguments to update one ProfileAvatar.
     * @example
     * // Update one ProfileAvatar
     * const profileAvatar = await prisma.profileAvatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileAvatarUpdateArgs>(args: SelectSubset<T, ProfileAvatarUpdateArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileAvatars.
     * @param {ProfileAvatarDeleteManyArgs} args - Arguments to filter ProfileAvatars to delete.
     * @example
     * // Delete a few ProfileAvatars
     * const { count } = await prisma.profileAvatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileAvatarDeleteManyArgs>(args?: SelectSubset<T, ProfileAvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileAvatars
     * const profileAvatar = await prisma.profileAvatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileAvatarUpdateManyArgs>(args: SelectSubset<T, ProfileAvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileAvatars and returns the data updated in the database.
     * @param {ProfileAvatarUpdateManyAndReturnArgs} args - Arguments to update many ProfileAvatars.
     * @example
     * // Update many ProfileAvatars
     * const profileAvatar = await prisma.profileAvatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileAvatars and only return the `id`
     * const profileAvatarWithIdOnly = await prisma.profileAvatar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileAvatarUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileAvatarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileAvatar.
     * @param {ProfileAvatarUpsertArgs} args - Arguments to update or create a ProfileAvatar.
     * @example
     * // Update or create a ProfileAvatar
     * const profileAvatar = await prisma.profileAvatar.upsert({
     *   create: {
     *     // ... data to create a ProfileAvatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileAvatar we want to update
     *   }
     * })
     */
    upsert<T extends ProfileAvatarUpsertArgs>(args: SelectSubset<T, ProfileAvatarUpsertArgs<ExtArgs>>): Prisma__ProfileAvatarClient<$Result.GetResult<Prisma.$ProfileAvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAvatarCountArgs} args - Arguments to filter ProfileAvatars to count.
     * @example
     * // Count the number of ProfileAvatars
     * const count = await prisma.profileAvatar.count({
     *   where: {
     *     // ... the filter for the ProfileAvatars we want to count
     *   }
     * })
    **/
    count<T extends ProfileAvatarCountArgs>(
      args?: Subset<T, ProfileAvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileAvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAvatarAggregateArgs>(args: Subset<T, ProfileAvatarAggregateArgs>): Prisma.PrismaPromise<GetProfileAvatarAggregateType<T>>

    /**
     * Group by ProfileAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileAvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileAvatarGroupByArgs['orderBy'] }
        : { orderBy?: ProfileAvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileAvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileAvatar model
   */
  readonly fields: ProfileAvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileAvatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileAvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileAvatar$profileArgs<ExtArgs> = {}>(args?: Subset<T, ProfileAvatar$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileAvatar model
   */
  interface ProfileAvatarFieldRefs {
    readonly id: FieldRef<"ProfileAvatar", 'BigInt'>
    readonly createdAt: FieldRef<"ProfileAvatar", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileAvatar", 'DateTime'>
    readonly avatar: FieldRef<"ProfileAvatar", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * ProfileAvatar findUnique
   */
  export type ProfileAvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAvatar to fetch.
     */
    where: ProfileAvatarWhereUniqueInput
  }

  /**
   * ProfileAvatar findUniqueOrThrow
   */
  export type ProfileAvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAvatar to fetch.
     */
    where: ProfileAvatarWhereUniqueInput
  }

  /**
   * ProfileAvatar findFirst
   */
  export type ProfileAvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAvatar to fetch.
     */
    where?: ProfileAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAvatars to fetch.
     */
    orderBy?: ProfileAvatarOrderByWithRelationInput | ProfileAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileAvatars.
     */
    cursor?: ProfileAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileAvatars.
     */
    distinct?: ProfileAvatarScalarFieldEnum | ProfileAvatarScalarFieldEnum[]
  }

  /**
   * ProfileAvatar findFirstOrThrow
   */
  export type ProfileAvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAvatar to fetch.
     */
    where?: ProfileAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAvatars to fetch.
     */
    orderBy?: ProfileAvatarOrderByWithRelationInput | ProfileAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileAvatars.
     */
    cursor?: ProfileAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileAvatars.
     */
    distinct?: ProfileAvatarScalarFieldEnum | ProfileAvatarScalarFieldEnum[]
  }

  /**
   * ProfileAvatar findMany
   */
  export type ProfileAvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAvatars to fetch.
     */
    where?: ProfileAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAvatars to fetch.
     */
    orderBy?: ProfileAvatarOrderByWithRelationInput | ProfileAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileAvatars.
     */
    cursor?: ProfileAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAvatars.
     */
    skip?: number
    distinct?: ProfileAvatarScalarFieldEnum | ProfileAvatarScalarFieldEnum[]
  }

  /**
   * ProfileAvatar create
   */
  export type ProfileAvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileAvatar.
     */
    data: XOR<ProfileAvatarCreateInput, ProfileAvatarUncheckedCreateInput>
  }

  /**
   * ProfileAvatar createMany
   */
  export type ProfileAvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileAvatars.
     */
    data: ProfileAvatarCreateManyInput | ProfileAvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileAvatar createManyAndReturn
   */
  export type ProfileAvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileAvatars.
     */
    data: ProfileAvatarCreateManyInput | ProfileAvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileAvatar update
   */
  export type ProfileAvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileAvatar.
     */
    data: XOR<ProfileAvatarUpdateInput, ProfileAvatarUncheckedUpdateInput>
    /**
     * Choose, which ProfileAvatar to update.
     */
    where: ProfileAvatarWhereUniqueInput
  }

  /**
   * ProfileAvatar updateMany
   */
  export type ProfileAvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileAvatars.
     */
    data: XOR<ProfileAvatarUpdateManyMutationInput, ProfileAvatarUncheckedUpdateManyInput>
    /**
     * Filter which ProfileAvatars to update
     */
    where?: ProfileAvatarWhereInput
    /**
     * Limit how many ProfileAvatars to update.
     */
    limit?: number
  }

  /**
   * ProfileAvatar updateManyAndReturn
   */
  export type ProfileAvatarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * The data used to update ProfileAvatars.
     */
    data: XOR<ProfileAvatarUpdateManyMutationInput, ProfileAvatarUncheckedUpdateManyInput>
    /**
     * Filter which ProfileAvatars to update
     */
    where?: ProfileAvatarWhereInput
    /**
     * Limit how many ProfileAvatars to update.
     */
    limit?: number
  }

  /**
   * ProfileAvatar upsert
   */
  export type ProfileAvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileAvatar to update in case it exists.
     */
    where: ProfileAvatarWhereUniqueInput
    /**
     * In case the ProfileAvatar found by the `where` argument doesn't exist, create a new ProfileAvatar with this data.
     */
    create: XOR<ProfileAvatarCreateInput, ProfileAvatarUncheckedCreateInput>
    /**
     * In case the ProfileAvatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileAvatarUpdateInput, ProfileAvatarUncheckedUpdateInput>
  }

  /**
   * ProfileAvatar delete
   */
  export type ProfileAvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
    /**
     * Filter which ProfileAvatar to delete.
     */
    where: ProfileAvatarWhereUniqueInput
  }

  /**
   * ProfileAvatar deleteMany
   */
  export type ProfileAvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileAvatars to delete
     */
    where?: ProfileAvatarWhereInput
    /**
     * Limit how many ProfileAvatars to delete.
     */
    limit?: number
  }

  /**
   * ProfileAvatar.profile
   */
  export type ProfileAvatar$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * ProfileAvatar without action
   */
  export type ProfileAvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAvatar
     */
    select?: ProfileAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAvatar
     */
    omit?: ProfileAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAvatarInclude<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowAvgAggregateOutputType = {
    id: number | null
    followerId: number | null
    followedId: number | null
  }

  export type FollowSumAggregateOutputType = {
    id: bigint | null
    followerId: bigint | null
    followedId: bigint | null
  }

  export type FollowMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    followerId: bigint | null
    followedId: bigint | null
  }

  export type FollowMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    followerId: bigint | null
    followedId: bigint | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    followerId: number
    followedId: number
    _all: number
  }


  export type FollowAvgAggregateInputType = {
    id?: true
    followerId?: true
    followedId?: true
  }

  export type FollowSumAggregateInputType = {
    id?: true
    followerId?: true
    followedId?: true
  }

  export type FollowMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    followerId?: true
    followedId?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    followerId?: true
    followedId?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    followerId?: true
    followedId?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _avg?: FollowAvgAggregateInputType
    _sum?: FollowSumAggregateInputType
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    followerId: bigint
    followedId: bigint
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    followerId?: boolean
    followedId?: boolean
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    followerId?: boolean
    followedId?: boolean
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    followerId?: boolean
    followedId?: boolean
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    followerId?: boolean
    followedId?: boolean
  }

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "followerId" | "followedId", ExtArgs["result"]["follow"]>
  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FollowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
    followed?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      follower: Prisma.$ProfilePayload<ExtArgs>
      followed: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      followerId: bigint
      followedId: bigint
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    followed<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'BigInt'>
    readonly createdAt: FieldRef<"Follow", 'DateTime'>
    readonly updatedAt: FieldRef<"Follow", 'DateTime'>
    readonly followerId: FieldRef<"Follow", 'BigInt'>
    readonly followedId: FieldRef<"Follow", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follow updateManyAndReturn
   */
  export type FollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    id: number | null
  }

  export type TopicSumAggregateOutputType = {
    id: bigint | null
  }

  export type TopicMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type TopicMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    id?: true
  }

  export type TopicSumAggregateInputType = {
    id?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    name: string
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    workTopics?: boolean | Topic$workTopicsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workTopics?: boolean | Topic$workTopicsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      workTopics: Prisma.$WorkTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      name: string
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workTopics<T extends Topic$workTopicsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$workTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'BigInt'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly updatedAt: FieldRef<"Topic", 'DateTime'>
    readonly name: FieldRef<"Topic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.workTopics
   */
  export type Topic$workTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    where?: WorkTopicWhereInput
    orderBy?: WorkTopicOrderByWithRelationInput | WorkTopicOrderByWithRelationInput[]
    cursor?: WorkTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkTopicScalarFieldEnum | WorkTopicScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model WorkTopic
   */

  export type AggregateWorkTopic = {
    _count: WorkTopicCountAggregateOutputType | null
    _avg: WorkTopicAvgAggregateOutputType | null
    _sum: WorkTopicSumAggregateOutputType | null
    _min: WorkTopicMinAggregateOutputType | null
    _max: WorkTopicMaxAggregateOutputType | null
  }

  export type WorkTopicAvgAggregateOutputType = {
    id: number | null
    workId: number | null
    topicId: number | null
  }

  export type WorkTopicSumAggregateOutputType = {
    id: bigint | null
    workId: bigint | null
    topicId: bigint | null
  }

  export type WorkTopicMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    workId: bigint | null
    topicId: bigint | null
  }

  export type WorkTopicMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    workId: bigint | null
    topicId: bigint | null
  }

  export type WorkTopicCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    workId: number
    topicId: number
    _all: number
  }


  export type WorkTopicAvgAggregateInputType = {
    id?: true
    workId?: true
    topicId?: true
  }

  export type WorkTopicSumAggregateInputType = {
    id?: true
    workId?: true
    topicId?: true
  }

  export type WorkTopicMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workId?: true
    topicId?: true
  }

  export type WorkTopicMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workId?: true
    topicId?: true
  }

  export type WorkTopicCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workId?: true
    topicId?: true
    _all?: true
  }

  export type WorkTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkTopic to aggregate.
     */
    where?: WorkTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTopics to fetch.
     */
    orderBy?: WorkTopicOrderByWithRelationInput | WorkTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkTopics
    **/
    _count?: true | WorkTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkTopicMaxAggregateInputType
  }

  export type GetWorkTopicAggregateType<T extends WorkTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkTopic[P]>
      : GetScalarType<T[P], AggregateWorkTopic[P]>
  }




  export type WorkTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTopicWhereInput
    orderBy?: WorkTopicOrderByWithAggregationInput | WorkTopicOrderByWithAggregationInput[]
    by: WorkTopicScalarFieldEnum[] | WorkTopicScalarFieldEnum
    having?: WorkTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkTopicCountAggregateInputType | true
    _avg?: WorkTopicAvgAggregateInputType
    _sum?: WorkTopicSumAggregateInputType
    _min?: WorkTopicMinAggregateInputType
    _max?: WorkTopicMaxAggregateInputType
  }

  export type WorkTopicGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    workId: bigint
    topicId: bigint
    _count: WorkTopicCountAggregateOutputType | null
    _avg: WorkTopicAvgAggregateOutputType | null
    _sum: WorkTopicSumAggregateOutputType | null
    _min: WorkTopicMinAggregateOutputType | null
    _max: WorkTopicMaxAggregateOutputType | null
  }

  type GetWorkTopicGroupByPayload<T extends WorkTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkTopicGroupByOutputType[P]>
            : GetScalarType<T[P], WorkTopicGroupByOutputType[P]>
        }
      >
    >


  export type WorkTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workId?: boolean
    topicId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workTopic"]>

  export type WorkTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workId?: boolean
    topicId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workTopic"]>

  export type WorkTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workId?: boolean
    topicId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workTopic"]>

  export type WorkTopicSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workId?: boolean
    topicId?: boolean
  }

  export type WorkTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "workId" | "topicId", ExtArgs["result"]["workTopic"]>
  export type WorkTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type WorkTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type WorkTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $WorkTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkTopic"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      workId: bigint
      topicId: bigint
    }, ExtArgs["result"]["workTopic"]>
    composites: {}
  }

  type WorkTopicGetPayload<S extends boolean | null | undefined | WorkTopicDefaultArgs> = $Result.GetResult<Prisma.$WorkTopicPayload, S>

  type WorkTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkTopicCountAggregateInputType | true
    }

  export interface WorkTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkTopic'], meta: { name: 'WorkTopic' } }
    /**
     * Find zero or one WorkTopic that matches the filter.
     * @param {WorkTopicFindUniqueArgs} args - Arguments to find a WorkTopic
     * @example
     * // Get one WorkTopic
     * const workTopic = await prisma.workTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkTopicFindUniqueArgs>(args: SelectSubset<T, WorkTopicFindUniqueArgs<ExtArgs>>): Prisma__WorkTopicClient<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkTopicFindUniqueOrThrowArgs} args - Arguments to find a WorkTopic
     * @example
     * // Get one WorkTopic
     * const workTopic = await prisma.workTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkTopicClient<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTopicFindFirstArgs} args - Arguments to find a WorkTopic
     * @example
     * // Get one WorkTopic
     * const workTopic = await prisma.workTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkTopicFindFirstArgs>(args?: SelectSubset<T, WorkTopicFindFirstArgs<ExtArgs>>): Prisma__WorkTopicClient<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTopicFindFirstOrThrowArgs} args - Arguments to find a WorkTopic
     * @example
     * // Get one WorkTopic
     * const workTopic = await prisma.workTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkTopicClient<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkTopics
     * const workTopics = await prisma.workTopic.findMany()
     * 
     * // Get first 10 WorkTopics
     * const workTopics = await prisma.workTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workTopicWithIdOnly = await prisma.workTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkTopicFindManyArgs>(args?: SelectSubset<T, WorkTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkTopic.
     * @param {WorkTopicCreateArgs} args - Arguments to create a WorkTopic.
     * @example
     * // Create one WorkTopic
     * const WorkTopic = await prisma.workTopic.create({
     *   data: {
     *     // ... data to create a WorkTopic
     *   }
     * })
     * 
     */
    create<T extends WorkTopicCreateArgs>(args: SelectSubset<T, WorkTopicCreateArgs<ExtArgs>>): Prisma__WorkTopicClient<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkTopics.
     * @param {WorkTopicCreateManyArgs} args - Arguments to create many WorkTopics.
     * @example
     * // Create many WorkTopics
     * const workTopic = await prisma.workTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkTopicCreateManyArgs>(args?: SelectSubset<T, WorkTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkTopics and returns the data saved in the database.
     * @param {WorkTopicCreateManyAndReturnArgs} args - Arguments to create many WorkTopics.
     * @example
     * // Create many WorkTopics
     * const workTopic = await prisma.workTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkTopics and only return the `id`
     * const workTopicWithIdOnly = await prisma.workTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkTopic.
     * @param {WorkTopicDeleteArgs} args - Arguments to delete one WorkTopic.
     * @example
     * // Delete one WorkTopic
     * const WorkTopic = await prisma.workTopic.delete({
     *   where: {
     *     // ... filter to delete one WorkTopic
     *   }
     * })
     * 
     */
    delete<T extends WorkTopicDeleteArgs>(args: SelectSubset<T, WorkTopicDeleteArgs<ExtArgs>>): Prisma__WorkTopicClient<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkTopic.
     * @param {WorkTopicUpdateArgs} args - Arguments to update one WorkTopic.
     * @example
     * // Update one WorkTopic
     * const workTopic = await prisma.workTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkTopicUpdateArgs>(args: SelectSubset<T, WorkTopicUpdateArgs<ExtArgs>>): Prisma__WorkTopicClient<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkTopics.
     * @param {WorkTopicDeleteManyArgs} args - Arguments to filter WorkTopics to delete.
     * @example
     * // Delete a few WorkTopics
     * const { count } = await prisma.workTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkTopicDeleteManyArgs>(args?: SelectSubset<T, WorkTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkTopics
     * const workTopic = await prisma.workTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkTopicUpdateManyArgs>(args: SelectSubset<T, WorkTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkTopics and returns the data updated in the database.
     * @param {WorkTopicUpdateManyAndReturnArgs} args - Arguments to update many WorkTopics.
     * @example
     * // Update many WorkTopics
     * const workTopic = await prisma.workTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkTopics and only return the `id`
     * const workTopicWithIdOnly = await prisma.workTopic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkTopic.
     * @param {WorkTopicUpsertArgs} args - Arguments to update or create a WorkTopic.
     * @example
     * // Update or create a WorkTopic
     * const workTopic = await prisma.workTopic.upsert({
     *   create: {
     *     // ... data to create a WorkTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkTopic we want to update
     *   }
     * })
     */
    upsert<T extends WorkTopicUpsertArgs>(args: SelectSubset<T, WorkTopicUpsertArgs<ExtArgs>>): Prisma__WorkTopicClient<$Result.GetResult<Prisma.$WorkTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTopicCountArgs} args - Arguments to filter WorkTopics to count.
     * @example
     * // Count the number of WorkTopics
     * const count = await prisma.workTopic.count({
     *   where: {
     *     // ... the filter for the WorkTopics we want to count
     *   }
     * })
    **/
    count<T extends WorkTopicCountArgs>(
      args?: Subset<T, WorkTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkTopicAggregateArgs>(args: Subset<T, WorkTopicAggregateArgs>): Prisma.PrismaPromise<GetWorkTopicAggregateType<T>>

    /**
     * Group by WorkTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkTopicGroupByArgs['orderBy'] }
        : { orderBy?: WorkTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkTopic model
   */
  readonly fields: WorkTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkTopic model
   */
  interface WorkTopicFieldRefs {
    readonly id: FieldRef<"WorkTopic", 'BigInt'>
    readonly createdAt: FieldRef<"WorkTopic", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkTopic", 'DateTime'>
    readonly workId: FieldRef<"WorkTopic", 'BigInt'>
    readonly topicId: FieldRef<"WorkTopic", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * WorkTopic findUnique
   */
  export type WorkTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * Filter, which WorkTopic to fetch.
     */
    where: WorkTopicWhereUniqueInput
  }

  /**
   * WorkTopic findUniqueOrThrow
   */
  export type WorkTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * Filter, which WorkTopic to fetch.
     */
    where: WorkTopicWhereUniqueInput
  }

  /**
   * WorkTopic findFirst
   */
  export type WorkTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * Filter, which WorkTopic to fetch.
     */
    where?: WorkTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTopics to fetch.
     */
    orderBy?: WorkTopicOrderByWithRelationInput | WorkTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkTopics.
     */
    cursor?: WorkTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTopics.
     */
    distinct?: WorkTopicScalarFieldEnum | WorkTopicScalarFieldEnum[]
  }

  /**
   * WorkTopic findFirstOrThrow
   */
  export type WorkTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * Filter, which WorkTopic to fetch.
     */
    where?: WorkTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTopics to fetch.
     */
    orderBy?: WorkTopicOrderByWithRelationInput | WorkTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkTopics.
     */
    cursor?: WorkTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTopics.
     */
    distinct?: WorkTopicScalarFieldEnum | WorkTopicScalarFieldEnum[]
  }

  /**
   * WorkTopic findMany
   */
  export type WorkTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * Filter, which WorkTopics to fetch.
     */
    where?: WorkTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTopics to fetch.
     */
    orderBy?: WorkTopicOrderByWithRelationInput | WorkTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkTopics.
     */
    cursor?: WorkTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTopics.
     */
    skip?: number
    distinct?: WorkTopicScalarFieldEnum | WorkTopicScalarFieldEnum[]
  }

  /**
   * WorkTopic create
   */
  export type WorkTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkTopic.
     */
    data: XOR<WorkTopicCreateInput, WorkTopicUncheckedCreateInput>
  }

  /**
   * WorkTopic createMany
   */
  export type WorkTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkTopics.
     */
    data: WorkTopicCreateManyInput | WorkTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkTopic createManyAndReturn
   */
  export type WorkTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * The data used to create many WorkTopics.
     */
    data: WorkTopicCreateManyInput | WorkTopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkTopic update
   */
  export type WorkTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkTopic.
     */
    data: XOR<WorkTopicUpdateInput, WorkTopicUncheckedUpdateInput>
    /**
     * Choose, which WorkTopic to update.
     */
    where: WorkTopicWhereUniqueInput
  }

  /**
   * WorkTopic updateMany
   */
  export type WorkTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkTopics.
     */
    data: XOR<WorkTopicUpdateManyMutationInput, WorkTopicUncheckedUpdateManyInput>
    /**
     * Filter which WorkTopics to update
     */
    where?: WorkTopicWhereInput
    /**
     * Limit how many WorkTopics to update.
     */
    limit?: number
  }

  /**
   * WorkTopic updateManyAndReturn
   */
  export type WorkTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * The data used to update WorkTopics.
     */
    data: XOR<WorkTopicUpdateManyMutationInput, WorkTopicUncheckedUpdateManyInput>
    /**
     * Filter which WorkTopics to update
     */
    where?: WorkTopicWhereInput
    /**
     * Limit how many WorkTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkTopic upsert
   */
  export type WorkTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkTopic to update in case it exists.
     */
    where: WorkTopicWhereUniqueInput
    /**
     * In case the WorkTopic found by the `where` argument doesn't exist, create a new WorkTopic with this data.
     */
    create: XOR<WorkTopicCreateInput, WorkTopicUncheckedCreateInput>
    /**
     * In case the WorkTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkTopicUpdateInput, WorkTopicUncheckedUpdateInput>
  }

  /**
   * WorkTopic delete
   */
  export type WorkTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
    /**
     * Filter which WorkTopic to delete.
     */
    where: WorkTopicWhereUniqueInput
  }

  /**
   * WorkTopic deleteMany
   */
  export type WorkTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkTopics to delete
     */
    where?: WorkTopicWhereInput
    /**
     * Limit how many WorkTopics to delete.
     */
    limit?: number
  }

  /**
   * WorkTopic without action
   */
  export type WorkTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTopic
     */
    select?: WorkTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTopic
     */
    omit?: WorkTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTopicInclude<ExtArgs> | null
  }


  /**
   * Model WorkLike
   */

  export type AggregateWorkLike = {
    _count: WorkLikeCountAggregateOutputType | null
    _avg: WorkLikeAvgAggregateOutputType | null
    _sum: WorkLikeSumAggregateOutputType | null
    _min: WorkLikeMinAggregateOutputType | null
    _max: WorkLikeMaxAggregateOutputType | null
  }

  export type WorkLikeAvgAggregateOutputType = {
    id: number | null
    workId: number | null
    likerId: number | null
  }

  export type WorkLikeSumAggregateOutputType = {
    id: bigint | null
    workId: bigint | null
    likerId: bigint | null
  }

  export type WorkLikeMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    workId: bigint | null
    likerId: bigint | null
  }

  export type WorkLikeMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    workId: bigint | null
    likerId: bigint | null
  }

  export type WorkLikeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    workId: number
    likerId: number
    _all: number
  }


  export type WorkLikeAvgAggregateInputType = {
    id?: true
    workId?: true
    likerId?: true
  }

  export type WorkLikeSumAggregateInputType = {
    id?: true
    workId?: true
    likerId?: true
  }

  export type WorkLikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workId?: true
    likerId?: true
  }

  export type WorkLikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workId?: true
    likerId?: true
  }

  export type WorkLikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workId?: true
    likerId?: true
    _all?: true
  }

  export type WorkLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkLike to aggregate.
     */
    where?: WorkLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLikes to fetch.
     */
    orderBy?: WorkLikeOrderByWithRelationInput | WorkLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkLikes
    **/
    _count?: true | WorkLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkLikeMaxAggregateInputType
  }

  export type GetWorkLikeAggregateType<T extends WorkLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkLike[P]>
      : GetScalarType<T[P], AggregateWorkLike[P]>
  }




  export type WorkLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLikeWhereInput
    orderBy?: WorkLikeOrderByWithAggregationInput | WorkLikeOrderByWithAggregationInput[]
    by: WorkLikeScalarFieldEnum[] | WorkLikeScalarFieldEnum
    having?: WorkLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkLikeCountAggregateInputType | true
    _avg?: WorkLikeAvgAggregateInputType
    _sum?: WorkLikeSumAggregateInputType
    _min?: WorkLikeMinAggregateInputType
    _max?: WorkLikeMaxAggregateInputType
  }

  export type WorkLikeGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    workId: bigint
    likerId: bigint
    _count: WorkLikeCountAggregateOutputType | null
    _avg: WorkLikeAvgAggregateOutputType | null
    _sum: WorkLikeSumAggregateOutputType | null
    _min: WorkLikeMinAggregateOutputType | null
    _max: WorkLikeMaxAggregateOutputType | null
  }

  type GetWorkLikeGroupByPayload<T extends WorkLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkLikeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkLikeGroupByOutputType[P]>
        }
      >
    >


  export type WorkLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workId?: boolean
    likerId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workLike"]>

  export type WorkLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workId?: boolean
    likerId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workLike"]>

  export type WorkLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workId?: boolean
    likerId?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workLike"]>

  export type WorkLikeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workId?: boolean
    likerId?: boolean
  }

  export type WorkLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "workId" | "likerId", ExtArgs["result"]["workLike"]>
  export type WorkLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WorkLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WorkLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $WorkLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkLike"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      liker: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      workId: bigint
      likerId: bigint
    }, ExtArgs["result"]["workLike"]>
    composites: {}
  }

  type WorkLikeGetPayload<S extends boolean | null | undefined | WorkLikeDefaultArgs> = $Result.GetResult<Prisma.$WorkLikePayload, S>

  type WorkLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkLikeCountAggregateInputType | true
    }

  export interface WorkLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkLike'], meta: { name: 'WorkLike' } }
    /**
     * Find zero or one WorkLike that matches the filter.
     * @param {WorkLikeFindUniqueArgs} args - Arguments to find a WorkLike
     * @example
     * // Get one WorkLike
     * const workLike = await prisma.workLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkLikeFindUniqueArgs>(args: SelectSubset<T, WorkLikeFindUniqueArgs<ExtArgs>>): Prisma__WorkLikeClient<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkLikeFindUniqueOrThrowArgs} args - Arguments to find a WorkLike
     * @example
     * // Get one WorkLike
     * const workLike = await prisma.workLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkLikeClient<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLikeFindFirstArgs} args - Arguments to find a WorkLike
     * @example
     * // Get one WorkLike
     * const workLike = await prisma.workLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkLikeFindFirstArgs>(args?: SelectSubset<T, WorkLikeFindFirstArgs<ExtArgs>>): Prisma__WorkLikeClient<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLikeFindFirstOrThrowArgs} args - Arguments to find a WorkLike
     * @example
     * // Get one WorkLike
     * const workLike = await prisma.workLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkLikeClient<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkLikes
     * const workLikes = await prisma.workLike.findMany()
     * 
     * // Get first 10 WorkLikes
     * const workLikes = await prisma.workLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workLikeWithIdOnly = await prisma.workLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkLikeFindManyArgs>(args?: SelectSubset<T, WorkLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkLike.
     * @param {WorkLikeCreateArgs} args - Arguments to create a WorkLike.
     * @example
     * // Create one WorkLike
     * const WorkLike = await prisma.workLike.create({
     *   data: {
     *     // ... data to create a WorkLike
     *   }
     * })
     * 
     */
    create<T extends WorkLikeCreateArgs>(args: SelectSubset<T, WorkLikeCreateArgs<ExtArgs>>): Prisma__WorkLikeClient<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkLikes.
     * @param {WorkLikeCreateManyArgs} args - Arguments to create many WorkLikes.
     * @example
     * // Create many WorkLikes
     * const workLike = await prisma.workLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkLikeCreateManyArgs>(args?: SelectSubset<T, WorkLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkLikes and returns the data saved in the database.
     * @param {WorkLikeCreateManyAndReturnArgs} args - Arguments to create many WorkLikes.
     * @example
     * // Create many WorkLikes
     * const workLike = await prisma.workLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkLikes and only return the `id`
     * const workLikeWithIdOnly = await prisma.workLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkLike.
     * @param {WorkLikeDeleteArgs} args - Arguments to delete one WorkLike.
     * @example
     * // Delete one WorkLike
     * const WorkLike = await prisma.workLike.delete({
     *   where: {
     *     // ... filter to delete one WorkLike
     *   }
     * })
     * 
     */
    delete<T extends WorkLikeDeleteArgs>(args: SelectSubset<T, WorkLikeDeleteArgs<ExtArgs>>): Prisma__WorkLikeClient<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkLike.
     * @param {WorkLikeUpdateArgs} args - Arguments to update one WorkLike.
     * @example
     * // Update one WorkLike
     * const workLike = await prisma.workLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkLikeUpdateArgs>(args: SelectSubset<T, WorkLikeUpdateArgs<ExtArgs>>): Prisma__WorkLikeClient<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkLikes.
     * @param {WorkLikeDeleteManyArgs} args - Arguments to filter WorkLikes to delete.
     * @example
     * // Delete a few WorkLikes
     * const { count } = await prisma.workLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkLikeDeleteManyArgs>(args?: SelectSubset<T, WorkLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkLikes
     * const workLike = await prisma.workLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkLikeUpdateManyArgs>(args: SelectSubset<T, WorkLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkLikes and returns the data updated in the database.
     * @param {WorkLikeUpdateManyAndReturnArgs} args - Arguments to update many WorkLikes.
     * @example
     * // Update many WorkLikes
     * const workLike = await prisma.workLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkLikes and only return the `id`
     * const workLikeWithIdOnly = await prisma.workLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkLike.
     * @param {WorkLikeUpsertArgs} args - Arguments to update or create a WorkLike.
     * @example
     * // Update or create a WorkLike
     * const workLike = await prisma.workLike.upsert({
     *   create: {
     *     // ... data to create a WorkLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkLike we want to update
     *   }
     * })
     */
    upsert<T extends WorkLikeUpsertArgs>(args: SelectSubset<T, WorkLikeUpsertArgs<ExtArgs>>): Prisma__WorkLikeClient<$Result.GetResult<Prisma.$WorkLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLikeCountArgs} args - Arguments to filter WorkLikes to count.
     * @example
     * // Count the number of WorkLikes
     * const count = await prisma.workLike.count({
     *   where: {
     *     // ... the filter for the WorkLikes we want to count
     *   }
     * })
    **/
    count<T extends WorkLikeCountArgs>(
      args?: Subset<T, WorkLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkLikeAggregateArgs>(args: Subset<T, WorkLikeAggregateArgs>): Prisma.PrismaPromise<GetWorkLikeAggregateType<T>>

    /**
     * Group by WorkLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkLikeGroupByArgs['orderBy'] }
        : { orderBy?: WorkLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkLike model
   */
  readonly fields: WorkLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    liker<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkLike model
   */
  interface WorkLikeFieldRefs {
    readonly id: FieldRef<"WorkLike", 'BigInt'>
    readonly createdAt: FieldRef<"WorkLike", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkLike", 'DateTime'>
    readonly workId: FieldRef<"WorkLike", 'BigInt'>
    readonly likerId: FieldRef<"WorkLike", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * WorkLike findUnique
   */
  export type WorkLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkLike to fetch.
     */
    where: WorkLikeWhereUniqueInput
  }

  /**
   * WorkLike findUniqueOrThrow
   */
  export type WorkLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkLike to fetch.
     */
    where: WorkLikeWhereUniqueInput
  }

  /**
   * WorkLike findFirst
   */
  export type WorkLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkLike to fetch.
     */
    where?: WorkLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLikes to fetch.
     */
    orderBy?: WorkLikeOrderByWithRelationInput | WorkLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkLikes.
     */
    cursor?: WorkLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkLikes.
     */
    distinct?: WorkLikeScalarFieldEnum | WorkLikeScalarFieldEnum[]
  }

  /**
   * WorkLike findFirstOrThrow
   */
  export type WorkLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkLike to fetch.
     */
    where?: WorkLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLikes to fetch.
     */
    orderBy?: WorkLikeOrderByWithRelationInput | WorkLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkLikes.
     */
    cursor?: WorkLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkLikes.
     */
    distinct?: WorkLikeScalarFieldEnum | WorkLikeScalarFieldEnum[]
  }

  /**
   * WorkLike findMany
   */
  export type WorkLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkLikes to fetch.
     */
    where?: WorkLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLikes to fetch.
     */
    orderBy?: WorkLikeOrderByWithRelationInput | WorkLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkLikes.
     */
    cursor?: WorkLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLikes.
     */
    skip?: number
    distinct?: WorkLikeScalarFieldEnum | WorkLikeScalarFieldEnum[]
  }

  /**
   * WorkLike create
   */
  export type WorkLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkLike.
     */
    data: XOR<WorkLikeCreateInput, WorkLikeUncheckedCreateInput>
  }

  /**
   * WorkLike createMany
   */
  export type WorkLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkLikes.
     */
    data: WorkLikeCreateManyInput | WorkLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkLike createManyAndReturn
   */
  export type WorkLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkLikes.
     */
    data: WorkLikeCreateManyInput | WorkLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkLike update
   */
  export type WorkLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkLike.
     */
    data: XOR<WorkLikeUpdateInput, WorkLikeUncheckedUpdateInput>
    /**
     * Choose, which WorkLike to update.
     */
    where: WorkLikeWhereUniqueInput
  }

  /**
   * WorkLike updateMany
   */
  export type WorkLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkLikes.
     */
    data: XOR<WorkLikeUpdateManyMutationInput, WorkLikeUncheckedUpdateManyInput>
    /**
     * Filter which WorkLikes to update
     */
    where?: WorkLikeWhereInput
    /**
     * Limit how many WorkLikes to update.
     */
    limit?: number
  }

  /**
   * WorkLike updateManyAndReturn
   */
  export type WorkLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * The data used to update WorkLikes.
     */
    data: XOR<WorkLikeUpdateManyMutationInput, WorkLikeUncheckedUpdateManyInput>
    /**
     * Filter which WorkLikes to update
     */
    where?: WorkLikeWhereInput
    /**
     * Limit how many WorkLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkLike upsert
   */
  export type WorkLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkLike to update in case it exists.
     */
    where: WorkLikeWhereUniqueInput
    /**
     * In case the WorkLike found by the `where` argument doesn't exist, create a new WorkLike with this data.
     */
    create: XOR<WorkLikeCreateInput, WorkLikeUncheckedCreateInput>
    /**
     * In case the WorkLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkLikeUpdateInput, WorkLikeUncheckedUpdateInput>
  }

  /**
   * WorkLike delete
   */
  export type WorkLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
    /**
     * Filter which WorkLike to delete.
     */
    where: WorkLikeWhereUniqueInput
  }

  /**
   * WorkLike deleteMany
   */
  export type WorkLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkLikes to delete
     */
    where?: WorkLikeWhereInput
    /**
     * Limit how many WorkLikes to delete.
     */
    limit?: number
  }

  /**
   * WorkLike without action
   */
  export type WorkLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLike
     */
    select?: WorkLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLike
     */
    omit?: WorkLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLikeInclude<ExtArgs> | null
  }


  /**
   * Model WorkResponse
   */

  export type AggregateWorkResponse = {
    _count: WorkResponseCountAggregateOutputType | null
    _avg: WorkResponseAvgAggregateOutputType | null
    _sum: WorkResponseSumAggregateOutputType | null
    _min: WorkResponseMinAggregateOutputType | null
    _max: WorkResponseMaxAggregateOutputType | null
  }

  export type WorkResponseAvgAggregateOutputType = {
    id: number | null
    responderId: number | null
    workId: number | null
  }

  export type WorkResponseSumAggregateOutputType = {
    id: bigint | null
    responderId: bigint | null
    workId: bigint | null
  }

  export type WorkResponseMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    response: string | null
    responderId: bigint | null
    workId: bigint | null
  }

  export type WorkResponseMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    response: string | null
    responderId: bigint | null
    workId: bigint | null
  }

  export type WorkResponseCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    response: number
    responderId: number
    workId: number
    _all: number
  }


  export type WorkResponseAvgAggregateInputType = {
    id?: true
    responderId?: true
    workId?: true
  }

  export type WorkResponseSumAggregateInputType = {
    id?: true
    responderId?: true
    workId?: true
  }

  export type WorkResponseMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    response?: true
    responderId?: true
    workId?: true
  }

  export type WorkResponseMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    response?: true
    responderId?: true
    workId?: true
  }

  export type WorkResponseCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    response?: true
    responderId?: true
    workId?: true
    _all?: true
  }

  export type WorkResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkResponse to aggregate.
     */
    where?: WorkResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkResponses to fetch.
     */
    orderBy?: WorkResponseOrderByWithRelationInput | WorkResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkResponses
    **/
    _count?: true | WorkResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkResponseMaxAggregateInputType
  }

  export type GetWorkResponseAggregateType<T extends WorkResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkResponse[P]>
      : GetScalarType<T[P], AggregateWorkResponse[P]>
  }




  export type WorkResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkResponseWhereInput
    orderBy?: WorkResponseOrderByWithAggregationInput | WorkResponseOrderByWithAggregationInput[]
    by: WorkResponseScalarFieldEnum[] | WorkResponseScalarFieldEnum
    having?: WorkResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkResponseCountAggregateInputType | true
    _avg?: WorkResponseAvgAggregateInputType
    _sum?: WorkResponseSumAggregateInputType
    _min?: WorkResponseMinAggregateInputType
    _max?: WorkResponseMaxAggregateInputType
  }

  export type WorkResponseGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    response: string
    responderId: bigint
    workId: bigint
    _count: WorkResponseCountAggregateOutputType | null
    _avg: WorkResponseAvgAggregateOutputType | null
    _sum: WorkResponseSumAggregateOutputType | null
    _min: WorkResponseMinAggregateOutputType | null
    _max: WorkResponseMaxAggregateOutputType | null
  }

  type GetWorkResponseGroupByPayload<T extends WorkResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkResponseGroupByOutputType[P]>
            : GetScalarType<T[P], WorkResponseGroupByOutputType[P]>
        }
      >
    >


  export type WorkResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    response?: boolean
    responderId?: boolean
    workId?: boolean
    responder?: boolean | ProfileDefaultArgs<ExtArgs>
    work?: boolean | WorkDefaultArgs<ExtArgs>
    workResponseLikes?: boolean | WorkResponse$workResponseLikesArgs<ExtArgs>
    _count?: boolean | WorkResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workResponse"]>

  export type WorkResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    response?: boolean
    responderId?: boolean
    workId?: boolean
    responder?: boolean | ProfileDefaultArgs<ExtArgs>
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workResponse"]>

  export type WorkResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    response?: boolean
    responderId?: boolean
    workId?: boolean
    responder?: boolean | ProfileDefaultArgs<ExtArgs>
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workResponse"]>

  export type WorkResponseSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    response?: boolean
    responderId?: boolean
    workId?: boolean
  }

  export type WorkResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "response" | "responderId" | "workId", ExtArgs["result"]["workResponse"]>
  export type WorkResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responder?: boolean | ProfileDefaultArgs<ExtArgs>
    work?: boolean | WorkDefaultArgs<ExtArgs>
    workResponseLikes?: boolean | WorkResponse$workResponseLikesArgs<ExtArgs>
    _count?: boolean | WorkResponseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responder?: boolean | ProfileDefaultArgs<ExtArgs>
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responder?: boolean | ProfileDefaultArgs<ExtArgs>
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $WorkResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkResponse"
    objects: {
      responder: Prisma.$ProfilePayload<ExtArgs>
      work: Prisma.$WorkPayload<ExtArgs>
      workResponseLikes: Prisma.$WorkResponseLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      response: string
      responderId: bigint
      workId: bigint
    }, ExtArgs["result"]["workResponse"]>
    composites: {}
  }

  type WorkResponseGetPayload<S extends boolean | null | undefined | WorkResponseDefaultArgs> = $Result.GetResult<Prisma.$WorkResponsePayload, S>

  type WorkResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkResponseCountAggregateInputType | true
    }

  export interface WorkResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkResponse'], meta: { name: 'WorkResponse' } }
    /**
     * Find zero or one WorkResponse that matches the filter.
     * @param {WorkResponseFindUniqueArgs} args - Arguments to find a WorkResponse
     * @example
     * // Get one WorkResponse
     * const workResponse = await prisma.workResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkResponseFindUniqueArgs>(args: SelectSubset<T, WorkResponseFindUniqueArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkResponseFindUniqueOrThrowArgs} args - Arguments to find a WorkResponse
     * @example
     * // Get one WorkResponse
     * const workResponse = await prisma.workResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseFindFirstArgs} args - Arguments to find a WorkResponse
     * @example
     * // Get one WorkResponse
     * const workResponse = await prisma.workResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkResponseFindFirstArgs>(args?: SelectSubset<T, WorkResponseFindFirstArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseFindFirstOrThrowArgs} args - Arguments to find a WorkResponse
     * @example
     * // Get one WorkResponse
     * const workResponse = await prisma.workResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkResponses
     * const workResponses = await prisma.workResponse.findMany()
     * 
     * // Get first 10 WorkResponses
     * const workResponses = await prisma.workResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workResponseWithIdOnly = await prisma.workResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkResponseFindManyArgs>(args?: SelectSubset<T, WorkResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkResponse.
     * @param {WorkResponseCreateArgs} args - Arguments to create a WorkResponse.
     * @example
     * // Create one WorkResponse
     * const WorkResponse = await prisma.workResponse.create({
     *   data: {
     *     // ... data to create a WorkResponse
     *   }
     * })
     * 
     */
    create<T extends WorkResponseCreateArgs>(args: SelectSubset<T, WorkResponseCreateArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkResponses.
     * @param {WorkResponseCreateManyArgs} args - Arguments to create many WorkResponses.
     * @example
     * // Create many WorkResponses
     * const workResponse = await prisma.workResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkResponseCreateManyArgs>(args?: SelectSubset<T, WorkResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkResponses and returns the data saved in the database.
     * @param {WorkResponseCreateManyAndReturnArgs} args - Arguments to create many WorkResponses.
     * @example
     * // Create many WorkResponses
     * const workResponse = await prisma.workResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkResponses and only return the `id`
     * const workResponseWithIdOnly = await prisma.workResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkResponse.
     * @param {WorkResponseDeleteArgs} args - Arguments to delete one WorkResponse.
     * @example
     * // Delete one WorkResponse
     * const WorkResponse = await prisma.workResponse.delete({
     *   where: {
     *     // ... filter to delete one WorkResponse
     *   }
     * })
     * 
     */
    delete<T extends WorkResponseDeleteArgs>(args: SelectSubset<T, WorkResponseDeleteArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkResponse.
     * @param {WorkResponseUpdateArgs} args - Arguments to update one WorkResponse.
     * @example
     * // Update one WorkResponse
     * const workResponse = await prisma.workResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkResponseUpdateArgs>(args: SelectSubset<T, WorkResponseUpdateArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkResponses.
     * @param {WorkResponseDeleteManyArgs} args - Arguments to filter WorkResponses to delete.
     * @example
     * // Delete a few WorkResponses
     * const { count } = await prisma.workResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkResponseDeleteManyArgs>(args?: SelectSubset<T, WorkResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkResponses
     * const workResponse = await prisma.workResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkResponseUpdateManyArgs>(args: SelectSubset<T, WorkResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkResponses and returns the data updated in the database.
     * @param {WorkResponseUpdateManyAndReturnArgs} args - Arguments to update many WorkResponses.
     * @example
     * // Update many WorkResponses
     * const workResponse = await prisma.workResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkResponses and only return the `id`
     * const workResponseWithIdOnly = await prisma.workResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkResponse.
     * @param {WorkResponseUpsertArgs} args - Arguments to update or create a WorkResponse.
     * @example
     * // Update or create a WorkResponse
     * const workResponse = await prisma.workResponse.upsert({
     *   create: {
     *     // ... data to create a WorkResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkResponse we want to update
     *   }
     * })
     */
    upsert<T extends WorkResponseUpsertArgs>(args: SelectSubset<T, WorkResponseUpsertArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseCountArgs} args - Arguments to filter WorkResponses to count.
     * @example
     * // Count the number of WorkResponses
     * const count = await prisma.workResponse.count({
     *   where: {
     *     // ... the filter for the WorkResponses we want to count
     *   }
     * })
    **/
    count<T extends WorkResponseCountArgs>(
      args?: Subset<T, WorkResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkResponseAggregateArgs>(args: Subset<T, WorkResponseAggregateArgs>): Prisma.PrismaPromise<GetWorkResponseAggregateType<T>>

    /**
     * Group by WorkResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkResponseGroupByArgs['orderBy'] }
        : { orderBy?: WorkResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkResponse model
   */
  readonly fields: WorkResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responder<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workResponseLikes<T extends WorkResponse$workResponseLikesArgs<ExtArgs> = {}>(args?: Subset<T, WorkResponse$workResponseLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkResponse model
   */
  interface WorkResponseFieldRefs {
    readonly id: FieldRef<"WorkResponse", 'BigInt'>
    readonly createdAt: FieldRef<"WorkResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkResponse", 'DateTime'>
    readonly response: FieldRef<"WorkResponse", 'String'>
    readonly responderId: FieldRef<"WorkResponse", 'BigInt'>
    readonly workId: FieldRef<"WorkResponse", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * WorkResponse findUnique
   */
  export type WorkResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponse to fetch.
     */
    where: WorkResponseWhereUniqueInput
  }

  /**
   * WorkResponse findUniqueOrThrow
   */
  export type WorkResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponse to fetch.
     */
    where: WorkResponseWhereUniqueInput
  }

  /**
   * WorkResponse findFirst
   */
  export type WorkResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponse to fetch.
     */
    where?: WorkResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkResponses to fetch.
     */
    orderBy?: WorkResponseOrderByWithRelationInput | WorkResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkResponses.
     */
    cursor?: WorkResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkResponses.
     */
    distinct?: WorkResponseScalarFieldEnum | WorkResponseScalarFieldEnum[]
  }

  /**
   * WorkResponse findFirstOrThrow
   */
  export type WorkResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponse to fetch.
     */
    where?: WorkResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkResponses to fetch.
     */
    orderBy?: WorkResponseOrderByWithRelationInput | WorkResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkResponses.
     */
    cursor?: WorkResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkResponses.
     */
    distinct?: WorkResponseScalarFieldEnum | WorkResponseScalarFieldEnum[]
  }

  /**
   * WorkResponse findMany
   */
  export type WorkResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponses to fetch.
     */
    where?: WorkResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkResponses to fetch.
     */
    orderBy?: WorkResponseOrderByWithRelationInput | WorkResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkResponses.
     */
    cursor?: WorkResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkResponses.
     */
    skip?: number
    distinct?: WorkResponseScalarFieldEnum | WorkResponseScalarFieldEnum[]
  }

  /**
   * WorkResponse create
   */
  export type WorkResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkResponse.
     */
    data: XOR<WorkResponseCreateInput, WorkResponseUncheckedCreateInput>
  }

  /**
   * WorkResponse createMany
   */
  export type WorkResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkResponses.
     */
    data: WorkResponseCreateManyInput | WorkResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkResponse createManyAndReturn
   */
  export type WorkResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * The data used to create many WorkResponses.
     */
    data: WorkResponseCreateManyInput | WorkResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkResponse update
   */
  export type WorkResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkResponse.
     */
    data: XOR<WorkResponseUpdateInput, WorkResponseUncheckedUpdateInput>
    /**
     * Choose, which WorkResponse to update.
     */
    where: WorkResponseWhereUniqueInput
  }

  /**
   * WorkResponse updateMany
   */
  export type WorkResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkResponses.
     */
    data: XOR<WorkResponseUpdateManyMutationInput, WorkResponseUncheckedUpdateManyInput>
    /**
     * Filter which WorkResponses to update
     */
    where?: WorkResponseWhereInput
    /**
     * Limit how many WorkResponses to update.
     */
    limit?: number
  }

  /**
   * WorkResponse updateManyAndReturn
   */
  export type WorkResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * The data used to update WorkResponses.
     */
    data: XOR<WorkResponseUpdateManyMutationInput, WorkResponseUncheckedUpdateManyInput>
    /**
     * Filter which WorkResponses to update
     */
    where?: WorkResponseWhereInput
    /**
     * Limit how many WorkResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkResponse upsert
   */
  export type WorkResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkResponse to update in case it exists.
     */
    where: WorkResponseWhereUniqueInput
    /**
     * In case the WorkResponse found by the `where` argument doesn't exist, create a new WorkResponse with this data.
     */
    create: XOR<WorkResponseCreateInput, WorkResponseUncheckedCreateInput>
    /**
     * In case the WorkResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkResponseUpdateInput, WorkResponseUncheckedUpdateInput>
  }

  /**
   * WorkResponse delete
   */
  export type WorkResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
    /**
     * Filter which WorkResponse to delete.
     */
    where: WorkResponseWhereUniqueInput
  }

  /**
   * WorkResponse deleteMany
   */
  export type WorkResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkResponses to delete
     */
    where?: WorkResponseWhereInput
    /**
     * Limit how many WorkResponses to delete.
     */
    limit?: number
  }

  /**
   * WorkResponse.workResponseLikes
   */
  export type WorkResponse$workResponseLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    where?: WorkResponseLikeWhereInput
    orderBy?: WorkResponseLikeOrderByWithRelationInput | WorkResponseLikeOrderByWithRelationInput[]
    cursor?: WorkResponseLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkResponseLikeScalarFieldEnum | WorkResponseLikeScalarFieldEnum[]
  }

  /**
   * WorkResponse without action
   */
  export type WorkResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponse
     */
    select?: WorkResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponse
     */
    omit?: WorkResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseInclude<ExtArgs> | null
  }


  /**
   * Model WorkResponseLike
   */

  export type AggregateWorkResponseLike = {
    _count: WorkResponseLikeCountAggregateOutputType | null
    _avg: WorkResponseLikeAvgAggregateOutputType | null
    _sum: WorkResponseLikeSumAggregateOutputType | null
    _min: WorkResponseLikeMinAggregateOutputType | null
    _max: WorkResponseLikeMaxAggregateOutputType | null
  }

  export type WorkResponseLikeAvgAggregateOutputType = {
    id: number | null
    workResponseId: number | null
    likerId: number | null
  }

  export type WorkResponseLikeSumAggregateOutputType = {
    id: bigint | null
    workResponseId: bigint | null
    likerId: bigint | null
  }

  export type WorkResponseLikeMinAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    workResponseId: bigint | null
    likerId: bigint | null
  }

  export type WorkResponseLikeMaxAggregateOutputType = {
    id: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    workResponseId: bigint | null
    likerId: bigint | null
  }

  export type WorkResponseLikeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    workResponseId: number
    likerId: number
    _all: number
  }


  export type WorkResponseLikeAvgAggregateInputType = {
    id?: true
    workResponseId?: true
    likerId?: true
  }

  export type WorkResponseLikeSumAggregateInputType = {
    id?: true
    workResponseId?: true
    likerId?: true
  }

  export type WorkResponseLikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workResponseId?: true
    likerId?: true
  }

  export type WorkResponseLikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workResponseId?: true
    likerId?: true
  }

  export type WorkResponseLikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workResponseId?: true
    likerId?: true
    _all?: true
  }

  export type WorkResponseLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkResponseLike to aggregate.
     */
    where?: WorkResponseLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkResponseLikes to fetch.
     */
    orderBy?: WorkResponseLikeOrderByWithRelationInput | WorkResponseLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkResponseLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkResponseLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkResponseLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkResponseLikes
    **/
    _count?: true | WorkResponseLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkResponseLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkResponseLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkResponseLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkResponseLikeMaxAggregateInputType
  }

  export type GetWorkResponseLikeAggregateType<T extends WorkResponseLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkResponseLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkResponseLike[P]>
      : GetScalarType<T[P], AggregateWorkResponseLike[P]>
  }




  export type WorkResponseLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkResponseLikeWhereInput
    orderBy?: WorkResponseLikeOrderByWithAggregationInput | WorkResponseLikeOrderByWithAggregationInput[]
    by: WorkResponseLikeScalarFieldEnum[] | WorkResponseLikeScalarFieldEnum
    having?: WorkResponseLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkResponseLikeCountAggregateInputType | true
    _avg?: WorkResponseLikeAvgAggregateInputType
    _sum?: WorkResponseLikeSumAggregateInputType
    _min?: WorkResponseLikeMinAggregateInputType
    _max?: WorkResponseLikeMaxAggregateInputType
  }

  export type WorkResponseLikeGroupByOutputType = {
    id: bigint
    createdAt: Date
    updatedAt: Date
    workResponseId: bigint
    likerId: bigint
    _count: WorkResponseLikeCountAggregateOutputType | null
    _avg: WorkResponseLikeAvgAggregateOutputType | null
    _sum: WorkResponseLikeSumAggregateOutputType | null
    _min: WorkResponseLikeMinAggregateOutputType | null
    _max: WorkResponseLikeMaxAggregateOutputType | null
  }

  type GetWorkResponseLikeGroupByPayload<T extends WorkResponseLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkResponseLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkResponseLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkResponseLikeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkResponseLikeGroupByOutputType[P]>
        }
      >
    >


  export type WorkResponseLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workResponseId?: boolean
    likerId?: boolean
    workResponse?: boolean | WorkResponseDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workResponseLike"]>

  export type WorkResponseLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workResponseId?: boolean
    likerId?: boolean
    workResponse?: boolean | WorkResponseDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workResponseLike"]>

  export type WorkResponseLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workResponseId?: boolean
    likerId?: boolean
    workResponse?: boolean | WorkResponseDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workResponseLike"]>

  export type WorkResponseLikeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workResponseId?: boolean
    likerId?: boolean
  }

  export type WorkResponseLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "workResponseId" | "likerId", ExtArgs["result"]["workResponseLike"]>
  export type WorkResponseLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workResponse?: boolean | WorkResponseDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WorkResponseLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workResponse?: boolean | WorkResponseDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WorkResponseLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workResponse?: boolean | WorkResponseDefaultArgs<ExtArgs>
    liker?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $WorkResponseLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkResponseLike"
    objects: {
      workResponse: Prisma.$WorkResponsePayload<ExtArgs>
      liker: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      createdAt: Date
      updatedAt: Date
      workResponseId: bigint
      likerId: bigint
    }, ExtArgs["result"]["workResponseLike"]>
    composites: {}
  }

  type WorkResponseLikeGetPayload<S extends boolean | null | undefined | WorkResponseLikeDefaultArgs> = $Result.GetResult<Prisma.$WorkResponseLikePayload, S>

  type WorkResponseLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkResponseLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkResponseLikeCountAggregateInputType | true
    }

  export interface WorkResponseLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkResponseLike'], meta: { name: 'WorkResponseLike' } }
    /**
     * Find zero or one WorkResponseLike that matches the filter.
     * @param {WorkResponseLikeFindUniqueArgs} args - Arguments to find a WorkResponseLike
     * @example
     * // Get one WorkResponseLike
     * const workResponseLike = await prisma.workResponseLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkResponseLikeFindUniqueArgs>(args: SelectSubset<T, WorkResponseLikeFindUniqueArgs<ExtArgs>>): Prisma__WorkResponseLikeClient<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkResponseLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkResponseLikeFindUniqueOrThrowArgs} args - Arguments to find a WorkResponseLike
     * @example
     * // Get one WorkResponseLike
     * const workResponseLike = await prisma.workResponseLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkResponseLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkResponseLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkResponseLikeClient<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkResponseLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseLikeFindFirstArgs} args - Arguments to find a WorkResponseLike
     * @example
     * // Get one WorkResponseLike
     * const workResponseLike = await prisma.workResponseLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkResponseLikeFindFirstArgs>(args?: SelectSubset<T, WorkResponseLikeFindFirstArgs<ExtArgs>>): Prisma__WorkResponseLikeClient<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkResponseLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseLikeFindFirstOrThrowArgs} args - Arguments to find a WorkResponseLike
     * @example
     * // Get one WorkResponseLike
     * const workResponseLike = await prisma.workResponseLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkResponseLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkResponseLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkResponseLikeClient<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkResponseLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkResponseLikes
     * const workResponseLikes = await prisma.workResponseLike.findMany()
     * 
     * // Get first 10 WorkResponseLikes
     * const workResponseLikes = await prisma.workResponseLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workResponseLikeWithIdOnly = await prisma.workResponseLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkResponseLikeFindManyArgs>(args?: SelectSubset<T, WorkResponseLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkResponseLike.
     * @param {WorkResponseLikeCreateArgs} args - Arguments to create a WorkResponseLike.
     * @example
     * // Create one WorkResponseLike
     * const WorkResponseLike = await prisma.workResponseLike.create({
     *   data: {
     *     // ... data to create a WorkResponseLike
     *   }
     * })
     * 
     */
    create<T extends WorkResponseLikeCreateArgs>(args: SelectSubset<T, WorkResponseLikeCreateArgs<ExtArgs>>): Prisma__WorkResponseLikeClient<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkResponseLikes.
     * @param {WorkResponseLikeCreateManyArgs} args - Arguments to create many WorkResponseLikes.
     * @example
     * // Create many WorkResponseLikes
     * const workResponseLike = await prisma.workResponseLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkResponseLikeCreateManyArgs>(args?: SelectSubset<T, WorkResponseLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkResponseLikes and returns the data saved in the database.
     * @param {WorkResponseLikeCreateManyAndReturnArgs} args - Arguments to create many WorkResponseLikes.
     * @example
     * // Create many WorkResponseLikes
     * const workResponseLike = await prisma.workResponseLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkResponseLikes and only return the `id`
     * const workResponseLikeWithIdOnly = await prisma.workResponseLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkResponseLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkResponseLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkResponseLike.
     * @param {WorkResponseLikeDeleteArgs} args - Arguments to delete one WorkResponseLike.
     * @example
     * // Delete one WorkResponseLike
     * const WorkResponseLike = await prisma.workResponseLike.delete({
     *   where: {
     *     // ... filter to delete one WorkResponseLike
     *   }
     * })
     * 
     */
    delete<T extends WorkResponseLikeDeleteArgs>(args: SelectSubset<T, WorkResponseLikeDeleteArgs<ExtArgs>>): Prisma__WorkResponseLikeClient<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkResponseLike.
     * @param {WorkResponseLikeUpdateArgs} args - Arguments to update one WorkResponseLike.
     * @example
     * // Update one WorkResponseLike
     * const workResponseLike = await prisma.workResponseLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkResponseLikeUpdateArgs>(args: SelectSubset<T, WorkResponseLikeUpdateArgs<ExtArgs>>): Prisma__WorkResponseLikeClient<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkResponseLikes.
     * @param {WorkResponseLikeDeleteManyArgs} args - Arguments to filter WorkResponseLikes to delete.
     * @example
     * // Delete a few WorkResponseLikes
     * const { count } = await prisma.workResponseLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkResponseLikeDeleteManyArgs>(args?: SelectSubset<T, WorkResponseLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkResponseLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkResponseLikes
     * const workResponseLike = await prisma.workResponseLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkResponseLikeUpdateManyArgs>(args: SelectSubset<T, WorkResponseLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkResponseLikes and returns the data updated in the database.
     * @param {WorkResponseLikeUpdateManyAndReturnArgs} args - Arguments to update many WorkResponseLikes.
     * @example
     * // Update many WorkResponseLikes
     * const workResponseLike = await prisma.workResponseLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkResponseLikes and only return the `id`
     * const workResponseLikeWithIdOnly = await prisma.workResponseLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkResponseLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkResponseLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkResponseLike.
     * @param {WorkResponseLikeUpsertArgs} args - Arguments to update or create a WorkResponseLike.
     * @example
     * // Update or create a WorkResponseLike
     * const workResponseLike = await prisma.workResponseLike.upsert({
     *   create: {
     *     // ... data to create a WorkResponseLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkResponseLike we want to update
     *   }
     * })
     */
    upsert<T extends WorkResponseLikeUpsertArgs>(args: SelectSubset<T, WorkResponseLikeUpsertArgs<ExtArgs>>): Prisma__WorkResponseLikeClient<$Result.GetResult<Prisma.$WorkResponseLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkResponseLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseLikeCountArgs} args - Arguments to filter WorkResponseLikes to count.
     * @example
     * // Count the number of WorkResponseLikes
     * const count = await prisma.workResponseLike.count({
     *   where: {
     *     // ... the filter for the WorkResponseLikes we want to count
     *   }
     * })
    **/
    count<T extends WorkResponseLikeCountArgs>(
      args?: Subset<T, WorkResponseLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkResponseLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkResponseLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkResponseLikeAggregateArgs>(args: Subset<T, WorkResponseLikeAggregateArgs>): Prisma.PrismaPromise<GetWorkResponseLikeAggregateType<T>>

    /**
     * Group by WorkResponseLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkResponseLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkResponseLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkResponseLikeGroupByArgs['orderBy'] }
        : { orderBy?: WorkResponseLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkResponseLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkResponseLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkResponseLike model
   */
  readonly fields: WorkResponseLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkResponseLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkResponseLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workResponse<T extends WorkResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkResponseDefaultArgs<ExtArgs>>): Prisma__WorkResponseClient<$Result.GetResult<Prisma.$WorkResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    liker<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkResponseLike model
   */
  interface WorkResponseLikeFieldRefs {
    readonly id: FieldRef<"WorkResponseLike", 'BigInt'>
    readonly createdAt: FieldRef<"WorkResponseLike", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkResponseLike", 'DateTime'>
    readonly workResponseId: FieldRef<"WorkResponseLike", 'BigInt'>
    readonly likerId: FieldRef<"WorkResponseLike", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * WorkResponseLike findUnique
   */
  export type WorkResponseLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponseLike to fetch.
     */
    where: WorkResponseLikeWhereUniqueInput
  }

  /**
   * WorkResponseLike findUniqueOrThrow
   */
  export type WorkResponseLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponseLike to fetch.
     */
    where: WorkResponseLikeWhereUniqueInput
  }

  /**
   * WorkResponseLike findFirst
   */
  export type WorkResponseLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponseLike to fetch.
     */
    where?: WorkResponseLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkResponseLikes to fetch.
     */
    orderBy?: WorkResponseLikeOrderByWithRelationInput | WorkResponseLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkResponseLikes.
     */
    cursor?: WorkResponseLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkResponseLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkResponseLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkResponseLikes.
     */
    distinct?: WorkResponseLikeScalarFieldEnum | WorkResponseLikeScalarFieldEnum[]
  }

  /**
   * WorkResponseLike findFirstOrThrow
   */
  export type WorkResponseLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponseLike to fetch.
     */
    where?: WorkResponseLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkResponseLikes to fetch.
     */
    orderBy?: WorkResponseLikeOrderByWithRelationInput | WorkResponseLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkResponseLikes.
     */
    cursor?: WorkResponseLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkResponseLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkResponseLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkResponseLikes.
     */
    distinct?: WorkResponseLikeScalarFieldEnum | WorkResponseLikeScalarFieldEnum[]
  }

  /**
   * WorkResponseLike findMany
   */
  export type WorkResponseLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * Filter, which WorkResponseLikes to fetch.
     */
    where?: WorkResponseLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkResponseLikes to fetch.
     */
    orderBy?: WorkResponseLikeOrderByWithRelationInput | WorkResponseLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkResponseLikes.
     */
    cursor?: WorkResponseLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkResponseLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkResponseLikes.
     */
    skip?: number
    distinct?: WorkResponseLikeScalarFieldEnum | WorkResponseLikeScalarFieldEnum[]
  }

  /**
   * WorkResponseLike create
   */
  export type WorkResponseLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkResponseLike.
     */
    data: XOR<WorkResponseLikeCreateInput, WorkResponseLikeUncheckedCreateInput>
  }

  /**
   * WorkResponseLike createMany
   */
  export type WorkResponseLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkResponseLikes.
     */
    data: WorkResponseLikeCreateManyInput | WorkResponseLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkResponseLike createManyAndReturn
   */
  export type WorkResponseLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkResponseLikes.
     */
    data: WorkResponseLikeCreateManyInput | WorkResponseLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkResponseLike update
   */
  export type WorkResponseLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkResponseLike.
     */
    data: XOR<WorkResponseLikeUpdateInput, WorkResponseLikeUncheckedUpdateInput>
    /**
     * Choose, which WorkResponseLike to update.
     */
    where: WorkResponseLikeWhereUniqueInput
  }

  /**
   * WorkResponseLike updateMany
   */
  export type WorkResponseLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkResponseLikes.
     */
    data: XOR<WorkResponseLikeUpdateManyMutationInput, WorkResponseLikeUncheckedUpdateManyInput>
    /**
     * Filter which WorkResponseLikes to update
     */
    where?: WorkResponseLikeWhereInput
    /**
     * Limit how many WorkResponseLikes to update.
     */
    limit?: number
  }

  /**
   * WorkResponseLike updateManyAndReturn
   */
  export type WorkResponseLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * The data used to update WorkResponseLikes.
     */
    data: XOR<WorkResponseLikeUpdateManyMutationInput, WorkResponseLikeUncheckedUpdateManyInput>
    /**
     * Filter which WorkResponseLikes to update
     */
    where?: WorkResponseLikeWhereInput
    /**
     * Limit how many WorkResponseLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkResponseLike upsert
   */
  export type WorkResponseLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkResponseLike to update in case it exists.
     */
    where: WorkResponseLikeWhereUniqueInput
    /**
     * In case the WorkResponseLike found by the `where` argument doesn't exist, create a new WorkResponseLike with this data.
     */
    create: XOR<WorkResponseLikeCreateInput, WorkResponseLikeUncheckedCreateInput>
    /**
     * In case the WorkResponseLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkResponseLikeUpdateInput, WorkResponseLikeUncheckedUpdateInput>
  }

  /**
   * WorkResponseLike delete
   */
  export type WorkResponseLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
    /**
     * Filter which WorkResponseLike to delete.
     */
    where: WorkResponseLikeWhereUniqueInput
  }

  /**
   * WorkResponseLike deleteMany
   */
  export type WorkResponseLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkResponseLikes to delete
     */
    where?: WorkResponseLikeWhereInput
    /**
     * Limit how many WorkResponseLikes to delete.
     */
    limit?: number
  }

  /**
   * WorkResponseLike without action
   */
  export type WorkResponseLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkResponseLike
     */
    select?: WorkResponseLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkResponseLike
     */
    omit?: WorkResponseLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkResponseLikeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    content: 'content',
    description: 'description',
    authorId: 'authorId'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const WorkImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imagePlaceholder: 'imagePlaceholder',
    image: 'image',
    workId: 'workId'
  };

  export type WorkImageScalarFieldEnum = (typeof WorkImageScalarFieldEnum)[keyof typeof WorkImageScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userName: 'userName',
    password: 'password',
    fullName: 'fullName',
    description: 'description',
    socialLinkPrimary: 'socialLinkPrimary',
    socialLinkSecondary: 'socialLinkSecondary',
    avatarId: 'avatarId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ProfileAvatarScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    avatar: 'avatar'
  };

  export type ProfileAvatarScalarFieldEnum = (typeof ProfileAvatarScalarFieldEnum)[keyof typeof ProfileAvatarScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    followerId: 'followerId',
    followedId: 'followedId'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const WorkTopicScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workId: 'workId',
    topicId: 'topicId'
  };

  export type WorkTopicScalarFieldEnum = (typeof WorkTopicScalarFieldEnum)[keyof typeof WorkTopicScalarFieldEnum]


  export const WorkLikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workId: 'workId',
    likerId: 'likerId'
  };

  export type WorkLikeScalarFieldEnum = (typeof WorkLikeScalarFieldEnum)[keyof typeof WorkLikeScalarFieldEnum]


  export const WorkResponseScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    response: 'response',
    responderId: 'responderId',
    workId: 'workId'
  };

  export type WorkResponseScalarFieldEnum = (typeof WorkResponseScalarFieldEnum)[keyof typeof WorkResponseScalarFieldEnum]


  export const WorkResponseLikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workResponseId: 'workResponseId',
    likerId: 'likerId'
  };

  export type WorkResponseLikeScalarFieldEnum = (typeof WorkResponseLikeScalarFieldEnum)[keyof typeof WorkResponseLikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    id?: BigIntFilter<"Work"> | bigint | number
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    title?: StringFilter<"Work"> | string
    content?: StringFilter<"Work"> | string
    description?: StringFilter<"Work"> | string
    authorId?: BigIntFilter<"Work"> | bigint | number
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    workImages?: WorkImageListRelationFilter
    workTopics?: WorkTopicListRelationFilter
    workLikes?: WorkLikeListRelationFilter
    workResponses?: WorkResponseListRelationFilter
  }

  export type WorkOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    author?: ProfileOrderByWithRelationInput
    workImages?: WorkImageOrderByRelationAggregateInput
    workTopics?: WorkTopicOrderByRelationAggregateInput
    workLikes?: WorkLikeOrderByRelationAggregateInput
    workResponses?: WorkResponseOrderByRelationAggregateInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    title?: StringFilter<"Work"> | string
    content?: StringFilter<"Work"> | string
    description?: StringFilter<"Work"> | string
    authorId?: BigIntFilter<"Work"> | bigint | number
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    workImages?: WorkImageListRelationFilter
    workTopics?: WorkTopicListRelationFilter
    workLikes?: WorkLikeListRelationFilter
    workResponses?: WorkResponseListRelationFilter
  }, "id">

  export type WorkOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _avg?: WorkAvgOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
    _sum?: WorkSumOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Work"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    title?: StringWithAggregatesFilter<"Work"> | string
    content?: StringWithAggregatesFilter<"Work"> | string
    description?: StringWithAggregatesFilter<"Work"> | string
    authorId?: BigIntWithAggregatesFilter<"Work"> | bigint | number
  }

  export type WorkImageWhereInput = {
    AND?: WorkImageWhereInput | WorkImageWhereInput[]
    OR?: WorkImageWhereInput[]
    NOT?: WorkImageWhereInput | WorkImageWhereInput[]
    id?: BigIntFilter<"WorkImage"> | bigint | number
    createdAt?: DateTimeFilter<"WorkImage"> | Date | string
    updatedAt?: DateTimeFilter<"WorkImage"> | Date | string
    imagePlaceholder?: StringFilter<"WorkImage"> | string
    image?: BytesFilter<"WorkImage"> | Uint8Array
    workId?: BigIntFilter<"WorkImage"> | bigint | number
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }

  export type WorkImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePlaceholder?: SortOrder
    image?: SortOrder
    workId?: SortOrder
    work?: WorkOrderByWithRelationInput
  }

  export type WorkImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkImageWhereInput | WorkImageWhereInput[]
    OR?: WorkImageWhereInput[]
    NOT?: WorkImageWhereInput | WorkImageWhereInput[]
    createdAt?: DateTimeFilter<"WorkImage"> | Date | string
    updatedAt?: DateTimeFilter<"WorkImage"> | Date | string
    imagePlaceholder?: StringFilter<"WorkImage"> | string
    image?: BytesFilter<"WorkImage"> | Uint8Array
    workId?: BigIntFilter<"WorkImage"> | bigint | number
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }, "id">

  export type WorkImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePlaceholder?: SortOrder
    image?: SortOrder
    workId?: SortOrder
    _count?: WorkImageCountOrderByAggregateInput
    _avg?: WorkImageAvgOrderByAggregateInput
    _max?: WorkImageMaxOrderByAggregateInput
    _min?: WorkImageMinOrderByAggregateInput
    _sum?: WorkImageSumOrderByAggregateInput
  }

  export type WorkImageScalarWhereWithAggregatesInput = {
    AND?: WorkImageScalarWhereWithAggregatesInput | WorkImageScalarWhereWithAggregatesInput[]
    OR?: WorkImageScalarWhereWithAggregatesInput[]
    NOT?: WorkImageScalarWhereWithAggregatesInput | WorkImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkImage"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkImage"> | Date | string
    imagePlaceholder?: StringWithAggregatesFilter<"WorkImage"> | string
    image?: BytesWithAggregatesFilter<"WorkImage"> | Uint8Array
    workId?: BigIntWithAggregatesFilter<"WorkImage"> | bigint | number
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: BigIntFilter<"Profile"> | bigint | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    userName?: StringFilter<"Profile"> | string
    password?: StringFilter<"Profile"> | string
    fullName?: StringFilter<"Profile"> | string
    description?: StringNullableFilter<"Profile"> | string | null
    socialLinkPrimary?: StringNullableFilter<"Profile"> | string | null
    socialLinkSecondary?: StringNullableFilter<"Profile"> | string | null
    avatarId?: BigIntNullableFilter<"Profile"> | bigint | number | null
    avatar?: XOR<ProfileAvatarNullableScalarRelationFilter, ProfileAvatarWhereInput> | null
    works?: WorkListRelationFilter
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    workLikes?: WorkLikeListRelationFilter
    workResponses?: WorkResponseListRelationFilter
    workResponseLikes?: WorkResponseLikeListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    description?: SortOrderInput | SortOrder
    socialLinkPrimary?: SortOrderInput | SortOrder
    socialLinkSecondary?: SortOrderInput | SortOrder
    avatarId?: SortOrderInput | SortOrder
    avatar?: ProfileAvatarOrderByWithRelationInput
    works?: WorkOrderByRelationAggregateInput
    followers?: FollowOrderByRelationAggregateInput
    following?: FollowOrderByRelationAggregateInput
    workLikes?: WorkLikeOrderByRelationAggregateInput
    workResponses?: WorkResponseOrderByRelationAggregateInput
    workResponseLikes?: WorkResponseLikeOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    userName?: string
    avatarId?: bigint | number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    password?: StringFilter<"Profile"> | string
    fullName?: StringFilter<"Profile"> | string
    description?: StringNullableFilter<"Profile"> | string | null
    socialLinkPrimary?: StringNullableFilter<"Profile"> | string | null
    socialLinkSecondary?: StringNullableFilter<"Profile"> | string | null
    avatar?: XOR<ProfileAvatarNullableScalarRelationFilter, ProfileAvatarWhereInput> | null
    works?: WorkListRelationFilter
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    workLikes?: WorkLikeListRelationFilter
    workResponses?: WorkResponseListRelationFilter
    workResponseLikes?: WorkResponseLikeListRelationFilter
  }, "id" | "userName" | "avatarId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    description?: SortOrderInput | SortOrder
    socialLinkPrimary?: SortOrderInput | SortOrder
    socialLinkSecondary?: SortOrderInput | SortOrder
    avatarId?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Profile"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    userName?: StringWithAggregatesFilter<"Profile"> | string
    password?: StringWithAggregatesFilter<"Profile"> | string
    fullName?: StringWithAggregatesFilter<"Profile"> | string
    description?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    socialLinkPrimary?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    socialLinkSecondary?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarId?: BigIntNullableWithAggregatesFilter<"Profile"> | bigint | number | null
  }

  export type ProfileAvatarWhereInput = {
    AND?: ProfileAvatarWhereInput | ProfileAvatarWhereInput[]
    OR?: ProfileAvatarWhereInput[]
    NOT?: ProfileAvatarWhereInput | ProfileAvatarWhereInput[]
    id?: BigIntFilter<"ProfileAvatar"> | bigint | number
    createdAt?: DateTimeFilter<"ProfileAvatar"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileAvatar"> | Date | string
    avatar?: BytesFilter<"ProfileAvatar"> | Uint8Array
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type ProfileAvatarOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type ProfileAvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ProfileAvatarWhereInput | ProfileAvatarWhereInput[]
    OR?: ProfileAvatarWhereInput[]
    NOT?: ProfileAvatarWhereInput | ProfileAvatarWhereInput[]
    createdAt?: DateTimeFilter<"ProfileAvatar"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileAvatar"> | Date | string
    avatar?: BytesFilter<"ProfileAvatar"> | Uint8Array
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id">

  export type ProfileAvatarOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrder
    _count?: ProfileAvatarCountOrderByAggregateInput
    _avg?: ProfileAvatarAvgOrderByAggregateInput
    _max?: ProfileAvatarMaxOrderByAggregateInput
    _min?: ProfileAvatarMinOrderByAggregateInput
    _sum?: ProfileAvatarSumOrderByAggregateInput
  }

  export type ProfileAvatarScalarWhereWithAggregatesInput = {
    AND?: ProfileAvatarScalarWhereWithAggregatesInput | ProfileAvatarScalarWhereWithAggregatesInput[]
    OR?: ProfileAvatarScalarWhereWithAggregatesInput[]
    NOT?: ProfileAvatarScalarWhereWithAggregatesInput | ProfileAvatarScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ProfileAvatar"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"ProfileAvatar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileAvatar"> | Date | string
    avatar?: BytesWithAggregatesFilter<"ProfileAvatar"> | Uint8Array
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    id?: BigIntFilter<"Follow"> | bigint | number
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    updatedAt?: DateTimeFilter<"Follow"> | Date | string
    followerId?: BigIntFilter<"Follow"> | bigint | number
    followedId?: BigIntFilter<"Follow"> | bigint | number
    follower?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    followed?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    followerId?: SortOrder
    followedId?: SortOrder
    follower?: ProfileOrderByWithRelationInput
    followed?: ProfileOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    updatedAt?: DateTimeFilter<"Follow"> | Date | string
    followerId?: BigIntFilter<"Follow"> | bigint | number
    followedId?: BigIntFilter<"Follow"> | bigint | number
    follower?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    followed?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    followerId?: SortOrder
    followedId?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _avg?: FollowAvgOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
    _sum?: FollowSumOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Follow"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Follow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Follow"> | Date | string
    followerId?: BigIntWithAggregatesFilter<"Follow"> | bigint | number
    followedId?: BigIntWithAggregatesFilter<"Follow"> | bigint | number
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: BigIntFilter<"Topic"> | bigint | number
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    name?: StringFilter<"Topic"> | string
    workTopics?: WorkTopicListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    workTopics?: WorkTopicOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    name?: StringFilter<"Topic"> | string
    workTopics?: WorkTopicListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Topic"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    name?: StringWithAggregatesFilter<"Topic"> | string
  }

  export type WorkTopicWhereInput = {
    AND?: WorkTopicWhereInput | WorkTopicWhereInput[]
    OR?: WorkTopicWhereInput[]
    NOT?: WorkTopicWhereInput | WorkTopicWhereInput[]
    id?: BigIntFilter<"WorkTopic"> | bigint | number
    createdAt?: DateTimeFilter<"WorkTopic"> | Date | string
    updatedAt?: DateTimeFilter<"WorkTopic"> | Date | string
    workId?: BigIntFilter<"WorkTopic"> | bigint | number
    topicId?: BigIntFilter<"WorkTopic"> | bigint | number
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type WorkTopicOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    topicId?: SortOrder
    work?: WorkOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
  }

  export type WorkTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkTopicWhereInput | WorkTopicWhereInput[]
    OR?: WorkTopicWhereInput[]
    NOT?: WorkTopicWhereInput | WorkTopicWhereInput[]
    createdAt?: DateTimeFilter<"WorkTopic"> | Date | string
    updatedAt?: DateTimeFilter<"WorkTopic"> | Date | string
    workId?: BigIntFilter<"WorkTopic"> | bigint | number
    topicId?: BigIntFilter<"WorkTopic"> | bigint | number
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id">

  export type WorkTopicOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    topicId?: SortOrder
    _count?: WorkTopicCountOrderByAggregateInput
    _avg?: WorkTopicAvgOrderByAggregateInput
    _max?: WorkTopicMaxOrderByAggregateInput
    _min?: WorkTopicMinOrderByAggregateInput
    _sum?: WorkTopicSumOrderByAggregateInput
  }

  export type WorkTopicScalarWhereWithAggregatesInput = {
    AND?: WorkTopicScalarWhereWithAggregatesInput | WorkTopicScalarWhereWithAggregatesInput[]
    OR?: WorkTopicScalarWhereWithAggregatesInput[]
    NOT?: WorkTopicScalarWhereWithAggregatesInput | WorkTopicScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkTopic"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkTopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkTopic"> | Date | string
    workId?: BigIntWithAggregatesFilter<"WorkTopic"> | bigint | number
    topicId?: BigIntWithAggregatesFilter<"WorkTopic"> | bigint | number
  }

  export type WorkLikeWhereInput = {
    AND?: WorkLikeWhereInput | WorkLikeWhereInput[]
    OR?: WorkLikeWhereInput[]
    NOT?: WorkLikeWhereInput | WorkLikeWhereInput[]
    id?: BigIntFilter<"WorkLike"> | bigint | number
    createdAt?: DateTimeFilter<"WorkLike"> | Date | string
    updatedAt?: DateTimeFilter<"WorkLike"> | Date | string
    workId?: BigIntFilter<"WorkLike"> | bigint | number
    likerId?: BigIntFilter<"WorkLike"> | bigint | number
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    liker?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type WorkLikeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    likerId?: SortOrder
    work?: WorkOrderByWithRelationInput
    liker?: ProfileOrderByWithRelationInput
  }

  export type WorkLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkLikeWhereInput | WorkLikeWhereInput[]
    OR?: WorkLikeWhereInput[]
    NOT?: WorkLikeWhereInput | WorkLikeWhereInput[]
    createdAt?: DateTimeFilter<"WorkLike"> | Date | string
    updatedAt?: DateTimeFilter<"WorkLike"> | Date | string
    workId?: BigIntFilter<"WorkLike"> | bigint | number
    likerId?: BigIntFilter<"WorkLike"> | bigint | number
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    liker?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type WorkLikeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    likerId?: SortOrder
    _count?: WorkLikeCountOrderByAggregateInput
    _avg?: WorkLikeAvgOrderByAggregateInput
    _max?: WorkLikeMaxOrderByAggregateInput
    _min?: WorkLikeMinOrderByAggregateInput
    _sum?: WorkLikeSumOrderByAggregateInput
  }

  export type WorkLikeScalarWhereWithAggregatesInput = {
    AND?: WorkLikeScalarWhereWithAggregatesInput | WorkLikeScalarWhereWithAggregatesInput[]
    OR?: WorkLikeScalarWhereWithAggregatesInput[]
    NOT?: WorkLikeScalarWhereWithAggregatesInput | WorkLikeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkLike"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkLike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkLike"> | Date | string
    workId?: BigIntWithAggregatesFilter<"WorkLike"> | bigint | number
    likerId?: BigIntWithAggregatesFilter<"WorkLike"> | bigint | number
  }

  export type WorkResponseWhereInput = {
    AND?: WorkResponseWhereInput | WorkResponseWhereInput[]
    OR?: WorkResponseWhereInput[]
    NOT?: WorkResponseWhereInput | WorkResponseWhereInput[]
    id?: BigIntFilter<"WorkResponse"> | bigint | number
    createdAt?: DateTimeFilter<"WorkResponse"> | Date | string
    updatedAt?: DateTimeFilter<"WorkResponse"> | Date | string
    response?: StringFilter<"WorkResponse"> | string
    responderId?: BigIntFilter<"WorkResponse"> | bigint | number
    workId?: BigIntFilter<"WorkResponse"> | bigint | number
    responder?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    workResponseLikes?: WorkResponseLikeListRelationFilter
  }

  export type WorkResponseOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    response?: SortOrder
    responderId?: SortOrder
    workId?: SortOrder
    responder?: ProfileOrderByWithRelationInput
    work?: WorkOrderByWithRelationInput
    workResponseLikes?: WorkResponseLikeOrderByRelationAggregateInput
  }

  export type WorkResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkResponseWhereInput | WorkResponseWhereInput[]
    OR?: WorkResponseWhereInput[]
    NOT?: WorkResponseWhereInput | WorkResponseWhereInput[]
    createdAt?: DateTimeFilter<"WorkResponse"> | Date | string
    updatedAt?: DateTimeFilter<"WorkResponse"> | Date | string
    response?: StringFilter<"WorkResponse"> | string
    responderId?: BigIntFilter<"WorkResponse"> | bigint | number
    workId?: BigIntFilter<"WorkResponse"> | bigint | number
    responder?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    workResponseLikes?: WorkResponseLikeListRelationFilter
  }, "id">

  export type WorkResponseOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    response?: SortOrder
    responderId?: SortOrder
    workId?: SortOrder
    _count?: WorkResponseCountOrderByAggregateInput
    _avg?: WorkResponseAvgOrderByAggregateInput
    _max?: WorkResponseMaxOrderByAggregateInput
    _min?: WorkResponseMinOrderByAggregateInput
    _sum?: WorkResponseSumOrderByAggregateInput
  }

  export type WorkResponseScalarWhereWithAggregatesInput = {
    AND?: WorkResponseScalarWhereWithAggregatesInput | WorkResponseScalarWhereWithAggregatesInput[]
    OR?: WorkResponseScalarWhereWithAggregatesInput[]
    NOT?: WorkResponseScalarWhereWithAggregatesInput | WorkResponseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkResponse"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkResponse"> | Date | string
    response?: StringWithAggregatesFilter<"WorkResponse"> | string
    responderId?: BigIntWithAggregatesFilter<"WorkResponse"> | bigint | number
    workId?: BigIntWithAggregatesFilter<"WorkResponse"> | bigint | number
  }

  export type WorkResponseLikeWhereInput = {
    AND?: WorkResponseLikeWhereInput | WorkResponseLikeWhereInput[]
    OR?: WorkResponseLikeWhereInput[]
    NOT?: WorkResponseLikeWhereInput | WorkResponseLikeWhereInput[]
    id?: BigIntFilter<"WorkResponseLike"> | bigint | number
    createdAt?: DateTimeFilter<"WorkResponseLike"> | Date | string
    updatedAt?: DateTimeFilter<"WorkResponseLike"> | Date | string
    workResponseId?: BigIntFilter<"WorkResponseLike"> | bigint | number
    likerId?: BigIntFilter<"WorkResponseLike"> | bigint | number
    workResponse?: XOR<WorkResponseScalarRelationFilter, WorkResponseWhereInput>
    liker?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type WorkResponseLikeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workResponseId?: SortOrder
    likerId?: SortOrder
    workResponse?: WorkResponseOrderByWithRelationInput
    liker?: ProfileOrderByWithRelationInput
  }

  export type WorkResponseLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkResponseLikeWhereInput | WorkResponseLikeWhereInput[]
    OR?: WorkResponseLikeWhereInput[]
    NOT?: WorkResponseLikeWhereInput | WorkResponseLikeWhereInput[]
    createdAt?: DateTimeFilter<"WorkResponseLike"> | Date | string
    updatedAt?: DateTimeFilter<"WorkResponseLike"> | Date | string
    workResponseId?: BigIntFilter<"WorkResponseLike"> | bigint | number
    likerId?: BigIntFilter<"WorkResponseLike"> | bigint | number
    workResponse?: XOR<WorkResponseScalarRelationFilter, WorkResponseWhereInput>
    liker?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type WorkResponseLikeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workResponseId?: SortOrder
    likerId?: SortOrder
    _count?: WorkResponseLikeCountOrderByAggregateInput
    _avg?: WorkResponseLikeAvgOrderByAggregateInput
    _max?: WorkResponseLikeMaxOrderByAggregateInput
    _min?: WorkResponseLikeMinOrderByAggregateInput
    _sum?: WorkResponseLikeSumOrderByAggregateInput
  }

  export type WorkResponseLikeScalarWhereWithAggregatesInput = {
    AND?: WorkResponseLikeScalarWhereWithAggregatesInput | WorkResponseLikeScalarWhereWithAggregatesInput[]
    OR?: WorkResponseLikeScalarWhereWithAggregatesInput[]
    NOT?: WorkResponseLikeScalarWhereWithAggregatesInput | WorkResponseLikeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkResponseLike"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkResponseLike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkResponseLike"> | Date | string
    workResponseId?: BigIntWithAggregatesFilter<"WorkResponseLike"> | bigint | number
    likerId?: BigIntWithAggregatesFilter<"WorkResponseLike"> | bigint | number
  }

  export type WorkCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    author: ProfileCreateNestedOneWithoutWorksInput
    workImages?: WorkImageCreateNestedManyWithoutWorkInput
    workTopics?: WorkTopicCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    authorId: bigint | number
    workImages?: WorkImageUncheckedCreateNestedManyWithoutWorkInput
    workTopics?: WorkTopicUncheckedCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutWorksNestedInput
    workImages?: WorkImageUpdateManyWithoutWorkNestedInput
    workTopics?: WorkTopicUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    workImages?: WorkImageUncheckedUpdateManyWithoutWorkNestedInput
    workTopics?: WorkTopicUncheckedUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    authorId: bigint | number
  }

  export type WorkUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkImageCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePlaceholder: string
    image: Uint8Array
    work: WorkCreateNestedOneWithoutWorkImagesInput
  }

  export type WorkImageUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePlaceholder: string
    image: Uint8Array
    workId: bigint | number
  }

  export type WorkImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePlaceholder?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    work?: WorkUpdateOneRequiredWithoutWorkImagesNestedInput
  }

  export type WorkImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePlaceholder?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkImageCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePlaceholder: string
    image: Uint8Array
    workId: bigint | number
  }

  export type WorkImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePlaceholder?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type WorkImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePlaceholder?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProfileCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatar?: ProfileAvatarCreateNestedOneWithoutProfileInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowedInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutLikerInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatarId?: bigint | number | null
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutLikerInput
  }

  export type ProfileUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: ProfileAvatarUpdateOneWithoutProfileNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowedNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutLikerNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutLikerNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatarId?: bigint | number | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ProfileAvatarCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar: Uint8Array
    profile?: ProfileCreateNestedOneWithoutAvatarInput
  }

  export type ProfileAvatarUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar: Uint8Array
    profile?: ProfileUncheckedCreateNestedOneWithoutAvatarInput
  }

  export type ProfileAvatarUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: BytesFieldUpdateOperationsInput | Uint8Array
    profile?: ProfileUpdateOneWithoutAvatarNestedInput
  }

  export type ProfileAvatarUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: BytesFieldUpdateOperationsInput | Uint8Array
    profile?: ProfileUncheckedUpdateOneWithoutAvatarNestedInput
  }

  export type ProfileAvatarCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar: Uint8Array
  }

  export type ProfileAvatarUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type ProfileAvatarUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type FollowCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    follower: ProfileCreateNestedOneWithoutFollowingInput
    followed: ProfileCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    followerId: bigint | number
    followedId: bigint | number
  }

  export type FollowUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: ProfileUpdateOneRequiredWithoutFollowingNestedInput
    followed?: ProfileUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followerId?: BigIntFieldUpdateOperationsInput | bigint | number
    followedId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FollowCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    followerId: bigint | number
    followedId: bigint | number
  }

  export type FollowUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followerId?: BigIntFieldUpdateOperationsInput | bigint | number
    followedId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type TopicCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    workTopics?: WorkTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    workTopics?: WorkTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    workTopics?: WorkTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    workTopics?: WorkTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type TopicUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkTopicCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutWorkTopicsInput
    topic: TopicCreateNestedOneWithoutWorkTopicsInput
  }

  export type WorkTopicUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workId: bigint | number
    topicId: bigint | number
  }

  export type WorkTopicUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutWorkTopicsNestedInput
    topic?: TopicUpdateOneRequiredWithoutWorkTopicsNestedInput
  }

  export type WorkTopicUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
    topicId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkTopicCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workId: bigint | number
    topicId: bigint | number
  }

  export type WorkTopicUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTopicUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
    topicId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkLikeCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutWorkLikesInput
    liker: ProfileCreateNestedOneWithoutWorkLikesInput
  }

  export type WorkLikeUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workId: bigint | number
    likerId: bigint | number
  }

  export type WorkLikeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutWorkLikesNestedInput
    liker?: ProfileUpdateOneRequiredWithoutWorkLikesNestedInput
  }

  export type WorkLikeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
    likerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkLikeCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workId: bigint | number
    likerId: bigint | number
  }

  export type WorkLikeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkLikeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
    likerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    responder: ProfileCreateNestedOneWithoutWorkResponsesInput
    work: WorkCreateNestedOneWithoutWorkResponsesInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutWorkResponseInput
  }

  export type WorkResponseUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    responderId: bigint | number
    workId: bigint | number
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutWorkResponseInput
  }

  export type WorkResponseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    responder?: ProfileUpdateOneRequiredWithoutWorkResponsesNestedInput
    work?: WorkUpdateOneRequiredWithoutWorkResponsesNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutWorkResponseNestedInput
  }

  export type WorkResponseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    responderId?: BigIntFieldUpdateOperationsInput | bigint | number
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutWorkResponseNestedInput
  }

  export type WorkResponseCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    responderId: bigint | number
    workId: bigint | number
  }

  export type WorkResponseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type WorkResponseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    responderId?: BigIntFieldUpdateOperationsInput | bigint | number
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseLikeCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workResponse: WorkResponseCreateNestedOneWithoutWorkResponseLikesInput
    liker: ProfileCreateNestedOneWithoutWorkResponseLikesInput
  }

  export type WorkResponseLikeUncheckedCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workResponseId: bigint | number
    likerId: bigint | number
  }

  export type WorkResponseLikeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workResponse?: WorkResponseUpdateOneRequiredWithoutWorkResponseLikesNestedInput
    liker?: ProfileUpdateOneRequiredWithoutWorkResponseLikesNestedInput
  }

  export type WorkResponseLikeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workResponseId?: BigIntFieldUpdateOperationsInput | bigint | number
    likerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseLikeCreateManyInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workResponseId: bigint | number
    likerId: bigint | number
  }

  export type WorkResponseLikeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkResponseLikeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workResponseId?: BigIntFieldUpdateOperationsInput | bigint | number
    likerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type WorkImageListRelationFilter = {
    every?: WorkImageWhereInput
    some?: WorkImageWhereInput
    none?: WorkImageWhereInput
  }

  export type WorkTopicListRelationFilter = {
    every?: WorkTopicWhereInput
    some?: WorkTopicWhereInput
    none?: WorkTopicWhereInput
  }

  export type WorkLikeListRelationFilter = {
    every?: WorkLikeWhereInput
    some?: WorkLikeWhereInput
    none?: WorkLikeWhereInput
  }

  export type WorkResponseListRelationFilter = {
    every?: WorkResponseWhereInput
    some?: WorkResponseWhereInput
    none?: WorkResponseWhereInput
  }

  export type WorkImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
  }

  export type WorkAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
  }

  export type WorkSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type WorkScalarRelationFilter = {
    is?: WorkWhereInput
    isNot?: WorkWhereInput
  }

  export type WorkImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePlaceholder?: SortOrder
    image?: SortOrder
    workId?: SortOrder
  }

  export type WorkImageAvgOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
  }

  export type WorkImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePlaceholder?: SortOrder
    image?: SortOrder
    workId?: SortOrder
  }

  export type WorkImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePlaceholder?: SortOrder
    image?: SortOrder
    workId?: SortOrder
  }

  export type WorkImageSumOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ProfileAvatarNullableScalarRelationFilter = {
    is?: ProfileAvatarWhereInput | null
    isNot?: ProfileAvatarWhereInput | null
  }

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type WorkResponseLikeListRelationFilter = {
    every?: WorkResponseLikeWhereInput
    some?: WorkResponseLikeWhereInput
    none?: WorkResponseLikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkResponseLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    socialLinkPrimary?: SortOrder
    socialLinkSecondary?: SortOrder
    avatarId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    avatarId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    socialLinkPrimary?: SortOrder
    socialLinkSecondary?: SortOrder
    avatarId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    socialLinkPrimary?: SortOrder
    socialLinkSecondary?: SortOrder
    avatarId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    avatarId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ProfileAvatarCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrder
  }

  export type ProfileAvatarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfileAvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrder
  }

  export type ProfileAvatarMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrder
  }

  export type ProfileAvatarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    followerId?: SortOrder
    followedId?: SortOrder
  }

  export type FollowAvgOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedId?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    followerId?: SortOrder
    followedId?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    followerId?: SortOrder
    followedId?: SortOrder
  }

  export type FollowSumOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followedId?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type WorkTopicCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    topicId?: SortOrder
  }

  export type WorkTopicAvgOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    topicId?: SortOrder
  }

  export type WorkTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    topicId?: SortOrder
  }

  export type WorkTopicMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    topicId?: SortOrder
  }

  export type WorkTopicSumOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    topicId?: SortOrder
  }

  export type WorkLikeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkLikeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkLikeSumOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkResponseCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    response?: SortOrder
    responderId?: SortOrder
    workId?: SortOrder
  }

  export type WorkResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    responderId?: SortOrder
    workId?: SortOrder
  }

  export type WorkResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    response?: SortOrder
    responderId?: SortOrder
    workId?: SortOrder
  }

  export type WorkResponseMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    response?: SortOrder
    responderId?: SortOrder
    workId?: SortOrder
  }

  export type WorkResponseSumOrderByAggregateInput = {
    id?: SortOrder
    responderId?: SortOrder
    workId?: SortOrder
  }

  export type WorkResponseScalarRelationFilter = {
    is?: WorkResponseWhereInput
    isNot?: WorkResponseWhereInput
  }

  export type WorkResponseLikeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workResponseId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkResponseLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    workResponseId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkResponseLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workResponseId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkResponseLikeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workResponseId?: SortOrder
    likerId?: SortOrder
  }

  export type WorkResponseLikeSumOrderByAggregateInput = {
    id?: SortOrder
    workResponseId?: SortOrder
    likerId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutWorksInput = {
    create?: XOR<ProfileCreateWithoutWorksInput, ProfileUncheckedCreateWithoutWorksInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWorksInput
    connect?: ProfileWhereUniqueInput
  }

  export type WorkImageCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkImageCreateWithoutWorkInput, WorkImageUncheckedCreateWithoutWorkInput> | WorkImageCreateWithoutWorkInput[] | WorkImageUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkImageCreateOrConnectWithoutWorkInput | WorkImageCreateOrConnectWithoutWorkInput[]
    createMany?: WorkImageCreateManyWorkInputEnvelope
    connect?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
  }

  export type WorkTopicCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkTopicCreateWithoutWorkInput, WorkTopicUncheckedCreateWithoutWorkInput> | WorkTopicCreateWithoutWorkInput[] | WorkTopicUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkTopicCreateOrConnectWithoutWorkInput | WorkTopicCreateOrConnectWithoutWorkInput[]
    createMany?: WorkTopicCreateManyWorkInputEnvelope
    connect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
  }

  export type WorkLikeCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkLikeCreateWithoutWorkInput, WorkLikeUncheckedCreateWithoutWorkInput> | WorkLikeCreateWithoutWorkInput[] | WorkLikeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkLikeCreateOrConnectWithoutWorkInput | WorkLikeCreateOrConnectWithoutWorkInput[]
    createMany?: WorkLikeCreateManyWorkInputEnvelope
    connect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
  }

  export type WorkResponseCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkResponseCreateWithoutWorkInput, WorkResponseUncheckedCreateWithoutWorkInput> | WorkResponseCreateWithoutWorkInput[] | WorkResponseUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkResponseCreateOrConnectWithoutWorkInput | WorkResponseCreateOrConnectWithoutWorkInput[]
    createMany?: WorkResponseCreateManyWorkInputEnvelope
    connect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
  }

  export type WorkImageUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkImageCreateWithoutWorkInput, WorkImageUncheckedCreateWithoutWorkInput> | WorkImageCreateWithoutWorkInput[] | WorkImageUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkImageCreateOrConnectWithoutWorkInput | WorkImageCreateOrConnectWithoutWorkInput[]
    createMany?: WorkImageCreateManyWorkInputEnvelope
    connect?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
  }

  export type WorkTopicUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkTopicCreateWithoutWorkInput, WorkTopicUncheckedCreateWithoutWorkInput> | WorkTopicCreateWithoutWorkInput[] | WorkTopicUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkTopicCreateOrConnectWithoutWorkInput | WorkTopicCreateOrConnectWithoutWorkInput[]
    createMany?: WorkTopicCreateManyWorkInputEnvelope
    connect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
  }

  export type WorkLikeUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkLikeCreateWithoutWorkInput, WorkLikeUncheckedCreateWithoutWorkInput> | WorkLikeCreateWithoutWorkInput[] | WorkLikeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkLikeCreateOrConnectWithoutWorkInput | WorkLikeCreateOrConnectWithoutWorkInput[]
    createMany?: WorkLikeCreateManyWorkInputEnvelope
    connect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
  }

  export type WorkResponseUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkResponseCreateWithoutWorkInput, WorkResponseUncheckedCreateWithoutWorkInput> | WorkResponseCreateWithoutWorkInput[] | WorkResponseUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkResponseCreateOrConnectWithoutWorkInput | WorkResponseCreateOrConnectWithoutWorkInput[]
    createMany?: WorkResponseCreateManyWorkInputEnvelope
    connect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProfileUpdateOneRequiredWithoutWorksNestedInput = {
    create?: XOR<ProfileCreateWithoutWorksInput, ProfileUncheckedCreateWithoutWorksInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWorksInput
    upsert?: ProfileUpsertWithoutWorksInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWorksInput, ProfileUpdateWithoutWorksInput>, ProfileUncheckedUpdateWithoutWorksInput>
  }

  export type WorkImageUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkImageCreateWithoutWorkInput, WorkImageUncheckedCreateWithoutWorkInput> | WorkImageCreateWithoutWorkInput[] | WorkImageUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkImageCreateOrConnectWithoutWorkInput | WorkImageCreateOrConnectWithoutWorkInput[]
    upsert?: WorkImageUpsertWithWhereUniqueWithoutWorkInput | WorkImageUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkImageCreateManyWorkInputEnvelope
    set?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
    disconnect?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
    delete?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
    connect?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
    update?: WorkImageUpdateWithWhereUniqueWithoutWorkInput | WorkImageUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkImageUpdateManyWithWhereWithoutWorkInput | WorkImageUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkImageScalarWhereInput | WorkImageScalarWhereInput[]
  }

  export type WorkTopicUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkTopicCreateWithoutWorkInput, WorkTopicUncheckedCreateWithoutWorkInput> | WorkTopicCreateWithoutWorkInput[] | WorkTopicUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkTopicCreateOrConnectWithoutWorkInput | WorkTopicCreateOrConnectWithoutWorkInput[]
    upsert?: WorkTopicUpsertWithWhereUniqueWithoutWorkInput | WorkTopicUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkTopicCreateManyWorkInputEnvelope
    set?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    disconnect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    delete?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    connect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    update?: WorkTopicUpdateWithWhereUniqueWithoutWorkInput | WorkTopicUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkTopicUpdateManyWithWhereWithoutWorkInput | WorkTopicUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkTopicScalarWhereInput | WorkTopicScalarWhereInput[]
  }

  export type WorkLikeUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkLikeCreateWithoutWorkInput, WorkLikeUncheckedCreateWithoutWorkInput> | WorkLikeCreateWithoutWorkInput[] | WorkLikeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkLikeCreateOrConnectWithoutWorkInput | WorkLikeCreateOrConnectWithoutWorkInput[]
    upsert?: WorkLikeUpsertWithWhereUniqueWithoutWorkInput | WorkLikeUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkLikeCreateManyWorkInputEnvelope
    set?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    disconnect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    delete?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    connect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    update?: WorkLikeUpdateWithWhereUniqueWithoutWorkInput | WorkLikeUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkLikeUpdateManyWithWhereWithoutWorkInput | WorkLikeUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkLikeScalarWhereInput | WorkLikeScalarWhereInput[]
  }

  export type WorkResponseUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkResponseCreateWithoutWorkInput, WorkResponseUncheckedCreateWithoutWorkInput> | WorkResponseCreateWithoutWorkInput[] | WorkResponseUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkResponseCreateOrConnectWithoutWorkInput | WorkResponseCreateOrConnectWithoutWorkInput[]
    upsert?: WorkResponseUpsertWithWhereUniqueWithoutWorkInput | WorkResponseUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkResponseCreateManyWorkInputEnvelope
    set?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    disconnect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    delete?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    connect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    update?: WorkResponseUpdateWithWhereUniqueWithoutWorkInput | WorkResponseUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkResponseUpdateManyWithWhereWithoutWorkInput | WorkResponseUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkResponseScalarWhereInput | WorkResponseScalarWhereInput[]
  }

  export type WorkImageUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkImageCreateWithoutWorkInput, WorkImageUncheckedCreateWithoutWorkInput> | WorkImageCreateWithoutWorkInput[] | WorkImageUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkImageCreateOrConnectWithoutWorkInput | WorkImageCreateOrConnectWithoutWorkInput[]
    upsert?: WorkImageUpsertWithWhereUniqueWithoutWorkInput | WorkImageUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkImageCreateManyWorkInputEnvelope
    set?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
    disconnect?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
    delete?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
    connect?: WorkImageWhereUniqueInput | WorkImageWhereUniqueInput[]
    update?: WorkImageUpdateWithWhereUniqueWithoutWorkInput | WorkImageUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkImageUpdateManyWithWhereWithoutWorkInput | WorkImageUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkImageScalarWhereInput | WorkImageScalarWhereInput[]
  }

  export type WorkTopicUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkTopicCreateWithoutWorkInput, WorkTopicUncheckedCreateWithoutWorkInput> | WorkTopicCreateWithoutWorkInput[] | WorkTopicUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkTopicCreateOrConnectWithoutWorkInput | WorkTopicCreateOrConnectWithoutWorkInput[]
    upsert?: WorkTopicUpsertWithWhereUniqueWithoutWorkInput | WorkTopicUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkTopicCreateManyWorkInputEnvelope
    set?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    disconnect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    delete?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    connect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    update?: WorkTopicUpdateWithWhereUniqueWithoutWorkInput | WorkTopicUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkTopicUpdateManyWithWhereWithoutWorkInput | WorkTopicUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkTopicScalarWhereInput | WorkTopicScalarWhereInput[]
  }

  export type WorkLikeUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkLikeCreateWithoutWorkInput, WorkLikeUncheckedCreateWithoutWorkInput> | WorkLikeCreateWithoutWorkInput[] | WorkLikeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkLikeCreateOrConnectWithoutWorkInput | WorkLikeCreateOrConnectWithoutWorkInput[]
    upsert?: WorkLikeUpsertWithWhereUniqueWithoutWorkInput | WorkLikeUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkLikeCreateManyWorkInputEnvelope
    set?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    disconnect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    delete?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    connect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    update?: WorkLikeUpdateWithWhereUniqueWithoutWorkInput | WorkLikeUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkLikeUpdateManyWithWhereWithoutWorkInput | WorkLikeUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkLikeScalarWhereInput | WorkLikeScalarWhereInput[]
  }

  export type WorkResponseUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkResponseCreateWithoutWorkInput, WorkResponseUncheckedCreateWithoutWorkInput> | WorkResponseCreateWithoutWorkInput[] | WorkResponseUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkResponseCreateOrConnectWithoutWorkInput | WorkResponseCreateOrConnectWithoutWorkInput[]
    upsert?: WorkResponseUpsertWithWhereUniqueWithoutWorkInput | WorkResponseUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkResponseCreateManyWorkInputEnvelope
    set?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    disconnect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    delete?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    connect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    update?: WorkResponseUpdateWithWhereUniqueWithoutWorkInput | WorkResponseUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkResponseUpdateManyWithWhereWithoutWorkInput | WorkResponseUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkResponseScalarWhereInput | WorkResponseScalarWhereInput[]
  }

  export type WorkCreateNestedOneWithoutWorkImagesInput = {
    create?: XOR<WorkCreateWithoutWorkImagesInput, WorkUncheckedCreateWithoutWorkImagesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWorkImagesInput
    connect?: WorkWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type WorkUpdateOneRequiredWithoutWorkImagesNestedInput = {
    create?: XOR<WorkCreateWithoutWorkImagesInput, WorkUncheckedCreateWithoutWorkImagesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWorkImagesInput
    upsert?: WorkUpsertWithoutWorkImagesInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutWorkImagesInput, WorkUpdateWithoutWorkImagesInput>, WorkUncheckedUpdateWithoutWorkImagesInput>
  }

  export type ProfileAvatarCreateNestedOneWithoutProfileInput = {
    create?: XOR<ProfileAvatarCreateWithoutProfileInput, ProfileAvatarUncheckedCreateWithoutProfileInput>
    connectOrCreate?: ProfileAvatarCreateOrConnectWithoutProfileInput
    connect?: ProfileAvatarWhereUniqueInput
  }

  export type WorkCreateNestedManyWithoutAuthorInput = {
    create?: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput> | WorkCreateWithoutAuthorInput[] | WorkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutAuthorInput | WorkCreateOrConnectWithoutAuthorInput[]
    createMany?: WorkCreateManyAuthorInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowedInput = {
    create?: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput> | FollowCreateWithoutFollowedInput[] | FollowUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowedInput | FollowCreateOrConnectWithoutFollowedInput[]
    createMany?: FollowCreateManyFollowedInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type WorkLikeCreateNestedManyWithoutLikerInput = {
    create?: XOR<WorkLikeCreateWithoutLikerInput, WorkLikeUncheckedCreateWithoutLikerInput> | WorkLikeCreateWithoutLikerInput[] | WorkLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: WorkLikeCreateOrConnectWithoutLikerInput | WorkLikeCreateOrConnectWithoutLikerInput[]
    createMany?: WorkLikeCreateManyLikerInputEnvelope
    connect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
  }

  export type WorkResponseCreateNestedManyWithoutResponderInput = {
    create?: XOR<WorkResponseCreateWithoutResponderInput, WorkResponseUncheckedCreateWithoutResponderInput> | WorkResponseCreateWithoutResponderInput[] | WorkResponseUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: WorkResponseCreateOrConnectWithoutResponderInput | WorkResponseCreateOrConnectWithoutResponderInput[]
    createMany?: WorkResponseCreateManyResponderInputEnvelope
    connect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
  }

  export type WorkResponseLikeCreateNestedManyWithoutLikerInput = {
    create?: XOR<WorkResponseLikeCreateWithoutLikerInput, WorkResponseLikeUncheckedCreateWithoutLikerInput> | WorkResponseLikeCreateWithoutLikerInput[] | WorkResponseLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: WorkResponseLikeCreateOrConnectWithoutLikerInput | WorkResponseLikeCreateOrConnectWithoutLikerInput[]
    createMany?: WorkResponseLikeCreateManyLikerInputEnvelope
    connect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
  }

  export type WorkUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput> | WorkCreateWithoutAuthorInput[] | WorkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutAuthorInput | WorkCreateOrConnectWithoutAuthorInput[]
    createMany?: WorkCreateManyAuthorInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowedInput = {
    create?: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput> | FollowCreateWithoutFollowedInput[] | FollowUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowedInput | FollowCreateOrConnectWithoutFollowedInput[]
    createMany?: FollowCreateManyFollowedInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type WorkLikeUncheckedCreateNestedManyWithoutLikerInput = {
    create?: XOR<WorkLikeCreateWithoutLikerInput, WorkLikeUncheckedCreateWithoutLikerInput> | WorkLikeCreateWithoutLikerInput[] | WorkLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: WorkLikeCreateOrConnectWithoutLikerInput | WorkLikeCreateOrConnectWithoutLikerInput[]
    createMany?: WorkLikeCreateManyLikerInputEnvelope
    connect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
  }

  export type WorkResponseUncheckedCreateNestedManyWithoutResponderInput = {
    create?: XOR<WorkResponseCreateWithoutResponderInput, WorkResponseUncheckedCreateWithoutResponderInput> | WorkResponseCreateWithoutResponderInput[] | WorkResponseUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: WorkResponseCreateOrConnectWithoutResponderInput | WorkResponseCreateOrConnectWithoutResponderInput[]
    createMany?: WorkResponseCreateManyResponderInputEnvelope
    connect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
  }

  export type WorkResponseLikeUncheckedCreateNestedManyWithoutLikerInput = {
    create?: XOR<WorkResponseLikeCreateWithoutLikerInput, WorkResponseLikeUncheckedCreateWithoutLikerInput> | WorkResponseLikeCreateWithoutLikerInput[] | WorkResponseLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: WorkResponseLikeCreateOrConnectWithoutLikerInput | WorkResponseLikeCreateOrConnectWithoutLikerInput[]
    createMany?: WorkResponseLikeCreateManyLikerInputEnvelope
    connect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProfileAvatarUpdateOneWithoutProfileNestedInput = {
    create?: XOR<ProfileAvatarCreateWithoutProfileInput, ProfileAvatarUncheckedCreateWithoutProfileInput>
    connectOrCreate?: ProfileAvatarCreateOrConnectWithoutProfileInput
    upsert?: ProfileAvatarUpsertWithoutProfileInput
    disconnect?: ProfileAvatarWhereInput | boolean
    delete?: ProfileAvatarWhereInput | boolean
    connect?: ProfileAvatarWhereUniqueInput
    update?: XOR<XOR<ProfileAvatarUpdateToOneWithWhereWithoutProfileInput, ProfileAvatarUpdateWithoutProfileInput>, ProfileAvatarUncheckedUpdateWithoutProfileInput>
  }

  export type WorkUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput> | WorkCreateWithoutAuthorInput[] | WorkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutAuthorInput | WorkCreateOrConnectWithoutAuthorInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutAuthorInput | WorkUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: WorkCreateManyAuthorInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutAuthorInput | WorkUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutAuthorInput | WorkUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowedNestedInput = {
    create?: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput> | FollowCreateWithoutFollowedInput[] | FollowUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowedInput | FollowCreateOrConnectWithoutFollowedInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowedInput | FollowUpsertWithWhereUniqueWithoutFollowedInput[]
    createMany?: FollowCreateManyFollowedInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowedInput | FollowUpdateWithWhereUniqueWithoutFollowedInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowedInput | FollowUpdateManyWithWhereWithoutFollowedInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type WorkLikeUpdateManyWithoutLikerNestedInput = {
    create?: XOR<WorkLikeCreateWithoutLikerInput, WorkLikeUncheckedCreateWithoutLikerInput> | WorkLikeCreateWithoutLikerInput[] | WorkLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: WorkLikeCreateOrConnectWithoutLikerInput | WorkLikeCreateOrConnectWithoutLikerInput[]
    upsert?: WorkLikeUpsertWithWhereUniqueWithoutLikerInput | WorkLikeUpsertWithWhereUniqueWithoutLikerInput[]
    createMany?: WorkLikeCreateManyLikerInputEnvelope
    set?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    disconnect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    delete?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    connect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    update?: WorkLikeUpdateWithWhereUniqueWithoutLikerInput | WorkLikeUpdateWithWhereUniqueWithoutLikerInput[]
    updateMany?: WorkLikeUpdateManyWithWhereWithoutLikerInput | WorkLikeUpdateManyWithWhereWithoutLikerInput[]
    deleteMany?: WorkLikeScalarWhereInput | WorkLikeScalarWhereInput[]
  }

  export type WorkResponseUpdateManyWithoutResponderNestedInput = {
    create?: XOR<WorkResponseCreateWithoutResponderInput, WorkResponseUncheckedCreateWithoutResponderInput> | WorkResponseCreateWithoutResponderInput[] | WorkResponseUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: WorkResponseCreateOrConnectWithoutResponderInput | WorkResponseCreateOrConnectWithoutResponderInput[]
    upsert?: WorkResponseUpsertWithWhereUniqueWithoutResponderInput | WorkResponseUpsertWithWhereUniqueWithoutResponderInput[]
    createMany?: WorkResponseCreateManyResponderInputEnvelope
    set?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    disconnect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    delete?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    connect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    update?: WorkResponseUpdateWithWhereUniqueWithoutResponderInput | WorkResponseUpdateWithWhereUniqueWithoutResponderInput[]
    updateMany?: WorkResponseUpdateManyWithWhereWithoutResponderInput | WorkResponseUpdateManyWithWhereWithoutResponderInput[]
    deleteMany?: WorkResponseScalarWhereInput | WorkResponseScalarWhereInput[]
  }

  export type WorkResponseLikeUpdateManyWithoutLikerNestedInput = {
    create?: XOR<WorkResponseLikeCreateWithoutLikerInput, WorkResponseLikeUncheckedCreateWithoutLikerInput> | WorkResponseLikeCreateWithoutLikerInput[] | WorkResponseLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: WorkResponseLikeCreateOrConnectWithoutLikerInput | WorkResponseLikeCreateOrConnectWithoutLikerInput[]
    upsert?: WorkResponseLikeUpsertWithWhereUniqueWithoutLikerInput | WorkResponseLikeUpsertWithWhereUniqueWithoutLikerInput[]
    createMany?: WorkResponseLikeCreateManyLikerInputEnvelope
    set?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    disconnect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    delete?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    connect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    update?: WorkResponseLikeUpdateWithWhereUniqueWithoutLikerInput | WorkResponseLikeUpdateWithWhereUniqueWithoutLikerInput[]
    updateMany?: WorkResponseLikeUpdateManyWithWhereWithoutLikerInput | WorkResponseLikeUpdateManyWithWhereWithoutLikerInput[]
    deleteMany?: WorkResponseLikeScalarWhereInput | WorkResponseLikeScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type WorkUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput> | WorkCreateWithoutAuthorInput[] | WorkUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutAuthorInput | WorkCreateOrConnectWithoutAuthorInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutAuthorInput | WorkUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: WorkCreateManyAuthorInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutAuthorInput | WorkUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutAuthorInput | WorkUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowedNestedInput = {
    create?: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput> | FollowCreateWithoutFollowedInput[] | FollowUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowedInput | FollowCreateOrConnectWithoutFollowedInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowedInput | FollowUpsertWithWhereUniqueWithoutFollowedInput[]
    createMany?: FollowCreateManyFollowedInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowedInput | FollowUpdateWithWhereUniqueWithoutFollowedInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowedInput | FollowUpdateManyWithWhereWithoutFollowedInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type WorkLikeUncheckedUpdateManyWithoutLikerNestedInput = {
    create?: XOR<WorkLikeCreateWithoutLikerInput, WorkLikeUncheckedCreateWithoutLikerInput> | WorkLikeCreateWithoutLikerInput[] | WorkLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: WorkLikeCreateOrConnectWithoutLikerInput | WorkLikeCreateOrConnectWithoutLikerInput[]
    upsert?: WorkLikeUpsertWithWhereUniqueWithoutLikerInput | WorkLikeUpsertWithWhereUniqueWithoutLikerInput[]
    createMany?: WorkLikeCreateManyLikerInputEnvelope
    set?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    disconnect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    delete?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    connect?: WorkLikeWhereUniqueInput | WorkLikeWhereUniqueInput[]
    update?: WorkLikeUpdateWithWhereUniqueWithoutLikerInput | WorkLikeUpdateWithWhereUniqueWithoutLikerInput[]
    updateMany?: WorkLikeUpdateManyWithWhereWithoutLikerInput | WorkLikeUpdateManyWithWhereWithoutLikerInput[]
    deleteMany?: WorkLikeScalarWhereInput | WorkLikeScalarWhereInput[]
  }

  export type WorkResponseUncheckedUpdateManyWithoutResponderNestedInput = {
    create?: XOR<WorkResponseCreateWithoutResponderInput, WorkResponseUncheckedCreateWithoutResponderInput> | WorkResponseCreateWithoutResponderInput[] | WorkResponseUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: WorkResponseCreateOrConnectWithoutResponderInput | WorkResponseCreateOrConnectWithoutResponderInput[]
    upsert?: WorkResponseUpsertWithWhereUniqueWithoutResponderInput | WorkResponseUpsertWithWhereUniqueWithoutResponderInput[]
    createMany?: WorkResponseCreateManyResponderInputEnvelope
    set?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    disconnect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    delete?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    connect?: WorkResponseWhereUniqueInput | WorkResponseWhereUniqueInput[]
    update?: WorkResponseUpdateWithWhereUniqueWithoutResponderInput | WorkResponseUpdateWithWhereUniqueWithoutResponderInput[]
    updateMany?: WorkResponseUpdateManyWithWhereWithoutResponderInput | WorkResponseUpdateManyWithWhereWithoutResponderInput[]
    deleteMany?: WorkResponseScalarWhereInput | WorkResponseScalarWhereInput[]
  }

  export type WorkResponseLikeUncheckedUpdateManyWithoutLikerNestedInput = {
    create?: XOR<WorkResponseLikeCreateWithoutLikerInput, WorkResponseLikeUncheckedCreateWithoutLikerInput> | WorkResponseLikeCreateWithoutLikerInput[] | WorkResponseLikeUncheckedCreateWithoutLikerInput[]
    connectOrCreate?: WorkResponseLikeCreateOrConnectWithoutLikerInput | WorkResponseLikeCreateOrConnectWithoutLikerInput[]
    upsert?: WorkResponseLikeUpsertWithWhereUniqueWithoutLikerInput | WorkResponseLikeUpsertWithWhereUniqueWithoutLikerInput[]
    createMany?: WorkResponseLikeCreateManyLikerInputEnvelope
    set?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    disconnect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    delete?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    connect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    update?: WorkResponseLikeUpdateWithWhereUniqueWithoutLikerInput | WorkResponseLikeUpdateWithWhereUniqueWithoutLikerInput[]
    updateMany?: WorkResponseLikeUpdateManyWithWhereWithoutLikerInput | WorkResponseLikeUpdateManyWithWhereWithoutLikerInput[]
    deleteMany?: WorkResponseLikeScalarWhereInput | WorkResponseLikeScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutAvatarInput = {
    create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUncheckedCreateNestedOneWithoutAvatarInput = {
    create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneWithoutAvatarNestedInput = {
    create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput
    upsert?: ProfileUpsertWithoutAvatarInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAvatarInput, ProfileUpdateWithoutAvatarInput>, ProfileUncheckedUpdateWithoutAvatarInput>
  }

  export type ProfileUncheckedUpdateOneWithoutAvatarNestedInput = {
    create?: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAvatarInput
    upsert?: ProfileUpsertWithoutAvatarInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAvatarInput, ProfileUpdateWithoutAvatarInput>, ProfileUncheckedUpdateWithoutAvatarInput>
  }

  export type ProfileCreateNestedOneWithoutFollowingInput = {
    create?: XOR<ProfileCreateWithoutFollowingInput, ProfileUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowingInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutFollowersInput = {
    create?: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowersInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<ProfileCreateWithoutFollowingInput, ProfileUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowingInput
    upsert?: ProfileUpsertWithoutFollowingInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFollowingInput, ProfileUpdateWithoutFollowingInput>, ProfileUncheckedUpdateWithoutFollowingInput>
  }

  export type ProfileUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowersInput
    upsert?: ProfileUpsertWithoutFollowersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFollowersInput, ProfileUpdateWithoutFollowersInput>, ProfileUncheckedUpdateWithoutFollowersInput>
  }

  export type WorkTopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<WorkTopicCreateWithoutTopicInput, WorkTopicUncheckedCreateWithoutTopicInput> | WorkTopicCreateWithoutTopicInput[] | WorkTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: WorkTopicCreateOrConnectWithoutTopicInput | WorkTopicCreateOrConnectWithoutTopicInput[]
    createMany?: WorkTopicCreateManyTopicInputEnvelope
    connect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
  }

  export type WorkTopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<WorkTopicCreateWithoutTopicInput, WorkTopicUncheckedCreateWithoutTopicInput> | WorkTopicCreateWithoutTopicInput[] | WorkTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: WorkTopicCreateOrConnectWithoutTopicInput | WorkTopicCreateOrConnectWithoutTopicInput[]
    createMany?: WorkTopicCreateManyTopicInputEnvelope
    connect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
  }

  export type WorkTopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<WorkTopicCreateWithoutTopicInput, WorkTopicUncheckedCreateWithoutTopicInput> | WorkTopicCreateWithoutTopicInput[] | WorkTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: WorkTopicCreateOrConnectWithoutTopicInput | WorkTopicCreateOrConnectWithoutTopicInput[]
    upsert?: WorkTopicUpsertWithWhereUniqueWithoutTopicInput | WorkTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: WorkTopicCreateManyTopicInputEnvelope
    set?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    disconnect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    delete?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    connect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    update?: WorkTopicUpdateWithWhereUniqueWithoutTopicInput | WorkTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: WorkTopicUpdateManyWithWhereWithoutTopicInput | WorkTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: WorkTopicScalarWhereInput | WorkTopicScalarWhereInput[]
  }

  export type WorkTopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<WorkTopicCreateWithoutTopicInput, WorkTopicUncheckedCreateWithoutTopicInput> | WorkTopicCreateWithoutTopicInput[] | WorkTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: WorkTopicCreateOrConnectWithoutTopicInput | WorkTopicCreateOrConnectWithoutTopicInput[]
    upsert?: WorkTopicUpsertWithWhereUniqueWithoutTopicInput | WorkTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: WorkTopicCreateManyTopicInputEnvelope
    set?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    disconnect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    delete?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    connect?: WorkTopicWhereUniqueInput | WorkTopicWhereUniqueInput[]
    update?: WorkTopicUpdateWithWhereUniqueWithoutTopicInput | WorkTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: WorkTopicUpdateManyWithWhereWithoutTopicInput | WorkTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: WorkTopicScalarWhereInput | WorkTopicScalarWhereInput[]
  }

  export type WorkCreateNestedOneWithoutWorkTopicsInput = {
    create?: XOR<WorkCreateWithoutWorkTopicsInput, WorkUncheckedCreateWithoutWorkTopicsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWorkTopicsInput
    connect?: WorkWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutWorkTopicsInput = {
    create?: XOR<TopicCreateWithoutWorkTopicsInput, TopicUncheckedCreateWithoutWorkTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutWorkTopicsInput
    connect?: TopicWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutWorkTopicsNestedInput = {
    create?: XOR<WorkCreateWithoutWorkTopicsInput, WorkUncheckedCreateWithoutWorkTopicsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWorkTopicsInput
    upsert?: WorkUpsertWithoutWorkTopicsInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutWorkTopicsInput, WorkUpdateWithoutWorkTopicsInput>, WorkUncheckedUpdateWithoutWorkTopicsInput>
  }

  export type TopicUpdateOneRequiredWithoutWorkTopicsNestedInput = {
    create?: XOR<TopicCreateWithoutWorkTopicsInput, TopicUncheckedCreateWithoutWorkTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutWorkTopicsInput
    upsert?: TopicUpsertWithoutWorkTopicsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutWorkTopicsInput, TopicUpdateWithoutWorkTopicsInput>, TopicUncheckedUpdateWithoutWorkTopicsInput>
  }

  export type WorkCreateNestedOneWithoutWorkLikesInput = {
    create?: XOR<WorkCreateWithoutWorkLikesInput, WorkUncheckedCreateWithoutWorkLikesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWorkLikesInput
    connect?: WorkWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutWorkLikesInput = {
    create?: XOR<ProfileCreateWithoutWorkLikesInput, ProfileUncheckedCreateWithoutWorkLikesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWorkLikesInput
    connect?: ProfileWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutWorkLikesNestedInput = {
    create?: XOR<WorkCreateWithoutWorkLikesInput, WorkUncheckedCreateWithoutWorkLikesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWorkLikesInput
    upsert?: WorkUpsertWithoutWorkLikesInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutWorkLikesInput, WorkUpdateWithoutWorkLikesInput>, WorkUncheckedUpdateWithoutWorkLikesInput>
  }

  export type ProfileUpdateOneRequiredWithoutWorkLikesNestedInput = {
    create?: XOR<ProfileCreateWithoutWorkLikesInput, ProfileUncheckedCreateWithoutWorkLikesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWorkLikesInput
    upsert?: ProfileUpsertWithoutWorkLikesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWorkLikesInput, ProfileUpdateWithoutWorkLikesInput>, ProfileUncheckedUpdateWithoutWorkLikesInput>
  }

  export type ProfileCreateNestedOneWithoutWorkResponsesInput = {
    create?: XOR<ProfileCreateWithoutWorkResponsesInput, ProfileUncheckedCreateWithoutWorkResponsesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWorkResponsesInput
    connect?: ProfileWhereUniqueInput
  }

  export type WorkCreateNestedOneWithoutWorkResponsesInput = {
    create?: XOR<WorkCreateWithoutWorkResponsesInput, WorkUncheckedCreateWithoutWorkResponsesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWorkResponsesInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkResponseLikeCreateNestedManyWithoutWorkResponseInput = {
    create?: XOR<WorkResponseLikeCreateWithoutWorkResponseInput, WorkResponseLikeUncheckedCreateWithoutWorkResponseInput> | WorkResponseLikeCreateWithoutWorkResponseInput[] | WorkResponseLikeUncheckedCreateWithoutWorkResponseInput[]
    connectOrCreate?: WorkResponseLikeCreateOrConnectWithoutWorkResponseInput | WorkResponseLikeCreateOrConnectWithoutWorkResponseInput[]
    createMany?: WorkResponseLikeCreateManyWorkResponseInputEnvelope
    connect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
  }

  export type WorkResponseLikeUncheckedCreateNestedManyWithoutWorkResponseInput = {
    create?: XOR<WorkResponseLikeCreateWithoutWorkResponseInput, WorkResponseLikeUncheckedCreateWithoutWorkResponseInput> | WorkResponseLikeCreateWithoutWorkResponseInput[] | WorkResponseLikeUncheckedCreateWithoutWorkResponseInput[]
    connectOrCreate?: WorkResponseLikeCreateOrConnectWithoutWorkResponseInput | WorkResponseLikeCreateOrConnectWithoutWorkResponseInput[]
    createMany?: WorkResponseLikeCreateManyWorkResponseInputEnvelope
    connect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutWorkResponsesNestedInput = {
    create?: XOR<ProfileCreateWithoutWorkResponsesInput, ProfileUncheckedCreateWithoutWorkResponsesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWorkResponsesInput
    upsert?: ProfileUpsertWithoutWorkResponsesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWorkResponsesInput, ProfileUpdateWithoutWorkResponsesInput>, ProfileUncheckedUpdateWithoutWorkResponsesInput>
  }

  export type WorkUpdateOneRequiredWithoutWorkResponsesNestedInput = {
    create?: XOR<WorkCreateWithoutWorkResponsesInput, WorkUncheckedCreateWithoutWorkResponsesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutWorkResponsesInput
    upsert?: WorkUpsertWithoutWorkResponsesInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutWorkResponsesInput, WorkUpdateWithoutWorkResponsesInput>, WorkUncheckedUpdateWithoutWorkResponsesInput>
  }

  export type WorkResponseLikeUpdateManyWithoutWorkResponseNestedInput = {
    create?: XOR<WorkResponseLikeCreateWithoutWorkResponseInput, WorkResponseLikeUncheckedCreateWithoutWorkResponseInput> | WorkResponseLikeCreateWithoutWorkResponseInput[] | WorkResponseLikeUncheckedCreateWithoutWorkResponseInput[]
    connectOrCreate?: WorkResponseLikeCreateOrConnectWithoutWorkResponseInput | WorkResponseLikeCreateOrConnectWithoutWorkResponseInput[]
    upsert?: WorkResponseLikeUpsertWithWhereUniqueWithoutWorkResponseInput | WorkResponseLikeUpsertWithWhereUniqueWithoutWorkResponseInput[]
    createMany?: WorkResponseLikeCreateManyWorkResponseInputEnvelope
    set?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    disconnect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    delete?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    connect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    update?: WorkResponseLikeUpdateWithWhereUniqueWithoutWorkResponseInput | WorkResponseLikeUpdateWithWhereUniqueWithoutWorkResponseInput[]
    updateMany?: WorkResponseLikeUpdateManyWithWhereWithoutWorkResponseInput | WorkResponseLikeUpdateManyWithWhereWithoutWorkResponseInput[]
    deleteMany?: WorkResponseLikeScalarWhereInput | WorkResponseLikeScalarWhereInput[]
  }

  export type WorkResponseLikeUncheckedUpdateManyWithoutWorkResponseNestedInput = {
    create?: XOR<WorkResponseLikeCreateWithoutWorkResponseInput, WorkResponseLikeUncheckedCreateWithoutWorkResponseInput> | WorkResponseLikeCreateWithoutWorkResponseInput[] | WorkResponseLikeUncheckedCreateWithoutWorkResponseInput[]
    connectOrCreate?: WorkResponseLikeCreateOrConnectWithoutWorkResponseInput | WorkResponseLikeCreateOrConnectWithoutWorkResponseInput[]
    upsert?: WorkResponseLikeUpsertWithWhereUniqueWithoutWorkResponseInput | WorkResponseLikeUpsertWithWhereUniqueWithoutWorkResponseInput[]
    createMany?: WorkResponseLikeCreateManyWorkResponseInputEnvelope
    set?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    disconnect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    delete?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    connect?: WorkResponseLikeWhereUniqueInput | WorkResponseLikeWhereUniqueInput[]
    update?: WorkResponseLikeUpdateWithWhereUniqueWithoutWorkResponseInput | WorkResponseLikeUpdateWithWhereUniqueWithoutWorkResponseInput[]
    updateMany?: WorkResponseLikeUpdateManyWithWhereWithoutWorkResponseInput | WorkResponseLikeUpdateManyWithWhereWithoutWorkResponseInput[]
    deleteMany?: WorkResponseLikeScalarWhereInput | WorkResponseLikeScalarWhereInput[]
  }

  export type WorkResponseCreateNestedOneWithoutWorkResponseLikesInput = {
    create?: XOR<WorkResponseCreateWithoutWorkResponseLikesInput, WorkResponseUncheckedCreateWithoutWorkResponseLikesInput>
    connectOrCreate?: WorkResponseCreateOrConnectWithoutWorkResponseLikesInput
    connect?: WorkResponseWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutWorkResponseLikesInput = {
    create?: XOR<ProfileCreateWithoutWorkResponseLikesInput, ProfileUncheckedCreateWithoutWorkResponseLikesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWorkResponseLikesInput
    connect?: ProfileWhereUniqueInput
  }

  export type WorkResponseUpdateOneRequiredWithoutWorkResponseLikesNestedInput = {
    create?: XOR<WorkResponseCreateWithoutWorkResponseLikesInput, WorkResponseUncheckedCreateWithoutWorkResponseLikesInput>
    connectOrCreate?: WorkResponseCreateOrConnectWithoutWorkResponseLikesInput
    upsert?: WorkResponseUpsertWithoutWorkResponseLikesInput
    connect?: WorkResponseWhereUniqueInput
    update?: XOR<XOR<WorkResponseUpdateToOneWithWhereWithoutWorkResponseLikesInput, WorkResponseUpdateWithoutWorkResponseLikesInput>, WorkResponseUncheckedUpdateWithoutWorkResponseLikesInput>
  }

  export type ProfileUpdateOneRequiredWithoutWorkResponseLikesNestedInput = {
    create?: XOR<ProfileCreateWithoutWorkResponseLikesInput, ProfileUncheckedCreateWithoutWorkResponseLikesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWorkResponseLikesInput
    upsert?: ProfileUpsertWithoutWorkResponseLikesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWorkResponseLikesInput, ProfileUpdateWithoutWorkResponseLikesInput>, ProfileUncheckedUpdateWithoutWorkResponseLikesInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileCreateWithoutWorksInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatar?: ProfileAvatarCreateNestedOneWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowedInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutLikerInput
  }

  export type ProfileUncheckedCreateWithoutWorksInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatarId?: bigint | number | null
    followers?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutLikerInput
  }

  export type ProfileCreateOrConnectWithoutWorksInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWorksInput, ProfileUncheckedCreateWithoutWorksInput>
  }

  export type WorkImageCreateWithoutWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePlaceholder: string
    image: Uint8Array
  }

  export type WorkImageUncheckedCreateWithoutWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePlaceholder: string
    image: Uint8Array
  }

  export type WorkImageCreateOrConnectWithoutWorkInput = {
    where: WorkImageWhereUniqueInput
    create: XOR<WorkImageCreateWithoutWorkInput, WorkImageUncheckedCreateWithoutWorkInput>
  }

  export type WorkImageCreateManyWorkInputEnvelope = {
    data: WorkImageCreateManyWorkInput | WorkImageCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type WorkTopicCreateWithoutWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutWorkTopicsInput
  }

  export type WorkTopicUncheckedCreateWithoutWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    topicId: bigint | number
  }

  export type WorkTopicCreateOrConnectWithoutWorkInput = {
    where: WorkTopicWhereUniqueInput
    create: XOR<WorkTopicCreateWithoutWorkInput, WorkTopicUncheckedCreateWithoutWorkInput>
  }

  export type WorkTopicCreateManyWorkInputEnvelope = {
    data: WorkTopicCreateManyWorkInput | WorkTopicCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type WorkLikeCreateWithoutWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    liker: ProfileCreateNestedOneWithoutWorkLikesInput
  }

  export type WorkLikeUncheckedCreateWithoutWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    likerId: bigint | number
  }

  export type WorkLikeCreateOrConnectWithoutWorkInput = {
    where: WorkLikeWhereUniqueInput
    create: XOR<WorkLikeCreateWithoutWorkInput, WorkLikeUncheckedCreateWithoutWorkInput>
  }

  export type WorkLikeCreateManyWorkInputEnvelope = {
    data: WorkLikeCreateManyWorkInput | WorkLikeCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type WorkResponseCreateWithoutWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    responder: ProfileCreateNestedOneWithoutWorkResponsesInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutWorkResponseInput
  }

  export type WorkResponseUncheckedCreateWithoutWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    responderId: bigint | number
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutWorkResponseInput
  }

  export type WorkResponseCreateOrConnectWithoutWorkInput = {
    where: WorkResponseWhereUniqueInput
    create: XOR<WorkResponseCreateWithoutWorkInput, WorkResponseUncheckedCreateWithoutWorkInput>
  }

  export type WorkResponseCreateManyWorkInputEnvelope = {
    data: WorkResponseCreateManyWorkInput | WorkResponseCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutWorksInput = {
    update: XOR<ProfileUpdateWithoutWorksInput, ProfileUncheckedUpdateWithoutWorksInput>
    create: XOR<ProfileCreateWithoutWorksInput, ProfileUncheckedCreateWithoutWorksInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWorksInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWorksInput, ProfileUncheckedUpdateWithoutWorksInput>
  }

  export type ProfileUpdateWithoutWorksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: ProfileAvatarUpdateOneWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowedNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutLikerNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWorksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followers?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutLikerNestedInput
  }

  export type WorkImageUpsertWithWhereUniqueWithoutWorkInput = {
    where: WorkImageWhereUniqueInput
    update: XOR<WorkImageUpdateWithoutWorkInput, WorkImageUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkImageCreateWithoutWorkInput, WorkImageUncheckedCreateWithoutWorkInput>
  }

  export type WorkImageUpdateWithWhereUniqueWithoutWorkInput = {
    where: WorkImageWhereUniqueInput
    data: XOR<WorkImageUpdateWithoutWorkInput, WorkImageUncheckedUpdateWithoutWorkInput>
  }

  export type WorkImageUpdateManyWithWhereWithoutWorkInput = {
    where: WorkImageScalarWhereInput
    data: XOR<WorkImageUpdateManyMutationInput, WorkImageUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkImageScalarWhereInput = {
    AND?: WorkImageScalarWhereInput | WorkImageScalarWhereInput[]
    OR?: WorkImageScalarWhereInput[]
    NOT?: WorkImageScalarWhereInput | WorkImageScalarWhereInput[]
    id?: BigIntFilter<"WorkImage"> | bigint | number
    createdAt?: DateTimeFilter<"WorkImage"> | Date | string
    updatedAt?: DateTimeFilter<"WorkImage"> | Date | string
    imagePlaceholder?: StringFilter<"WorkImage"> | string
    image?: BytesFilter<"WorkImage"> | Uint8Array
    workId?: BigIntFilter<"WorkImage"> | bigint | number
  }

  export type WorkTopicUpsertWithWhereUniqueWithoutWorkInput = {
    where: WorkTopicWhereUniqueInput
    update: XOR<WorkTopicUpdateWithoutWorkInput, WorkTopicUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkTopicCreateWithoutWorkInput, WorkTopicUncheckedCreateWithoutWorkInput>
  }

  export type WorkTopicUpdateWithWhereUniqueWithoutWorkInput = {
    where: WorkTopicWhereUniqueInput
    data: XOR<WorkTopicUpdateWithoutWorkInput, WorkTopicUncheckedUpdateWithoutWorkInput>
  }

  export type WorkTopicUpdateManyWithWhereWithoutWorkInput = {
    where: WorkTopicScalarWhereInput
    data: XOR<WorkTopicUpdateManyMutationInput, WorkTopicUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkTopicScalarWhereInput = {
    AND?: WorkTopicScalarWhereInput | WorkTopicScalarWhereInput[]
    OR?: WorkTopicScalarWhereInput[]
    NOT?: WorkTopicScalarWhereInput | WorkTopicScalarWhereInput[]
    id?: BigIntFilter<"WorkTopic"> | bigint | number
    createdAt?: DateTimeFilter<"WorkTopic"> | Date | string
    updatedAt?: DateTimeFilter<"WorkTopic"> | Date | string
    workId?: BigIntFilter<"WorkTopic"> | bigint | number
    topicId?: BigIntFilter<"WorkTopic"> | bigint | number
  }

  export type WorkLikeUpsertWithWhereUniqueWithoutWorkInput = {
    where: WorkLikeWhereUniqueInput
    update: XOR<WorkLikeUpdateWithoutWorkInput, WorkLikeUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkLikeCreateWithoutWorkInput, WorkLikeUncheckedCreateWithoutWorkInput>
  }

  export type WorkLikeUpdateWithWhereUniqueWithoutWorkInput = {
    where: WorkLikeWhereUniqueInput
    data: XOR<WorkLikeUpdateWithoutWorkInput, WorkLikeUncheckedUpdateWithoutWorkInput>
  }

  export type WorkLikeUpdateManyWithWhereWithoutWorkInput = {
    where: WorkLikeScalarWhereInput
    data: XOR<WorkLikeUpdateManyMutationInput, WorkLikeUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkLikeScalarWhereInput = {
    AND?: WorkLikeScalarWhereInput | WorkLikeScalarWhereInput[]
    OR?: WorkLikeScalarWhereInput[]
    NOT?: WorkLikeScalarWhereInput | WorkLikeScalarWhereInput[]
    id?: BigIntFilter<"WorkLike"> | bigint | number
    createdAt?: DateTimeFilter<"WorkLike"> | Date | string
    updatedAt?: DateTimeFilter<"WorkLike"> | Date | string
    workId?: BigIntFilter<"WorkLike"> | bigint | number
    likerId?: BigIntFilter<"WorkLike"> | bigint | number
  }

  export type WorkResponseUpsertWithWhereUniqueWithoutWorkInput = {
    where: WorkResponseWhereUniqueInput
    update: XOR<WorkResponseUpdateWithoutWorkInput, WorkResponseUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkResponseCreateWithoutWorkInput, WorkResponseUncheckedCreateWithoutWorkInput>
  }

  export type WorkResponseUpdateWithWhereUniqueWithoutWorkInput = {
    where: WorkResponseWhereUniqueInput
    data: XOR<WorkResponseUpdateWithoutWorkInput, WorkResponseUncheckedUpdateWithoutWorkInput>
  }

  export type WorkResponseUpdateManyWithWhereWithoutWorkInput = {
    where: WorkResponseScalarWhereInput
    data: XOR<WorkResponseUpdateManyMutationInput, WorkResponseUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkResponseScalarWhereInput = {
    AND?: WorkResponseScalarWhereInput | WorkResponseScalarWhereInput[]
    OR?: WorkResponseScalarWhereInput[]
    NOT?: WorkResponseScalarWhereInput | WorkResponseScalarWhereInput[]
    id?: BigIntFilter<"WorkResponse"> | bigint | number
    createdAt?: DateTimeFilter<"WorkResponse"> | Date | string
    updatedAt?: DateTimeFilter<"WorkResponse"> | Date | string
    response?: StringFilter<"WorkResponse"> | string
    responderId?: BigIntFilter<"WorkResponse"> | bigint | number
    workId?: BigIntFilter<"WorkResponse"> | bigint | number
  }

  export type WorkCreateWithoutWorkImagesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    author: ProfileCreateNestedOneWithoutWorksInput
    workTopics?: WorkTopicCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutWorkImagesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    authorId: bigint | number
    workTopics?: WorkTopicUncheckedCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutWorkImagesInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutWorkImagesInput, WorkUncheckedCreateWithoutWorkImagesInput>
  }

  export type WorkUpsertWithoutWorkImagesInput = {
    update: XOR<WorkUpdateWithoutWorkImagesInput, WorkUncheckedUpdateWithoutWorkImagesInput>
    create: XOR<WorkCreateWithoutWorkImagesInput, WorkUncheckedCreateWithoutWorkImagesInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutWorkImagesInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutWorkImagesInput, WorkUncheckedUpdateWithoutWorkImagesInput>
  }

  export type WorkUpdateWithoutWorkImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutWorksNestedInput
    workTopics?: WorkTopicUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutWorkImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    workTopics?: WorkTopicUncheckedUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type ProfileAvatarCreateWithoutProfileInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar: Uint8Array
  }

  export type ProfileAvatarUncheckedCreateWithoutProfileInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar: Uint8Array
  }

  export type ProfileAvatarCreateOrConnectWithoutProfileInput = {
    where: ProfileAvatarWhereUniqueInput
    create: XOR<ProfileAvatarCreateWithoutProfileInput, ProfileAvatarUncheckedCreateWithoutProfileInput>
  }

  export type WorkCreateWithoutAuthorInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    workImages?: WorkImageCreateNestedManyWithoutWorkInput
    workTopics?: WorkTopicCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutAuthorInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    workImages?: WorkImageUncheckedCreateNestedManyWithoutWorkInput
    workTopics?: WorkTopicUncheckedCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutAuthorInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput>
  }

  export type WorkCreateManyAuthorInputEnvelope = {
    data: WorkCreateManyAuthorInput | WorkCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFollowedInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    follower: ProfileCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateWithoutFollowedInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    followerId: bigint | number
  }

  export type FollowCreateOrConnectWithoutFollowedInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>
  }

  export type FollowCreateManyFollowedInputEnvelope = {
    data: FollowCreateManyFollowedInput | FollowCreateManyFollowedInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFollowerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    followed: ProfileCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateWithoutFollowerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    followedId: bigint | number
  }

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type WorkLikeCreateWithoutLikerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutWorkLikesInput
  }

  export type WorkLikeUncheckedCreateWithoutLikerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workId: bigint | number
  }

  export type WorkLikeCreateOrConnectWithoutLikerInput = {
    where: WorkLikeWhereUniqueInput
    create: XOR<WorkLikeCreateWithoutLikerInput, WorkLikeUncheckedCreateWithoutLikerInput>
  }

  export type WorkLikeCreateManyLikerInputEnvelope = {
    data: WorkLikeCreateManyLikerInput | WorkLikeCreateManyLikerInput[]
    skipDuplicates?: boolean
  }

  export type WorkResponseCreateWithoutResponderInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    work: WorkCreateNestedOneWithoutWorkResponsesInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutWorkResponseInput
  }

  export type WorkResponseUncheckedCreateWithoutResponderInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    workId: bigint | number
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutWorkResponseInput
  }

  export type WorkResponseCreateOrConnectWithoutResponderInput = {
    where: WorkResponseWhereUniqueInput
    create: XOR<WorkResponseCreateWithoutResponderInput, WorkResponseUncheckedCreateWithoutResponderInput>
  }

  export type WorkResponseCreateManyResponderInputEnvelope = {
    data: WorkResponseCreateManyResponderInput | WorkResponseCreateManyResponderInput[]
    skipDuplicates?: boolean
  }

  export type WorkResponseLikeCreateWithoutLikerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workResponse: WorkResponseCreateNestedOneWithoutWorkResponseLikesInput
  }

  export type WorkResponseLikeUncheckedCreateWithoutLikerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workResponseId: bigint | number
  }

  export type WorkResponseLikeCreateOrConnectWithoutLikerInput = {
    where: WorkResponseLikeWhereUniqueInput
    create: XOR<WorkResponseLikeCreateWithoutLikerInput, WorkResponseLikeUncheckedCreateWithoutLikerInput>
  }

  export type WorkResponseLikeCreateManyLikerInputEnvelope = {
    data: WorkResponseLikeCreateManyLikerInput | WorkResponseLikeCreateManyLikerInput[]
    skipDuplicates?: boolean
  }

  export type ProfileAvatarUpsertWithoutProfileInput = {
    update: XOR<ProfileAvatarUpdateWithoutProfileInput, ProfileAvatarUncheckedUpdateWithoutProfileInput>
    create: XOR<ProfileAvatarCreateWithoutProfileInput, ProfileAvatarUncheckedCreateWithoutProfileInput>
    where?: ProfileAvatarWhereInput
  }

  export type ProfileAvatarUpdateToOneWithWhereWithoutProfileInput = {
    where?: ProfileAvatarWhereInput
    data: XOR<ProfileAvatarUpdateWithoutProfileInput, ProfileAvatarUncheckedUpdateWithoutProfileInput>
  }

  export type ProfileAvatarUpdateWithoutProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type ProfileAvatarUncheckedUpdateWithoutProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type WorkUpsertWithWhereUniqueWithoutAuthorInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutAuthorInput, WorkUncheckedUpdateWithoutAuthorInput>
    create: XOR<WorkCreateWithoutAuthorInput, WorkUncheckedCreateWithoutAuthorInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutAuthorInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutAuthorInput, WorkUncheckedUpdateWithoutAuthorInput>
  }

  export type WorkUpdateManyWithWhereWithoutAuthorInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutAuthorInput>
  }

  export type WorkScalarWhereInput = {
    AND?: WorkScalarWhereInput | WorkScalarWhereInput[]
    OR?: WorkScalarWhereInput[]
    NOT?: WorkScalarWhereInput | WorkScalarWhereInput[]
    id?: BigIntFilter<"Work"> | bigint | number
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    title?: StringFilter<"Work"> | string
    content?: StringFilter<"Work"> | string
    description?: StringFilter<"Work"> | string
    authorId?: BigIntFilter<"Work"> | bigint | number
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowedInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowedInput, FollowUncheckedUpdateWithoutFollowedInput>
    create: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowedInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowedInput, FollowUncheckedUpdateWithoutFollowedInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowedInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowedInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    id?: BigIntFilter<"Follow"> | bigint | number
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    updatedAt?: DateTimeFilter<"Follow"> | Date | string
    followerId?: BigIntFilter<"Follow"> | bigint | number
    followedId?: BigIntFilter<"Follow"> | bigint | number
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type WorkLikeUpsertWithWhereUniqueWithoutLikerInput = {
    where: WorkLikeWhereUniqueInput
    update: XOR<WorkLikeUpdateWithoutLikerInput, WorkLikeUncheckedUpdateWithoutLikerInput>
    create: XOR<WorkLikeCreateWithoutLikerInput, WorkLikeUncheckedCreateWithoutLikerInput>
  }

  export type WorkLikeUpdateWithWhereUniqueWithoutLikerInput = {
    where: WorkLikeWhereUniqueInput
    data: XOR<WorkLikeUpdateWithoutLikerInput, WorkLikeUncheckedUpdateWithoutLikerInput>
  }

  export type WorkLikeUpdateManyWithWhereWithoutLikerInput = {
    where: WorkLikeScalarWhereInput
    data: XOR<WorkLikeUpdateManyMutationInput, WorkLikeUncheckedUpdateManyWithoutLikerInput>
  }

  export type WorkResponseUpsertWithWhereUniqueWithoutResponderInput = {
    where: WorkResponseWhereUniqueInput
    update: XOR<WorkResponseUpdateWithoutResponderInput, WorkResponseUncheckedUpdateWithoutResponderInput>
    create: XOR<WorkResponseCreateWithoutResponderInput, WorkResponseUncheckedCreateWithoutResponderInput>
  }

  export type WorkResponseUpdateWithWhereUniqueWithoutResponderInput = {
    where: WorkResponseWhereUniqueInput
    data: XOR<WorkResponseUpdateWithoutResponderInput, WorkResponseUncheckedUpdateWithoutResponderInput>
  }

  export type WorkResponseUpdateManyWithWhereWithoutResponderInput = {
    where: WorkResponseScalarWhereInput
    data: XOR<WorkResponseUpdateManyMutationInput, WorkResponseUncheckedUpdateManyWithoutResponderInput>
  }

  export type WorkResponseLikeUpsertWithWhereUniqueWithoutLikerInput = {
    where: WorkResponseLikeWhereUniqueInput
    update: XOR<WorkResponseLikeUpdateWithoutLikerInput, WorkResponseLikeUncheckedUpdateWithoutLikerInput>
    create: XOR<WorkResponseLikeCreateWithoutLikerInput, WorkResponseLikeUncheckedCreateWithoutLikerInput>
  }

  export type WorkResponseLikeUpdateWithWhereUniqueWithoutLikerInput = {
    where: WorkResponseLikeWhereUniqueInput
    data: XOR<WorkResponseLikeUpdateWithoutLikerInput, WorkResponseLikeUncheckedUpdateWithoutLikerInput>
  }

  export type WorkResponseLikeUpdateManyWithWhereWithoutLikerInput = {
    where: WorkResponseLikeScalarWhereInput
    data: XOR<WorkResponseLikeUpdateManyMutationInput, WorkResponseLikeUncheckedUpdateManyWithoutLikerInput>
  }

  export type WorkResponseLikeScalarWhereInput = {
    AND?: WorkResponseLikeScalarWhereInput | WorkResponseLikeScalarWhereInput[]
    OR?: WorkResponseLikeScalarWhereInput[]
    NOT?: WorkResponseLikeScalarWhereInput | WorkResponseLikeScalarWhereInput[]
    id?: BigIntFilter<"WorkResponseLike"> | bigint | number
    createdAt?: DateTimeFilter<"WorkResponseLike"> | Date | string
    updatedAt?: DateTimeFilter<"WorkResponseLike"> | Date | string
    workResponseId?: BigIntFilter<"WorkResponseLike"> | bigint | number
    likerId?: BigIntFilter<"WorkResponseLike"> | bigint | number
  }

  export type ProfileCreateWithoutAvatarInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    works?: WorkCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowedInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutLikerInput
  }

  export type ProfileUncheckedCreateWithoutAvatarInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutLikerInput
  }

  export type ProfileCreateOrConnectWithoutAvatarInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
  }

  export type ProfileUpsertWithoutAvatarInput = {
    update: XOR<ProfileUpdateWithoutAvatarInput, ProfileUncheckedUpdateWithoutAvatarInput>
    create: XOR<ProfileCreateWithoutAvatarInput, ProfileUncheckedCreateWithoutAvatarInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAvatarInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAvatarInput, ProfileUncheckedUpdateWithoutAvatarInput>
  }

  export type ProfileUpdateWithoutAvatarInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    works?: WorkUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowedNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutLikerNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAvatarInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutLikerNestedInput
  }

  export type ProfileCreateWithoutFollowingInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatar?: ProfileAvatarCreateNestedOneWithoutProfileInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowedInput
    workLikes?: WorkLikeCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutLikerInput
  }

  export type ProfileUncheckedCreateWithoutFollowingInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatarId?: bigint | number | null
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutLikerInput
  }

  export type ProfileCreateOrConnectWithoutFollowingInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFollowingInput, ProfileUncheckedCreateWithoutFollowingInput>
  }

  export type ProfileCreateWithoutFollowersInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatar?: ProfileAvatarCreateNestedOneWithoutProfileInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutLikerInput
  }

  export type ProfileUncheckedCreateWithoutFollowersInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatarId?: bigint | number | null
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutLikerInput
  }

  export type ProfileCreateOrConnectWithoutFollowersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
  }

  export type ProfileUpsertWithoutFollowingInput = {
    update: XOR<ProfileUpdateWithoutFollowingInput, ProfileUncheckedUpdateWithoutFollowingInput>
    create: XOR<ProfileCreateWithoutFollowingInput, ProfileUncheckedCreateWithoutFollowingInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFollowingInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFollowingInput, ProfileUncheckedUpdateWithoutFollowingInput>
  }

  export type ProfileUpdateWithoutFollowingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: ProfileAvatarUpdateOneWithoutProfileNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowedNestedInput
    workLikes?: WorkLikeUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutLikerNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFollowingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutLikerNestedInput
  }

  export type ProfileUpsertWithoutFollowersInput = {
    update: XOR<ProfileUpdateWithoutFollowersInput, ProfileUncheckedUpdateWithoutFollowersInput>
    create: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFollowersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFollowersInput, ProfileUncheckedUpdateWithoutFollowersInput>
  }

  export type ProfileUpdateWithoutFollowersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: ProfileAvatarUpdateOneWithoutProfileNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutLikerNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFollowersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutLikerNestedInput
  }

  export type WorkTopicCreateWithoutTopicInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutWorkTopicsInput
  }

  export type WorkTopicUncheckedCreateWithoutTopicInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workId: bigint | number
  }

  export type WorkTopicCreateOrConnectWithoutTopicInput = {
    where: WorkTopicWhereUniqueInput
    create: XOR<WorkTopicCreateWithoutTopicInput, WorkTopicUncheckedCreateWithoutTopicInput>
  }

  export type WorkTopicCreateManyTopicInputEnvelope = {
    data: WorkTopicCreateManyTopicInput | WorkTopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type WorkTopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: WorkTopicWhereUniqueInput
    update: XOR<WorkTopicUpdateWithoutTopicInput, WorkTopicUncheckedUpdateWithoutTopicInput>
    create: XOR<WorkTopicCreateWithoutTopicInput, WorkTopicUncheckedCreateWithoutTopicInput>
  }

  export type WorkTopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: WorkTopicWhereUniqueInput
    data: XOR<WorkTopicUpdateWithoutTopicInput, WorkTopicUncheckedUpdateWithoutTopicInput>
  }

  export type WorkTopicUpdateManyWithWhereWithoutTopicInput = {
    where: WorkTopicScalarWhereInput
    data: XOR<WorkTopicUpdateManyMutationInput, WorkTopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type WorkCreateWithoutWorkTopicsInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    author: ProfileCreateNestedOneWithoutWorksInput
    workImages?: WorkImageCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutWorkTopicsInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    authorId: bigint | number
    workImages?: WorkImageUncheckedCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutWorkTopicsInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutWorkTopicsInput, WorkUncheckedCreateWithoutWorkTopicsInput>
  }

  export type TopicCreateWithoutWorkTopicsInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type TopicUncheckedCreateWithoutWorkTopicsInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type TopicCreateOrConnectWithoutWorkTopicsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutWorkTopicsInput, TopicUncheckedCreateWithoutWorkTopicsInput>
  }

  export type WorkUpsertWithoutWorkTopicsInput = {
    update: XOR<WorkUpdateWithoutWorkTopicsInput, WorkUncheckedUpdateWithoutWorkTopicsInput>
    create: XOR<WorkCreateWithoutWorkTopicsInput, WorkUncheckedCreateWithoutWorkTopicsInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutWorkTopicsInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutWorkTopicsInput, WorkUncheckedUpdateWithoutWorkTopicsInput>
  }

  export type WorkUpdateWithoutWorkTopicsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutWorksNestedInput
    workImages?: WorkImageUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutWorkTopicsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    workImages?: WorkImageUncheckedUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type TopicUpsertWithoutWorkTopicsInput = {
    update: XOR<TopicUpdateWithoutWorkTopicsInput, TopicUncheckedUpdateWithoutWorkTopicsInput>
    create: XOR<TopicCreateWithoutWorkTopicsInput, TopicUncheckedCreateWithoutWorkTopicsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutWorkTopicsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutWorkTopicsInput, TopicUncheckedUpdateWithoutWorkTopicsInput>
  }

  export type TopicUpdateWithoutWorkTopicsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TopicUncheckedUpdateWithoutWorkTopicsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkCreateWithoutWorkLikesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    author: ProfileCreateNestedOneWithoutWorksInput
    workImages?: WorkImageCreateNestedManyWithoutWorkInput
    workTopics?: WorkTopicCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutWorkLikesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    authorId: bigint | number
    workImages?: WorkImageUncheckedCreateNestedManyWithoutWorkInput
    workTopics?: WorkTopicUncheckedCreateNestedManyWithoutWorkInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutWorkLikesInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutWorkLikesInput, WorkUncheckedCreateWithoutWorkLikesInput>
  }

  export type ProfileCreateWithoutWorkLikesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatar?: ProfileAvatarCreateNestedOneWithoutProfileInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowedInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    workResponses?: WorkResponseCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutLikerInput
  }

  export type ProfileUncheckedCreateWithoutWorkLikesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatarId?: bigint | number | null
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutResponderInput
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutLikerInput
  }

  export type ProfileCreateOrConnectWithoutWorkLikesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWorkLikesInput, ProfileUncheckedCreateWithoutWorkLikesInput>
  }

  export type WorkUpsertWithoutWorkLikesInput = {
    update: XOR<WorkUpdateWithoutWorkLikesInput, WorkUncheckedUpdateWithoutWorkLikesInput>
    create: XOR<WorkCreateWithoutWorkLikesInput, WorkUncheckedCreateWithoutWorkLikesInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutWorkLikesInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutWorkLikesInput, WorkUncheckedUpdateWithoutWorkLikesInput>
  }

  export type WorkUpdateWithoutWorkLikesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutWorksNestedInput
    workImages?: WorkImageUpdateManyWithoutWorkNestedInput
    workTopics?: WorkTopicUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutWorkLikesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    workImages?: WorkImageUncheckedUpdateManyWithoutWorkNestedInput
    workTopics?: WorkTopicUncheckedUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type ProfileUpsertWithoutWorkLikesInput = {
    update: XOR<ProfileUpdateWithoutWorkLikesInput, ProfileUncheckedUpdateWithoutWorkLikesInput>
    create: XOR<ProfileCreateWithoutWorkLikesInput, ProfileUncheckedCreateWithoutWorkLikesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWorkLikesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWorkLikesInput, ProfileUncheckedUpdateWithoutWorkLikesInput>
  }

  export type ProfileUpdateWithoutWorkLikesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: ProfileAvatarUpdateOneWithoutProfileNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowedNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    workResponses?: WorkResponseUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutLikerNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWorkLikesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutResponderNestedInput
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutLikerNestedInput
  }

  export type ProfileCreateWithoutWorkResponsesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatar?: ProfileAvatarCreateNestedOneWithoutProfileInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowedInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeCreateNestedManyWithoutLikerInput
    workResponseLikes?: WorkResponseLikeCreateNestedManyWithoutLikerInput
  }

  export type ProfileUncheckedCreateWithoutWorkResponsesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatarId?: bigint | number | null
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutLikerInput
    workResponseLikes?: WorkResponseLikeUncheckedCreateNestedManyWithoutLikerInput
  }

  export type ProfileCreateOrConnectWithoutWorkResponsesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWorkResponsesInput, ProfileUncheckedCreateWithoutWorkResponsesInput>
  }

  export type WorkCreateWithoutWorkResponsesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    author: ProfileCreateNestedOneWithoutWorksInput
    workImages?: WorkImageCreateNestedManyWithoutWorkInput
    workTopics?: WorkTopicCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutWorkResponsesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
    authorId: bigint | number
    workImages?: WorkImageUncheckedCreateNestedManyWithoutWorkInput
    workTopics?: WorkTopicUncheckedCreateNestedManyWithoutWorkInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutWorkResponsesInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutWorkResponsesInput, WorkUncheckedCreateWithoutWorkResponsesInput>
  }

  export type WorkResponseLikeCreateWithoutWorkResponseInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    liker: ProfileCreateNestedOneWithoutWorkResponseLikesInput
  }

  export type WorkResponseLikeUncheckedCreateWithoutWorkResponseInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    likerId: bigint | number
  }

  export type WorkResponseLikeCreateOrConnectWithoutWorkResponseInput = {
    where: WorkResponseLikeWhereUniqueInput
    create: XOR<WorkResponseLikeCreateWithoutWorkResponseInput, WorkResponseLikeUncheckedCreateWithoutWorkResponseInput>
  }

  export type WorkResponseLikeCreateManyWorkResponseInputEnvelope = {
    data: WorkResponseLikeCreateManyWorkResponseInput | WorkResponseLikeCreateManyWorkResponseInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutWorkResponsesInput = {
    update: XOR<ProfileUpdateWithoutWorkResponsesInput, ProfileUncheckedUpdateWithoutWorkResponsesInput>
    create: XOR<ProfileCreateWithoutWorkResponsesInput, ProfileUncheckedCreateWithoutWorkResponsesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWorkResponsesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWorkResponsesInput, ProfileUncheckedUpdateWithoutWorkResponsesInput>
  }

  export type ProfileUpdateWithoutWorkResponsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: ProfileAvatarUpdateOneWithoutProfileNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowedNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUpdateManyWithoutLikerNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutLikerNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWorkResponsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutLikerNestedInput
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutLikerNestedInput
  }

  export type WorkUpsertWithoutWorkResponsesInput = {
    update: XOR<WorkUpdateWithoutWorkResponsesInput, WorkUncheckedUpdateWithoutWorkResponsesInput>
    create: XOR<WorkCreateWithoutWorkResponsesInput, WorkUncheckedCreateWithoutWorkResponsesInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutWorkResponsesInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutWorkResponsesInput, WorkUncheckedUpdateWithoutWorkResponsesInput>
  }

  export type WorkUpdateWithoutWorkResponsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutWorksNestedInput
    workImages?: WorkImageUpdateManyWithoutWorkNestedInput
    workTopics?: WorkTopicUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutWorkResponsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    workImages?: WorkImageUncheckedUpdateManyWithoutWorkNestedInput
    workTopics?: WorkTopicUncheckedUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkResponseLikeUpsertWithWhereUniqueWithoutWorkResponseInput = {
    where: WorkResponseLikeWhereUniqueInput
    update: XOR<WorkResponseLikeUpdateWithoutWorkResponseInput, WorkResponseLikeUncheckedUpdateWithoutWorkResponseInput>
    create: XOR<WorkResponseLikeCreateWithoutWorkResponseInput, WorkResponseLikeUncheckedCreateWithoutWorkResponseInput>
  }

  export type WorkResponseLikeUpdateWithWhereUniqueWithoutWorkResponseInput = {
    where: WorkResponseLikeWhereUniqueInput
    data: XOR<WorkResponseLikeUpdateWithoutWorkResponseInput, WorkResponseLikeUncheckedUpdateWithoutWorkResponseInput>
  }

  export type WorkResponseLikeUpdateManyWithWhereWithoutWorkResponseInput = {
    where: WorkResponseLikeScalarWhereInput
    data: XOR<WorkResponseLikeUpdateManyMutationInput, WorkResponseLikeUncheckedUpdateManyWithoutWorkResponseInput>
  }

  export type WorkResponseCreateWithoutWorkResponseLikesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    responder: ProfileCreateNestedOneWithoutWorkResponsesInput
    work: WorkCreateNestedOneWithoutWorkResponsesInput
  }

  export type WorkResponseUncheckedCreateWithoutWorkResponseLikesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    responderId: bigint | number
    workId: bigint | number
  }

  export type WorkResponseCreateOrConnectWithoutWorkResponseLikesInput = {
    where: WorkResponseWhereUniqueInput
    create: XOR<WorkResponseCreateWithoutWorkResponseLikesInput, WorkResponseUncheckedCreateWithoutWorkResponseLikesInput>
  }

  export type ProfileCreateWithoutWorkResponseLikesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatar?: ProfileAvatarCreateNestedOneWithoutProfileInput
    works?: WorkCreateNestedManyWithoutAuthorInput
    followers?: FollowCreateNestedManyWithoutFollowedInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseCreateNestedManyWithoutResponderInput
  }

  export type ProfileUncheckedCreateWithoutWorkResponseLikesInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    userName: string
    password: string
    fullName: string
    description?: string | null
    socialLinkPrimary?: string | null
    socialLinkSecondary?: string | null
    avatarId?: bigint | number | null
    works?: WorkUncheckedCreateNestedManyWithoutAuthorInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowedInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    workLikes?: WorkLikeUncheckedCreateNestedManyWithoutLikerInput
    workResponses?: WorkResponseUncheckedCreateNestedManyWithoutResponderInput
  }

  export type ProfileCreateOrConnectWithoutWorkResponseLikesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWorkResponseLikesInput, ProfileUncheckedCreateWithoutWorkResponseLikesInput>
  }

  export type WorkResponseUpsertWithoutWorkResponseLikesInput = {
    update: XOR<WorkResponseUpdateWithoutWorkResponseLikesInput, WorkResponseUncheckedUpdateWithoutWorkResponseLikesInput>
    create: XOR<WorkResponseCreateWithoutWorkResponseLikesInput, WorkResponseUncheckedCreateWithoutWorkResponseLikesInput>
    where?: WorkResponseWhereInput
  }

  export type WorkResponseUpdateToOneWithWhereWithoutWorkResponseLikesInput = {
    where?: WorkResponseWhereInput
    data: XOR<WorkResponseUpdateWithoutWorkResponseLikesInput, WorkResponseUncheckedUpdateWithoutWorkResponseLikesInput>
  }

  export type WorkResponseUpdateWithoutWorkResponseLikesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    responder?: ProfileUpdateOneRequiredWithoutWorkResponsesNestedInput
    work?: WorkUpdateOneRequiredWithoutWorkResponsesNestedInput
  }

  export type WorkResponseUncheckedUpdateWithoutWorkResponseLikesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    responderId?: BigIntFieldUpdateOperationsInput | bigint | number
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProfileUpsertWithoutWorkResponseLikesInput = {
    update: XOR<ProfileUpdateWithoutWorkResponseLikesInput, ProfileUncheckedUpdateWithoutWorkResponseLikesInput>
    create: XOR<ProfileCreateWithoutWorkResponseLikesInput, ProfileUncheckedCreateWithoutWorkResponseLikesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWorkResponseLikesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWorkResponseLikesInput, ProfileUncheckedUpdateWithoutWorkResponseLikesInput>
  }

  export type ProfileUpdateWithoutWorkResponseLikesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: ProfileAvatarUpdateOneWithoutProfileNestedInput
    works?: WorkUpdateManyWithoutAuthorNestedInput
    followers?: FollowUpdateManyWithoutFollowedNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUpdateManyWithoutResponderNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWorkResponseLikesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkPrimary?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinkSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    works?: WorkUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowedNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutLikerNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutResponderNestedInput
  }

  export type WorkImageCreateManyWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePlaceholder: string
    image: Uint8Array
  }

  export type WorkTopicCreateManyWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    topicId: bigint | number
  }

  export type WorkLikeCreateManyWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    likerId: bigint | number
  }

  export type WorkResponseCreateManyWorkInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    responderId: bigint | number
  }

  export type WorkImageUpdateWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePlaceholder?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type WorkImageUncheckedUpdateWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePlaceholder?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type WorkImageUncheckedUpdateManyWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePlaceholder?: StringFieldUpdateOperationsInput | string
    image?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type WorkTopicUpdateWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutWorkTopicsNestedInput
  }

  export type WorkTopicUncheckedUpdateWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkTopicUncheckedUpdateManyWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkLikeUpdateWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liker?: ProfileUpdateOneRequiredWithoutWorkLikesNestedInput
  }

  export type WorkLikeUncheckedUpdateWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkLikeUncheckedUpdateManyWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseUpdateWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    responder?: ProfileUpdateOneRequiredWithoutWorkResponsesNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutWorkResponseNestedInput
  }

  export type WorkResponseUncheckedUpdateWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    responderId?: BigIntFieldUpdateOperationsInput | bigint | number
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutWorkResponseNestedInput
  }

  export type WorkResponseUncheckedUpdateManyWithoutWorkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    responderId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkCreateManyAuthorInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content: string
    description: string
  }

  export type FollowCreateManyFollowedInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    followerId: bigint | number
  }

  export type FollowCreateManyFollowerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    followedId: bigint | number
  }

  export type WorkLikeCreateManyLikerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workId: bigint | number
  }

  export type WorkResponseCreateManyResponderInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    response: string
    workId: bigint | number
  }

  export type WorkResponseLikeCreateManyLikerInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workResponseId: bigint | number
  }

  export type WorkUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workImages?: WorkImageUpdateManyWithoutWorkNestedInput
    workTopics?: WorkTopicUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workImages?: WorkImageUncheckedUpdateManyWithoutWorkNestedInput
    workTopics?: WorkTopicUncheckedUpdateManyWithoutWorkNestedInput
    workLikes?: WorkLikeUncheckedUpdateManyWithoutWorkNestedInput
    workResponses?: WorkResponseUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateManyWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FollowUpdateWithoutFollowedInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: ProfileUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowedInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FollowUncheckedUpdateManyWithoutFollowedInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FollowUpdateWithoutFollowerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followed?: ProfileUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followedId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followedId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkLikeUpdateWithoutLikerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutWorkLikesNestedInput
  }

  export type WorkLikeUncheckedUpdateWithoutLikerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkLikeUncheckedUpdateManyWithoutLikerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseUpdateWithoutResponderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    work?: WorkUpdateOneRequiredWithoutWorkResponsesNestedInput
    workResponseLikes?: WorkResponseLikeUpdateManyWithoutWorkResponseNestedInput
  }

  export type WorkResponseUncheckedUpdateWithoutResponderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
    workResponseLikes?: WorkResponseLikeUncheckedUpdateManyWithoutWorkResponseNestedInput
  }

  export type WorkResponseUncheckedUpdateManyWithoutResponderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    response?: StringFieldUpdateOperationsInput | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseLikeUpdateWithoutLikerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workResponse?: WorkResponseUpdateOneRequiredWithoutWorkResponseLikesNestedInput
  }

  export type WorkResponseLikeUncheckedUpdateWithoutLikerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workResponseId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseLikeUncheckedUpdateManyWithoutLikerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workResponseId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkTopicCreateManyTopicInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    workId: bigint | number
  }

  export type WorkTopicUpdateWithoutTopicInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutWorkTopicsNestedInput
  }

  export type WorkTopicUncheckedUpdateWithoutTopicInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkTopicUncheckedUpdateManyWithoutTopicInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseLikeCreateManyWorkResponseInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    likerId: bigint | number
  }

  export type WorkResponseLikeUpdateWithoutWorkResponseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liker?: ProfileUpdateOneRequiredWithoutWorkResponseLikesNestedInput
  }

  export type WorkResponseLikeUncheckedUpdateWithoutWorkResponseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type WorkResponseLikeUncheckedUpdateManyWithoutWorkResponseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likerId?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}