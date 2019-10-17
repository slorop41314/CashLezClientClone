import axios from 'axios'
import Host from '../environment/Host'

export const getHistory = (userId) => async (dispatch) => {
    try {
        const result = await axios.get(`${Host.localhost}/users/${userId}/transaction`)
        if(result) {
            dispatch({
                type : "GET_HISTORY",
                payload : result
            })
        }
    }
    catch (err) {
        console.log(err)
        dispatch({
            type : "GET_HISTORY_ERR"
        })
    }
}