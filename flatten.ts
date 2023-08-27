export type Flatten<T> = T extends [infer U, ...infer W]
  ? U extends any[]
    ? [...Flatten<U>, ...Flatten<W>]
    : [U, ...Flatten<W>]
  : []

type A = Flatten<[1, 2, [3, [5, 6]]]>
