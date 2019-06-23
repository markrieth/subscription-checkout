import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    selectedCard: {
        border: `2px solid ${theme.palette.primary.main}`
    }
});

class TestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'two'
        }
    }

    render() {
        const {handleSubmit, classes} = this.props;
        console.log(this.props);
        return (
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                            <Field name="test"
                                   component={props => <Card {...props}
                                                            onClick={() => this.setState({checked: 'one'})}
                                                            className={props.checked ? classes.selectedCard : null}

                                   >{props.checked} hi</Card>}
                                   checked={this.state.checked === 'one'}
                                   type="radio"/>
                    </form>
                </CardContent>
            </Card>
        );
    }
};

TestForm = reduxForm({
    // a unique name for the form
    form: 'test'
})(TestForm);

export default withStyles(styles)(TestForm)