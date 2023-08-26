export type Absolute<T extends string | number | bigint> =
  `${T}` extends `-${infer U}` ? U : T

type A = Absolute<'-100'>
type B = Absolute<100>
type C = Absolute<''>
