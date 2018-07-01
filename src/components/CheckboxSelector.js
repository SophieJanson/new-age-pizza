import React, { PureComponent } from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export default class CheckboxSelector extends PureComponent{
    state = {
        checked: []
    }

    handleChange = (event) => {
        const item = event.target.value
        const { checked } = this.state
        this.setState({
            checked: checked.includes(item) ? checked.filter(checkedItem => item !== checkedItem) : checked.concat([item])
        },
        () => {
            this.props.handleChange(this.props.buttonType, this.state.checked)
        })
    }

    renderItem = (item) => {
        return (
            <FormControlLabel
                key={item}
                control={
                    <Checkbox
                        checked={this.state.checked.includes(item)}
                        value={item}
                        disabled={ 
                            this.state.checked.length === parseInt(this.props.limit, 10) && 
                            !this.state.checked.includes(item)
                        }
                    />
                }
                label={item}
            />
        )
    }

    render() {
        return (
            <FormGroup onChange={this.handleChange}>
                <FormHelperText>{`Select up to ${this.props.limit} options` }</FormHelperText>
                { this.props.pizzaOptions.map(this.renderItem) }
            </FormGroup>
        )  
    }

}