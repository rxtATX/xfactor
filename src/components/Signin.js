import React, { Component } from 'react';

export default class Signin extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div><h3 onClick={(e, content) => this.props.onClick(e, 'signin')} className='blue-underline login col s2 offset-s2 signin'>Sign in <i className="fa fa-chevron-right" aria-hidden="true"></i></h3></div>
    }
}