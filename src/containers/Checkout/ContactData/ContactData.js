import React from 'react';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderhandler = (e) => {
        e.preventDefault();
          this.setState( {loading: true} );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Obaid Khan",
            address: {
                street: "Bagh",
                zipCode: "19130",
                country: "Pakistan"
            },
               email: "obaid@gmail.com"  
            }, 
              deliveryMethod: "Fastest"
        } 
        axios.post('/orders.json', order)
        .then(response =>{
            this.setState( {loading: false} );
            this.props.history.push('/');
            })
        .catch(err => {
            this.setState( {loading: false} );
            console.log(err);
        });
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="street" placeholder="Your street" />
                <input type="text" name="postal" placeholder="Postal Code" />
            </form>
        );
        if (this.state.loading) form = <Spinner />;

        return (
        <div className="ContactData">
            <h4>Enter Your Contact Data</h4>
            {form}
        </div>
    )
    }
}

export default ContactData;