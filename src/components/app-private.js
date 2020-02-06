import React from 'react'
import AppHeader from './app-header'
import AppFooter from './app-footer'

function PrivateComponent(props) {
    return (
        <React.Fragment>
            <AppHeader title="Private" user={props.user}></AppHeader>
            <AppFooter></AppFooter>
        </React.Fragment>
    )
}

export default PrivateComponent