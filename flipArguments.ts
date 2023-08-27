type Reverse<T extends any[]> = T extends [...infer U, infer V]
  ? [V, ...Reverse<U>]
  : []
export type FlipArguments<T> = T extends (...args: infer U) => infer V
  ? (...args: Reverse<U>) => V
  : never

type A = FlipArguments<(a: number, b: string) => void>
