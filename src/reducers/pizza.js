import { EDIT_PIZZA} from '../actions/pizza' 

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case EDIT_PIZZA:
            const {type, data} = action.payload
            return {
                ...state,
                [type]: data            
            }
        default: 
            return state
    }
}

const initialState = {
    base: "",
    sauce: "",
    toppings: [],
    deliveryOption: "Regular",
}

export default reducer