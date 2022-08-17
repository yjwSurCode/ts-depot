export type Dictionary<T = any> = { [key: string]: T };
/** 索引签名 [key: string]  这意味着，除了接口的已知属性外，还可以存在其他属性  const a: Dictionary = { test: 123123, tests: 111 };*/

// https://medium.com/@dhruvrajvanshi/making-exceptions-type-safe-in-typescript-c4d200ee78e9
export interface OkRes<R> {
  isError: false;
  value: R;
}

export interface ErrRes<E> {
  isError: true;
  error: E;
}

/** Promise<Res<string, string>>   Array<Res<string, string>> */
export type Res<R, E> = OkRes<R> | ErrRes<E>;
