export type IsNever<T> = [T] extends [never] ? true : false

type A = IsNever<never>
