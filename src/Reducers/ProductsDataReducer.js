const initState = {
    productsData : []
}

export const productsDataReducer = (state = initState, action) => {
    if (action.type === 'ADD_PRODUCT'){
        return {
            productsData: [...state, action.data]
        }
    } else if (action.type === 'REMOVE_PRODUCT'){
        let newProducts = state.filter( product => {
            return action.id !== product.productId 
        });
        return {
            ...state,
            productsData: newProducts
        }
    } else if (action.type === 'UPDATE_PRODUCT'){
        let newProducts = [...state.filter( item => item.productId !== action.data.productId), action.data];
        return{
            productsData: newProducts
        }
    }
    return state;
}

 