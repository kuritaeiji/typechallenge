export type Chunk<
  Arr extends any[],
  Num extends number,
  Answer extends any[] = [],
  Tmp extends any[] = []
> = Tmp['length'] extends Num
  ? Chunk<Arr, Num, [...Answer, Tmp]>
  : Arr extends [infer T, ...infer U]
  ? Chunk<U, Num, Answer, [...Tmp, T]>
  : [...Answer, Tmp]

type A = Chunk<[1, 2, 3, 4], 3>
