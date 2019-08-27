import React from 'react'
import styles from './styles';
import {withStyles} from '@material-ui/core'

class CardsComponent extends React.Component{

    render(){
        return(
            <div>Hello from CardComponent</div>
        );
    }
}

export default withStyles(styles)(CardsComponent);