type None = { type: 'None' }
type Some<T> = { type: 'Some'; value: T }
type Optional<T> = None | Some<T>

type ValueOf<T extends Optional<any>> = [T] extends [Some<infer U>] ? U : null

type A = ValueOf<Some<number>>

type IsNever<T> = [T] extends [never] ? true : false

type B = IsNever<never>

type C = Optional<number> extends Some<infer U> | None ? U : null

type Arraify<T> = { [P in keyof T]: T[P][] }

type D = Arraify<{ a: number; b: string }>

type E = Arraify<{ a: number } | { b: string }>

type AB = { a: number } | { b: string }

type F = { [P in keyof AB]: AB[P][] }

type ElementToString<T extends any[]> = { [P in keyof T]: P }

type G = ElementToString<number[]>

type H = ElementToString<[1, 2, 3]>

type Func = ((entities: string[]) => void) | ((entity: string) => void)

const a: Func = entityOrEntities => {}

a('a')
