const initialState = {
    data : [],
    isDataLoading : true,
    error : false
}

const product = (state = initialState, actions) => {
    switch(actions.type) {
        case "GET_PRODUCT_COMPLETED" :
            return {
                ...state,
                data : actions.payload.data,
                isDataLoading : false
            }
        case "GET_PRODUCT_ERROR" : 
            return {
                ...state,
                error : true,
                isDataLoading : false
            }
        default : 
            return state            
    }
}

export default product