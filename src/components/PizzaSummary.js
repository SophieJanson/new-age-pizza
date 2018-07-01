import React, { PureComponent} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import CheckoutModal from './CheckoutModal'

class PizzaSummary extends PureComponent {
    render() {
        const { pizza } = this.props 
        return (
            <Card>
                <CardContent>
                    <Typography variant="title" gutterBottom="true">Your pizza</Typography>
                    {pizza.base &&
                        <Typography align="left"><b>Base:</b> {pizza.base}</Typography>
                    }
                    {pizza.sauce && 
                        <Typography align="left"><b>Sauce:</b> {pizza.sauce}</Typography>
                    }
                    {pizza.toppings.length > 0 && 
                        <Typography align="left"><b>Toppings:</b> {pizza.toppings.join(", ")}</Typography>
                    }
                    {pizza.delivery && 
                    <div>
                        <Typography align="left" gutterBottom="true"><b>Delivery option:</b> {pizza.delivery}</Typography>
                        <Divider />
                    </div>
                    }
                    <Typography align="left" ><b>Total price:</b> €{this.props.pizzaPrice}</Typography>
                </CardContent>
                <CardActions>
                    { pizza.base && pizza.sauce && pizza.delivery && <CheckoutModal /> }
                </CardActions>
            </Card>
        )
    }
}
  
export default PizzaSummary
