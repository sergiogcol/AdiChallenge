
export const productsDataReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_PRODUCT':
            return [...state, action.data]

        case 'REMOVE_PRODUCT':
            let newProducts = state.filter(product => {
                return action.id !== product.productId
            });
            return newProducts

        case 'UPDATE_PRODUCT':
            let updatedProducts = [...state.filter(item => item.productId !== action.data.productId), action.data];
            return updatedProducts

        default:
            return state
    }
}

