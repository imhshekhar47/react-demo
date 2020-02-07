import React from 'react'
import AppHeader from './app-header'
import HomeComponent from './app-home'
import AppFooter from './app-footer'

function PrivateComponent(props) {
    return (
        <React.Fragment>
            <AppHeader title="Private"></AppHeader>
            <HomeComponent></HomeComponent>
            <AppFooter></AppFooter>
        </React.Fragment>
    )
}

export default PrivateComponent