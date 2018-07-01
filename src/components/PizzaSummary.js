import React, { PureComponent} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


class PizzaSummary extends PureComponent {
    render() {
        const { pizza } = this.props 
        return (
            <Card>
                <CardContent>
                    <Typography variant="title">Your pizza</Typography>
                    {pizza.base && <Typography>Base: {pizza.base}</Typography>}
                    {pizza.sauce && <Typography>Sauce: {pizza.sauce}</Typography>}
                    {pizza.toppings.length > 0 && <Typography>Toppings: {pizza.toppings.join(", ")}</Typography>}
                    {pizza.deliveryOption && <Typography>Delivery option: {pizza.deliveryOption}</Typography>}
                    <Typography>Total price: {this.props.pizzaPrice}</Typography>
                </CardContent>
            </Card>
        )
    }
}

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  
  export default withStyles(styles)(PizzaSummary);
