import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4, 
    meat: 1.3, 
    bacon: 0.7
};

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    },
    totalPrice: 4,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.ADD_INGREDIENT: 
        return {
            ...state,
            ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
            totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
    };

    case actionType.REMOVE_INGREDIENT: 
    return {
        ...state,
        ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
   };  

   case actionType.SET_INGREDIENTS:
   return {
       ...state,
       ingredients: {
           salad: action.ingredients.salad,
           bacon: action.ingredients.bacon,
           cheese: action.ingredients.cheese,
           meat: action.ingredients.meat
       },
       totalPrice: 4,
       error: false
   }

   case actionType.FETCH_INGREDIENTS_FAILED:
       return {
           ...state,
           error: true
       }
    default: 
        return state;
 }
}

export default reducer;