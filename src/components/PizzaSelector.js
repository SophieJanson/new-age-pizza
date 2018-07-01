import React, { PureComponent } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RadioButtonSelector from './RadioButtonSelector'
import CheckboxSelector from './CheckboxSelector'
import Button from '@material-ui/core/Button'

class PizzaSelector extends PureComponent {
    state = {
        expanded: false
    }

    handlePanelChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false
        })
    }
    renderPanels = (category, index) => {
        const data = this.props.pizzaOptions[category]
        return (
            <ExpansionPanel key={category} expanded={this.state.expanded === `panel-${index}`} onChange={this.handlePanelChange(`panel-${index}`)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="title">{category[0].toUpperCase() + category.substr(1)}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {data.type === 'radio' &&
                    <RadioButtonSelector 
                        buttonType={category} 
                        pizzaOptions={data.data}
                        handleChange={this.props.handleChange}
                        defaultValue={data.defaultValue}
                    />
                }
                {data.type === 'checkbox' &&
                    <CheckboxSelector 
                        buttonType={category}
                        pizzaOptions={data.data}
                        handleChange={this.props.handleChange}
                        limit={data.limit}
                    />
                }
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
            <Button variant="contained" color="secondary" size="medium"
                    onClick={() => {
                        this.setState({
                            expanded: `panel-${index + 1}`
                        })
                    }}        
                >Next</Button>
            </ExpansionPanelActions>
            </ExpansionPanel>
        )
    }
    render() {
        return (
            <div>
                {Object.keys(this.props.pizzaOptions).map(this.renderPanels)}
            </div>
        )
    }
}
  
export default PizzaSelector
