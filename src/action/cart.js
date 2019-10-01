export const AddCart = (data) => (dispatch) => {
    dispatch({
        type : "ADD_TO_CART",
        payload : data   
    })
}

export const removeAll = () => (dispatch) => {
    dispatch({
        type : "REMOVE_ALL"
    })
}