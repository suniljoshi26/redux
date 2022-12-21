export type ActionCreater<T = undefined> = (...args: any) => {
  type: string;
  payload?: T;
};
export type Action<T = any> = {
  type: string;
  payload?: T;
};
