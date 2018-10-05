import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../../../components/UI/LoginForm/LoginForm';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Button from '../../../components/UI/Button/Button';
import classes from './Login.css';
import { loginMemberRequest, changeLoadingStatus } from '../../../actions';


class LoginContainer extends Component {
    state = {
        loginForm: {
            email: {
                elementType: 'email',
                elementConfig: {
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                messageError: ''
            },
            password: {
                elementType: 'password',
                elementConfig: {
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                messageError: ''
            },
            remember: {
                elementType: 'checkbox',
                value: false,
                validation: {},
                valid: true
            }

        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        let message = '';
        if (!rules) {
            return true;
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
            if (!isValid) message = 'Email không đúng định dạng';
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
            if (!(value.trim() !== '')) message = 'Không được để trống';
        }
        return {
            isValid,
            message
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = {
            ...updatedLoginForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        // console.log(event.target.type === 'checkbox');
        let checked = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        updatedFormElement.valid = checked.isValid;
        updatedFormElement.messageError = checked.message;
        updatedFormElement.touched = true;
        updatedLoginForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ loginForm: updatedLoginForm, formIsValid: formIsValid });
    }

    loginHandler = (event) => {
        event.preventDefault();
        // console.log(1);
        // this.setState({ loading: false });
        this.props.onChangeLoadingStatus(true);
        const formData = {};
        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }
        this.props.onLoginMember(formData);
    }

    render() {
        console.log('Redirected /admin/login => Component Login is called');
        // console.log(this.props.loadingStatus);
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        let form = (
            <form className="form-horizontal" onSubmit={this.loginHandler}>
                {formElementsArray.map(formElement => (
                    <LoginForm
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        messageError={formElement.config.messageError}
                    />
                ))}

                <Button
                    type="submit"
                    disabled={!this.state.formIsValid}
                    classes="btn btn-primary btn-lg btn-block">
                    <i className="ft-unlock" /> Login
                </Button>
            </form>
        );
     
        return (

            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-body">
                        <section className={'flexbox-container ' + classes.LoginForm}>
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="col-md-4 col-10 box-shadow-2 p-0">
                                    <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                                        <div className="card-header border-0">
                                            <div className="card-title text-center">
                                                <img src="../images/logo/stack-logo-dark.png" alt="branding logo" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                {form}
                                                <Spinner loading={this.props.loadingStatus} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        )
    }
}
LoginContainer.propTypes = {
    loadingStatus: PropTypes.bool.isRequired,
    onChangeLoadingStatus: PropTypes.func.isRequired,
    onLoginMember: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    loadingStatus: state.loading
});

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoginMember: (user) => { dispatch(loginMemberRequest(user)) },
        onChangeLoadingStatus: status => { dispatch(changeLoadingStatus(status)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);