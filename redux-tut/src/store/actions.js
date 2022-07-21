export const deposit = (amount)=>{
    return {type:'increment' , mount:amount}
}
export const withdraw = (amount)=>{
    return {type:'decrement' , mount:amount}
}