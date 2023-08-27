export type DeepReadOnly<T> = {
  readonly [P in keyof T]: T[P] extends Record<PropertyKey, any>
    ? DeepReadOnly<T[P]>
    : T[P]
}

type A = DeepReadOnly<{
  a: {
    b: number
  }
}>

const a: A = {
  a: {
    b: 10
  }
}
