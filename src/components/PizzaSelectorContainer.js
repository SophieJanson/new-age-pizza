import React, { PureComponent} from 'react'
import PizzaSelector from './PizzaSelector'
import PizzaSummary from './PizzaSummary'
import { connect } from 'react-redux'
import { editPizza } from '../actions/pizza'
import Grid from '@material-ui/core/Grid';
import { pizzaOptions } from '../constants/pizzaOptions'

class PizzaSelectorContainer extends PureComponent {
    handleChange = (type, data) => {
        this.props.editPizza(type, data)
    }

    calcPizzaPrice = () => {
        const { pizza } = this.props
        const basePrice = pizza.base ? pizzaOptions.base.data.find(base => base.name === pizza.base).price : 0
        const saucePrice = pizza.sauce ? pizzaOptions.sauce.data.find(sauce => sauce.name === pizza.sauce).price : 0
        const toppingsPrice = pizza.toppings.length * .5
        const deliveryPriceMultiplier = pizzaOptions.delivery.data.find(option => option.name === pizza.delivery).priceMultiplier
        return ((basePrice + saucePrice + toppingsPrice) * deliveryPriceMultiplier).toFixed(2)
    }

    render() {
        return (
        <div> 
            <Grid container justify="space-between" spacing={8}>
                <Grid item lg={8}>
                    <PizzaSelector 
                        handleChange={this.handleChange} 
                        pizzaOptions={pizzaOptions}
                    />
                </Grid>
                <Grid item xs={4} >
                    <PizzaSummary 
                        pizzaPrice={this.calcPizzaPrice()} 
                        pizza={this.props.pizza} 
                        resetPizza={this.resetPizza} 
                    />
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