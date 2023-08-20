export type MyParameters<T> = T extends (...args: infer U) => unknown
  ? U
  : never

type A = MyParameters<(a: number, b: string) => void>
