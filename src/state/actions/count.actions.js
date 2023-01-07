export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = size => ({ type: INCREMENT, size });
export const decrement = size => ({ type: DECREMENT, size });
