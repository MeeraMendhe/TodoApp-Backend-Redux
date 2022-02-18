import { DECREMENT_COUNT, INCREMENT_COUNT } from "./actionType";

export const increment=(count)=>({
    type:INCREMENT_COUNT,
    payload:count
})

export const decrement=(count)=>({
    type:DECREMENT_COUNT,
    payload:count
})