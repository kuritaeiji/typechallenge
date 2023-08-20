export type FirstOfArray<T extends unknown[]> = T extends [] ? never : T[0]

type A = FirstOfArray<[]>
