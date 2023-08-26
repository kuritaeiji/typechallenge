export type AppendToObject<T, Key extends PropertyKey, Value> = {
  [P in keyof T | Key]: P extends keyof T ? T[P] : Value
}
