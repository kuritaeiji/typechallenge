export type AppendArgument<T, U> = T extends (...args: infer V) => infer W
  ? (...args: [...V, U]) => W
  : never
