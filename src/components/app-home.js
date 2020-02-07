import React from 'react'
import Container from '@material-ui/core/Container'
import { UserConsumer } from '../context/user-context'

function HomeComponent() {
    return (
        <UserConsumer>
            {
                (user) => {
                    return <Container>
                        <h1>Welcome {user.username}</h1>
                    </Container>
                }
            }
        </UserConsumer>
    )
}

export default HomeComponent