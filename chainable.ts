export type Chainable<T = {}> = {
  option<Key extends string, Value>(
    key: Key,
    value: Value
  ): Chainable<{ [P in keyof T | Key]: P extends keyof T ? T[P] : Value }>
  get(): T
}
