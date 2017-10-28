import React, { Component } from 'react';

export default class Signup extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div><h3 onClick={(e, content) => this.props.onClick(e, 'signup')} className='blue-underline login col s2 offset-s3'><i className="fa fa-chevron-left" aria-hidden="true"></i> Sign up</h3></div>
    }
}