import React from 'react'

import './profile.css'

export default class Profile extends React.Component {
    render() {
        return(
            <div className="profile">
                <div className="profile__container">
                    <div className="profile__img"></div>
                    <div className="profile__info">
                        <h3>Y4k</h3>
                    </div>
                </div>
            </div>
        )
    }
}