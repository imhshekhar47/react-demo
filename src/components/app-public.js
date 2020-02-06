import React from 'react'
import AppHeader from './app-header'
import AppFooter from './app-footer'
import LoginComponent from './login'

function PublicComponent(props) {
    return (
        <React.Fragment>
            <AppHeader title="Public"></AppHeader>
            <LoginComponent authCheck={props.authCheck}></LoginComponent>
            <AppFooter></AppFooter>
        </React.Fragment>
    )
}

export default PublicComponent