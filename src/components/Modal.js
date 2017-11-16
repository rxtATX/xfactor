import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';
import Input from './Input';


export default class Modals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Email: '',
            Username: '',
            Password: '',
            Habit: '',
            Inspiration: '',
            Goal: null
        }

        this.onInputChange = this.onInputChange.bind(this);

    }

    handleSubmit(e) {
        if (this.props.content === 'signup') {
            let obj = {
                Name: this.state.Name,
                Email: this.state.Email,
                Username: this.state.Username,
                Password: this.state.Password
            }
            this.props.handleSubmit(e, obj)
        }
        if (this.props.content === 'signin') {
            let obj = {
                Username: this.state.Username,
                Password: this.state.Password
            }
            this.props.handleSubmit(e, obj)
        }
        if (this.props.content === 'create') {
            let obj = {
                Habit: this.state.Habit,
                Goal: this.state.Goal
            }
            this.props.handleSubmit(e, obj)
        }
        this.setState({
            Name: '',
            Email: '',
            Username: '',
            Password: '',
            Habit: '',
            Inspiration: '',
            Goal: null
        })
    }

    onInputChange(states, input) {
        input = input.trim();
        this.setState({
            [states]: input
        })
    }

    render() {
        const rendering = () => {
            if (this.props.content === 'signin') {
                return (
                    <Modal isOpen={this.props.isOpen} onRequestHide={this.props.hideModal}>
                        <ModalHeader>
                            <ModalClose onClick={this.props.hideModal} />
                            <img className='brand brandModal big-x' src='./style/image/brand.png' />
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                display={this.state.Username}
                                onInputChange={this.onInputChange}
                                type='text'
                                placeholder='Username'
                            />
                            <Input
                                display={this.state.Password}
                                onInputChange={this.onInputChange}
                                type='password'
                                placeholder="Password"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" className="btn" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                            <span className="toggleModal">New User? <a onClick={(e, content) => this.props.handleClick(e, 'signup')}><br />Sign Up</a></span>
                        </ModalFooter>
                    </Modal>
                )
            } else if (this.props.content === 'signup') {
                return (
                    <Modal isOpen={this.props.isOpen} onRequestHide={this.props.hideModal}>
                        <ModalHeader>
                            <ModalClose onClick={this.props.hideModal} />
                            <img className='brand brandModal big-x' src='./style/image/brand.png' />
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                display={this.state.Name}
                                onInputChange={this.onInputChange}
                                type='text'
                                placeholder="Name"
                            />
                            <Input
                                display={this.state.Email}
                                onInputChange={this.onInputChange}
                                type='email'
                                placeholder='Email'
                            />
                            <Input
                                display={this.state.Username}
                                onInputChange={this.onInputChange}
                                type='text'
                                placeholder='Username'
                            />
                            <Input
                                display={this.state.Password}
                                onInputChange={this.onInputChange}
                                type='password'
                                placeholder="Password"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" className="btn" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                            <span className="toggleModal">Already have an account? <a onClick={(e, content) => this.props.handleClick(e, 'signin')}><br />Sign In</a></span>
                        </ModalFooter>
                    </Modal>
                )
            } else if (this.props.content === 'create') {
                return (
                    <Modal isOpen={this.props.isOpen} onRequestHide={this.props.hideModal}>
                        <ModalHeader>
                            <ModalClose onClick={this.props.hideModal} />
                            <img className='brand brandModal big-x' src='./style/image/brand.png' />
                        </ModalHeader>
                        <ModalBody>
                            {/* <div class="input-field col s12">
                                <select>
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label>Materialize Select</label>
                            </div>
                            <Input
                                type='dropdown'
                                placeholder='Inspiration'
                            /> */}
                            <Input
                                display={this.state.Habit}
                                onInputChange={this.onInputChange}
                                type='text'
                                placeholder='Habit'
                            />
                            <Input
                                display={this.state.Goal}
                                onInputChange={this.onInputChange}
                                type='number'
                                placeholder="Goal"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" className="btn" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                        </ModalFooter>
                    </Modal>
                )
            }
        }
        return (
            <div>
                {rendering()}
            </div>
        )
    }
}