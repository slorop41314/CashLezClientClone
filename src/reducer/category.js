const initialState = {
    data : [],
    error : false
}

const category = (state = initialState, actions) => {
    switch(actions.type) {
        case "GET_CATEGORY_COMPLETED" :
            return {
                ...state,
                data : actions.payload.data,
            }
        case "GET_CATEGORY_ERROR" : 
            return {
                ...state,
                error : true,
            }
        default : 
            return state            
    }
}

export default category