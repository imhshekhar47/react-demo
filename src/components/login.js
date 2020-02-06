import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        padding: theme.spacing(1),
    },
    box: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[50],
        boxShadow: theme.shadows[4]
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    field: {
        marginBottom: theme.spacing(4)
    },
    title: {
        marginBottom: theme.spacing(4),
        color: theme.palette.primary.main,
    }
});

class SignIn extends React.Component {

    constructor() {
        super()
        this.state = {
            signInForm: {
                username: '',
                password: ''
            }
        }
    }

    onFormControlChange = event => {
        const {target} = event
        let newFormState
        switch(target.name) {
            case 'username':
                newFormState = {...this.state.signInForm, username: `${target.value}`};
                break;
            case 'password':
                newFormState = {...this.state.signInForm, password: `${target.value}`};
                break;
            default:
                newFormState = {...this.state.signInForm};
                console.log(`Invalid form control ${target.name}`)
        }

        this.setState({
            signInForm: newFormState
        })
    }

    onFormSubmit = event => {
        event.preventDefault()
        console.log(this.state.signInForm)
    }

    render() {
        const { classes } = this.props;
        const { signInForm } = this.state;
        return (
                <Box className={classes.box}>
                    <Typography variant="h5" className={classes.title}>Sign In</Typography>
                    <form noValidate className={classes.form} onSubmit={this.onFormSubmit}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField className={classes.field} variant="outlined" id="username" name="username"  label="Username" 
                                    value={signInForm.username}
                                    onChange={this.onFormControlChange}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className={classes.field} variant="outlined" type="password" id="password" name="password" label="Password"  
                                    value={signInForm.password}
                                    onChange={this.onFormControlChange}
                                    fullWidth />
                            </Grid>

                            <Grid item xs={8}>
                                <Link variane="body2" href="#" onClick={() => this.props.onChoiceChange(false)}>Do not have an account? Sign Up</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
                            </Grid>
                        </Grid>

                    </form>
                </Box>
        );
    }
}

class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            signUpForm: {
                firstName: '', 
                lastName: '',
                email: '',
                password: '',
                passwordCnf: '',
            }
        }
    }

    updateFormState(signUpFormState) {
        this.setState({
            signUpForm: signUpFormState
        })
    }

    onFormControlChange = event => {
        const { target }  = event
        let newState 
        switch(target.name) {
            case 'firstName': 
                newState = {...this.state.signUpForm, firstName: `${target.value}`}; 
                break;
            case 'lastName': 
                newState = {...this.state.signUpForm, lastName: `${target.value}`};  
                break;
            case 'email':
                newState = {...this.state.signUpForm, email: `${target.value}`};  
                break;
            case 'password':
                newState = {...this.state.signUpForm, password: `${target.value}`};  
                break;
            case 'passwordCnf':
                newState = {...this.state.signUpForm, passwordCnf: `${target.value}`};  
                break;
            default: 
                newState = {...this.state.signUpForm}
                console.log(`Invalid control ${target.name}`)
        }

        this.setState({
            signUpForm: newState
        })
    }

    onFormSubmit = event => {
        event.preventDefault()
        console.log(this.state.signUpForm)
    }

    render() {
        const { classes } = this.props
        const { signUpForm } = this.state
        return (
                <Box className={classes.box}>
                    <Typography variant="h5" className={classes.title}>Sign Up</Typography>
                    <form noValidate className={classes.form} onSubmit={this.onFormSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField variant="outlined" id="firstName" name="firstName" label="First Name"
                                    value={signUpForm.firstName} 
                                    onChange={this.onFormControlChange}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="outlined" id="lastName" name="lastName" label="Last Name" 
                                    value={signUpForm.lastName}
                                    onChange={this.onFormControlChange}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" id="email" name="email" label="Email" 
                                    value={signUpForm.email}
                                    onChange={this.onFormControlChange}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" type="password" id="password" name="password" label="Password" 
                                    value={signUpForm.password}
                                    onChange={this.onFormControlChange}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" type="password" id="passwordCnf" name="passwordCnf" label="Confirm Password" 
                                    value={signUpForm.passwordCnf}
                                    onChange={this.onFormControlChange}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={8}>
                                <Link variant="body2" href='#' onClick={this.props.onChoiceChange}>Already have an account? Sign In</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
        )
    }
}

const SignInComponent = withStyles(styles)(SignIn)
const SignUpComponent = withStyles(styles)(SignUp)


class Login extends React.Component {

    constructor() {
        super()

        this.state = {
            ifSignIn: false
        }

        this.onOptionChange = this.onOptionChange.bind(this)
    }

    onOptionChange(isSignIn) {
        this.setState({
            ifSignIn: isSignIn
        }, () => {
            console.log(`Changing the ifSignIn to ${this.state.ifSignIn}`)
        })
    }

    render() {
        const { classes } = this.props

        let componentToRender 
        if (this.state.ifSignIn) {
            componentToRender = <SignInComponent onChoiceChange={this.onOptionChange}></SignInComponent>
        } else {
            componentToRender = <SignUpComponent onChoiceChange={this.onOptionChange}></SignUpComponent>
        }

        return (
            <Container className={classes.root} maxWidth="sm">{componentToRender}</Container>
        )
    }
}

const LoginComponent = withStyles(styles)(Login)

export default LoginComponent