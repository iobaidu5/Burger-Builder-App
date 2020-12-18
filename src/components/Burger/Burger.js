import React, {Component} from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredient)
    .map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
     .reduce((arr,el) => {
            return arr.concat(el)
        }, []);

        if (transformIngredients.length === 0){
             transformIngredients = <p>Please Start Adding Ingredients!</p>;
        }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
 
    );
};

export default burger;