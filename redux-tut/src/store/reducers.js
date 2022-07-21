const start = {
    res:0
}

export const updateReducer = (state = start , action)=>{
    switch (action.type) {
        case 'increment':return {
                ...state,
                res:state.res+action.mount}
        case 'decrement':return{
            ...state,
            res:state.res-action.mount
        }
    
        default:
            return state;
    }
}