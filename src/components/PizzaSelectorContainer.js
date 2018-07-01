import React, { PureComponent} from 'react'
import PizzaSelector from './PizzaSelector'
import PizzaSummary from './PizzaSummary'
import { connect } from 'react-redux'
import { editPizza } from '../actions/pizza'
import Grid from '@material-ui/core/Grid';


class PizzaSelectorContainer extends PureComponent {
    state = {
        pizzaOptions: {
            base: [
                {
                    id: 1,
                    size: 20,
                    name: "NY Style Small",
                    price: 6.25
                },
                {                
                    id: 2,
                    size: 25,
                    name: "NY Style Medium",
                    price: 8.99
                },
                {
                    id: 3,
                    size: 30,
                    name: "NY Style Large",
                    price: 11.49,
                },
                {
                    id: 4,
                    size: 35, 
                    name: "NY Style Family",
                    price: 13.49
                }
            ],
            sauce: [
                {
                    id: 1,
                    name: "White sauce",
                    price: 0
                },
                {
                    id: 2,
                    name: "Red sauce",
                    price: 0
                },
                {
                    id: 3,
                    name: "Double red sauce",
                    price: 1
                },
                {
                    id: 4,
                    name: "Mix it up",
                    price: 1.5
                },
            ],
            toppings: [
                "Pineapple",
                "Corn",
                "Olives (green)",
                "Red onion",
                "Spinach",
                "Cherry tomatoes",
                "Chicken"
            ],
    
            deliveryOption: [
                {
                    id: 1,
                    name: "Regular",
                    priceMultiplier: 1
                },
                {
                    id: 2,
                    name: "Turbo Drone",
                    priceMultiplier: 1.1
                }
            ]
        }
    }
    handleChange = (type, data) => {
        this.props.editPizza(type, data)
    }

    calcPizzaPrice = () => {
        const {pizzaOptions} = this.state
        const { pizza } = this.props
        const basePrice = pizza.base ? pizzaOptions.base.find(base => base.name === pizza.base).price : 0
        const saucePrice = pizza.sauce ? pizzaOptions.sauce.find(sauce => sauce.name === pizza.sauce).price : 0
        const toppingsPrice = pizza.toppings.length * .5
        const deliveryOption = pizzaOptions.deliveryOption.find(option => option.name === pizza.deliveryOption).priceMultiplier
        return ((basePrice + saucePrice + toppingsPrice) * deliveryOption).toFixed(2)
    }

    render() {
        return (
        <div> 
            <Grid container spacing={8}>
                <Grid item lg={8}>
                    <PizzaSelector 
                        handleChange={this.handleChange} 
                        value={this.state.value} 
                        expanded={this.state.expanded} 
                        pizzaOptions={this.state.pizzaOptions}
                    />
                </Grid>
                <Grid item xs={4} >
                    <PizzaSummary pizzaPrice={this.calcPizzaPrice()} pizza={this.props.pizza}/>
                </Grid>
            </Grid>

        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pizza: state.pizza
    }
}

export default connect(mapStateToProps, {editPizza})(PizzaSelectorContainer)