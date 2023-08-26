export type Chunk<
  T extends any[],
  N extends number,
  A extends any[] = [],
  B extends any[] = []
> = B['length'] extends N
  ? Chunk<T, N, [...A, B]>
  : T extends [infer U, ...infer W]
  ? Chunk<W, N, A, [...B, U]>
  : [...A, B]

type A = Chunk<[1, 2, 3], 2>
