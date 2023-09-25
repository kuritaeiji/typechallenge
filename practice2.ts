export const mapFromArray = <
  T extends { [P: PropertyKey]: PropertyKey },
  K extends keyof T
>(
  arr: T[],
  key: K
): Record<T[K], T> => {
  return arr.reduce((returnObj, element) => {
    return {
      ...returnObj,
      [element[key]]: element
    }
  }, {}) as Record<T[K], T>
}

const a = mapFromArray(
  [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' }
  ],
  'id'
)

type Partial<T extends object> = { [K in keyof T]?: T[K] }

type Payload<EvName, OriginalEvName, T> = EvName extends keyof T
  ? [OriginalEvName] extends [EvName]
    ? T[EvName]
    : never
  : never

class EventDisChanger<T extends object> {
  emit<EvName extends keyof T>(
    eventName: EvName,
    payload: Payload<EvName, EvName, T>
  ) {}
}

const changer = new EventDisChanger<{ a: { a: string }; b: { b: number } }>()

type P = Payload<'a' | 'b', 'a' | 'b', { a: string; b: number }>

type Reducer = (
  state: number,
  action:
    | { type: 'increment'; amount: number }
    | { type: 'reset'; value: number }
) => void

type Func<A, R> = undefined extends A ? (arg?: A) => R : (arg: A) => R

const getFoo = <T extends object>(
  obj: T
): T extends { foo: infer U } ? U : unknown => {
  return (obj as any).foo
}

const giveId = <T extends object>(
  obj: T
): { [P in keyof T]: P extends 'id' ? string : T[P] } & { id: string } =>
  ({
    ...obj,
    id: 'a'
  } as { [P in keyof T]: P extends 'id' ? string : T[P] } & { id: string })

const idObj = giveId({ id: 1, name: 'a' })

const giveId2 = <T extends object>(obj: T): Omit<T, 'id'> & { id: string } => {
  return {
    ...obj,
    id: 'd'
  }
}

const b = giveId2({ id: 1, name: 'a' })

const giveId3 = <T extends object>(obj: T): T & { id: string } => {
  return {
    ...obj,
    id: 'a'
  }
}

const givenId3 = giveId3({ id: 1, name: 'a' })

giveId3.id = 1

type E = { a: number; b: number } extends { a: string } ? true : false

type User = {
  id: string | null
  name: string | null
}

type User2 = {
  id: number
  name: string
}

type IntersectUser = User & User2

const unionUser:
  | {
      id: string | null
      name: string | null
    }
  | {
      id: number
      name: string
    } = { id: 1, name: '1' }

const unionUser2: User | User2 = { id: 0, name: '' }

const func = (arg: { a: number }) => {}

type Function = ((a: number | null) => void) | ((a: string) => void)

const fun: Function = (a: string) => {}

type Entity = { id: string }

type OnChange =
  | ((entity: Entity | null) => void)
  | ((entities: Entity[]) => void)

type Obj = {
  onChange: OnChange
}

const obj: Obj = {
  onChange: (entity: Entity | null) => {}
}

const obj2: Obj = {
  onChange: (entities: Entity[]) => {}
}

type OnChange2 = {
  (entity: Entity | null): void
  (entities: Entity[]): void
}

const onChange2: OnChange2 = (entityOrEntities: Entity | null | Entity[]) => {}

type AtLeastOneInner<
  T extends object,
  Keys extends keyof T
> = Keys extends keyof T ? Pick<T, Keys> & Partial<Omit<T, Keys>> : never

type AtLeastOne<T extends object> = AtLeastOneInner<T, keyof T>

type AtLeast = AtLeastOne<{ a: number; b: string; c: boolean }>

const atLeast: AtLeast = { a: 1 }

type Page = { page: string; [items: string]: any }

type PageGenerators<P extends Page> = {
  [K in P['page']]: (arg: Omit<Extract<P, { page: K }>, 'page'>) => void
}

type PageGenerate = PageGenerators<
  { page: 'a'; a: string; b: number } | { page: 'b'; c: string }
>

type Pages = ({ page: 'a' } | { page: 'b' })['page']
