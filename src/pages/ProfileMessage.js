import React, { Component } from 'react';
import './Profile.css';


class ProfileMessage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h4 className="message">You haven't seen videos yet</h4>
            </div>
        );
    }
};

export default ProfileMessage;
