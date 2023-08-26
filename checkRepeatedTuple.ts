export type CheckRepeatedTuple<T extends unknown[]> = T extends [
  infer U,
  ...infer W
]
  ? U extends W[number]
    ? true
    : CheckRepeatedTuple<W>
  : false
