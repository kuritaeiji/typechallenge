export type Push<T extends unknown[], U> = [...T, U]

type A = Push<[string, number], boolean>
