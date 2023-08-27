export type Diff<T, U> = {
  [P in Exclude<keyof T | keyof U, keyof T & keyof U>]: P extends keyof T
    ? T[P]
    : P extends keyof U
    ? U[P]
    : never
}

type A = Diff<{ a: number; b: string }, { b: string; c: boolean }>
