import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preeventDefault(event) {
    event.preeventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1
    }
})

export default function Deposits() {
    const classes = useStyles();
    // React.Fragment: returnで一つの要素しか渡せないという制約を外してくれる。
    return (
        <React.Fragment>
            <Title>Recent Deposits</Title>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preeventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}
