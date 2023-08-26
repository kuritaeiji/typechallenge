type Falsy = 0 | '' | false | [] | { [P in any]: never }

export type AnyOf<T extends unknown[], I = T[number]> = true extends (
  I extends Falsy ? false : true
)
  ? true
  : false

// I extends Falsy ? false : true = false | false | false | true
type A = AnyOf<[0, false, [], 1]>

type B = ['a'] extends [infer U, ...infer V] ? U : never

export type AnyOfRecursive<T extends unknown[]> = T extends [
  infer U,
  ...infer V
]
  ? U extends Falsy
    ? AnyOfRecursive<V>
    : true
  : false
