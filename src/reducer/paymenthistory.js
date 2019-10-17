const initialState = {
    historyPayment : [],
    isLoading : true,
    error : false
} 

const history = (state = initialState, actions) => {
    switch(actions.type){
        case "GET_HISTORY" : 
            return {
                ...state,
                isLoading : false,
                historyPayment : actions.payload.data
            }
        case "GET_HISTORY_ERR" : 
            return {
                ...state,
                isLoading : false,
                error : true
            }
        default : 
            return state
    }
}

export default history