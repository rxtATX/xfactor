import React, { Component } from 'react';
import Calendar from './Calendar';

export default class CalendarTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            Habit: '',
            Goal: ''
        }
        //create some variable state so I don't have to hardcode everthing

    }

    componentWillMount() {
        this.setState({
            Habit: localStorage.getItem("Habit"),
            Goal: localStorage.getItem("Goal")
        })
    }

    render() {
        return (
            <section id="calsTab" className="container">
                <div>
                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab col s3"><a href="#test-swipe-1">Drink More Water</a></li>
                        <li className="tab col s3"><a className="active" href="#test-swipe-2">{this.state.Habit}</a></li>
                        <li className="tab col s3"><a href="#test-swipe-3">Read</a></li>
                        <li className="tab col s3"><a href="#test-swipe-4">Clean Around the House</a></li>
                    </ul>
                    <div id="test-swipe-1" className="col s12 blue">
                        <Calendar
                            display="Drink More Water"
                        />
                    </div>
                    <div id="test-swipe-2" className="col s12 red">
                        <Calendar
                            display={this.state.Habit}
                        />
                    </div>
                    <div id="test-swipe-3" className="col s12 green">
                        <Calendar
                            display="Read"
                        />
                    </div>
                    <div id="test-swipe-4" className="col s12 yellow">
                        <Calendar
                            display="Clean Around the House"
                        />
                    </div>
                </div>
            </section>
        )
    }
}