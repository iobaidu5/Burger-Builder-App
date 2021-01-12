import React from 'react';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class ContactData extends React.Component {
    state = {
       orderForm: {
     
              name: {
                  elementType: "input",
                  elementConfig: {
                      type: 'text',
                      placeholder: 'Your Name'
                  },
                  value: '',
                  validation: {
                      required: true
                  },
                  valid: false,
                  touched: false
              },
              street: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
              zipCode: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
               country: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
               email: {
                elementType: "input",
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [{value: 'fastest', displayValue: 'Fastest'},
                            {value: 'cheapest', displayValue: 'Cheapest'}]
                },
                value: 'fastest',
                validation: {},
                valid: true
            },
       },

        formisValid: false,
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
          this.setState( {loading: true} );
          const formData = {};
          for (let formElemenetIdentifier in this.state.orderForm) {
              formData[formElemenetIdentifier] = this.state.orderForm[formElemenetIdentifier].value;
          }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
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

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true
        }
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
            return isValid;
    }



    inputChangeHandler = (event, inputIdentifer) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifer]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifer] = updatedFormElement;
        
        let formisValid = true;
        for (let inputIdentifer in updatedOrderForm){
            formisValid = updatedOrderForm[inputIdentifer].valid && formisValid;
        }
        this.setState({orderForm: updatedOrderForm, formisValid: formisValid}); 
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
               
                {formElementsArray.map(formElement => (
                    <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangeHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formisValid}>ORDER</Button>
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