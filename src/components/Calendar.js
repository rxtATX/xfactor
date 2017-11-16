import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            successfulDays: [{}]
        }
    }

    x(slotInfo) {
        this.setState({
            successfulDays: [{ start: slotInfo.start, end: slotInfo.end }, ...this.state.successfulDays]
        })
    }

    handleClick(e) {
        console.log(e)
    }

    render() {
        return <BigCalendar
            selectable
            views={{ month: true }}
            events={this.state.successfulDays}
            onClick={e => this.handleClick(e)}
            onSelectSlot={(slotInfo) => this.x(slotInfo)}
        />
    }
}