export type DropChar<
  T extends string,
  R extends string,
  A extends string = ''
> = T extends `${infer U}${infer V}`
  ? U extends R
    ? DropChar<V, R, A>
    : DropChar<V, R, `${A}${U}`>
  : A

type A = DropChar<'abcdefgab', 'a'>
