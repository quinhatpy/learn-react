import React from 'react';

import classes from './Spinner.css';

const spinner = (props) => {
    if (props.loading)
        return <div className={classes.Loader}>Loading...</div>
    return null;
};

export default spinner;