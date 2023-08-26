type Dict = {
  a: 'A'
  b: 'B'
  c: 'C'
  d: 'D'
}

export type Capitalize<T extends string> = T extends `${infer U}${infer V}`
  ? U extends keyof Dict
    ? `${Dict[U]}${V}`
    : T
  : T

type A = Capitalize<'abc'>

type B = Capitalize<''>

type C = Capitalize<'xyz'>
