import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadioButtonSelector from './RadioButtonSelector'
import CheckboxSelector from './CheckboxSelector'


class PizzaSelector extends PureComponent {
    state = {
        expanded: false
    }

    handlePanelChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false
        });
    };

    render() {
        return (
            <div>
            <ExpansionPanel expanded={this.state.expanded === 'base'} onChange={this.handlePanelChange('base')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="title">Pizza Base</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <RadioButtonSelector 
                    buttonType="base" 
                    pizzaOptions={this.props.pizzaOptions}
                    handleChange={this.props.handleChange}
                    value={this.props.value}
                  />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            
            <ExpansionPanel expanded={this.state.expanded === 'sauce'} onChange={this.handlePanelChange('sauce')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="title">Sauce</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <RadioButtonSelector 
                    buttonType="sauce" 
                    pizzaOptions={this.props.pizzaOptions}
                    handleChange={this.props.handleChange}
                    value={this.props.value}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'toppings'} onChange={this.handlePanelChange('toppings')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="title">Toppings</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <CheckboxSelector 
                    buttonType="toppings"
                    pizzaOptions={this.props.pizzaOptions}
                    handleChange={this.props.handleChange}
                    limit="3"
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={this.state.expanded === 'deliveryOption'} onChange={this.handlePanelChange('deliveryOption')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="title">Delivery</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <RadioButtonSelector 
                    buttonType="deliveryOption" 
                    defaultValue="Regular"
                    pizzaOptions={this.props.pizzaOptions}
                    handleChange={this.props.handleChange}
                    value={this.props.value}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        )
    }
}

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  });
  
  export default withStyles(styles)(PizzaSelector);