import Host from '../environment/Host'
import Axios from 'axios'

export const getProduct = (userId) => async(dispatch) => {
    try {
    const result = await Axios.get(`${Host.localhost}/product/${userId}`)
        if(result) {
        dispatch({
            type : "GET_PRODUCT_COMPLETED",
            payload : result
        })
        }
        else {
            console.log('error');
        }
    }
    catch (error) {
        console.log(error)
        dispatch({
            type : "GET_PRODUCT_ERROR"
        })

    }
}
