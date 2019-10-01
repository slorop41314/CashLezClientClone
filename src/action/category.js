import Host from '../environment/Host'
import Axios from 'axios'

export const getCategory = (userId) => async(dispatch) => {
    try {
    const result = await Axios.get(`${Host.localhost}/category/${userId}`)
        if(result) {
        dispatch({
            type : "GET_CATEGORY_COMPLETED",
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
            type : "GET_CATEGORY_ERROR"
        })

    }
}
