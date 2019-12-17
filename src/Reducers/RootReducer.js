const initState = {
    productsData : []
}

const rootReducer = ( state = initState, action) => {
    if (action.type === 'ADD_PRODUCT'){
        return {
            productsData: [...state.productsData, action.data]
        }
    } else if (action.type === 'REMOVE_PRODUCT'){
        let newProducts = state.productsData.filter( product => {
            return action.id !== product.productId 
        });
        return {
            ...state,
            productsData: newProducts
        }
    } else if (action.type === 'UPDATE_PRODUCT'){
        let newProducts = [...state.productsData.filter( item => item.productId !== action.data.productId), action.data];
        return{
            productsData: newProducts
        }
    }
    return state;
}

export default rootReducer