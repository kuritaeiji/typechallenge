type Element<E extends string[]> = E extends [] ? '' : E

type Modifier<M extends string[]> = M extends [] ? '' : M

export type Bem<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}__${Element<E>[number]}--${Modifier<M>[number]}`

type A = Bem<'block', [], ['c', 'd']>
