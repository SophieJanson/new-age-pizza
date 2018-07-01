export const EDIT_PIZZA = 'EDIT_PIZZA'

export function editPizza(type, data) {
    return {
        type: EDIT_PIZZA,
        payload: {
            type,
            data
        }
    }
}

