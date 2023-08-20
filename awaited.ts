export type MyAwaited<PromiseType> = PromiseType extends Promise<infer T>
  ? T
  : never
