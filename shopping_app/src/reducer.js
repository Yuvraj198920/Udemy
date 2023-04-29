// here will have all the application level states and define actions to make the state changes

export const initialState = {
    basket: [],

}

// Selector

const reducer = (state, action) => {
    switch(action.type) {
        case "Add_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
    }
}

export default reducer;