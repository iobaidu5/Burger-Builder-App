import React, {Component} from 'react';

import Aux from '../../hoc/Auxaliry';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredient}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;