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

export const AddCustomer = (data) => (dispatch) => {
    dispatch({
        type : "ADD_CUSTOMER",
        payload : data
    })
}

export const AddQuantity = (data) => (dispatch) => {
    dispatch({
        type : "QUANTITY_INCREMENT",
        payload : data
    })
}
export const MinusQuantity = (data) => (dispatch) => {
    dispatch({
        type : "QUANTITY_DECREMENT",
        payload : data
    })
}