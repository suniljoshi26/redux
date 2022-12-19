export type ActionCreater<T = undefined> = (...args: any) => {
  type: string;
  payload?: T;
};
