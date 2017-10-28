import React, { Component } from 'react';
import Scroll, { scroller } from 'react-scroll';
import Nav from './Nav.js';
import Modal from './Modal';

let scroll = Scroll.animateScroll;
let Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;

export default class App extends Component {
  constructor() {
    super()

    this.hideModal = this.hideModal.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      route: '',
      isOpen: false,
      modal: 'signin'
    }

  }

  componentWillMount() {
    let signedIn = localStorage.getItem("Name");
    if (signedIn) {
      this.setState({
        route: 'dashboard'
      })
    } else {
      this.setState({
        route: 'index'
      })
    }
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  hideModal() {
    this.setState({
      isOpen: false
    });
  };

  openModal() {
    this.setState({
      isOpen: true,
    });
  };

  handleClick(e, content) {
    if (content) {
      this.setState({
        modal: content
      });
      this.openModal();
    }
    if (!content) {
      scroll.scrollTo(1010)
    }
  }

  handleSubmit(e, obj) {
    e.preventDefault();

    if (this.state.modal === 'signup') {
      console.log(obj)
      localStorage.setItem('Name', obj.Name);
      localStorage.setItem('Email', obj.Email);
      localStorage.setItem('Username', obj.Username);
      localStorage.setItem('Password', obj.Password);
    }
    this.hideModal(); //should actually change to dashboard
    this.setState({
      route: 'dashboard'
    })
    //do some database stuff
  }

  logOut() {
    localStorage.clear();
    this.setState({
      route: 'index'
    })
  }

  render() {
    return (
      <content>
        <header ref="header">
          <Nav
            route={this.state.route}
            logOut={this.logOut}
            handleClick={(e, content) => this.handleClick(e, content)}
          />
        </header>
        <section>
          <div className="theory">
            <nav className="secondNav nav-extended row">
              <div className="nav-wrapper col s12">
                <div>
                  <ul id="second-mobile" className="right hide-on-med-and-down">
                    <li><a onClick={(e, content) => this.handleClick(e, 'signup')}>Sign Up</a></li>
                    <li><a onClick={(e, content) => this.handleClick(e, 'signin')}>Sign In</a></li>
                    <li><a onClick={(e) => { scroll.scrollTo(0) }}>Return to Top</a></li>
                  </ul>
                  <ul className="right side-nav" id="mobile-demo">
                    <li><a onClick={(e, content) => this.handleClick(e, 'signup')}>Sign Up</a></li>
                    <li><a onClick={(e, content) => this.handleClick(e, 'signin')}>Sign In</a></li>
                    <li><a onClick={(e) => scroll.scrollTo(this.refs.header)}>Return to Top</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="row brand2">
              <img className='brand blue-x responsive-img col s2 offset-s2' src='./style/image/blueXalt.png' />
              <h1 className="col s7" style={{ color: 'white', 'fontSize': '5.5rem' }}>-Factor Habit Building Theory</h1>
            </div>
            <p>X-Factor theory basically allows you to visually see your progress each week. Success breeds success. Practice makes perfect.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div id="toTop" className="row"><h3 onClick={(e) => scroll.scrollTo(0)} className='blue-underline col s2 offset-s2'><i className="fa fa-chevron-up" aria-hidden="true"></i> Back to Top</h3></div>
        </section>
        <footer>
          <div className="row">
            <img className='brand big-x col s3 offset-s9 responsive-img' src='./style/image/brand.png' />
          </div>
        </footer>
        <Modal
          handleClick={(e, content) => this.handleClick(e, content)}
          handleSubmit={(e, obj) => this.handleSubmit(e, obj)}
          content={this.state.modal}
          isOpen={this.state.isOpen}
          hideModal={this.hideModal}
        />
      </content>
    );
  }
}
