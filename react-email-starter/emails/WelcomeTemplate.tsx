import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome abord!</Preview>
            <Tailwind>
                <Body className='bg-stone-900'>
                    <Container>
                        <Text style={heading}>Hello {name}!</Text>
                        <Link href='https://www.avatarstore.app'>Avatar Store</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

const heading: CSSProperties = {
    color: '#fff',
    fontSize: '1.5rem'
}

export default WelcomeTemplate