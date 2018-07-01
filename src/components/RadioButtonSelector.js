import React, { PureComponent } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'


export default class RadioButtonSelector extends PureComponent {
    state = {
        value: this.props.defaultValue
    }

    renderItem = (item) => {
        return (
            <FormControlLabel
                key={item.id} 
                value={item.name} 
                control={<Radio />} 
                label={item.name}
            />
        )
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        }, () => {
            this.props.handleChange(this.props.buttonType, this.state.value)
        })
    }

    render() {
        return (
            <RadioGroup 
                name={this.props.buttonType}
                value={this.state.value}
                onChange={this.handleChange}
            >
                {this.props.pizzaOptions.map(this.renderItem)}
            </RadioGroup>   
        )
    }
}