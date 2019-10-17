const initialState = {
    total  : 0,
    belanja : [],
    jumlahitem : 0,
    customer : []
}

const cart = (state = initialState, actions) => {
    switch(actions.type) {
        case "ADD_CUSTOMER" : 
            return {
                ...state,
                customer : actions.payload
            }
        case "ADD_TO_CART" :
            let newBelanja = actions.payload
            let existeditem = state.belanja.find(item => newBelanja._id === item._id)
            if(existeditem) {
                newBelanja.quantity++,
                state.jumlahitem++
                return {
                    ...state,
                    total : state.total + parseInt(newBelanja.price) 
            }}
            else {
                newBelanja.quantity = 1
                state.jumlahitem++
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
        case "QUANTITY_INCREMENT" : 
            let itemTambah = actions.payload
            const itemMauDitambah = state.belanja.find(item => itemTambah._id === item._id)
            if(itemMauDitambah) {
            itemMauDitambah.quantity++
            state.jumlahitem++
            return {
                ...state,
                total : state.total + parseInt(itemMauDitambah.price),
                belanja : [...state.belanja]
            }
        }
        case "QUANTITY_DECREMENT" : 
            let itemKurang = actions.payload
            const itemMauDikurang = state.belanja.find(item => itemKurang._id === item._id)
            if(itemMauDikurang) {            
                if(itemMauDikurang.quantity != 0) {
                    itemMauDikurang.quantity--
                    state.jumlahitem--
                    return {
                        ...state,
                        total : state.total - parseInt(itemMauDikurang.price),
                        belanja : [...state.belanja]
                    }
                }        
        }
        default : 
            return state
    }
}

export default cart