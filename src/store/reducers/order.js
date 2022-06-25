import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
const initialState = {
    orders:[],
    loading:false,
    purchased:false    
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.PURCHASE_INIT):
            return{
                ...state,
                purchased:false
            }
        case(actionTypes.PURCHASE_BURGER_START):
            return{
                ...state,
                purchased:true
                // loading:true
            }
        case(actionTypes.PURCHASE_BURGER_SUCCESS):
            const newOrder = {
                ...action.orderData,
                id:action.orderId
            }
            return{
                ...state,
                loading:false,
                purchased:true,
                orders:state.orders.concat(newOrder)   
            }
        case(actionTypes.PURCHASE_BURGER_FAILS):
            return{
                ...state,
                loading:false,
                purchased:true
            }
        case(actionTypes.FETCH_ORDERS_SUCCESS):
            return{
                ...state,
                loading:false,
                orders:action.orders
            }
        case(actionTypes.FETCH_ORDERS_FAIL):
            return{
                ...state,
                loading:false
            }
        case(actionTypes.FETCH_ORDERS_START):
            return{
                ...state,
                loading:true,
            }
        default:
            return state
    }
};
export default reducer;


// We can use utility function to lean the switch case
// We can also create different functions for each case like to addingredient or remove etc.