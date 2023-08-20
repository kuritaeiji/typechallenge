export type MyExclude<T, U> = T extends U ? never : T

type A = MyExclude<'a' | 'b' | 'c', 'a'>
