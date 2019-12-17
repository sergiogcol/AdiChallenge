const initState = {
    productsData : []
}

const rootReducer = ( state = initState, action) => {
    if (action.type === 'ADD_PRODUCT'){
        return {
            productsData: [...state.productsData, action.data]
        }
    }
    return state;
}

export default rootReducer