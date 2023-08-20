export type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type A = MyPick<{ a: number; b: string }, 'a'>
