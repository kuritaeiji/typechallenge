export const a = 'abcde'

const b = 3

const arr: (number | 'foo')[] = []

const arr2 = [1, 2, 'foo']

let d = 'foo' as const

const e = {
  foo: 'foobar'
} as const

const f = ['foo', 'bar'] as const

const or = 1 || 'foobar'

const num: number = 123

const or2 = num || 'foobar'

const apply = <T, U, R>(
  value: T,
  func1: (arg: U) => R,
  func2: (arg: T) => U
) => {}

type Entity = {
  id: number
  [K: string]: any
}

type OnChange = ((entity: Entity | null) => void) &
  ((entities: Entity[]) => void)

type OnChange2 = {
  (entity: Entity | null): void
  (entities: Entity[]): void
}

const onChange: OnChange = (entityOrEntities: Entity | null | Entity[]) => {}

const id = <V>(arg: V) => arg

const g = { a: 'a' }

const id2 = <T extends number>(value: T): T[] => {
  return [value]
}

const answer = id2(100)
