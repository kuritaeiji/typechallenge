type Reverse<
  T extends string,
  A extends string = ''
> = T extends `${infer U}${infer V}` ? Reverse<V, `${U}${A}`> : A

export type EndsWith<
  T extends string,
  U extends string
> = Reverse<T> extends `${infer V}${infer W}`
  ? Reverse<U> extends `${infer X}${infer Y}`
    ? V extends X
      ? EndsWith<Reverse<W>, Reverse<Y>>
      : false
    : true
  : U extends ''
  ? true
  : false

type B = Reverse<'abcd'>

type A = EndsWith<'abcd', 'eabcd'>

type EndsWith2<T extends string, U extends string> = T extends `${any}${U}`
  ? true
  : false
