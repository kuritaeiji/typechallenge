type TreeNode = {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

export type InOrderTraversal<T> = [T] extends [TreeNode]
  ? [...InOrderTraversal<T['left']>, T['val'], ...InOrderTraversal<T['right']>]
  : []

type A = InOrderTraversal<{
  val: 1
  left: null
  right: {
    val: 2
    left: {
      val: 3
      left: null
      right: null
    }
    right: null
  }
}>

type ToArray<T> = T extends string | number ? T[] : never

type B = ToArray<string | boolean>
