export type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

type A = Concat<string[], number[]>
