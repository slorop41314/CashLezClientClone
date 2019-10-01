const initialState = {
    total  : 0,
    belanja : [],
    jumlahitem : 0,
    customer : {
        name : '',
        email : ''
    }
}

const cart = (state = initialState, actions) => {
    switch(actions.type) {
        case "ADD_TO_CART" :
            let newBelanja = actions.payload
            let existeditem = state.belanja.find(item => newBelanja._id === item._id)
            if(existeditem) {
                newBelanja.quantity++,
                state.jumlahitem++
                console.log(state)
                return {
                    ...state,
                    total : state.total + parseInt(newBelanja.price) 
            }}
            else {
                newBelanja.quantity = 1
                state.jumlahitem++
                console.log(state)
                let newTotal = state.total + parseInt(newBelanja.price)
                return {
                    ...state,
                    total : newTotal,
                    belanja : [...state.belanja, newBelanja]
                }
            }
        case "REMOVE_ALL" :
            return {
                ...state,
                belanja : [],
                total : 0,
                jumlahitem : 0
            }
        default : 
            return state
    }
}

export default cart