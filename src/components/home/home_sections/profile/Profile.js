import React from 'react'

import './profile.css'

export default class Profile extends React.Component {
    render() {
        return(
            <div className="profile">
                <div className="profile__container">
                    <div className="profile__img"></div>
                    <div className="profile__info">
                        <div className="profile__title">
                            <h3>Y4k</h3>
                        </div>
                        <div className="profile__description">
                            <p>Developer | Designer | Freelancer | Hacker</p>
                        </div>
                        <div className="profile__social"></div>
                    </div>
                </div>
            </div>
        )
    }
}