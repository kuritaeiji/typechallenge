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

// [{id: 1, name: 'a'}, {id: 2, name: 'b'}] -> {1: {id: 1, name: 'a'}, 2: {id: 2, name: 'b'}}

const mapFromArray = <
  T extends { [P: PropertyKey]: number | string },
  K extends keyof T
>(
  array: T[],
  key: K
): { [P in T[K]]: T } => {
  const newObj = {} as { [P in T[K]]: T }
  array.forEach(element => {
    const obj = element as T
    newObj[obj[key] as string | number] = obj
  })
  return newObj
}
