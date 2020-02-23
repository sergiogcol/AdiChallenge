import React, {createContext, useReducer} from 'react';
import {productsDataReducer }from '../Reducers/NewProductsDataReducer';
import { productAvailability } from '../Components/Product/productAvailability'

export const ProductDataContext = createContext(); 

const initialState = {
    productAvailability,
    selectedProductSKU: null,
    productId: productAvailability.id,
    availabilityStatus: productAvailability.availability_status,
    price: 80.00,
    selectedProductQuantity: '1',
    productName: 'superstar shoes',
    productVersion: 'cloud white / core black / cloud white',
    numberOfItemsOptions:[]
}

const ProductDataContextProvider = (props) => {
    
    const [productData, dispatch] = useReducer( productsDataReducer, [initialState]);

    return ( 
        <ProductDataContext.Provider value={{
            productData, 
            dispatch
        }}>
            {props.children}
        </ProductDataContext.Provider>
     );
}
 
export default ProductDataContextProvider;