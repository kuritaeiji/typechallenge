type Unshift<T extends unknown[], U> = [U, ...T]

type A = Unshift<string[], number>
