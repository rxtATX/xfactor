import React, { Component } from 'react';
import Signin from './Signin.js';
import Signup from './Signup.js';

export default class Nav extends Component {
    constructor(props) {
        super(props);

    }

    handleClick(e, content) {
        this.props.handleClick(e, content);
    }

    render() {
        const navDisplay = () => {
            if (this.props.route === 'index') {
                return (
                    <div className="nav-wrapper col s12">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a onClick={(e, content) => this.handleClick(e, 'signup')}>Sign Up</a></li>
                            <li><a onClick={(e, content) => this.handleClick(e, 'signin')}>Sign In</a></li>
                            <li><a onClick={(e) => this.handleClick(e)}>X-Factor Theory</a></li>
                        </ul>
                        <ul className="right side-nav" id="mobile-demo">
                            <li><a onClick={(e, content) => this.handleClick(e, 'signup')}>Sign Up</a></li>
                            <li><a onClick={(e, content) => this.handleClick(e, 'signin')}>Sign In</a></li>
                            <li><a onClick={(e) => this.handleClick(e)}>X-Factor Theory</a></li>
                        </ul>
                        <div className="row">
                            <div className="brand-row col s9 offset-s3">
                                <span>
                                    <img className='brand big-x' src='./style/image/brand.png' />
                                </span>
                                <div className="row">
                                    <h3 className="col m4 offset-m4 s6 offset-s2">Habit Building</h3>
                                </div>
                            </div>
                            <div className="row nav-content">
                                <div>
                                    <Signup
                                        onClick={(e, content) => this.handleClick(e, content)}
                                        content={this.props.content}
                                    />
                                    <Signin
                                        onClick={(e, content) => this.handleClick(e, content)}
                                        content={this.props.content}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (this.props.route === 'dashboard') {
                return (
                    <div className="nav-wrapper col s12">
                        <img id="secondNavImg" className='brand big-x brand-logo' src='./style/image/brand.png' />
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a disabled className="disabled">Welcome, {localStorage.getItem("Name")}</a></li>
                            <li><a onClick={(e, content) => this.handleClick(e, 'create')}>Create</a></li>
                            <li><a onClick={() => this.props.logOut()}>Sign Out</a></li>
                        </ul>
                        <ul className="right side-nav" id="mobile-demo">
                            <li><a disabled className="disabled">Welcome, {localStorage.getItem("Name")}</a></li>
                            <li><a onClick={(e, content) => this.handleClick(e, 'create')}>Create</a></li>
                            <li><a onClick={() => this.props.logOut()}>Sign Out</a></li>
                        </ul>
                    </div>
                )
            }
        }
        return (
            <nav id={this.props.navID} className="nav-extended row">
                {navDisplay()}
            </nav>
        )
    }
}