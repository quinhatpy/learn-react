import React, { Fragment } from 'react';

const loginForm = (props) => {
    let inputElement = null;
    const wrapperClasses = [];

    if (props.invalid && props.shouldValidate && props.touched) {
        wrapperClasses.push('error');
    }

    switch (props.elementType) {
        case 'email':
            wrapperClasses.push('form-group position-relative has-icon-left');
            inputElement = (
                <Fragment>
                    <input type="text" className="form-control"
                        value={props.value}
                        {...props.elementConfig}
                        onChange={props.changed}
                        onBlur={props.changed}
                    />
                    <div className="form-control-position">
                        <i className="ft-user" />
                    </div>
                    <div className="help-block text-danger">{props.messageError}</div>
                </Fragment>
            );
            break;
        case 'password':
            wrapperClasses.push('form-group position-relative has-icon-left');
            inputElement = (
                <Fragment>
                    <input type="password" className="form-control"
                        value={props.value}
                        {...props.elementConfig}
                        onChange={props.changed}
                        onBlur={props.changed} />
                    <div className="form-control-position">
                        <i className="fa fa-key" />
                    </div>
                    <div className="help-block text-danger">{props.messageError}</div>
                </Fragment>
            );
            break;
        case 'checkbox':
            wrapperClasses.push('form-group row');
            inputElement = (
                <Fragment>
                    <div className="col-md-6 col-12 text-center text-sm-left">
                        <fieldset>
                            <input type="checkbox" className="form-checkbox" id="remember-me"  onChange={props.changed}/>
                            <label htmlFor="remember-me"> Remember Me</label>
                        </fieldset>
                    </div>
                    <div className="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="recover-password.html" className="card-link">Forgot Password?</a></div>
                </Fragment>
            );
            break;
        default: inputElement = null;
    }

    return (
        <div className={wrapperClasses.join(' ')}>
            {inputElement}
        </div>
    )
}

export default loginForm;