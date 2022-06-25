import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error:false,
    
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.ADD_INGREDIENT):
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1
                },
                totalPrice:state.totalPrice+INGREDIENT_PRICES[action.ingredientName]
            }
        case(actionTypes.REMOVE_INGREDIENT):
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]-1
                },
                totalPrice:state.totalPrice-INGREDIENT_PRICES[action.ingredientName]
            }
        case(actionTypes.SET_INGREDIENT):
            return{
                ...state,
                ingredients:{
                    salad:action.ingredients.salad,
                    bacon:action.ingredients.bacon,
                    cheese:action.ingredients.cheese,
                    meat:action.ingredients.meat
                },
                error:false,
                totalPrice:4
            }
        case(actionTypes.FETCH_FAILED):
            return{
                ...state,
                error:true
            }
        default:
            return state;
    }
};
export default reducer;

// We can use utility function to lean the switch case
// We can also create different functions for each case like to addingredient or remove etc.