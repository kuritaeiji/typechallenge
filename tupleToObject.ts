export type TupleToObject<T extends PropertyKey[]> = { [Key in T[number]]: Key }

type A = TupleToObject<string[]>
