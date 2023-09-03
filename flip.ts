export type Flip<T> = {
  [P in keyof T as T[P] extends string | number | boolean
    ? `${T[P]}`
    : never]: P
}

type A = Flip<{ a: false; b: 1; c: 'a'; d: null }>
