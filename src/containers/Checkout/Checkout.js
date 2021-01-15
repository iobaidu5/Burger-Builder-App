import React from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
 import { connect } from 'react-redux';

class Checkout extends React.Component {
 
    CheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    CheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.props.ings}
                CheckoutCancelled={this.CheckoutCancelledHandler}
                CheckoutContinued={this.CheckoutContinuedHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                component={ContactData} />           
            </div>
        );
    }
}
 
const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

export default connect(mapStateToProps)(Checkout);