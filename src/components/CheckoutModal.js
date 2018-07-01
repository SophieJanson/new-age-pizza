import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

function rand() {
    return Math.round(Math.random() * 20) - 10
}
  
function getModalStyle() {
    const top = 50 + rand()
    const left = 50 + rand()

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}
  
    const styles = theme => ({
        paper: {
            position: 'absolute',
            width: theme.spacing.unit * 50,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing.unit * 4,
        },
    })
  
class CheckoutModal extends React.Component {
    state = {
        open: false,
    }

    toggleOpen = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Button onClick={this.toggleOpen}>Checkout</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.toggleOpen}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title">
                        Let's imagine a checkout flow.
                        </Typography>
                    </div>
                </Modal>
            </div>
        )
    }
}
  
export default withStyles(styles)(CheckoutModal)
  