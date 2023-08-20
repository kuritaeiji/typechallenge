export type MyReadonly<T> = { readonly [P in keyof T]: T[P] }

type A = MyReadonly<{ a: number; b: string }>
