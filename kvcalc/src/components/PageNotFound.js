import React from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const PageNotFound = (props) => {
    return (
        <div className={props.theme !== 'dark'? 'LIGHT': 'DARK'}>
            <Container>
                <h1>
                    Page Not Found
                </h1>
                <div>Sorry! Your requested Page is not found!</div>
                <Link to="/">back to KvCalc</Link>
            </Container>
        </div>
    )
}

export default PageNotFound;