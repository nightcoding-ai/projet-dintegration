import React, { Component } from 'react';
import userContext from '../Context/userContext';

export default class Default extends Component {
    static contextType = userContext;

    render() {
        const msg = this.context;
        return (
            <>
                <div className='home'>
                    <div className='hello'>{msg}</div>
                </div>

            </>
        )
    }
}
