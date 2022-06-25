import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredient = (name) => {
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}

export const setingredient = (ingredients) => {
    return{
        type:actionTypes.SET_INGREDIENT,
        ingredients:ingredients
    }
} 

export const fetchfailed = () => {
    return{
        type:actionTypes.FETCH_FAILED
    }
}

export const initIngredient = () => {
    
    return dispatch => {
        axios.get( 'https://react-my-burger-d1fc3-default-rtdb.firebaseio.com/ingredients.json' )
            .then( response => {
                dispatch(setingredient(response.data));
            } )
            .catch( error => {
                dispatch(fetchfailed());
            } );
    }
}