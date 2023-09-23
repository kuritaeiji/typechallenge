type IsString<T> = [T] extends [string] ? true : false

type A = IsString<string | number>

const myFilter = <T>(array: T[], predicate: (element: T) => boolean) => {
  const newArray: T[] = []
  for (const element of array) {
    if (predicate(element)) {
      newArray.push(element)
    }
  }
  return newArray
}

type Speed = 'slow' | 'medium' | 'fast'

const getSpeed = (speed: Speed) => {
  if (speed == 'slow') {
    return 10
  }

  if (speed == 'medium') {
    return 20
  }

  return 30
}

type AddEventListener = (
  event: string,
  handler: () => void,
  option?:
    | boolean
    | {
        capture?: boolean
        once?: boolean
        excess?: boolean
      }
) => void

const giveId = <T>(obj: T): T & { id: string } => {
  const id = '文字列'
  return {
    ...obj,
    id
  }
}

type AddId<T extends object> = {
  [P in keyof T | 'id']: P extends keyof T ? T[P] : string
}

type B = AddId<{ a: string }>

type UseState = <T>(
  state: T
) => [T, (newState: T) => void | ((updateFunc: (oldState: T) => T) => void)]

const mapFromArray = <
  T extends { [Key in string]: PropertyKey },
  K extends keyof T
>(
  arr: T[],
  key: K
): { [Key in K]: T } => {
  return arr.reduce(obj => {
    const object = obj as T
    return {
      [object[key]]: obj
    }
  }, {}) as { [Key in K]: T }
}

type MyPartial<T> = { [K in keyof T]?: T[K] }

type Z = MyPartial<{ foo: 'a'; bar: 'b' }>

class EventDischanger<E> {
  emit<EventName extends keyof E>(
    eventName: EventName,
    payload: E[EventName]
  ): void {}
}

type Action =
  | { type: 'increment'; amount: number }
  | { type: 'decrement'; amount: number }
  | { type: 'reset'; value: number }

const reducer = (state: number, action: Action) => {
  if (action.type === 'increment') {
    return state + action.amount
  }

  if (action.type === 'decrement') {
    return state - action.amount
  }

  if (action.type === 'reset') {
    return action.value
  }
}

type Func<A, R> = [A] extends [undefined]
  ? (arg?: undefined) => R
  : (arg: A) => R

const a: Func<undefined, number> = () => 1

const b: Func<number, number> = () => 1

const c: Func<number | string, number> = () => 1

const getFoo = <T extends object>(
  obj: T
): T extends { foo: infer E } ? E : undefined => {
  return (obj as any).foo
}

const giveId2 = <T extends object>(
  obj: T
): { [K in keyof T]: K extends 'id' ? string : T[K] } & { id: string } => {
  return {
    ...obj,
    id: 'a'
  } as any
}

type X<T> = Omit<T, 'id'> & { id: string }

giveId2({ 1: 2, a: 3, id: 4 })

const mapFromArray2 = <
  T extends Record<PropertyKey, PropertyKey>,
  K extends keyof T
>(
  arr: T[],
  key: K
): Record<T[K], T> => {
  return arr.reduce((prev, currentEl) => {
    return {
      ...prev,
      [currentEl[key]]: currentEl
    }
  }, {}) as Record<T[K], T>
}

type Func2<A, R> = [A] extends [undefined] ? (arg?: A) => R : (arg: A) => R

class EventDispatcher<E extends object> {
  emit<T extends keyof E>(eventName: T, payload: E[T]) {}
}

const getFoo2 = <T extends object>(
  obj: T
): T extends { foo: infer U } ? U : unknown => {
  return (obj as any).foo
}

const giveId3 = <T extends object>(obj: T): Omit<T, 'id'> & { id: string } => {
  return {
    ...obj,
    id: 'a'
  }
}

type User = {
  id: number
  name: string
}

type G = User['id' | 'name']

type Spread<EventName, OriginalEventName, E> = EventName extends keyof E
  ? [EventName] extends [OriginalEventName]
    ? E[EventName]
    : never
  : never

class EventDisChanger<E> {
  emit<EventName extends keyof E>(
    eventName: EventName,
    payload: Spread<EventName, EventName, E>
  ) {}
}

type PartiallyPartial<T, Keys extends keyof T> = Partial<Pick<T, Keys>> &
  Omit<T, Keys>

type Page =
  | {
      page: 'top'
    }
  | {
      page: 'mypage'
      uerName: string
    }
  | {
      page: 'ranking'
      articles: string[]
    }

type PageGenerators = {
  [PageType in Page['page']]: (
    page: Omit<Extract<Page, { page: PageType }>, 'page'>
  ) => string
}

const pageGenerators: PageGenerators = {
  top() {
    return 'a'
  },
  mypage() {
    return 'b'
  },
  ranking() {
    return 'c'
  }
}

type KeyOfType<Obj, Val> = {
  [K in keyof Obj]-?: Obj[K] extends Val ? K : never
}[keyof Obj]

type OptionalKeysInner<Obj> = {
  [K in keyof Obj]-?: undefined extends Obj[K] ? K : never
}[keyof Obj]

type OptionalKeys<Obj> = OptionalKeysInner<{ [K in keyof Obj]: never }>

type Y = OptionalKeys<{
  a?: string
  b: string
  c?: number
}>

type Options = { foo: string; bar?: string } | { foo?: string; bar: string }

type PartialRequire<O, K extends keyof O> = {
  [P in K]-?: O[P]
} & O

type c = PartialRequire<{ a?: string; b?: string }, 'a'>

type RequireOne<O, K extends keyof O = keyof O> = K extends keyof O
  ? PartialRequire<O, K>
  : never

type x =
  | {
      a: string
      b?: string
      c?: string
    }
  | {
      a?: string
      b: string
      c?: string
    }
  | {
      a?: string
      b?: string
      c: string
    }
