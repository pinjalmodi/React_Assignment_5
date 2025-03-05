
export const add = "INCREMENT"
export const minus = "DECREMENT"




export const addCounter = ()=>{
    return{
        type:add
}
}

export const minusCounter = ()=>{
    return{
        type:minus
    }
}
